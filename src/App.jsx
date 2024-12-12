import React from 'react'
import Home from './Components/Home'
import Nav from './Components/Nav'
import About from './Components/About'
import Contact from './Components/Contact'
import Work from './Components/Work'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import {Outlet } from 'react-router-dom'
import Tablee from './Components/Tablee'


const router = createBrowserRouter([{
  path: '/',
  element: <Nav></Nav>,
  children: [{
    path: '/',
    element:<Home></Home>,
  },
  {
    path: '/nav/about',
    element: <About></About>,
  },
  {
    path: '/nav/contact',
    element: <Contact></Contact>,
  },
  {
    path: '/nav/work',
    element: <Work></Work>,
  },
  {
    path: '/nav/table',
    element: <Tablee></Tablee>,
  }]
}])

const App = () => {
  return (
    <>
        <RouterProvider router={router}> </RouterProvider>
        <Outlet></Outlet>
    </>
  )
}

export default App