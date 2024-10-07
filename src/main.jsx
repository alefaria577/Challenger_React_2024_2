import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Home from './routes/Home.jsx'
import Sobre from './routes/Sobre.jsx'
import Circuitos from './routes/Circuitos.jsx'
import Desenvolvedores from './routes/Desenvolvedores.jsx'
import Login from './routes/Login.jsx'
import Register from './routes/Register.jsx'
import {createBrowserRouter,RouterProvider} from 'react-router-dom'



  
  const router = createBrowserRouter([
    {
      //Elemento Pai
      path:'/Challenger_web',element:<App/>,

  
      //Elemento Filho
      children:[
        {path:'/Challenger_web', element:<Home/>},
        {path:'/Challenger_web/Circuitos', element:<Circuitos/>},
        {path:'/Challenger_web/Desenvolvedores', element:<Desenvolvedores/>},
        {path:'/Challenger_web/Login', element:<Login/>},
        {path:'/Challenger_web/Sobre', element:<Sobre/>},
        {path:'/Challenger_web/Register', element:<Register/>},
      ]
  
    }
  ])
  
  
  createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
