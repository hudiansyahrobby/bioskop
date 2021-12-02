import * as CATEGORY from '../constants/categoryConstant';
import Axios from '../helpers/axios';

export const addCategory = (title) => async (dispatch) => {
  dispatch({ type: CATEGORY.ADD_CATEGORY_INIT });
  try {
    const { data } = await Axios.post('/api/category', title);
    dispatch({
      type: CATEGORY.ADD_CATEGORY_SUCCESS,
      payload: { category: data.category, success: data.message },
    });
  } catch (error) {
    console.log('ERORR', error);
    dispatch({ type: CATEGORY.ADD_CATEGORY_FAIL, payload: { error: error.response.data.message } });
  }
};

export const getCategory = () => async (dispatch) => {
  dispatch({ type: CATEGORY.GET_CATEGORY_INIT });
  try {
    const { data } = await Axios.get('/api/category');
    console.log(data);
    dispatch({ type: CATEGORY.GET_CATEGORY_SUCCESS, payload: { category: data.category } });
  } catch (error) {
    dispatch({ type: CATEGORY.GET_CATEGORY_FAIL, payload: { error: error.message } });
  }
};

export const deleteCategory = (id) => async (dispatch) => {
  dispatch({ type: CATEGORY.DELETE_CATEGORY_INIT });
  try {
    const { data } = await Axios.delete(`/api/category/${id}`);
    console.log(data);
    dispatch({ type: CATEGORY.DELETE_CATEGORY_SUCCESS, payload: { id } });
  } catch (error) {
    dispatch({ type: CATEGORY.DELETE_CATEGORY_FAIL, payload: { error: error.message } });
  }
};

export const resetCategory = () => async (dispatch) => {
  dispatch({ type: CATEGORY.RESET_CATEGORY });
};
