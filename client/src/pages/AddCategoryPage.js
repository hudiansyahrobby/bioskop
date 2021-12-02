import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as Yup from 'yup';
import Input from '../components/Input';
import Layout from '../components/Layout';
import DeleteIcon from '@material-ui/icons/Delete';
import { addCategory, deleteCategory, getCategory, resetCategory } from '../actions/categoryAction';
import { Form, Formik } from 'formik';
import Alert from '../components/Alert';
import Spinner from '../components/Spinner/Spinner';

export default function AddCategoryPage() {
  const dispatch = useDispatch();
  const { category, error, success, loading } = useSelector((state) => state.category);

  useEffect(() => {
    dispatch(getCategory());
  }, [dispatch]);

  const onDeleteHandler = (id) => {
    dispatch(deleteCategory(id));
  };

  return (
    <Layout>
      {loading ? (
        <Spinner />
      ) : (
        <div className='mt-32 px-5 md:px-10'>
          <Formik
            initialValues={{ title: '' }}
            validationSchema={Yup.object({
              title: Yup.string().required('Required'),
            })}
            onSubmit={(values, { setSubmitting }) => {
              dispatch(addCategory(values));
              setSubmitting(false);
              setTimeout(() => {
                dispatch(resetCategory());
              }, 5000);
            }}
          >
            <Form className='bg-info shadow-md rounded px-8 pt-6 pb-8 mb-4'>
              <h2 className='text-center text-gray-700 font-bold tracking-wider uppercase text-2xl mb-2'>
                Add Category
              </h2>

              {success ? (
                <Alert
                  message={success}
                  success={success}
                  onRemoveAlert={() => dispatch(resetCategory())}
                />
              ) : null}
              {error ? (
                <Alert
                  message={error}
                  success={success}
                  onRemoveAlert={() => dispatch(resetCategory())}
                />
              ) : null}
              <Input
                label='Add Category'
                id='title'
                type='text'
                name='title'
                placeholder='Enter category title'
              />

              <button
                className='bg-primary hover:bg-red-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
                type='submit'
              >
                Add Category
              </button>
            </Form>
          </Formik>

          <div className='mt-5 bg-info shadow-md rounded px-8 pt-6 pb-8 mb-4'>
            <h2 className='mb-4 text-white'>Available Category</h2>
            <table className='table-auto'>
              <thead className='text-white'>
                <tr>
                  <th className='px-4 py-2 border border-white'>No</th>
                  <th className='px-4 py-2 border border-white'>Category</th>
                  <th className='px-4 py-2 border border-white'>Action</th>
                </tr>
              </thead>
              <tbody className='text-white'>
                {category?.map(({ _id, title }, index) => (
                  <tr key={_id}>
                    <td className='border px-4 py-2'>{index + 1}</td>
                    <td className='border px-4 py-2'>{title.toUpperCase()}</td>
                    <td
                      className='border px-4 py-2 text-center'
                      onClick={() => onDeleteHandler(_id)}
                    >
                      <DeleteIcon className=' text-red-700 hover:text-red-900 cursor-pointer transition duration-300 ease-in-out' />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </Layout>
  );
}
