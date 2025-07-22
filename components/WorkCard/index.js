import React from "react";

const WorkCard = ({ img, name, description, onClick }) => {
  return (
    <div className="relative">
      {/* <div className="absolute inset-0 z-0 pointer-events-none" style={{background: "radial-gradient(circle, rgba(204, 153, 255, 1) 0%, rgba(0, 128, 128, 0.8) 100%)",filter: "blur(40px)",opacity: "0.5"}}></div> */}
    <div
      className="overflow-hidden rounded-lg p-2 laptop:p-4 first:ml-0 link cursor-pointer"
      onClick={onClick}
    >
      <div
        style={{boxShadow: "0 0 16px rgba(204, 153, 255, 0.6),0 0 8px rgba(0, 128, 128, 0.4)"}}
        className="relative z-1 rounded-lg overflow-hidden transition-all ease-out duration-300 h-48 mob:h-auto"
      >
        <img
          alt={name}
          className="h-full w-full object-cover hover:scale-110 transition-all ease-out duration-300 car-image-height"
          src={img}
        ></img>
      </div>
      <h1 className="relative z-1 mt-5 text-3xl font-medium">
        {name ? name : "Project Name"}
      </h1>
      <h2 className="relative z-1 text-xl opacity-50">
        {description ? description : "Description"}
      </h2>
    </div>
    </div>
  );
};

export default WorkCard;
