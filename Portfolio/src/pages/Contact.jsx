import React from "react";
import '../style.css'

function Contact(){

     return(
        <div id="Contact" className="contact">
            <h1>Contact</h1>
            <div>
               
            </div>
            <div className="form">
               <label > Full Name</label>
               <input type="text" placeholder="Enter your name" />
            </div>
            <div className="form">
               <label > Email</label>
               <input type="email" placeholder="Enter your email" />
            </div>
            <div className="form">
               <label > phone Number</label>
               <input type="text" placeholder="Enter your name" />
            </div>
            <div className="form">
               <label > Message</label>
              <textarea ></textarea>
            </div>
              <button className="button">Send</button>


</div>
     )
}

export default Contact;