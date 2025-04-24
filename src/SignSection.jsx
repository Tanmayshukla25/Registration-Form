function SignIn() {
    
    return(
        <>
         <div id="container" >
        <div id="Heading">
          <h1>Sign-In</h1>
        </div>

        <div id="form-Detials">
            <h1>E-mail & Password</h1>
          <form action="">
            
            <input type="Email" placeholder="Enter Your E-mail" /><br />
            <input type="Password" placeholder="Enter Your Password"  /><br />
            <button id="submitBtn">Submit</button>
            <button id="LoginBtn">Register</button>
          </form>
        </div>
      </div>
        
        </>
    )
}
export default SignIn 