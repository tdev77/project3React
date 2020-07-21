import React from "react";
const Login = () => {
return (





<div>



<div className="grid-container">
  <div className="grid-x">
    <div className="cell medium-6">
    <div className="container">
    <br />
        <div className="jumbotron">
  
        <div className="translucent-form-overlay">
          
        <form className="signup">
          <h3 className="text-center">Sign Up Here</h3>
          <div className="row columns">
            <label>Email Address
              <input name="email" className="form-control" id="SUemail-input" type="email" placeholder="Email" />
            </label> 
          </div>
          <div className="row columns">
            <label>Password
              <input name="password" className="form-control" id="SUpassword-input" type="password" placeholder="Password" />
            </label> 
          </div>
          <button className="warning button expanded search-button" type="submit">Sign Up!</button>
        </form>
      </div>
    </div> 
    <div className="cell medium-6">
    <div className="container">
        <div className="jumbotron">
      <div className="translucent-form-overlay">
        <form className="login">
          <h3 className="text-center">Login Here</h3>
          <div className="row columns">
            <label>Email Address
              <input name="email" className="form-control" id="LIemail-input" type="email" placeholder="Email" />
            </label> 
          </div>
          <div className="row columns">
            <label>Password
              <input name="password" className="form-control" id="LIpassword-input" type="password" placeholder="Password" />
            </label> 
          </div>
          <button className="primary button expanded search-button" type="submit">Login!</button>
        </form>
      </div>
    </div>
  </div>
</div>
</div>
</div>
</div>
</div></div>
)



}
export default Login;
