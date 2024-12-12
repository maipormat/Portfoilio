import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaGithub } from 'react-icons/fa';
import { SiTailwindcss } from 'react-icons/si';

const skills = [
  { name: 'HTML', Icon: FaHtml5 },
  { name: 'CSS', Icon: FaCss3Alt },
  { name: 'JavaScript', Icon: FaJs },
  { name: 'React', Icon: FaReact },
  { name: 'TailwindCSS', Icon: SiTailwindcss },
  { name: 'GitHub', Icon: FaGithub },
];

const SkillsSection = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold text-center mb-8">Skills</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center border-2 border-gray-300 rounded-lg p-4 hover:shadow-lg transition duration-300"
          >
            <skill.Icon className="w-16 h-16 text-yellow-400 mb-4" />
            <p className="text-lg font-semibold">{skill.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillsSection;
