import BBG from '../src/assets/Ritz.jpeg';
import hire from '../src/assets/hire.jpg';
import { Link } from 'react-router-dom';
import '../src/index.css'
function RiteshComponent() {
     return (
     
     <a href="https://www.linkedin.com/in/ritesh-lakhani-pm-sm/">My Portfolio</a>
      );
   }
 
 
export default function Home() {
     return <>
     <RiteshComponent />
     <section id="intro">
          <div className="introContent">
          <span className="hello">Hello,</span><br/>
          <span className="introText">This is <span className="introName">Ritesh Lakhani</span> 
          <img src={BBG} alt="profile" className="bbg" width="250" height="250" align="center" />
          <br/>Project Manager</span>
          <p className="introPara">I am a Project Manager and Scrum Master with an IT company</p>
          
          </div>
          
     </section>
    

     </>
     }
    