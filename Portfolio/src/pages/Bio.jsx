import React from "react";
import '../style.css'
import myimage from '../assets/1.jpg'


function Bio(){
    return(
        <div id="Bio" className="Bio">
        
          <div className="bioimg">
    <img src={myimage} alt="" />
          </div>
          <div className="biotext">
          <h1> About me </h1>
          <h2>I am web developer</h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam quo possimus laborum voluptates non laboriosam, 
            atque et voluptatum aspernatur asperiores facere. At sapiente cumque saepe dicta. Cum odit magni magnam adipisci 
            iusto eaque aliquid facere autem sequi, assumenda dolor expedita odio obcaecati nostrum molestias quae a accusamus 
            itaque reprehenderit mollitia maxime fugit distinctio iure. Dolore, sequi. Laudantium assumenda perspiciatis veritatis 
            aliquid consectetur nam laborum et, adipisci officiis omnis,
             hic fuga corporis facere aperiam velit provident commodi modi expedita recusandae numquam.
               </p>
   </div>
   </div>)
}

export default Bio;
    