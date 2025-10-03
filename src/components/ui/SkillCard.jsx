import React from "react";

function SkillCard({ title, skills }) {
  return (
    <div className="max-w-[400px] bg-card rounded-lg p-3 pb-5 min-w-[300px]">
      <h2 className="text-xl font-semibold">{title}</h2>
      <div className="bg-accent-hover h-1 w-[70px] rounded-full mb-4"></div>
      <div className="flex flex-col gap-3">
        {skills?.map((skill, i) => (
          <div className="skill" key={i}>
            <h3 className="text-sm font-semibold">{skill.tech}</h3>
            <div className="line relative w-full">
              <div className="bg-white absolute top-0 left-0 h-1.5 w-full rounded-full"></div>
              <div className={`bg-accent-hover absolute top-0 left-0 h-1.5 rounded-full`} style={{width:skill?.count}}></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SkillCard;
