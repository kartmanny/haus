import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Discover from './components/Discover/Discover';
import Footer from './components/Footer/Footer';
import './assets/styles/app.scss';

const ROUTES = [
  { name: 'Home', url: 'haus/home' },
  { name: 'Login', url: 'haus/login' },
  { name: 'Discover', url: 'haus/discover' }
];

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar items={ROUTES} />
        <Switch>
          <Route exact path="/haus/discover" component={() => <Discover />} />
          <Route
            exact
            path="/haus/login"
            component={() => (
              <h1
                style={{
                  fontWeight: 300,
                  fontSize: '4rem',
                  textAlign: 'center'
                }}
              >
                Login & Register Page
              </h1>
            )}
          />
          <Route path="/" component={() => <Hero />} />
        </Switch>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
