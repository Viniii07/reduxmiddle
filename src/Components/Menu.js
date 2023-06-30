import React from 'react';
import { HashRouter, Link, Route, Routes } from 'react-router-dom'


export const Menu = () => {
  return (
    <HashRouter>
    <div id="menu">      
      <Link to="/About">About</Link>
      <Link to="/Home">Home</Link>
    </div>
    <Routes>
      <Route path="/About"/>
      <Route path="/Home"/>
    </Routes>
    </HashRouter> 

  )
}
