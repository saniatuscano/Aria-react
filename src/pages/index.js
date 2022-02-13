import React,{useState} from 'react'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import First from '../components/First'

import { homeObj1,homeObj2,homeObj3 } from '../components/First/Data'
import Services from '../components/Services'
import Footer from '../components/Footer'

const Home = () => {
    const [isOpen,setIsOpen]=useState(false)

    const toggle=()=>{
        setIsOpen(!isOpen)
    }
  return (
    <>
        <Sidebar isOpen={isOpen} toggle={toggle} />
        <Navbar toggle={toggle} />
        <First {...homeObj1} />
        <First {...homeObj2} />
        <Services />
        <First {...homeObj3} />
        <Footer />
    </>
  )
}

export default Home