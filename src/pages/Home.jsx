// pages/Home.jsx
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Education from '../components/Education';
import Contact from '../components/Contact';
import Research from '../components/Research';
import Certificates from '../components/Certificates';
import Leadership from '../components/Leadership';

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Education />
      <Research />
      <Certificates />
      <Leadership />
      <Contact />
    </>
  );
}
