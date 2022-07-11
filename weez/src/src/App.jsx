import { useState } from 'react'
import Header from './component/Navbar'
import Body from './component/Body'
import Footer from './component/footer'
import Modal from './component/modal'

// import logo from './logo.svg'
// import './App.css'

function App() {
  const [show, setShow] = useState(null);
  const [name, setName] = useState()



  return (
    <div className='' >
      <Header/>
      <Body show={show} setName={setName} setShow={setShow}/>
      {show && <Modal show={show} name={name} setShow={setShow}/>}
      <Footer/>

    </div>
  )
}

export default App
