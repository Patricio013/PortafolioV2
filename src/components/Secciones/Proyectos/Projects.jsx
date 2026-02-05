import EnfermerosProject from "./EnfermerosProject";
import CaduceusProject from "./CaduceusProject";

const Projects = () => {
  return (
    <section className="py-24 px-8 max-w-6xl mx-auto">
        <div className="mb-16">
            <h2 className="text-3xl font-mono text-[#00ff41]">
                {">"} TRABAJOS
            </h2>
            <div className="h-[1px] w-48 bg-[#00ff41]/30 mt-2"></div>
        </div>

        <CaduceusProject />
        <EnfermerosProject />
    </section>
  );
};

export default Projects;