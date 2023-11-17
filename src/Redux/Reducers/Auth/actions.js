import {showSnackbar} from 'src/Components/Snackbar';
import {getRedux} from 'src/Redux/function';
import API from 'src/config/API';
import Api from 'src/config/Serivce/Api';
import {getError} from 'src/config/function';

export const USER_LOGOUT = 'USER_LOGOUT';
export const USER_LOGIN = 'USER_LOGIN';
export const USER_ORDER = 'USER_ORDER';
export const USER_ITEM = 'USER_ITEM';
export const INCREMENT = 'increment';
export const DECREMENT = 'decrement';

export const SIGNUP = (data, cb) => {
  const {method, url} = API.SIGNUP;
  Api.request({method, url, data})
    .then(response => {
      console.log('response', response);
      cb(response);
    })
    .catch(error => {
      showSnackbar({
        type: 'error',
        header: 'Signup ERROR',
        body: getError(error),
      });
    });
};

export const CATEGORIES = cb => {
  const {method, url} = API.CATEGORY;
  Api.request({method, url})
    .then(res => {
      cb(res);
    })
    .catch(error => {
      showSnackbar({
        type: 'error',
        header: 'Login ERROR',
        body: getError(error),
      });
    });
};
export const ITEM = cb => {
  const {method, url} = API.ITEM;
  console.log(ITEM);
  Api.request({method, url})
    .then(res => {
      cb(res);
    })
    .catch(error => {
      showSnackbar({
        type: 'error',
        header: 'Item ERROR',
        body: getError(error),
      });
    });
};
export const SUBCATEGORIES = cb => {
  const {method, url} = API.SUBCATEGORY;
  Api.request({method, url})
    .then(sub => {
      cb(sub);
    })
    .catch(error => {
      showSnackbar({
        type: 'error',
        header: 'Login ERROR',
        body: getError(error),
      });
    });
};
export const LOGIN = data => {
  const {dispatch} = getRedux();
  const {method, url} = API.LOGIN;
  console.log("got there ?", API.LOGIN );

  Api.request({method, url, data})
    .then(res => {
      dispatch({
        type: USER_LOGIN,
        payload: res,
      });
      console.log("got there ?")
    })
    .catch(error => {
      showSnackbar({
        type: 'error',
        header: 'Login ERROR',
        body: getError(error),
      });
    });
};
export const LOGOUT = () => {
  const {dispatch} = getRedux();
  dispatch({
    type: USER_LOGOUT,
  });
  showSnackbar({
    type: 'success',
    body: 'Logout Successful',
    header: 'Logout',
  });
};
export const increment = () => {
  return {
    type: INCREMENT,
  };
};
export const decrement = () => {
  return {
    type: DECREMENT,
  };
};
