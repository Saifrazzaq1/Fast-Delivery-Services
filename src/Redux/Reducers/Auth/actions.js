import {showSnackbar} from 'src/Components/Snackbar';
import {getRedux} from 'src/Redux/function';
import API from 'src/config/API';
import Api from 'src/config/Serivce/Api';
import {getError} from 'src/config/function';

export const USER_LOGOUT = 'USER_LOGOUT';
export const USER_LOGIN = 'USER_LOGIN';
export const Rider_LOGIN = 'USER_LOGIN';

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

export const RiderSIGNUP = (data, cb) => {
  const {method, url} = API.RIDERSIGNUP;
  Api.request({method, url, data})
    .then(response => {
      cb(response);
      showSnackbar({
        body: 'Signup Successfully',
        type: 'success',
        header: 'SUCCESS',
      });
    })
    .catch(error => {
      showSnackbar({
        type: 'error',
        header: 'Signup ERROR',
        body: getError(error),
      });
    });
};

export const RiderLOGIN = data => {
  const {dispatch} = getRedux();
  const {method, url} = API.RIDER_LOGIN;

  Api.request({method, url, data})
    .then(res => {
      dispatch({
        type: Rider_LOGIN,
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

export const AllOrders = cb => {
  const {method, url} = API.ALLORDERS;
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
export const CompletedOrders = cb => {
  const {method, url} = API.COMPLETEORDERS;
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
export const GetOrderbyid = (_orderId, cb) => {
  const {method, url} = API.ORDERBYID;
  const requestUrl = `${url}${_orderId}`;

  Api.request({method, url: requestUrl})
    .then(res => {
      cb(res);
    })
    .catch(error => {
      showSnackbar({
        type: 'error',
        header: 'Order ERROR',
        body: getError(error),
      });
    });
};
