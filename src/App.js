import React, { Component } from 'react';
import { BrowserRouter } from "react-router-dom"

import './style/style.scss';
import './style/loading.css';
import './style/reset.css';

import { Header } from './Component/Header';
import Content from './Component/Content'
import Footer from './Component/Footer';
import * as process from './env';


class App extends Component {
  render() {
    return (
      <div className="container">
        <BrowserRouter basename={process.REACT_APP_PUBLIC_URL}>
          <Header />
          <Content />
        </BrowserRouter>
        <Footer />
      </div>
    );
  }

}

export default App;
