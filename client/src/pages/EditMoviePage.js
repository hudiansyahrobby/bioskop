import { Form, Formik } from "formik";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router";
import * as Yup from "yup";
import { getMovieById, resetMovie, updateMovie } from "../actions/movieAction";
import Alert from "../components/Alert";
import Input from "../components/Input";
import Layout from "../components/Layout";
import Spinner from "../components/Spinner/Spinner";
import { toast } from "react-toastify";

export default function EditMoviePage() {
  const [image, setImage] = useState("");
  const [imageBlob, setImageBlob] = useState("");

  const { success, error, loading, movie } = useSelector(
    (state) => state.movie
  );
  const dispatch = useDispatch();
  const history = useHistory();
  const params = useParams();

  useEffect(() => {
    dispatch(getMovieById(params.id));
  }, [dispatch]);

  return (
    <Layout>
      {loading ? (
        <Spinner />
      ) : (
        <div className="mt-32 px-5 md:px-10">
          <Formik
            initialValues={{ title: movie.nama }}
            validationSchema={Yup.object({
              title: Yup.string().required("Required"),
            })}
            onSubmit={(values, { setSubmitting }) => {
              const movieData = new FormData();
              movieData.append("nama", values.title);
              movieData.append("file", imageBlob);
              console.log(movieData);
              dispatch(updateMovie(params.id, movieData, history, toast));
              setSubmitting(false);
              setTimeout(() => {
                dispatch(resetMovie());
              }, 5000);
            }}
          >
            <Form className="bg-info shadow-md rounded px-8 pt-6 pb-8 mb-4">
              <h2 className="text-center text-gray-700 font-bold tracking-wider uppercase text-2xl">
                Add Movie
              </h2>

              {success ? (
                <Alert
                  message={success}
                  success={success}
                  onRemoveAlert={() => dispatch(resetMovie())}
                />
              ) : null}
              {error ? (
                <Alert
                  message={error}
                  success={success}
                  onRemoveAlert={() => dispatch(resetMovie())}
                />
              ) : null}

              <Input
                name="title"
                type="text"
                id="title"
                placeholder="Enter movie title"
                label="Title"
              />

              <Input
                label="Add Image"
                id="image"
                as="file"
                accept="image/*"
                onChange={(e) => {
                  setImageBlob(e.target.files[0]);
                }}
              />

              <img
                src={
                  imageBlob
                    ? URL.createObjectURL(imageBlob)
                    : `http://localhost:5000/${movie.poster}`
                }
                alt={movie.nama}
                className="w-64 h-48 mb-4 rounded-lg object-contain"
              />

              <button
                className="bg-primary hover:bg-red-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Edit Movie
              </button>
            </Form>
          </Formik>
        </div>
      )}
    </Layout>
  );
}
