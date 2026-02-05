import { useState } from 'react'
import Intro from './components/Inicio/Inicio'
import Rain from './components/Inicio/Rain';
import About from './components/Secciones/SobreMi/About';
import ProfileCard from './components/Secciones/SobreMi/Profile';
import Skills from './components/Secciones/Habilidades/Skills';
import Projects from './components/Secciones/Proyectos/Projects';
import Contact from './components/Secciones/Contacto/Contact';

function App() {
const [step, setStep] = useState('intro');

  const handleStartSystem = () => {
    setStep('transition');
    setTimeout(() => {
      setStep('active');
    }, 3000);
  };

  return (
    <main className="min-h-screen bg-[#050505]">
      {step === 'intro' && <Intro onStart={handleStartSystem} />}
      
      {step === 'transition' && <Rain />}
      
      {step === 'active' && (
        <div className="relative">
          <div className="relative z-10">
            <About />
            <ProfileCard />
            <Skills />
            <Projects />
            <Contact />
          </div>
        </div>
      )}
    </main>
  );
}

export default App
