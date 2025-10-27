import useProjects from "../hooks/useProjects";

export default function Projects() {
  const { projects } = useProjects();

  return (
    <>
      {projects.map((project, index) => (
        <div
          key={index}
          className="pro_1 gap-10 shadow-lg shadow-indigo-800 rounded-2xl items-center p-4 xl:flex"
        >
          <div
            className={`pro_img w-full h-80 overflow-hidden rounded-2xl mb-4 xl:w-3/4 ${
              project.order ? "xl:order-1" : project.order
            } `}
          >
            <a href={project.urlVercel} target="_blank">
              <div className={project.cover} />
            </a>
          </div>
          <div className="pro_text justify-end xl:w-1/2">
            <h3 className="text-white text-lg font-extrabold tracking-wide relative uppercase mb-4">
              {project.title}
            </h3>
            <p className="text-lg font-medium text-gray-500">
              {project.description}
            </p>
            <div className="link space-x-10 justify-evenly mt-8 items-center text-white">
              <a
                href={project.urlGithub}
                target="_blank"
                className="text-lg tracking-wide font-semibold hover:text-indigo-800"
              >
                Code <i className="fa-brands fa-github text-3xl" />
              </a>
              <a
                href={project.urlVercel}
                target="_blank"
                className="text-lg tracking-wide font-semibold hover:text-indigo-800"
              >
                Live Demo{" "}
                <i className="fa-solid fa-arrow-up-right-from-square text-2xl" />
              </a>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
