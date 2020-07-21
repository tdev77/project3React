import React, { useState } from "react";
import axios from "axios";
const Login = ({ history }) => {
  const [data, setData] = useState({});
  const [signUpData, setSignUpData] = useState({});
  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSignUpChange = (e) => {
    setSignUpData({ ...signUpData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
   
    try {
      const res = await axios.post("/api/login", data);
      console.log(res);
      handleRedirect(res.data);
    } catch (err) {
      alert("wWong User Name or Password! ");
    }
 
  };

  const handleSignUpSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("/api/signup", signUpData);
      console.log(res);
      handleRedirect(res.data);
    } catch (err) {
      alert("wWong User Name or Password! ");
    }
  };
  const handleRedirect = (data) => {
    if (data.email) {
      history.push("/");
    } else alert("wWong User Name or Password! ");
  };

  return (
    <div>
      <div className="grid-container">
        <div className="grid-x">
          <div className="cell medium-6">
            <div className="container">
              <br />
              <div className="jumbotron">
                <div className="translucent-form-overlay">
                  <form onSubmit={handleSignUpSubmit} className="signup">
                    <h3 className="text-center">Sign Up Here</h3>
                    <div className="row columns">
                      <label>
                        Email Address
                        <input
                          name="email"
                          value={signUpData.email}
                          onChange={handleSignUpChange}
                          className="form-control"
                          id="SUemail-input"
                          type="email"
                          placeholder="Email"
                        />
                      </label>
                    </div>
                    <div className="row columns">
                      <label>
                        Password
                        <input
                          name="password"
                          value={signUpData.password}
                          onChange={handleSignUpChange}
                          className="form-control"
                          id="SUpassword-input"
                          type="password"
                          placeholder="Password"
                        />
                      </label>
                    </div>
                    <button
                      className="warning button expanded search-button"
                      type="submit"
                    >
                      Sign Up!
                    </button>
                  </form>
                </div>
              </div>
              <div className="cell medium-6">
                <div className="container">
                  <div className="jumbotron">
                    <div className="translucent-form-overlay">
                      <form onSubmit={handleSubmit} className="login">
                        <h3 className="text-center">Login Here</h3>
                        <div className="row columns">
                          <label>
                            Email Address
                            <input
                              name="email"
                              value={data.email}
                              onChange={handleChange}
                              className="form-control"
                              id="LIemail-input"
                              type="email"
                              placeholder="Email"
                            />
                          </label>
                        </div>
                        <div className="row columns">
                          <label>
                            Password
                            <input
                              name="password"
                              value={data.password}
                              onChange={handleChange}
                              className="form-control"
                              id="LIpassword-input"
                              type="password"
                              placeholder="Password"
                            />
                          </label>
                        </div>
                        <button
                          className="primary button expanded search-button"
                          type="submit"
                        >
                          Login!
                        </button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Login;
