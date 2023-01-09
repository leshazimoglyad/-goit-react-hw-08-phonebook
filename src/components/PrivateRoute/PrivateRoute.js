//import { useSelector } from 'react-redux';
//import { Navigate } from 'react-router-dom';
//import { selectIsLoggedIn } from 'redux/auth/slice';

//export function PrivateRoute({ children, redirectTo = '/', ...routeProps }) {
//  const isLoggedIn = useSelector(selectIsLoggedIn);
//  return (
//    <div {...routeProps}>
//      {isLoggedIn ? <div>{children}</div> : <Navigate to={redirectTo} />}
//    </div>
//  );
//}
///////////////////////////////////////////
//import { useSelector } from 'react-redux';
//import { Navigate } from 'react-router-dom';

//export const PrivateRoute = ({ children, redirectTo = '/' }) => {
//  const token = useSelector(state => state.auth.token);
//  return token ? children : <Navigate to={redirectTo} />;
//};
///////////////////////////////////////////////////////////
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn, selectIsRefreshing } from 'redux/auth/slice';

export const PrivateRoute = ({ component: Component, redirectTo = '/' }) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const isRefreshing = useSelector(selectIsRefreshing);

  const shouldRedirect = !isLoggedIn && !isRefreshing;
  return shouldRedirect ? <Navigate to={redirectTo} /> : <Component />;
};