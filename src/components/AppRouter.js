import { Route, Switch, Redirect, Router } from 'react-router-dom';
import { CART_ROUTE, LOGIN_ROUTE, ADDNEWCART_ROUTE } from '../utils/const';
import { privateRoutes, publicRoutes } from './routes';
import { useAuthState } from 'react-firebase-hooks/auth'
import { Context } from '../index';
import { useContext } from 'react';
import AddNewCart from './AddNewCart';

const AppRouter = () => {
    const { auth } = useContext(Context)
    const [user] = useAuthState(auth)
    return user ?
        (
            <Switch>
                {privateRoutes.map(({ path, Component }) =>
                    <Route key={path} path={path} component={Component} exact={true} />
                )}
                <Redirect to={CART_ROUTE} />
            </Switch>
        ) :
        (
            <Switch>
                {publicRoutes.map(({ path, Component }) =>
                    <Route key={path} path={path} component={Component} exact={true} />
                )}
                <Redirect to={LOGIN_ROUTE} />
            </Switch>
        )
};
export default AppRouter;