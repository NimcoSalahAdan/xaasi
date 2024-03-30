import React from "react";
import '../style.css'
import myimage from '../assets/2.png'
import img  from '../assets/3.jpeg'
import myig from '../assets/4.jpeg'


function Project(){
    return(
          

        
        <div id="Projects" className="project">
                      <h1>Project</h1>     
        
        
         <div  className="divs">
         <div className="project-sec1">
           <img src={myimage} alt="" />
            </div>
        <div className="project-sec2">
        <img src={img} alt="" />
        </div>
        <div className="project-sec3">
        <img src={myig} alt="" />
        </div>
            
        </div>             
        </div>  
            
    )
}

export  default Project;
