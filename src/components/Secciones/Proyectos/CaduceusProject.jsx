import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Database, Terminal} from "lucide-react";

import img1 from "../../../assets/Proyectos/Caduceus/CaduceusProject.png";
import img2 from "../../../assets/Proyectos/Caduceus/CaduceusProject2.png";
import img3 from "../../../assets/Proyectos/Caduceus/CaduceusProject3.png";
import img4 from "../../../assets/Proyectos/Caduceus/CaduceusProject4.png";

const CaduceusProject = () => {
  const images = [img1, img2, img3, img4];
  const [activeImg, setActiveImg] = useState(0);

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      className="bg-[#050505] border border-[#00ff41]/20 p-8 rounded-sm mb-16 group"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">

        <div className="lg:col-span-7 space-y-4">
          <div className="relative aspect-video border border-[#00ff41]/30 overflow-hidden bg-black">
            <AnimatePresence mode="wait">
              <motion.img 
                key={activeImg}
                src={images[activeImg]} 
                initial={{ opacity: 0, scale: 1.1 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                className="w-full h-full object-contain"
              />
            </AnimatePresence>
          </div>
          
          <div className="flex gap-2">
            {images.map((img, i) => (
              <button 
                key={i}
                onClick={() => setActiveImg(i)}
                className={`w-20 h-12 border ${activeImg === i ? 'border-[#00ff41] opacity-100' : 'border-[#00ff41]/20 opacity-40'} transition-all hover:opacity-100`}
              >
                <img src={img} className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        </div>

        <div className="lg:col-span-5 flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <Terminal size={14} className="text-[#00ff41]" />
              <span className="text-[10px] font-mono text-[#00ff41]/50 uppercase tracking-widest">APLICACION_DE_ESCRITORIO</span>
            </div>
            <h3 className="text-2xl font-mono text-[#00ff41] mb-1">CADUCEUS_INT</h3>
            <p className="text-xs font-mono text-white/40 mb-6 italic">Cliente: Caduceus International</p>
            
            <p className="text-sm text-gray-400 font-sans leading-relaxed mb-8">
              Desarrollo de una aplicación de escritorio interna para la optimización y gestión en la creación de la documentación como BL y Avisos (FCL, LCL, Aéreos). También se puede ver las ganancias obtenidas en cada Aviso.
            </p>

            <div className="flex flex-wrap gap-2 mb-8">
              {["Java", "JavaFX", "PostgreSQL", "Spring Boot"].map(tech => (
                <span key={tech} className="text-[10px] font-mono text-[#00ff41] px-2 py-1 bg-[#00ff41]/5 border border-[#00ff41]/30">
                  {tech}
                </span>
              ))}
            </div>
          </div>

        </div>
      </div>
    </motion.div>
  );
};

export default CaduceusProject;