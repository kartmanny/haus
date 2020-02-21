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

const ROUTES = [
  { name: 'Home', url: '/haus/home', cta: false },
  { name: 'Discover', url: '/haus/discover', cta: false },
  { name: 'Profile', url: '/haus/profile', cta: false },
  { name: 'Login', url: '/haus/login', cta: true }
];

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
        ...data,
        favorites: state.favorites.filter(
          favorite => favorite !== action.payload.favorite
        )
      };
      localStorage.setItem('initialState', JSON.stringify(newRemove));
      return newRemove;
    default:
      throw new Error();
  }
};

function App() {
  console.log(localStorage.getItem('initialState'));
  const initialState = localStorage.getItem('initialState');
  const initialStateObj = JSON.parse(initialState);
  const [state, dispatch] = useReducer(reducer, initialStateObj || data);
  return (
    <Context.Provider value={{ data: state, dispatch: dispatch }}>
      <BrowserRouter>
        <Navbar routes={ROUTES} />
        <Switch>
          <Route exact path="/haus/discover" component={() => <Discover />} />
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
