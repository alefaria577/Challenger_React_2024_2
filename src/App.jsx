import Footer from "./components/Footer"
import Header from "./components/Header"
import {Outlet} from 'react-router-dom'
import './css/Global.css'




function App() {


  return (
    <>
      
    
    <Header/>
    <div className="container">
    <Outlet/>
    </div>
    <Footer/>



    </>
  )
}

export default App
