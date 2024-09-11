import { useState } from 'react'
import Home from './components/Home/Home'
import Layout from './Layout'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import About from './components/About/About'
import Contact from './components/Contact/Contact'
import Github from './components/Github/Github'

function App() {
  const route = createBrowserRouter([
    {
      path:"/",
      element: <Layout/>,
      children:[
        {
          path:"",
          element:<Home/>
        },
        {
          path:"about",
          element:<About/>
        },
        {
          path:"contact",
          element:<Contact/>
        },
        {
          path:"github",
          element:<Github/>
        }
      ]
    }
  ])
  return (
    <>
      <RouterProvider router={route}/>       
    </>
  )
}

export default App
