import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Navbar from 'components/Navbar';
import Hero from 'components/Hero';
import Discover from 'components/Discover';
import Footer from 'components/Footer';
import Auth from 'components/Auth';

import 'assets/styles/app.scss';

const ROUTES = [
  { name: 'Home', url: '/haus/home', cta: false },
  { name: 'Discover', url: '/haus/discover', cta: false },
  { name: 'Login', url: '/haus/login', cta: true }
];

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar routes={ROUTES} />
        <Switch>
          <Route exact path="/haus/discover" component={() => <Discover />} />
          <Route exact path="/haus/login" component={() => <Auth />} />
          <Route path="/" component={() => <Hero />} />
        </Switch>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
