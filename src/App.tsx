import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import store  from './store/store';
import Header from './components/Header';
import Home from './components/Home';
import NewItem from './components/NewItem';

const App = () => {
  return (
    <Provider store={store}>
      <Home />
      <NewItem />
      <Header />
    </Provider>
  );
};


export default App;
