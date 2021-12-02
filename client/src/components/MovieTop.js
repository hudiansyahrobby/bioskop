import React from "react";

export default function MovieTop({ image, title }) {
  return (
    <div>
      {image && title ? (
        <div className="w-64 text-center mx-auto">
          <img
            src={`http://localhost:5000/${image}`}
            alt={title}
            className="object-contain mx-auto w-full h-full rounded-lg"
          />
        </div>
      ) : (
        ""
      )}
    </div>
  );
}
