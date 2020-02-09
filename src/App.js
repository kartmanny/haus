import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Discover from './components/Discover/Discover';
import Footer from './components/Footer/Footer';
import Text from './components/Text/Text';

import './assets/styles/app.scss';

const ROUTES = [
  { name: 'Home', url: 'haus/home', cta: false },
  { name: 'Discover', url: 'haus/discover', cta: false },
  { name: 'Login', url: 'haus/login', cta: true }
];

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar routes={ROUTES} />
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
                <Text type="title1">Login & Register Page</Text>
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
