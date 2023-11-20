import {showSnackbar} from 'src/Components/Snackbar';
import {getRedux} from 'src/Redux/function';
import API from 'src/config/API';
import Api from 'src/config/Serivce/Api';
import {getError} from 'src/config/function';

export const USER_LOGOUT = 'USER_LOGOUT';
export const USER_LOGIN = 'USER_LOGIN';

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
export const LOGIN = data => {
  const {dispatch} = getRedux();
  const {method, url} = API.RIDER_LOGIN;
  console.log('got there ?', API.RIDER_LOGIN);

  Api.request({method, url, data})
    .then(res => {
      dispatch({
        type: USER_LOGIN,
        payload: res,
      });
      console.log('got there ? 3333333');
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
