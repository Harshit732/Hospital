import About from "./components/About";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Services from "./components/Services";
import AppointmentForm from "./pages/AppointmentForm";
import Contact from "./pages/Contact";
import Hero from "./pages/Hero";
import Staff from "./components/Staff";
import { Route, Routes, BrowserRouter } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <div id="herosection">
          <Routes>
            <Route path="/" element={<Hero />} />
            <Route path="/contact/" element={<Contact />} />
            <Route path="/appointment/" element={<AppointmentForm />} />
          </Routes>
        </div>
        <div id="about-section">
          <About />
        </div>
        <div id="service-section">
          <Services />
        </div>
        <div id="doctors-section">
          <Staff />
        </div>
        <div>
        <Footer />
      </div>
      </BrowserRouter>
      
    </>
  );
}

export default App;
