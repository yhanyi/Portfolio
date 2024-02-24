import React from "react";
import Project from "@/components/project-item";
import { projectsData } from "@/lib/projects-data";

export default function Projects() {
  return (
    <main>
      <div className="flex flex-col items-center justify-center">
        {projectsData.map((project, index) => (
          <React.Fragment key={index}>
            <Project {...project} />
          </React.Fragment>
        ))}
      </div>
    </main>
  );
}
