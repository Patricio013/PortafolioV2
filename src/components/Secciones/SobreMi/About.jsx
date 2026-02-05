import { motion } from "framer-motion";
import { User, Code2, GraduationCap, MapPin } from "lucide-react";

const About = () => {
  const stats = [
    { label: "ESTADO", value: "INGENIERO_EN_INFORMATICA (ULTIMO_AÑO)", icon: <GraduationCap size={18}/> },
    { label: "TITULO", value: "ANALISTA_EN_INFORMATICA", icon: <Code2 size={18}/> },
    { label: "UBICACION", value: "AVELLANEDA, BUENOS_AIRES, ARGENTINA", icon: <MapPin size={18}/> },
    { label: "EXPERIENCIA", value: "FREELANCE", icon: <User size={18}/> },
  ];

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center p-6 bg-transparent">
      <motion.div 
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        className="mb-12 self-start md:ml-20"
      >
        <h2 className="text-4xl font-mono text-[#00ff41] drop-shadow-[0_0_8px_#00ff41]">
          {">"} SOBRE_MI
        </h2>
        <div className="h-1 w-32 bg-[#00ff41] mt-2 shadow-[0_0_10px_#00ff41]"></div>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl w-full">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="space-y-6 text-[#00ff41]/90 font-mono leading-relaxed bg-[#050505]/60 p-8 border border-[#00ff41]/20 rounded-lg backdrop-blur-sm"
        >
          <p className="text-lg italic text-[#00ff41]">
            "Analista en informática finalizando la carrera de Ingeniería en Informatica."
          </p>
          <p>
            He evolucionado de proyectos puramente orientados al Backend a proyectos FullStack desarrollando tanto el <span className="text-white border-b border-[#00ff41]">Backend como el Frontend</span>, utilizando mi formación no solo para escribir código, sino también para analizar la arquitectura y requisitos de cada sistema para asegurar su escalabilidad y eficiencia. Actualmente estoy explorando la Inteligencia Artificial para expandirme a más campos.
          </p>
          <p>
            Tengo experiencia como freelance trabajando en una página web de <span className="text-white">Centro de Enfermeros de Morón</span> y una aplicación interna para <span className="text-white">Caduceus International</span>.
          </p>
        </motion.div>

        <div className="space-y-4">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="group flex items-center p-4 border border-[#00ff41]/10 bg-[#00ff41]/5 hover:bg-[#00ff41]/10 transition-all duration-300 rounded-md"
            >
              <div className="mr-4 text-[#00ff41] group-hover:scale-110 transition-transform">
                {stat.icon}
              </div>
              <div>
                <p className="text-[10px] text-[#00ff41]/50 font-bold uppercase tracking-widest">
                  {stat.label}
                </p>
                <p className="text-[#00ff41] font-mono font-medium">
                  {stat.value}
                </p>
              </div>
            </motion.div>
          ))}
          
          <motion.a
            href="/PatricioGomezCV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            download="PatricioGomezCV.pdf"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="block w-full mt-6 p-4 text-center border-2 border-[#00ff41] text-[#00ff41] font-mono font-bold hover:bg-[#00ff41] hover:text-black transition-all duration-300 shadow-[0_0_15px_rgba(0,255,65,0.2)]"
          >
            DESCARGAR_CV.PDF
          </motion.a>
        </div>
      </div>
    </section>
  );
};

export default About;