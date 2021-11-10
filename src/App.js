import './App.css';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Navbar from './components/Navbar';
import AppRouter from './components/AppRouter';
import 'bootstrap/dist/css/bootstrap.min.css';
import Loader from './components/Loader';
import { useContext } from 'react';
import { Context } from './index';
import { useAuthState } from 'react-firebase-hooks/auth'
import Cart from './components/Cart';
import { ProductsContext } from './components/ProductContext';

const App = () => {
  const { auth } = useContext(Context)
  const [user, loading, error] = useAuthState(auth)

  if (loading) {
    return <Loader />
  }
  return (
    <BrowserRouter>
      <Navbar />
      <AppRouter />
    </BrowserRouter>
  );
};

export default App;
