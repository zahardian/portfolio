import Projects from "../components/Projects";

const Project = () => {
  return (
    <>
      <section
        id="project"
        className="relative max-w-lg mx-5 mb-40 md:max-w-xl md:mx-auto xl:max-w-5xl xl:mx-auto"
      >
        <div className="container mx-auto">
          <div className="project-content text-center">
            <p className="text-lg font-extrabold text-indigo-800 uppercase mb-4 tracking-wide">
              Portfolio
            </p>
            <h3 className="text-white text-3xl font-bold mb-20 tracking-wide md:text-2xl">
              Each project is a unique piece of development
            </h3>
            <div className="project-grid space-y-20">
              <Projects />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Project;
