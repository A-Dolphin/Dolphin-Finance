import React, {useState} from 'react'
import HeroSection from '../components/HeroSection/HeroSection'
import Navbar from '../components/Navbar/Navbar'
import Sidebar from '../components/Sidebar/Sidebar'
import InfoSection from '../components/InfoSection/InfoSection'
import Services from '../components/Services/Services'
import Footer from '../components/Footer/Footer'
import { homeObjOne, homeObjTwo, homeObjThree } from '../components/InfoSection/Config'

// Function that opens/closes responsive sidebar menu
const Home = () => {
    const [isOpen, setIsOpen] = useState(false)
    
    const toggle = () => {
        setIsOpen(!isOpen)
    }



    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle}/> 
            <Navbar toggle={toggle}/>
            <HeroSection/>
            <InfoSection {...homeObjOne}/>
            <InfoSection {...homeObjTwo}/>
            <Services/>
            <InfoSection {...homeObjThree}/>
            <Footer/>
        </>
    )
}

export default Home
