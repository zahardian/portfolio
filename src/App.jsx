import "./App.css";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Project from "./components/Project";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <div className="bg-black font-inter">
        {/* navbar */}
        <Navbar />
        {/* header */}
        <Header />
        {/* about */}
        <About />
        {/* project */}
        <Project />
        {/* contact */}
        <Contact />
        {/* footer */}
        <Footer />
      </div>
    </>
  );
}

export default App;
