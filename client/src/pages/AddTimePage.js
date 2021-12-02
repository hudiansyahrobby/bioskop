import React, { useEffect } from 'react';
import * as Yup from 'yup';
import { Formik, Form } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { addTime, getTime, resetSchedule } from '../actions/scheduleAction';
import Input from '../components/Input';
import Layout from '../components/Layout';
import DeleteIcon from '@material-ui/icons/Delete';
import { deleteTime } from '../actions/scheduleAction';
import Alert from '../components/Alert';
import Spinner from '../components/Spinner/Spinner';

export default function AddTimePage() {
  const dispatch = useDispatch();
  const { time, error, success, loading } = useSelector((state) => state.schedule);
  useEffect(() => {
    dispatch(getTime());
  }, [dispatch]);

  const onDeleteHandler = (id) => {
    dispatch(deleteTime(id));
  };
  return (
    <Layout>
      {loading ? (
        <Spinner />
      ) : (
        <div className='mt-32 px-5 md:px-10'>
          <Formik
            initialValues={{ hour: '' }}
            validationSchema={Yup.object({
              hour: Yup.string().required('Required'),
            })}
            onSubmit={(values, { setSubmitting }) => {
              dispatch(addTime(values));
              setSubmitting(false);
              setTimeout(() => {
                dispatch(resetSchedule());
              }, 5000);
            }}
          >
            <Form className='bg-info shadow-md rounded px-8 pt-6 pb-8 mb-4'>
              <h2 className='text-center text-gray-700 font-bold tracking-wider uppercase text-2xl'>
                Add Time
              </h2>

              {success ? (
                <Alert
                  message={success}
                  success={success}
                  onRemoveAlert={() => dispatch(resetSchedule())}
                />
              ) : null}
              {error ? (
                <Alert
                  message={error}
                  success={success}
                  onRemoveAlert={() => dispatch(resetSchedule())}
                />
              ) : null}

              <Input
                label='Add Time (Hour)'
                id='hour'
                type='text'
                name='hour'
                placeholder='Enter time (Hour) ex: 09:00'
              />

              <button
                className='bg-primary hover:bg-red-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
                type='submit'
              >
                Add Time
              </button>
            </Form>
          </Formik>

          <div className='mt-5 bg-info shadow-md rounded px-8 pt-6 pb-8 mb-4'>
            <h2 className='mb-4 text-white'>Available Time</h2>
            <table className='table-auto'>
              <thead className='text-white'>
                <tr>
                  <th className='px-4 py-2 border border-white'>No</th>
                  <th className='px-4 py-2 border border-white'>Time</th>
                  <th className='px-4 py-2 border border-white'>Action</th>
                </tr>
              </thead>
              <tbody className='text-white'>
                {time?.map(({ _id, hour }, index) => (
                  <tr key={_id}>
                    <td className='border px-4 py-2'>{index}</td>
                    <td className='border px-4 py-2'>{hour}</td>
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
