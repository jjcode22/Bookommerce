import axios from 'axios'
import { CART_ADD_ITEM , CART_REMOVE_ITEM} from '../constants/cartConstants'

export const addToCart = (id,qty) => async (dispatch,getState) => {
    const {data}= await axios.get(`/api/products/${id}`)

    dispatch({
        type: CART_ADD_ITEM,
        payload: {
            product: data._id,
            name: data.name,
            img: data.image,
            price: data.Price,
            countInStock: data.countInStock,
            qty
        }
    })

    localStorage.setItem('cartItems',JSON.stringify(getState().cart.cartItems))

}

export const removefromCart = (id) =>(dispatch,getState) => {
    dispatch({
        type: CART_REMOVE_ITEM,
        payload: id,
       
    })

    localStorage.setItem('cartItems',JSON.stringify(getState().cart.cartItems))

}