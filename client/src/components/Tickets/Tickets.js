import React from "react";
import Ticket from "./Ticket";

export default function Tickets({ data }) {
  return (
    <div
      className={`mt-3 ${
        data.length > 0 ? "grid sm:grid-cols-2 gap-4 lg:grid-cols-3" : ""
      }`}
    >
      {data?.length > 0 ? (
        data.map((ticket) => <Ticket key={ticket.id} ticket={ticket} />)
      ) : (
        <h1 className="text-gray-600 capitalize text-center text-lg font-bold">
          Kamu Tidak Memiliki Tiket
        </h1>
      )}
    </div>
  );
}
