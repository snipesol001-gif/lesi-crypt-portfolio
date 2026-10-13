import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Ticker from "./components/Ticker";
import About from "./components/About";
import Services from "./components/Services";
import ProofOfWork from "./components/ProofOfWork";
import CurrentlyBuilding from "./components/CurrentlyBuilding";
import StraightFromX from "./components/StraightFromX";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Ticker />
        <About />
        <Services />
        <ProofOfWork />
        <CurrentlyBuilding />
        <StraightFromX />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;