import { motion } from "framer-motion";
import { ShieldCheck } from "lucide-react";
import FotoPerfil from "../../../assets/Patricio.jpeg";

const ProfileCard = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="relative group">
        <div className="absolute -inset-1 bg-[#00ff41] opacity-20 group-hover:opacity-40 blur transition duration-1000"></div>
        
        <div className="relative w-64 h-80 bg-black border border-[#00ff41]/40 overflow-hidden rounded-sm">
          <motion.div 
            animate={{ top: ["0%", "100%", "0%"] }}
            transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            className="absolute left-0 w-full h-[1px] bg-[#00ff41] shadow-[0_0_15px_#00ff41] z-10"
          />
          
          <img 
            src={FotoPerfil}
            alt="Patricio"
            className="w-full h-full object-cover grayscale contrast-125 opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700"
          />

          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10 pointer-events-none"></div>
        </div>

        <div className="mt-3 flex items-center justify-between font-mono text-[9px] text-[#00ff41]/70 px-1">
          <div className="flex items-center gap-1">
            <ShieldCheck size={10} className="animate-pulse" />
            <span>ID: PATRICIO_ING</span>
          </div>
          <span className="opacity-50">VER_2026.02</span>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;