import Snackbar, { showSnackbar } from '../../../Components/Snackbar';
import { getRedux } from '../../function';
import Api from '../../../Service/Api';
import API from '../../../config/API';

export const USER_LOGOUT = 'USER_LOGOUT';
export const USER_LOGIN = 'USER_LOGIN';
export const USER_REGITER = 'USER_REGITER';
export const ADD_TO_CART ="add_to_cart";
export const REMOVE_FROM_CART ="remove_from_cart";
export const INCREMENT_COUNT ="increment_count";
export const DECREMENT_COUNT ="decrement_count";
export const SET_FINAL_PRICE = 'SET_FINAL_PRICE';
export const SET_SELECTED_ITEM_DATA= 'SET_SELECTED_ITEM_DATA';
export const ADD_TO_FAVORITES ='ADD_TO_FAVORITES';
export const REMOVE_FROM_FAVORITES ='REMOVE_FROM_FAVORITES';

export const REGITER = (data: any, cb: any) => {
  const { dispatch } = getRedux();
  const { method, url } = API.REGISTER

  Api.request({ method, url, data }).then(res => {
    cb(res)
    console.log(res)
    dispatch({
      type: USER_REGITER,
      payload: res,
    });
    showSnackbar({ type:'success', body: 'Register Successfully', header:'Register'})
  }).catch(err => {
    console.log(err)
    showSnackbar({ type: 'error', body: err.response?.data?.message,  header: 'Register error' });

  })
};

export const LOGIN = (data: any, cb: any) => {
  const { dispatch } = getRedux();
  const { method, url } = API.LOGIN
  Api.request({ method, url, data }).then(res => {
    cb(res)
    console.log(res)
    dispatch({
      type: USER_LOGIN,
      payload: res,
    });
    showSnackbar({ type:'success', body: 'Login Successfully', header:'Login'})
  }).catch(err => {
    console.log(err)
    showSnackbar({ type: 'error', body:  err.response?.data?.message, header: 'Login error' });
  })
};

export const LOGOUT = () => {
  const { dispatch } = getRedux();
  dispatch({
    type: USER_LOGOUT,
  });
  showSnackbar({ type: 'error', body: 'Logout Successful', header: 'Logout' });
};

export const Categories = ( cb: any) => {

  const { method, url } = API.Category
  Api.request({ method, url }).then(res => {
    cb(res)
    console.log(res)
    showSnackbar({ type:'info', body: 'Categories Added', header:'Categories'})
  }).catch(err => {
    console.log(err)
    showSnackbar({ type: 'error', body:  err.response?.data?.message, header: 'Categories Error' });
  })
};

export const subCategory = ( cb: any) => {

  const { method, url } = API.Category
  Api.request({ method, url }).then(res => {
    cb(res)
    console.log(res)
    showSnackbar({ type:'info', body: 'Sub-Categories Added', header:'SubCategories'})
  }).catch(err => {
    console.log(err)
    showSnackbar({ type: 'error', body:  err.response?.data?.message, header: 'SubCategories Error' });
  })
};

export const Items = ( cb: any) => {

  const { method, url } = API.Category
  Api.request({ method, url }).then(res => {
    cb(res)
    console.log(res)
    showSnackbar({ type:'info', body: 'Items Added', header:'Items'})
  }).catch(err => {
    console.log(err)
    showSnackbar({ type: 'error', body:  err.response?.data?.message, header: 'Items Error' });
  })
};

// 


export const AddToCart = (item: any) => {
  console.log('Item to be added to the cart:', item);
  return {
    type: ADD_TO_CART,
    payload: item,
    
  }
}

export const RemoveFromCart =(item: any) => {
  return {
    type: REMOVE_FROM_CART,
    payload: item,
  }
}


export const incrementCount = () => {
 
  return {
  type: INCREMENT_COUNT,
}};

export const decrementCount = () => {
 
 return {
  type: DECREMENT_COUNT,
}
};

// actions.js



export const setFinalPrice = (finalPrice:any) => {
  return {
    type: SET_FINAL_PRICE,
    payload: isNaN(finalPrice) ? 0 : parseFloat(finalPrice),
  };
};

export const setSelectedItemData = (itemData:any) => ({
  type: 'SET_SELECTED_ITEM_DATA',
  payload: itemData,
});

export const addToFavorites = (restaurant:any) => ({
  type: 'ADD_TO_FAVORITES',
  payload: restaurant,
});

export const removeFromFavorites = (restaurant:any) => ({
  type: 'REMOVE_FROM_FAVORITES',
  payload: restaurant,
});