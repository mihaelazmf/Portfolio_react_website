import React, { useState } from "react";

function Project({
  title,
  image,
  description,
  techstack,
  previewLink,
  githubLink,
}) {
  const [showFullDescription, setShowFullDescription] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const handleToggleDescription = () => {
    setShowFullDescription(!showFullDescription);
  };

  const getDescriptionPreview = () => {
    const wordLimit = 20;
    const words = description.split(" ");

    if (showFullDescription || words.length <= wordLimit) {
      return description;
    }

    const preview = words.slice(0, wordLimit).join(" ");

    return `${preview}...`;
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <article
      className="rounded-xl mt-10 overflow-hidden shadow-xl shadow-slate-300 dark:shadow-slate-900 relative"
      style={{ height: "600px" }}
    >
      <div
        className="relative"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <img
          src={image}
          alt=""
          loading="lazy"
          className="object-cover h-52 w-full"
        />
        {isHovered && (
          <a
            href={githubLink}
            target="_blank"
            rel="noreferrer noopener"
            className="absolute inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50 text-white opacity-0 hover:opacity-100 transition-opacity duration-300"
          >
            View Code
          </a>
        )}
      </div>
      <div className="dark:bg-dark-card p-4 h-auto overflow-hidden">
        <h1 className="dark:text-light-heading font-semibold text-lg pt-1">
          {title}
        </h1>
        <p className="text-content pt-4 font-light text-lg">
          {getDescriptionPreview()}
        </p>
        {!showFullDescription && description.length > 20 && (
          <button
            className="text-blue-500 font-medium hover:underline focus:outline-none mt-2"
            onClick={handleToggleDescription}
          >
            See More
          </button>
        )}
        {showFullDescription && (
          <div className="bg-white dark:bg-dark-card absolute inset-0 z-10 p-4 text-content overflow-auto">
            <div className="max-h-full overflow-auto">
              <p>{description}</p>
            </div>
            <h3 className="text-dark-heading dark:text-light-heading font-medium pt-4">
              Tech Stack: <span className="font-light">{techstack}</span>
            </h3>
            <button
              className="text-blue-500 font-medium hover:underline focus:outline-none mt-2"
              onClick={handleToggleDescription}
            >
              Close
            </button>
          </div>
        )}
      </div>
    </article>
  );
}

export default Project;
