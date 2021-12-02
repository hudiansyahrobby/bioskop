import React, { useEffect, useState } from "react";
import Layout from "../components/Layout";
import Container from "../components/Container";
import { useDispatch, useSelector } from "react-redux";
import { getScheduleByDate } from "../actions/scheduleAction";
import Schedules from "../components/Schedules/Schedules";
import { Link } from "react-router-dom";
import Spinner from "../components/Spinner/Spinner";

export default function SchedulePage() {
  const { scheduleByDate, loading } = useSelector((state) => state.schedule);
  const { user } = useSelector((state) => state.user);
  const [day, setDay] = useState("today");
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getScheduleByDate(day));
  }, [dispatch, day]);

  return (
    <Layout>
      {loading ? (
        <Spinner />
      ) : (
        <div className="my-32 max-w-6xl mx-auto px-4">
          <Container>
            <h1 className="text-center text-gray-700 font-bold tracking-wider uppercase text-3xl md:text-4xl">
              Jadwal Bioskop
            </h1>
            <div className="mt-4 text-center">
              <button
                className="mr-2 text-gray-600 p-2 bg-info font-bold text-sm tracking-widest rounded-lg hover:text-gray-800 transition duration-300 ease-out"
                onClick={() => setDay("today")}
              >
                Hari Ini
              </button>
              <button
                className="text-gray-600 p-2 bg-info font-bold text-sm tracking-widest rounded-lg hover:text-gray-800 transition duration-300 ease-out"
                onClick={() => setDay("tomorrow")}
              >
                Besok
              </button>
            </div>
            {user?.role === "admin" && (
              <div className="flex justify-end">
                <Link
                  className="mt-4 p-2 bg-primary hover:bg-red-800 text-white font-bold text-xs tracking-widest rounded-lg transition duration-300 ease-out"
                  to="/tambah-jadwal"
                >
                  Tambah Jadwal
                </Link>
              </div>
            )}

            <Schedules data={scheduleByDate} />
          </Container>
        </div>
      )}
    </Layout>
  );
}
