import * as types from './ActionTypes';

export const fetchProductsBegin = () => ({
  type: types.FETCH_PRODUCTS_BEGIN
});

export const fetchProductsSuccess = place => ({
  type: types.FETCH_PRODUCTS_SUCCESS,
  payload: { place }
});

export const fetchProductsFailure = error => ({
  type: types.FETCH_PRODUCTS_FAILURE,
  payload: { error }
});

export function fetchProducts() {
  return dispatch => {
    dispatch(fetchProductsBegin());
    return fetch('http://127.0.0.1:8000/posters/?format=json')
      .then(handleErrors)
      .then(res => res.json())
      .then(json => {
        dispatch(fetchProductsSuccess(json));
        return json;
      })
      .catch(error => {
        console.log('error catched');
        dispatch(fetchProductsFailure(error));
      });
  };
}

// Handle HTTP errors since fetch won't.
function handleErrors(response) {
  console.log('error handler');
  if (!response.ok) {
    throw Error(response.statusText);
  }

  return response;
}
