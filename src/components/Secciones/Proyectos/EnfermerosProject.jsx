import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Globe, ExternalLink, Monitor } from "lucide-react";
import web1 from "../../../assets/Proyectos/Enfermeros/EnfermerosProject.png";
import web2 from "../../../assets/Proyectos/Enfermeros/EnfermerosProject2.png";
import web3 from "../../../assets/Proyectos/Enfermeros/EnfermerosProject3.png";
import web4 from "../../../assets/Proyectos/Enfermeros/EnfermerosProject4.png";
import web5 from "../../../assets/Proyectos/Enfermeros/EnfermerosProject5.png";
import web6 from "../../../assets/Proyectos/Enfermeros/EnfermerosProject6.png";

const EnfermerosProject = () => {
  const images = [web1, web2, web3, web4, web5, web6];
  const [activeImg, setActiveImg] = useState(0);

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      className="bg-[#050505] border border-[#00ff41]/20 p-8 rounded-sm group"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">

        <div className="lg:col-span-7 space-y-4">
          <div className="relative aspect-video border border-[#00ff41]/30 overflow-hidden bg-black shadow-[0_0_20px_rgba(0,255,65,0.05)]">
            <AnimatePresence mode="wait">
              <motion.img 
                key={activeImg}
                src={images[activeImg]} 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="w-full h-full object-cover"
              />
            </AnimatePresence>
          </div>
          
          <div className="flex gap-2">
            {images.map((img, i) => (
              <button 
                key={i}
                onClick={() => setActiveImg(i)}
                className={`w-20 h-12 border ${activeImg === i ? 'border-[#00ff41]' : 'border-[#00ff41]/20'} transition-all`}
              >
                <img src={img} className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        </div>

        <div className="lg:col-span-5 flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <Monitor size={14} className="text-[#00ff41]" />
              <span className="text-[10px] font-mono text-[#00ff41]/50 uppercase tracking-widest">SITIO_WEB</span>
            </div>
            <h3 className="text-2xl font-mono text-[#00ff41] mb-1">CENTRO_ENFERMEROS_MORON</h3>
            <p className="text-xs font-mono text-white/40 mb-6 italic">Cliente: Centro de Enfermeros de Morón</p>
            
            <p className="text-sm text-gray-400 font-sans leading-relaxed mb-8">
              Sitio web de Centro de Enfermeros de Morón en donde se expone todos los servicios que ofrece con su información correspondiente, donde se ubican y forma de contactarlos. Tiene diseño responsive (PC y Móvil).
            </p>

            <div className="flex flex-wrap gap-2 mb-8">
              {["React", "Vite", "JavaScript", "HTML", "CSS"].map(tech => (
                <span key={tech} className="text-[10px] font-mono text-[#00ff41] px-2 py-1 bg-[#00ff41]/5 border border-[#00ff41]/30">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <a 
            href="https://ceenmo.com.ar" 
            target="_blank" 
            className="flex items-center justify-center gap-3 w-full py-4 bg-[#00ff41]/5 border border-[#00ff41] text-[#00ff41] font-mono text-xs hover:bg-[#00ff41] hover:text-black transition-all shadow-[0_0_15px_rgba(0,255,65,0.1)]"
          >
            <Globe size={14} />
            <span>VISITAR_SITIO_WEB.EXE</span>
            <ExternalLink size={12} />
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default EnfermerosProject;