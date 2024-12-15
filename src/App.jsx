import "./App.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import ProjectView from "./pages/ProjectView";
import NotFound from "./pages/NotFound";
import AllProjects from "./pages/AllProjects";
import "./styles/Home.css";
import "./App.css";
function App() {
  return (
    <>
      <div className="main_container">
        <Navbar />
        <Routes>
          {" "}
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<AllProjects />} />
          <Route path="/project/:id" element={<ProjectView />} />
          <Route path="*" element={<NotFound />} /> {/* Catch-all route */}
        </Routes>

        <Footer />
      </div>
    </>
  );
}
export default App;
