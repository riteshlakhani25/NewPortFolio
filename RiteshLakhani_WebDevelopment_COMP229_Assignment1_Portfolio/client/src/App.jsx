import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
//import { ThemeProvider } from '@material-ui/styles';
import MainRouter from '../MainRouter';
//import Contact from './contact'
//import theme from '../theme';
//import { hot } from 'react-hot-loader'
function RiteshComponent() {
    return (
    
    <a href="https://www.linkedin.com/in/ritesh-lakhani-pm-sm/">My Portfolio</a>
     );
  }


  const App = () => {
 return (
 <Router>
 
 <MainRouter />

 </Router>
 );
};
export default App;

/*








//import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
//import { ThemeProvider } from '@material-ui/styles';
import React from 'react';
import { Link } from 'react-router-dom';
//import MainRouter from '../MainRouter';
//import Contact from './contact'
//import React from 'react'
import { Route, Routes } from 'react-router-dom'
//import Home from './Home'
import About from './about'
import Contact from './contact'
import Education from './education'
import Project from './project'
//import Layout from './components/layout'
//import theme from '../theme';
//import { hot } from 'react-hot-loader'
/*const App = () => {
 return (
 <Router>
 
 <MainRouter />

 </Router>
 );
};
export default App;
*/


  
/*  export default function MyApp() {
    return (
      <>
        <h1>Ritesh Lakhani</h1>
        <tex><RiteshComponent /> <br /></tex>
        <nav>
        <a href="/">Home</a> | <a href="../src/about">About</a> | <a href="../src/education">Education</a>| <a href="../src/project">Project</a>| <a href="../src/contact">Contact</a>
        </nav>
      <text>
        <br />
      Hello This is My First REACT JS application
  
      <br/>
         <br/>Project Manager - SAFe Certified RTE, Advance Scrum Master and Professional Scrum Master. Worked in almost all phases of SDLC of IT projects in 20 years of experience. Performed roles like Developer, Tech Lead, Project Manager, Release Manager and Scrum Master.
  
       
  
      </text>
           
  
       
      </>
            
      
    );
  }
  
//export default MyApp;  
*/