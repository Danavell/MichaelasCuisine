import React, { useEffect } from 'react';
import './App.css'

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Carousel from './Containers/Carousel/carousel'
import Navbar from './Components/Navbar/navbar'
import Hero from './Components/Hero/hero'
import About from './Components/About/about'
import Contact from './Components/Contact/contact'
import Product from './Components/Product/product'

import { useSelector } from 'react-redux'

function App() {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const desserts = useSelector(state => state.desserts)
  const cheeses = useSelector(state => state.cheeses)

  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route path="/product/:productId" exact component={Product} />
          <Route path="/" exact>
            <Hero />
            <About />
            <Carousel
              title={'Desserts'}
              data={desserts}
            />
            <Carousel
              title={'Cheeses'}
              data={cheeses}
            />
          </Route>
        </Switch>
        <Contact />
      </div>
    </Router>
  );
}

export default App;
