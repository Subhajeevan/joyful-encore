import { useEffect } from "react";
import Hero from "./components/Hero";
import Lyrics from "./components/Lyrics";
import About from "./components/About";
import Footer from "./components/Footer";
import { startSnow } from "./snow";
import "./App.css";

function App() {
  useEffect(() => {
    startSnow();
  }, []);

  return (
    <>
      {/* Snow layer */}
      <canvas id="snow-canvas"></canvas>

      <Hero />
      <Lyrics />
      <About />
      <Footer />
    </>
  );
}

export default App;
