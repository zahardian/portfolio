export default function SocialMedia() {
  const socialMedia = [
    { url: "https://id.linkedin.com/", logo: "fa-brands fa-linkedin" },
    { url: "https://github.com/zahardian", logo: "fa-brands fa-github" },
  ];

  return (
    <span className="cursor-pointer space-x-5">
      {socialMedia.map((sosmed, index) => (
        <a key={index} href={sosmed.url} className="text-3xl" target="_blank">
          <i className={`${sosmed.logo} hover:text-indigo-800 text-white`} />
        </a>
      ))}
    </span>
  );
}
