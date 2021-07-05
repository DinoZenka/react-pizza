import { Header } from './components'
import { Home, Basket } from './pages';
import { Route } from 'react-router-dom';
import React from 'react';

function App() {

  return (
    <div className="px-4">
      <div className="max-w-screen-xl px-3 py-4 mx-auto bg-white rounded-lg sm-480:px-8">
        <Header />
        <Route exact path='/react_pizza' component={Home} />
        <Route exact path='/basket' component={Basket} />
      </div>
    </div>
  );
}

export default App;
