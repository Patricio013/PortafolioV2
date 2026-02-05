import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const Intro = ({ onStart }) => {
    const [text, setText] = useState("");
    const fullText = ">INICIAR ACCESO AL SISTEMA";

    useEffect(() => {
        let i = 0;
        const interval = setInterval(() => {
            setText(fullText.slice(0, i));
            i++;
            if (i > fullText.length) clearInterval(interval);
        }, 100);
        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        const handleKeyPress = (event) => {
            if (event.key === "Enter") {
                onStart();
            }
        };

        window.addEventListener("keydown", handleKeyPress);
        
        return () => window.removeEventListener("keydown", handleKeyPress);
    }, [onStart]);

    return (
        <div 
            onClick={onStart}
            className="fixed inset-0 bg-[#050505] flex flex-col items-center justify-center z-50 cursor-pointer"
        >
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
                className="group relative flex flex-col items-center"
            >
                <h1 className="text-2xl md:text-4xl font-mono text-[#00ff41] tracking-tighter">
                    {text}
                    <span className="animate-pulse">_</span>
                </h1>

                <p className="mt-4 text-xs md:text-sm font-mono text-[#00ff41]/50 text-center uppercase tracking-[0.2em]">
                    Patricio_Portfolio.exe [Versión 2026.4]
                </p>

                <div className="absolute inset-0 bg-[#00ff41]/5 blur-3xl group-hover:bg-[#00ff41]/15 transition-all duration-700 rounded-full" />
            </motion.div>

            <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: [0, 1, 0] }}
                transition={{ repeat: Infinity, duration: 2 }}
                className="absolute bottom-10 text-[10px] font-mono text-[#00ff41]/30"
            >
                PRESIONE [ENTER] O HAGA CLIC PARA EJECUTAR
            </motion.p>
        </div>
    );
}

export default Intro;