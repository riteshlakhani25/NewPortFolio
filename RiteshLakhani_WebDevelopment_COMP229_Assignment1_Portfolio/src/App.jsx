import React from 'react';
//import { Link } from 'react-router-dom';
/*export default function Layout() {
 return (
 <>


 <h1>My Portfolio</h1>
 
 <nav>
    
 <Link to="/">Home</Link> | <Link to="/about">About</Link> | <Link to="/education">Education</Link>| <Link to="/project">Project</Link>| <Link to="/contact">Contact</Link>
 </nav>
<br/>


TEST
 <hr />
 
 </>
 
 );
}
*/
//import { formatDiagnosticsWithColorAndContext } from "typescript";

function RiteshComponent() {
  return (
  
  <a href="https://www.linkedin.com/in/ritesh-lakhani-pm-sm/">My Portfolio</a>
   );
}

export default function MyApp() {
  return (
    <>
      <h1>Ritesh Lakhani</h1>
      
      <RiteshComponent />
      
    
    <a href="/">Home</a> | <a href="/about">About</a> | <a href="/education">Education</a>| <a href="/project">Project</a>| <a href="/contact">Contact</a>
    
    </>
          
    
  );
}

