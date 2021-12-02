import React from "react";
import Movie from "./Movie";

export default function Movies({ movies, onDelete }) {
  return (
    <div className=" mt-24 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-x-3 gap-y-8 justify-center w-full max-w-5xl px-8 lg:mx-auto">
      <Movie movies={movies} onDelete={onDelete} />
    </div>
  );
}
