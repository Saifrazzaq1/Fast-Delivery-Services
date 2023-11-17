import {showSnackbar} from 'src/Components/Snackbar';
import {getRedux} from 'src/Redux/function';
import API from 'src/config/API';
import Api from 'src/config/Serivce/Api';
import {getError} from 'src/config/function';


// export const RIDER_LOGOUT = 'RIDER_LOGOUT';
// export const RIDER_LOGIN = 'USER_LOGIN';


export const RiderSIGNUP = (data, cb) => {
    const {method, url} = API.RIDERSIGNUP;
    console.log(API.RIDERSIGNUP)
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
    console.log(data,'kkkkkkkkkkkkkkkkkkk')

      });
  };

//   export const LOGOUT = () => {
//     const {dispatch} = getRedux();
//     dispatch({
//       type: USER_LOGOUT,
//     });
//     showSnackbar({
//       type: 'success',
//       body: 'Logout Successful',
//       header: 'Logout',
//     });
//   };  