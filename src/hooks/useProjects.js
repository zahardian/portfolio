const useProjects = () => {
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
      urlVercel: "https://ecommerce-furniture-seven.vercel.app/",
      title: "Ecommerce",
      description: `With a focus on simplicity and clean design, this store
                    prioritize user experience, making it easy for customers to
                    find and purchase the products they need.`,
      urlGithub: "https://github.com/zahardian/ecommerce-furniture",
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
  ];
  return { projects };
};

export default useProjects;
