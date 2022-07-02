import React from "react"
import Navbar from "./components/Navbar"
import Main from "./components/Main"

export default function App() {
    const [darkMode, setDarkMode] = React.useState("")
    
    function toggleDarkMode(){
        setDarkMode(prevState=>{
            return prevState == "dark" ? prevState = "" : prevState = "dark"
        })
       
    }
   
    return (
        <div className="container">
            <Navbar 
            darkMode={darkMode}
            toggleDarkMode={()=>toggleDarkMode()}
            />
            <Main 
            darkMode={darkMode}
            />
        </div>
    )
}