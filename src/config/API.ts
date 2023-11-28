export default {
  LOGIN: {method: 'POST', url: 'auth/login'},
  SIGNUP: {method: 'POST', url: 'users/'},
  CATEGORY: {method: 'GET', url: 'catagory/getAll/'},
  MENU: {method: 'GET', url: 'menu/getAll/'},
  BUSSINESS: {method: 'GET', url: 'bussiness//getAll/'},
  RIDER_LOGIN: {method: 'POST', url: 'auth/riderLogin'},
  RIDERSIGNUP: {method: 'POST', url: 'rider/'},
  DISCOUNT: {method: 'GET', url: 'discount/getAll/'},
  ADDONS: {method: 'GET', url: '/addon/getAll/'},
  ALLORDERS: {method: 'GET', url: 'rider/orders'},
  COMPLETEORDERS: {method: 'GET', url: 'rider/riderOrder/id=${userId}'},
  ORDERBYID: {method: 'GET', url: 'rider/orderbyId/'},
};
