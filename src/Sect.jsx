import { useState } from "react";
import SignIn from "./SignSection";

function Section() {
  const [ toggle,setToggle] =useState(false)
  return (
    <>
    {toggle?<SignIn/>:
      <div id="container" >
        <div id="Heading">
          <h1>Registration-Form</h1>
        </div>

        <div id="form-Detials">
            <h1>Basics-Detials</h1>
          <form action="">
            <input type="text" placeholder="Enter Your Name" required/><br />
            <input type="text" placeholder="Enter Your Father Name" required/><br />
            <input type="Email" placeholder="Enter Your E-mail"/><br />
            <input type="password" placeholder="Enter Your Password"required /><br />
            <input type="Number" placeholder="Enter Your Number" required/><br />
            <input type="Address" placeholder="Enter Your Address" required/><br />

            <button id="submitBtn">Submit</button>
            <button id="LoginBtn" onClick={()=>setToggle(true)}>Login</button>
          </form>
        </div>
      </div>}
    </>
  );
}
export default Section;

