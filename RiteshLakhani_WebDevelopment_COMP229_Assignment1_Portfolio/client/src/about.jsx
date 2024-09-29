import BBG from '../src/assets/BBG.jfif';
//import ux from '../src/assets/ux.png';
//import web from '../src/assets/web.png';
//import app from '../src/assets/app.png';
import rte from '../src/assets/RTE.png';
import sasm from '../src/assets/SASM.png';
import psm1 from '../src/assets/PSM1.png';
import hire from '../src/assets/hire.jpg';
import { Link } from 'react-router-dom';
import '../src/index.css'
import '../src/about.css'
export default function About() {
     return <>
     
     <section id="skill">
         
          <span className="skillTitle">Profession</span>
          <span className="skillDesc">I am a Project Manager Scrum Master. I have secured SAFe Certified RTE, Professional Scrum Master 1, SAFe Certified Advance Scrum Master certificates.</span> 
          <div className="skillBar">
               <img src={rte} alt="UIDesign" className="skillBarImg" />
               <div className="skillBarText">
               <h2>SAFe RTE</h2>
               <p>SAFe certified Release Train Engineer</p>
               </div>

          </div>
          
          <div className="skillBar">
               <img src={sasm} alt="WebDesign" className="skillBarImg" />
               <div className="skillBarText">
               <h2>SAFe SASM</h2>
               <p>SAFe Certified Advance Scrum Master</p>
               </div>

          </div>

          <div className="skillBar">
               <img src={psm1} alt="AppDesign" className="skillBarImg" />
               <div className="skillBarText">
               <h2>PSM1</h2>
               <p>Professional Scrum Master 1</p>
               </div>

          </div>
          
                  
     </section>
    

     </>
    }
    