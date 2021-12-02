import React from "react";
import Schedule from "./Schedule";

export default function Schedules({ data }) {
  console.log("DATA", data);
  return (
    <div>
      {data?.length > 0 ? (
        data.map((_data) => {
          return <Schedule key={_data.id} schedule={_data} />;
        })
      ) : (
        <h1 className="mt-8 text-gray-600 text-center">Jadwal Kosong</h1>
      )}
    </div>
  );
}
