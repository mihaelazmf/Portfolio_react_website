import React from "react";
import Project from "../Components/Project";
import { projectDetails } from "../Details";

function Projects() {
  return (
    <main
      className="container mx-auto max-width pt-10 mb-20" // Add inline style here
    >
      <section>
        <h1 className="text-2xl text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold">
          Projects
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10">
          {projectDetails.map(
            ({
              title,
              image,
              description,
              techstack,
              previewLink,
              githubLink,
            }) => (
              <div className="project-card">
                <Project
                  title={title}
                  image={image}
                  description={description}
                  previewLink={previewLink}
                  techstack={techstack}
                  githubLink={githubLink}
                />
              </div>
            )
          )}
        </div>
      </section>
    </main>
  );
}

export default Projects;
