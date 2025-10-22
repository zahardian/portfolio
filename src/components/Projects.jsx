export default function Projects() {
  const projects = [
    {
      urlVercel: "https://movie-red-tau.vercel.app/",
      title: "Movies",
      description: `Where to watch movies online? A movie evening always starts
                    by a very time-consuming and frustrating search of where to
                    watch movies online. Zaza Movie is there to help you find
                    all the movies you can stream legally in Indonesia and make
                    your life easier.`,
      urlGithub: "https://github.com/zahardian/movie",
      cover: "box box-movie",
      order: true,
    },
    {
      urlVercel: "https://interior-rose.vercel.app/",
      title: "Ecommerce",
      description: `With a focus on simplicity and clean design, this store
                    prioritize user experience, making it easy for customers to
                    find and purchase the products they need.`,
      urlGithub: "https://github.com/zahardian/interior",
      cover: "box box-interior",
      order: false,
    },
    {
      urlVercel: "https://restaurant-website-alpha-eight.vercel.app/",
      title: "Restaurant",
      description: `Restaurant sushi is an application that allows users to
                    search for information about various sushi menus in
                    real-time.`,
      urlGithub: "https://github.com/zahardian/restaurant-website",
      cover: "box box-restaurant",
      order: true,
    },
    {
      urlVercel: "https://furniture-gamma-three.vercel.app/",
      title: "Furniture",
      description: `Based in Paris, Zaniture offers the innovative spirit and
                    excellent craftsmanship that sets Jean Royère’s prolific
                    production apart.`,
      urlGithub: "https://github.com/zahardian/furniture",
      cover: "box box-furniture",
      order: false,
    },
  ];

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
