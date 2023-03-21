import React from "react";

const HeroSection = () => {
  return (
    <div className="flex flex-col justify-center items-center text-center mt-16">
      <h1 className="inline-block uppercase font-bold text-7xl bg-gradient-to-r from-emerald-500 to-emerald-900 bg-clip-text text-transparent">
        Gradient
        <br /> Generator
      </h1>
      <p className="mt-2 inline-block uppercase font-bold bg-gradient-to-r from-zinc-800 to-slate-800 bg-clip-text text-transparent">
        Create stunning gradient backgrounds
        <br /> with{" "}
        <span className="border-b-2 border-emerald-500">Tailwind CSS</span>{" "}
      </p>
    </div>
  );
};

export default HeroSection;
