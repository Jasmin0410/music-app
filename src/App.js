import React, { Component } from 'react';
import { BrowserRouter as Router } from "react-router-dom"

import './style/style.scss';
import './style/loading.css';
import './style/reset.css';

import { Header } from './Component/Header';
import Content from './Component/Content'
import Footer from './Component/Footer';


class App extends Component {
  render() {
    return (
      <div className="container">
        <Router>
          <Header />
          <Content />
        </Router>
        <Footer />
      </div>
    );
  }

}

export default App;
