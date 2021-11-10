import { ADD_ROUTE, LOGIN_ROUTE, CART_ROUTE, CHANGE_ROUTE, ADDNEWCART_ROUTE } from "../utils/const"
import AddNewCart from "./AddNewCart"
import Cart from "./Cart"
import ChangeCart from "./ChangeCart"
import Login from "./Login"

export const publicRoutes = [
    {
        path: LOGIN_ROUTE,
        Component: Login
    },
    {
        path: CART_ROUTE,
        Component: Cart
    }

];
export const privateRoutes = [
    {
        path: ADD_ROUTE,
        Component: AddNewCart
    },

    {
        path: CHANGE_ROUTE,
        Component: ChangeCart
    },
    {
        path: CART_ROUTE,
        Component: Cart
    }, {
        path: ADDNEWCART_ROUTE,
        Component: AddNewCart
    }
];