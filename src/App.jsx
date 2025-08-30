
import './App.css'
import { useEffect, useState } from 'react';
import Navbar from './Components/Navbar'
import Main from './Components/Main'

import {Route, Router, Routes} from 'react-router-dom';
import About from './Components/About';
import Project from './Components/Project';

import Admin from './Components/Admin';
import Vlog from './Components/Vlog';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { Helmet } from 'react-helmet';



function App() {
  const [toggle, setToggle] = useState("white");
  
    
  let mode = ()=>{
      if(toggle == "black"){
          setToggle("white");
          localStorage.setItem("mode1", "white");
          
      }
      else{
        setToggle("black");
        localStorage.setItem("mode1", "black");
      }
  }
  let mode1 = localStorage.getItem("mode1");
  useEffect(()=>{
   
    if(mode1 == "black"){
      setToggle("black");
      document.querySelector('.form-check-input').checked = true;
    }
    else{
      setToggle("white")
      document.querySelector('.form-check-input').checked = false;
    }

  },[mode1])
 
// Create the object URL

  
  

  return (
    <>
  
    <div className= '  maincontainer h-full'  style={{backgroundColor: toggle == 'white'?'white':'#0f172a', color: toggle == 'white'?'black':'white'}}>
        
    <Navbar Profile1={toggle} mode={mode}/>
    <Routes>
      <Route path ='/' element = {<Main Profile1 = {toggle}/>}></Route>
      <Route path ='/About' element = {<About Profile1 = {toggle}/>} ></Route>
      <Route path ='/Project' element = {<Project Profile1 = {toggle}/>} ></Route>
      <Route path ='/Admin' element = {<Admin/>} ></Route>
      <Route path ='/Vlog' element = {<Vlog Profile1={toggle}/>} ></Route>
    </Routes>
   

   
   
    

    </div>
    
    

  
    </>
  )
}

export default App
