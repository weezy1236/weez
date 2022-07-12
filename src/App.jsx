import { useState, useEffect } from 'react'
import Header from './component/Navbar'
import Body from './component/Body'
import Footer from './component/footer'
import Modal from './component/modal'
import Loader from './component/loader'


// import logo from './logo.svg'
// import './App.css'

function App() {
  const [show, setShow] = useState(null);
  const [name, setName] = useState()
  const [showLoad, setShowLoad] = useState(null)
  const [timer, setTimer] = useState(false)

  useEffect(()=>{
    const timer = setTimeout(() => {
      setShowLoad(false)
    }, 10000);
    return () => clearTimeout(timer);
    
  },[showLoad === true])



  return (
    <div className='flex flex-col align-center w-full h-full' >
      <Header/>
      <Body show={show} setName={setName} setShow={setShow}/>
      {show && <Modal show={show} name={name} setShowLoad={setShowLoad} setShow={setShow}/>}
      {showLoad && <Loader/>}
      <Footer/>
     
    </div>
  )
}

export default App
