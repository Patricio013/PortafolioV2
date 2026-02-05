import { motion } from "framer-motion";
import { Linkedin, Github, Mail, Phone, ExternalLink } from "lucide-react";

const ContactCard = ({ icon: Icon, label, value, href, delay }) => (
  <motion.a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ delay }}
    className="group relative flex items-center p-6 bg-[#050505] border border-[#00ff41]/20 rounded-sm hover:border-[#00ff41] transition-all duration-500 overflow-hidden"
  >
    <div className="absolute inset-0 bg-[#00ff41]/5 translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
    
    <div className="relative z-10 flex items-center gap-6 w-full">
      <div className="p-3 bg-[#00ff41]/10 text-[#00ff41] group-hover:shadow-[0_0_15px_#00ff41] transition-all">
        <Icon size={24} />
      </div>
      <div className="flex-1">
        <p className="text-[10px] font-mono text-[#00ff41]/50 uppercase tracking-widest">{label}</p>
        <p className="text-sm md:text-base font-mono text-[#00ff41]">{value}</p>
      </div>
      <ExternalLink size={14} className="text-[#00ff41]/30 group-hover:text-[#00ff41] transition-colors" />
    </div>
  </motion.a>
);

const Contact = () => {
  const contactData = [
    {
      icon: Linkedin,
      label: "Red_Profesional",
      value: "linkedin.com/in/patricio-matias-gomez",
      href: "https://www.linkedin.com/in/patricio-matias-gomez/",
    },
    {
      icon: Github,
      label: "Repositorio_Codigo",
      value: "github.com/Patricio013",
      href: "https://github.com/Patricio013",
    },
    {
      icon: Mail,
      label: "Correo_Electronico",
      value: "patriciom.gomez@hotmail.com",
      href: "mailto:patriciom.gomez@hotmail.com",
    },
    {
      icon: Phone,
      label: "Linea_Directa",
      value: "+54 9 11 6711-3845",
      href: "https://wa.me/5491167113845",
    },
  ];

  return (
    <section className="py-24 px-8 max-w-5xl mx-auto min-h-screen flex flex-col justify-center">
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="mb-16 text-center lg:text-left"
      >
        <h2 className="text-2xl md:text-4xl font-mono text-[#00ff41] mb-4 break-words">
          {">"} ESTABLECER_CONEXIÓN
        </h2>
        <div className="h-1 w-24 bg-[#00ff41] mx-auto lg:mx-0 shadow-[0_0_10px_#00ff41]"></div>
        <p className="mt-6 text-gray-500 font-mono text-sm uppercase tracking-widest">
          Puertos abiertos para nuevas oportunidades y colaboraciones de ingeniería.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {contactData.map((contact, index) => (
          <ContactCard key={index} {...contact} delay={index * 0.1} />
        ))}
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="mt-20 p-8 border border-dashed border-[#00ff41]/20 text-center"
      >
        <p className="font-mono text-[10px] text-[#00ff41]/40 mb-4 animate-pulse">
          SISTEMA_LISTO_PARA_TRANSMISIÓN
        </p>
        <p className="text-[#00ff41] font-mono text-xs italic">
          "Construyendo el futuro de los sistemas, un bit a la vez."
        </p>
      </motion.div>
    </section>
  );
};

export default Contact;