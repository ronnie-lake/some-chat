import { BrowserRouter, Route } from "react-router-dom";
import React from 'react';
import logo from './logo.svg';
import './App.scss';
import Chat from './chat/chat';
import Login from './login/login';

function App() {
  return (
    <div className="App">
      <div className="header">
        <h1 className="header__caption">some chat</h1>
      </div>
       <BrowserRouter>
        <div className='main'>
          <Route exact path="/login" component={Login} />
          <Route exact path="/" component={Chat} />
        </div>
       </BrowserRouter>
      <footer className="footer"></footer>
    </div>
  );
}

export default App;
