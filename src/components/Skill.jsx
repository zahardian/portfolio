import useSkill from "../hooks/useSkill";

export default function Skill() {
  const { skills } = useSkill();

  return (
    <ul
      id="about"
      className="flex flex-wrap gap-6 justify-center px-5 xl:ml-20"
    >
      {skills.map((skill, index) => (
        <li
          key={index}
          className="items-center flex h-16 justify-center w-16 shadow-md shadow-indigo-800 rounded-full"
        >
          <img src={skill.image} alt={skill.text} className="w-9 h-9" />
        </li>
      ))}
    </ul>
  );
}
