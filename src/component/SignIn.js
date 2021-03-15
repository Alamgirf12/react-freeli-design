import React from 'react'
import { Link } from 'react-router-dom'



function SignIn() {
  return (
    <div className="loground">
      <br/><br/>
      <center><img src="https://bd.freeli.io/images/Workfreeli_logo_full_connect.png" className="image" alt="" /></center>
<br/>
      
        <div className="Hello"><b>Hello! Welcome back.</b></div>
        <div className="Sign">Sign into your account here.</div>
        
         
<div className="forming">
    <form>
        <div className="form-group">
          <label for="exampleInputEmail1">Email address</label>
          <input type="email" className="form-control" placeholder="example@workfreeli.com" aria-describedby="emailHelp"/>
        </div>
        <div class="form-group">
          <label for="exampleInputPassword1">Password</label>
          <input type="password" class="form-control" placeholder="Enter the Password"/>
        </div>

        <div class="form-group form-check">
          <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
          <label class="form-check-label" for="exampleCheck1">Remember me</label>
        </div>
        
           

          <Link to="/connect"><button type="submit" class="btn btn-block"><b>Sign In</b></button></Link>

    </form>
</div>
          

    </div>
  );
} 

export default SignIn