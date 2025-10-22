import "./App.css";
import Header from "./pages/Header";
import Navbar from "./pages/Navbar";
import About from "./pages/About";
import Project from "./pages/Project";
import Contact from "./pages/Contact";
import Footer from "./pages/Footer";

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
