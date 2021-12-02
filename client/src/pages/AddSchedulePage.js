import id from "date-fns/locale/id";
import { ErrorMessage, Field, Form, Formik } from "formik";
import React, { useEffect } from "react";
import DatePicker, { registerLocale } from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import AsyncSelect from "react-select/async";
import * as Yup from "yup";
import { getMovies, getStudios } from "../actions/movieAction";
import { addSchedule } from "../actions/scheduleAction";
import Layout from "../components/Layout";
import { format } from "date-fns";
import { toast } from "react-toastify";

export default function AddMoviePage() {
  const dispatch = useDispatch();
  const { movies, studios } = useSelector((state) => state.movie);

  registerLocale("id", id);

  const history = useHistory();

  useEffect(() => {
    dispatch(getMovies());
    dispatch(getStudios());
  }, []);

  const promiseOptions = () => {
    const moviesOptions = movies?.items?.map((movie) => {
      return {
        value: movie.id,
        label: movie.nama,
      };
    });
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(moviesOptions);
      }, 1000);
    });
  };

  const promiseStudioOptions = () => {
    const studioOptions = studios?.map((studio) => {
      return {
        value: studio.id,
        label: studio.nama_studio,
      };
    });
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(studioOptions);
      }, 1000);
    });
  };

  return (
    <Layout>
      <div className="mt-32 px-5 md:px-10 ">
        <Formik
          initialValues={{
            jam_mulai: "",
            jam_selesai: "",
            movie: "",
            studio: "",
          }}
          validationSchema={Yup.object({
            // date: Yup.date().required('Harus Diisi'),
            // movie: Yup.object().required('Harus Diisi'),
          })}
          onSubmit={(values, { setSubmitting }) => {
            // 2021-10-17 15:40:10

            const schedule = {
              jam_mulai: format(values.jam_mulai, "yyyy-M-d H:mm:ss"),
              jam_selesai: format(values.jam_selesai, "yyyy-M-d H:mm:ss"),
              filmId: values.movie,
              // TODO add studioId
              studioId: values.studio,
            };

            dispatch(addSchedule(schedule, history, toast));
            setSubmitting(false);
          }}
        >
          <Form className="bg-info shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <h2 className="mb-6 text-center text-gray-700 font-bold tracking-wider uppercase text-2xl">
              Tambah Jadwal
            </h2>

            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="time"
            >
              Pilih Jam Mulai
            </label>

            <Field
              name="jam_mulai"
              component={({ field, form }) => {
                return (
                  <DatePicker
                    selected={field.value}
                    onChange={(date) => form.setFieldValue(field.name, date)}
                    placeholderText="Pilih Jam Mulai"
                    timeIntervals={15}
                    showTimeSelect
                    timeCaption="Jam"
                    locale="id"
                    dateFormat="PPPPpp"
                    timeFormat="HH:mm"
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline block"
                  />
                );
              }}
            />

            <ErrorMessage
              name="date"
              component="p"
              className="mt-2 text-red-600 text-sm"
            />

            <label
              className="mt-4 block text-gray-700 text-sm font-bold mb-2"
              htmlFor="time"
            >
              Pilih Jam Selesai
            </label>
            <Field
              name="jam_selesai"
              component={({ field, form }) => {
                return (
                  <DatePicker
                    selected={field.value}
                    onChange={(date) => form.setFieldValue(field.name, date)}
                    placeholderText="Pilih Jam Selesai"
                    timeIntervals={15}
                    showTimeSelect
                    timeCaption="Jam"
                    locale="id"
                    dateFormat="PPPPpp"
                    timeFormat="HH:mm"
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline block"
                  />
                );
              }}
            />

            <ErrorMessage
              name="date"
              component="p"
              className="mt-2 text-red-600 text-sm"
            />

            <label
              className="mt-4 block text-gray-700 text-sm font-bold mb-2"
              htmlFor="film"
            >
              Pilih Film
            </label>
            <Field
              name="movie"
              component={({ field, form }) => (
                <AsyncSelect
                  cacheOptions
                  defaultOptions
                  loadOptions={promiseOptions}
                  onChange={(option) => {
                    console.log(option);
                    return form.setFieldValue(field.name, option.value);
                  }}
                  // getOptionLabel={(e) => {
                  //   console.log(e);
                  //   return e.nama;
                  // }}
                  // getOptionValue={(e) => {
                  //   console.log(e);
                  //   return {
                  //     _id: e.id,
                  //     nama: e.nama,
                  //   };
                  // }}
                  placeholder="Masukkan Nama movie"
                />
              )}
            />

            <ErrorMessage
              name="studio"
              component="p"
              className="mt-2 text-red-600 text-sm"
            />

            <label
              className="mt-4 block text-gray-700 text-sm font-bold mb-2"
              htmlFor="studio"
            >
              Pilih Studio
            </label>
            <Field
              name="studio"
              component={({ field, form }) => (
                <AsyncSelect
                  cacheOptions
                  defaultOptions
                  loadOptions={promiseStudioOptions}
                  onChange={(option) => {
                    return form.setFieldValue(field.name, option.value);
                  }}
                  // getOptionLabel={(e) => {
                  //   console.log(e);
                  //   return e.nama;
                  // }}
                  // getOptionValue={(e) => {
                  //   console.log(e);
                  //   return {
                  //     _id: e.id,
                  //     nama: e.nama,
                  //   };
                  // }}
                  placeholder="Masukkan Nama Studio"
                />
              )}
            />

            <ErrorMessage
              name="movie"
              component="p"
              className="mt-2 text-red-600 text-sm"
            />

            <button
              className="mt-4 block bg-primary hover:bg-red-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Tambah Jadwal
            </button>
          </Form>
        </Formik>
      </div>
      )
      {/* <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='time'>
                Pilih Jam Penayangan
              </label>
              <Field
                name='time'
                component={({ field, form }) => (
                  <CreatableSelect
                    isClearable
                    isDisabled={isTimeLoading}
                    isLoading={isTimeLoading}
                    formatCreateLabel={(inputValue) => `Buat "${inputValue}"`}
                    onChange={(option) => form.setFieldValue(field.name, option.value)}
                    placeholder='Pilih Jam Penayangan'
                    onCreateOption={handleCreateTime}
                    options={timeOptions}
                    value={
                      timeOptions ? timeOptions.find((option) => option.value === field.value) : ''
                    }
                    onBlur={field.onBlur}
                  />
                )}
              />

              <ErrorMessage name='category' component='p' className='mt-2 text-red-600 text-sm' /> */}
    </Layout>
  );
}
