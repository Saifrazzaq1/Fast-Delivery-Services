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
export const MENU = (id, cb) => {
  const {method, url} = API.MENU;
  Api.request({method, url: url + `${id}`})
    .then(res => {
      cb(res);
    })
    .catch(error => {
      showSnackbar({
        type: 'error',
        header: 'Menu ERROR',
        body: getError(error),
      });
    });
};
export const DISCOUNT = (id, cb) => {
  const {method, url} = API.DISCOUNT;
  Api.request({method, url: url + `${id}`})
    .then(res => {
      cb(res);
    })
    .catch(error => {
      showSnackbar({
        type: 'error',
        header: 'Discount ERROR',
        body: getError(error),
      });
    });
};
export const ADDONS = (id, cb) => {
  const {method, url} = API.ADDONS;
  Api.request({method, url: url + `${id}`})
    .then(res => {
      cb(res);
    })
    .catch(error => {
      showSnackbar({
        type: 'error',
        header: 'Add ons ERROR',
        body: getError(error),
      });
    });
};
export const BUSSINESS = (data, cb) => {
  const {method, url} = API.BUSSINESS;
  Api.request({
    method,
    url: url + `?type=${data.name}&location=${data.long},${data.lat}`,
  })
    .then(res => {
      cb(res);
    })
    .catch(error => {
      showSnackbar({
        type: 'error',
        header: 'Bussiness ERROR',
        body: getError(error),
      });
    });
};
export const LOGIN = data => {
  const {dispatch} = getRedux();
  const {method, url} = API.LOGIN;

  Api.request({method, url, data})
    .then(res => {
      dispatch({
        type: USER_LOGIN,
        payload: res,
      });
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
