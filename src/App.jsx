import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <div className="main_container">
        <Navbar />
        <Home />
      </div>
    </>
  );
}

export default App;
