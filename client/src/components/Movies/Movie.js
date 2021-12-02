import React from "react";
import { useHistory } from "react-router-dom";

export default function Movie({ movies, onDelete }) {
  const history = useHistory();
  const userJSON = window.localStorage.getItem("user");
  let role = "";

  if (userJSON) {
    const user = JSON.parse(userJSON);
    role = user.role;
  }
  return (
    <>
      {movies?.map(({ id, nama, poster }) => {
        return (
          <div key={id}>
            <div
              className="rounded-md overflow-hidden relative"
              style={{ height: "18rem" }}
            >
              {/* edit icon */}

              {role === "admin" && (
                <div className="flex absolute right-0 items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 fill-current text-white mt-2 mr-2 bg-yellow-500 rounded-sm cursor-pointer p-1"
                    onClick={() => history.push(`/edit-movie/${id}`)}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                    />
                  </svg>

                  {/* remove icon */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 fill-current text-white mt-2 mr-2 bg-gray-900 rounded-sm cursor-pointer p-1"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    onClick={() => onDelete(id)}
                  >
                    <path
                      fillRule="evenodd"
                      d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              )}

              <img
                src={`http://localhost:5000/${poster}`}
                alt={nama}
                className="w-full h-full"
              />
            </div>
            <div className="mt-3">
              <h2 className="text-gray-600 text-center text-sm tracking-wider font-bold hover:text-gray-800 transition duration-300 ease-in-out">
                {nama.toUpperCase()}
              </h2>
            </div>
          </div>
        );
      })}
    </>
  );
}
