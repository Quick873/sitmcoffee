import Root from './components/root/Root';
import './App.css';
import React from 'react';
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import About from './components/about/About';
import Menu from './components/menu/Menu';
import Order from './components/order/Order';
import Contact from './components/contact/Contact';

const router = createBrowserRouter(createRoutesFromElements(
  <Route path='/' element={ <Root/> }> 
    <Route path='about' element={ <About/> }/>
    <Route path='menu' element={ <Menu/> } />
    <Route path='order' element={ <Order/> } />
    <Route path='contact' element={ <Contact/> } />
  </Route>
));

function App() {
  return (
    <RouterProvider router={router}/>
  );
}

export default App;
