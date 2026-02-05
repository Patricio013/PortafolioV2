import { motion } from "framer-motion";
import { Database, Layout, Code, Settings2, Cpu } from "lucide-react";

const SkillCategory = ({ title, skills, icon: Icon, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay }}
    className="bg-[#050505]/80 border border-[#00ff41]/20 p-6 rounded-sm backdrop-blur-md hover:border-[#00ff41]/50 transition-colors group"
  >
    <div className="flex items-center gap-3 mb-6">
      <div className="p-2 bg-[#00ff41]/10 rounded-full text-[#00ff41] group-hover:shadow-[0_0_10px_#00ff41] transition-all">
        <Icon size={20} />
      </div>
      <h3 className="font-mono text-sm tracking-[0.2em] text-[#00ff41] uppercase">
        {">"} {title}
      </h3>
    </div>
    
    <div className="flex flex-wrap gap-2">
      {skills.map((skill, i) => (
        <span 
          key={i}
          className="px-3 py-1 border border-[#00ff41]/10 bg-[#00ff41]/5 text-[#00ff41] font-mono text-[11px] hover:bg-[#00ff41] hover:text-black transition-all cursor-default"
        >
          {skill}
        </span>
      ))}
    </div>
  </motion.div>
);

const Skills = () => {
  const categories = [
    {
      title: "Lenguajes",
      icon: Code,
      skills: ["Java", "JavaScript", "HTML", "CSS", "C++", "C#", "Python"]
    },
    {
      title: "Frameworks",
      icon: Layout,
      skills: ["Spring Boot", "React", "Vite"]
    },
    {
      title: "Data_Base",
      icon: Database,
      skills: ["PostgreSQL", "MySQL", "MongoDB", "Cassandra", "Redis", "Neo4j", "SQL", "NoSQL"]
    },
    {
      title: "Extras",
      icon: Settings2,
      skills: ["Trello", "Miro", "Draw.io", "Postman"]
    }
  ];

  return (
    <section className="py-20 px-8 max-w-7xl mx-auto">
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="mb-16"
      >
        <h2 className="text-3xl font-mono text-[#00ff41] mb-2">
          {">"} HABILIDADES
        </h2>
        <p className="text-[#00ff41]/50 font-mono text-xs uppercase tracking-widest">
          Stack tecnológico y herramientas de ingeniería
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {categories.map((cat, index) => (
          <SkillCategory 
            key={index}
            title={cat.title}
            skills={cat.skills}
            icon={cat.icon}
            delay={index * 0.1}
          />
        ))}
      </div>
    </section>
  );
};

export default Skills;