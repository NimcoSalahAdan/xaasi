import React from "react";
import '../style.css'
import myimage from '../assets/1.jpg'

const NAME= "Nimca Salah"
function body(){

     return(
        <div className="body">
<div className="body-text">
<img src={myimage} alt="" />
<h1>Hi I'm {NAME}</h1>
<p> I am fullstack Developer
     
      {/* Lorem, ipsum dolor sit amet consectetur adipisicing elit.  <br /> 
Porro, magnam pariatur.Autem non quaerat modi enim accusantium? Id, ratione, <br /> */}
  </p>
<button> Contact</button>
</div>

</div>
     )
}

export default body;