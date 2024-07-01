import React from 'react';

const skills = [
  { name: 'HTML', image: './images/HTML.png' },
  { name: 'CSS', image: './images/CSS.png' },
  { name: 'JAVASCRIPT', image: './images/javascript.png' },
  { name: 'TAILWIND', image: './images/tail.png' },
  { name: 'REACT', image: './images/react.png' },
  { name: 'GITHUB', image: './images/Git.png' },
  { name: 'MY SQL', image: './images/mysql.png' },
];

const Skills = () => {
  return (
    <div className="text-center text-4xl text-white pt-40 font-bold" id="skills">
      <h1>Skills</h1>
      <div className="flex justify-center flex-wrap gap-8 pt-10">
        {skills.map(skill => (
          <div className="bg-black w-36 h-36 flex flex-col items-center justify-center">
            <img src={skill.image} width="100px" alt={skill.name} />
            <h3>{skill.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
