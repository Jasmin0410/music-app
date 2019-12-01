import React, { Component } from 'react';
import './style/style.css';
import './style/reset.css';

import { Header } from './Component/Header';
import { Content } from './Component/Content'
import Footer from './Component/Footer';


class App extends Component {

  render() {
    return (
      <div className="container">
        <Header />
        <Content />
        <Footer />
      </div>
    );
  }

}

export default App;
