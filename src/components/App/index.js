// == Import npm
import React from 'react';

// == Import style
import './styles.scss';

// == Import components
import Header from 'src/components/Header';
import User from 'src/components/User';

// == Composant
const App = () => (
  <div className="app">
    <Header />
    <User />
    {/* <Product />
    <Footer /> */}
  </div>
);

// == Export
export default App;
