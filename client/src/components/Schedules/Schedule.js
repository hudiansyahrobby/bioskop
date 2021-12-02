import AccessTimeIcon from "@material-ui/icons/AccessTime";
import CameraIndoorIcon from "@material-ui/icons/CameraRounded";
import { format } from "date-fns";
import idn from "date-fns/locale/id";
import React from "react";
import { Link } from "react-router-dom";

export default function Schedule({ schedule }) {
  const { jam_mulai, jam_selesai, id, nama, nama_studio, poster } = schedule;
  // const time = React.useMemo(() => {
  //   const timeFromHours = date.split('T');
  //   return timeFromHours[1].substring(0, 5);
  // }, [date]);

  return (
    <div className="flex mt-12 shadow-lg">
      <div style={{ minWidth: "9rem" }} className="w-48 h-64">
        <img
          src={`http://localhost:5000/${poster}`}
          alt={nama}
          className="h-full w-full rounded-lg cover"
        />
      </div>
      <div className="ml-4 ">
        <h2 className="text-gray-600 text-sm md:text-lg uppercase font-bold tracking-wider">
          {nama}
        </h2>
        {/* <div className="mt-2 flex items-center justify-start">
          <StarIcon className="text-yellow-600" />
          <span className="ml-1 text-gray-600 font-bold">{9}</span>
        </div> */}
        <div className="mt-3 mb-3 flex items-center">
          <AccessTimeIcon
            className="text-gray-600 mr-1"
            style={{ fontSize: "20px" }}
          />
          <span className="text-gray-600 text-sm md:text-base">
            {format(new Date(jam_mulai), "HH:mm", { locale: idn })}
          </span>
          <span className="text-gray-600 text-sm md:text-base">-</span>
          <span className="text-gray-600 text-sm md:text-base">
            {format(new Date(jam_selesai), "HH:mm", { locale: idn })}
          </span>
        </div>

        <div className="mt-3 mb-3 flex items-center">
          <CameraIndoorIcon
            className="text-gray-600 mr-1"
            style={{ fontSize: "20px" }}
          />

          <span className="text-gray-600 text-sm md:text-base">
            {nama_studio}
          </span>
        </div>

        {/* <p className="my-3 text-gray-600 text-xs md:text-sm">
          {movie.overview.substring(0, 450) + "..."}
        </p> */}
        <Link
          className="bg-primary tracking-widest hover:bg-red-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline text-xs mt-4"
          to={`/beli-tiket/${id}`}
        >
          Beli Tiket
        </Link>
      </div>
    </div>
  );
}
