import {showSnackbar} from 'src/Components/Snackbar';
import API from 'src/config/API';
import Api from 'src/config/Serivce/Api';
import {getError} from 'src/config/function';

export const RiderSIGNUP = (data, cb) => {
  const {method, url} = API.RIDERSIGNUP;
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
