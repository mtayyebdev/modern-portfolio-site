import React from "react";
import Button from "./Button";

function ProjectCard({ title, desc, image, liveLink, RepoLink, tech }) {
  return (
    <div className="max-w-[300px] hover:border-accent-hover group border-2 border-card rounded-lg bg-card overflow-hidden">
      <div className="img overflow-hidden">
        <img
          src={image}
          className="group-hover:scale-125 transition-all z-[1]"
          alt={title}
        />
      </div>
      <div className="body p-2 mt-2">
        <h2 className="text-lg font-semibold">{title}</h2>
        <p className="text-sm text-gray-300 line-clamp-3">{desc}</p>
        <div className="flex my-2 items-center gap-1 flex-wrap">
          {tech?.map((t, i) => (
            <span
              key={i}
              className="text-sm bg-accent px-2 py-0.5 rounded-full"
            >
              {t}
            </span>
          ))}
        </div>
        <div className="flex items-center mt-5 mb-2 gap-2">
          <Button
            text={"Live Demo"}
            size={"sm"}
            rounded={true}
            variant={"outline"}
            link={liveLink}
          />
          <Button
            text={"Github Repo"}
            size={"sm"}
            rounded={true}
            variant={"outline"}
            link={RepoLink}
          />
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
