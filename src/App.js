
import React from 'react';
import Navbar from './components/Navbar';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import Products from './components/Products';


function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Route path="/ship">
          <Products/>
        </Route>
      </Router>
    </div>
  );
}

export default App;
