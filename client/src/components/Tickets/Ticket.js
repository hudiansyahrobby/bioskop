import React from "react";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import AirlineSeatReclineNormalIcon from "@material-ui/icons/AirlineSeatReclineNormal";
import EventIcon from "@material-ui/icons/Event";
import { capitalizeFirstLetter } from "../../helpers/capitalizeFirstLetter";
import { format } from "date-fns";
import id from "date-fns/locale/id";
import QRCode from "qrcode.react";
import CameraIndoorIcon from "@material-ui/icons/CameraRounded";

export default function Ticket({ ticket }) {
  return (
    <>
      <div className="text-gray-600 bg-info rounded-md p-4 flex text-left justify-between items-center">
        <div>
          <h3 className="text-primary font-bold text-xl tracking-wide">
            {capitalizeFirstLetter(ticket.nama_film)}
          </h3>
          <div className="mt-3">
            <EventIcon className="mr-2 " />
            <span className="mt-1 text-gray-600 text-md font-semibold">
              {format(new Date(ticket.jam_mulai), "d MMMM yyyy", {
                locale: id,
              })}
            </span>
          </div>
          <div className="mt-3">
            <AccessTimeIcon className="mr-2 " />
            <span className="mt-1 text-gray-600 text-md font-semibold">
              {format(new Date(ticket.jam_mulai), "HH:mm", { locale: id })} -{" "}
              {format(new Date(ticket.jam_selesai), "HH:mm", { locale: id })}
            </span>
          </div>

          <div className="mt-3">
            <AirlineSeatReclineNormalIcon className="mr-2" />
            <span className="text-gray-600 text-md font-semibold">
              {ticket.no_kursi}
            </span>
          </div>

          <div className="mt-3">
            <CameraIndoorIcon className="mr-2" />
            <span className="text-gray-600 text-md font-semibold">
              {ticket.nama_studio}
            </span>
          </div>
        </div>
        <QRCode
          value={`${ticket.nama_film} ${format(
            new Date(ticket.jam_mulai),
            "d MMMM yyyy",
            {
              locale: id,
            }
          )} ${format(new Date(ticket.jam_mulai), "HH:mm", { locale: id })} ${
            ticket.no_kursi
          } `}
          size={80}
        />
        {/* <AcUnitIcon className='text-primary' style={{ fontSize: 70 }} /> */}
      </div>
    </>
  );
}
