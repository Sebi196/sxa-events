import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Packages from "./components/packages/Packages";
import Services from "./components/Services";
import Gallery from "./components/Gallery";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <Packages />
        <Services />
        <Gallery />
        <Contact />
      </main>

      <Footer />
    </>
  );
}
