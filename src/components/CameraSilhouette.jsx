import { forwardRef, useEffect, useImperativeHandle, useRef } from "react";

// Only the person confidence mask reaches the visible canvas. Video pixels never do.
const CameraSilhouette = forwardRef(function CameraSilhouette(
  { onStatus },
  ref,
) {
  const canvas = useRef(null);
  const video = useRef(null);
  const stream = useRef(null);
  const segmenter = useRef(null);
  const frame = useRef(0);
  const generation = useRef(0);
  const alive = useRef(true);
  const lastTime = useRef(0);

  function dispose() {
    cancelAnimationFrame(frame.current);
    stream.current?.getTracks().forEach((track) => track.stop());
    stream.current = null;
    segmenter.current?.close();
    segmenter.current = null;
    if (video.current) {
      video.current.pause();
      video.current.srcObject = null;
    }
    const surface = canvas.current;
    surface?.getContext("2d")?.clearRect(0, 0, surface.width, surface.height);
    document.documentElement.classList.remove("camera-active");
  }
  function stop(status = "idle") {
    generation.current += 1;
    dispose();
    if (alive.current) onStatus(status);
  }
  async function start() {
    stop("loading");
    const attempt = generation.current;
    if (!window.isSecureContext || !navigator.mediaDevices?.getUserMedia) {
      onStatus("unavailable");
      return;
    }
    try {
      const media = await navigator.mediaDevices.getUserMedia({
        audio: false,
        video: {
          facingMode: "user",
          width: { ideal: 320 },
          height: { ideal: 240 },
          frameRate: { ideal: 15, max: 15 },
        },
      });
      if (!alive.current || attempt !== generation.current) {
        media.getTracks().forEach((track) => track.stop());
        return;
      }
      stream.current = media;
      media.getVideoTracks()[0]?.addEventListener(
        "ended",
        () => {
          if (attempt === generation.current) stop("idle");
        },
        { once: true },
      );
      const player = video.current;
      player.srcObject = media;
      await player.play();
      const { FilesetResolver, ImageSegmenter } =
        await import("@mediapipe/tasks-vision");
      const vision = await FilesetResolver.forVisionTasks("/vision");
      if (!alive.current || attempt !== generation.current) return;
      const model = await ImageSegmenter.createFromOptions(vision, {
        baseOptions: {
          modelAssetPath: "/models/selfie-segmenter.tflite",
          delegate: "CPU",
        },
        runningMode: "VIDEO",
        outputConfidenceMasks: true,
        outputCategoryMask: false,
      });
      if (!alive.current || attempt !== generation.current) {
        model.close();
        return;
      }
      segmenter.current = model;
      const labels = model.getLabels();
      const personLabel = labels.findIndex((label) =>
        /person|foreground|selfie/i.test(label),
      );
      lastTime.current = 0;
      let lastVideoTime = -1;
      let drawn = false;
      document.documentElement.classList.add("camera-active");
      onStatus("active");
      function draw(time) {
        if (attempt !== generation.current || !alive.current) return;
        frame.current = requestAnimationFrame(draw);
        const reduced = matchMedia("(prefers-reduced-motion: reduce)").matches;
        if (
          document.hidden ||
          (reduced && drawn) ||
          time - lastTime.current < 100 ||
          player.readyState < 2 ||
          player.currentTime === lastVideoTime
        )
          return;
        lastTime.current = time;
        lastVideoTime = player.currentTime;
        try {
          model.segmentForVideo(player, time, (result) => {
            try {
              const masks = result.confidenceMasks;
              const mask =
                masks?.[personLabel >= 0 ? personLabel : masks.length - 1];
              if (!mask || !canvas.current) return;
              const values = mask.getAsFloat32Array();
              const surface = canvas.current;
              const width = innerWidth;
              const height = innerHeight;
              // Low-resolution drawing surface keeps the effect light on mobile.
              if (surface.width !== width || surface.height !== height) {
                surface.width = width;
                surface.height = height;
              }
              const context = surface.getContext("2d");
              context.clearRect(0, 0, width, height);
              const cols = width < 600 ? 42 : 72;
              const cell = width / cols;
              const rows = Math.ceil(height / cell);
              const scale = Math.max(
                width / player.videoWidth,
                height / player.videoHeight,
              );
              const renderedWidth = player.videoWidth * scale;
              const renderedHeight = player.videoHeight * scale;
              const offsetX = (width - renderedWidth) / 2;
              const offsetY = (height - renderedHeight) / 2;
              context.fillStyle = "#746a56";
              for (let row = 0; row < rows; row++)
                for (let col = 0; col < cols; col++) {
                  const x = (col + 0.5) * cell;
                  const y = (row + 0.5) * cell;
                  const mx = Math.min(
                    mask.width - 1,
                    Math.max(
                      0,
                      Math.floor(
                        (1 - (x - offsetX) / renderedWidth) * mask.width,
                      ),
                    ),
                  );
                  const my = Math.min(
                    mask.height - 1,
                    Math.max(
                      0,
                      Math.floor(
                        ((y - offsetY) / renderedHeight) * mask.height,
                      ),
                    ),
                  );
                  const confidence = values[my * mask.width + mx];
                  if (confidence < 0.65) continue;
                  context.globalAlpha = 0.13 * confidence;
                  context.fillRect(
                    col * cell + 1,
                    row * cell + 1,
                    Math.max(1, cell - 3),
                    Math.max(1, cell - 3),
                  );
                }
              context.globalAlpha = 1;
              drawn = true;
            } finally {
              result.close();
            }
          });
        } catch {
          stop("unavailable");
        }
      }
      frame.current = requestAnimationFrame(draw);
    } catch (error) {
      if (attempt !== generation.current || !alive.current) return;
      stop(
        error.name === "NotAllowedError" || error.name === "SecurityError"
          ? "denied"
          : "unavailable",
      );
    }
  }
  useImperativeHandle(ref, () => ({ start, stop: () => stop("idle") }));
  useEffect(() => {
    alive.current = true;
    const hide = () => {
      if (document.hidden && stream.current) stop("idle");
    };
    document.addEventListener("visibilitychange", hide);
    return () => {
      alive.current = false;
      generation.current += 1;
      dispose();
      document.removeEventListener("visibilitychange", hide);
    };
  }, []);
  return (
    <>
      <canvas ref={canvas} className="camera-silhouette" aria-hidden="true" />
      <video
        ref={video}
        muted
        playsInline
        className="camera-source"
        aria-hidden="true"
        tabIndex={-1}
      />
    </>
  );
});
export default CameraSilhouette;
