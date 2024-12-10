import React from "react";
import Section_Heading from "./Section_Heading";
import { useForm } from "react-hook-form";

const Contact_Section = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  return (
    <>
      <div className="Contactsection">
        <Section_Heading
          title="Contact Me"
          description="Get in touch with me"
        />
        <div className="contactus_form">
          <form onSubmit={handleSubmit((data) => console.log(data))}>
            <div className="combo_input">
              <div className="input">
                <input
                  type="text"
                  placeholder="Name"
                  {...register("name", { required: true })}
                />
                {errors.name && <p className="error">Name is required</p>}
              </div>
              <div className="input">
                <input
                  type="email"
                  placeholder="Email"
                  {...register("email", { required: true })}
                />
                {errors.email && <p className="error">Email is required</p>}
              </div>
            </div>
            <div className="input">
              <input
                type="text"
                placeholder="Subject"
                {...register("subject", { required: true })}
              />
              {errors.subject && <p className="error">Subject is required</p>}
            </div>
            <div className="input">
              <textarea
                placeholder="Message"
                {...register("message", { required: true })}
              />
              {errors.message && <p className="error">Message is required</p>}
            </div>
            <button type="submit">Send</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact_Section;
