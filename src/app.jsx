import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Stack from "./components/Stack";

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Stack />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}
