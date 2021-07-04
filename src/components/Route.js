//import React from 'react'; no need to import react cos no jsx
// import { Route } from 'workbox-routing';

const Route = ({ path, children }) => {
  return window.location.pathname === path ? children : null;
}

export default Route;