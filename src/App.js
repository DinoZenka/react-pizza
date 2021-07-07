import { Header } from './components'
import { Home, Basket } from './pages';
import { Route } from 'react-router-dom';
import React from 'react';
import './index.scss';

function App() {

  return (
    <div className="content-container">
      <div className="content">
        <Header />
        <Route exact path='/react_pizza' component={Home} />
        <Route exact path='/basket' component={Basket} />
      </div>
    </div>
  );
}

export default App;
