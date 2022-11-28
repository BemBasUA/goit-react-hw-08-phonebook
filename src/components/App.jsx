import { Route, Routes } from 'react-router-dom';
import { Layout } from 'Layout';
import { Home } from 'pages/Home/Home';
import { Login } from 'pages/Login/Login';
import { Register } from 'pages/Register/Register';
import { Contacts } from 'pages/Contacts/Contacts';
import { selectIsRefreshing } from 'redux/selectors';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { refreshUser } from 'redux/operations';
import { RestrictedRoute } from 'RestrictedRoute';
import { PrivateRoute } from 'PrivateRoute';

export const App = () => {
  const dispatch = useDispatch();
  const IsRefreshing = useSelector(selectIsRefreshing);
  useEffect(() => {
    dispatch(refreshUser());
  });
  return IsRefreshing ? (
    'Fetching user data'
  ) : (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />}></Route>
        <Route
          path="login"
          element={
            <RestrictedRoute component={<Login />} redirectTo={'/contacts'} />
          }
        ></Route>
        <Route
          path="register"
          element={
            <RestrictedRoute
              component={<Register />}
              redirectTo={'/contacts'}
            />
          }
        ></Route>
        <Route
          path="contacts"
          element={
            <PrivateRoute component={<Contacts />} redirectTo={'/login'} />
          }
        ></Route>
      </Route>
    </Routes>
  );
};
