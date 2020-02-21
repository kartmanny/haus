import React, { useReducer } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Context from 'assets/context/Context';

import Navbar from 'components/Navbar';
import Hero from 'components/Hero';
import Discover from 'components/Discover';
import Footer from 'components/Footer';
import Auth from 'components/Auth';
import Profile from 'components/Profile';

import 'assets/styles/app.scss';
import data from 'assets/data/database.json';

const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_FAVORITE':
      const newAdd = {
        ...state,
        favorites: Array.from(
          new Set([...state.favorites, action.payload.favorite])
        )
      };
      localStorage.setItem('initialState', JSON.stringify(newAdd));
      return newAdd;
    case 'REMOVE_FAVORITE':
      const newRemove = {
        ...state,
        favorites: state.favorites.filter(
          favorite => favorite !== action.payload.favorite
        )
      };
      localStorage.setItem('initialState', JSON.stringify(newRemove));
      return newRemove;
    case 'LOGIN': {
      const loggedIn = {
        ...state,
        authenticated: true
      };
      localStorage.setItem('authenticated', true);
      return loggedIn;
    }
    case 'LOGOUT': {
      const loggedOut = {
        ...state,
        authenticated: false
      };
      localStorage.setItem('authenticated', JSON.stringify(false));
      return loggedOut;
    }
    default:
      throw new Error();
  }
};

function App() {
  const initialState = localStorage.getItem('initialState');
  const initialStateObj = JSON.parse(initialState);
  const [state, dispatch] = useReducer(reducer, initialStateObj || data);
  const ROUTES = [
    { name: 'Home', url: '/haus/home', cta: false, render: true },
    { name: 'Discover', url: '/haus/discover', cta: false, render: true },
    {
      name: 'Profile',
      url: '/haus/profile',
      cta: false,
      render: state.authenticated
    },
    {
      name: 'Login',
      url: '/haus/login',
      cta: true,
      render: !state.authenticated
    },
    {
      name: 'Logout',
      url: '#',
      cta: true,
      render: state.authenticated,
      onClick: () => {
        dispatch({ type: 'LOGOUT' });
      }
    }
  ];
  return (
    <Context.Provider value={{ data: state, dispatch: dispatch }}>
      <BrowserRouter>
        <Navbar routes={ROUTES} />
        <Switch>
          <Route exact path="/haus/discover" component={() => <Discover />} />
          <Route
            exact
            path="/haus/discover/:neighborhood"
            component={Discover}
          />
          <Route exact path="/haus/profile" component={() => <Profile />} />
          <Route exact path="/haus/login" component={() => <Auth />} />
          <Route exact path="/haus/profile" component={() => <Profile />} />
          <Route path="/" component={() => <Hero />} />
        </Switch>
      </BrowserRouter>
      <Footer />
    </Context.Provider>
  );
}

export default App;
