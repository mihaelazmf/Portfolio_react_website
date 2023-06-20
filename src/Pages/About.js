import React from "react";
import Work from "../Components/Work";
import { personalDetails, workDetails, eduDetails } from "../Details";

function About() {
  return (
    <main className="container mx-auto max-width pt-10 pb-20">
      <section className="flex flex-col">
        <h1 className="text-2xl text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold">
          About Me
        </h1>
        <p className="text-content py-8 lg:max-w-3xl">
          {personalDetails.about}
        </p>
      </section>
      <section className="flex flex-col">
        <h1 className="text-2xl text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold">
          Work Experience
        </h1>
        {workDetails.map(({ Position, Company, Location, Type, Duration }) => (
          <Work
            key={Position}
            position={Position}
            company={Company}
            location={Location}
            type={Type}
            duration={Duration}
          />
        ))}
      </section>
      <section className="flex flex-col">
        <h1 className="text-2xl pt-10 text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold">
          Education
        </h1>
        {eduDetails.map(({ Position, Company, Location, Type, Duration }) => (
          <Work
            key={Position}
            position={Position}
            company={Company}
            location={Location}
            type={Type}
            duration={Duration}
          />
        ))}
      </section>
    </main>
  );
}

export default About;
