import React, { useState } from 'react';
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
  { name: 'Login', url: '/haus/login', cta: true }
];

function App() {
  const [state, setState] = useState(data);
  return (
    <Context.Provider value={{ data: state, setData: setState }}>
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
