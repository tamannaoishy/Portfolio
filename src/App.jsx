import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Education from './components/Education';
import Research from './components/Research';
import Certificates from './components/Certificates';
import Leadership from './components/Leadership';
import Contact from './components/Contact';

function App() {
  return (
    <>
      <Navbar />
      {/* We’ll insert sections one by one next */}
      <Hero />
      {/* More sections coming next */}
      <About />
      {/* Skills, Projects, etc. coming next */}
      <Skills />
      {/* Next: Projects */}
      <Projects />
      {/* Coming up: Education + Contact */}
       <Education />
      {/* Final step: Contact Section */}
       <Research />
      <Certificates />
      <Leadership />
      <Contact />
    </>
  );
}

export default App;
