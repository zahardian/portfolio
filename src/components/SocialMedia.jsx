import useSocialMedia from "../hooks/useSocialMedia";

export default function SocialMedia() {
  const { socialMedia } = useSocialMedia();

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
