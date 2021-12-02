import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCategory } from "../actions/categoryAction";
import { addMovie, resetMovie } from "../actions/movieAction";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import Layout from "../components/Layout";
import Input from "../components/Input";
import { useHistory } from "react-router";
import Alert from "../components/Alert";
import Spinner from "../components/Spinner/Spinner";
import { toast } from "react-toastify";

export default function AddMoviePage() {
  const [image, setImage] = useState("");

  const { success, error, loading } = useSelector((state) => state.movie);
  const dispatch = useDispatch();
  const history = useHistory();

  return (
    <Layout>
      {loading ? (
        <Spinner />
      ) : (
        <div className="mt-32 px-5 md:px-10">
          <Formik
            initialValues={{ title: "" }}
            validationSchema={Yup.object({
              title: Yup.string().required("Required"),
            })}
            onSubmit={(values, { setSubmitting }) => {
              const movieData = new FormData();
              movieData.append("nama", values.title);
              movieData.append("file", image);

              dispatch(addMovie(movieData, history, toast));
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
                onChange={(e) => setImage(e.target.files[0])}
              />
              {image && (
                <img
                  src={URL.createObjectURL(image)}
                  alt=""
                  className="w-64 h-48 mb-4 rounded-lg object-contain"
                />
              )}

              <button
                className="bg-primary hover:bg-red-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Add Movie
              </button>
            </Form>
          </Formik>
        </div>
      )}
    </Layout>
  );
}
