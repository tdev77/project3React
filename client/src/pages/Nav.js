import React from "react";
import { Link } from "react-router-dom";
const Nav = () => {return ( 
<nav
className="navbar navbar-expand-md"
style={{ "background-color": "#390099" }}
>
<img src="LEISURE.png" alt="" width={85} height={85} />{" "}
<button
  className="navbar-toggler"
  type="button"
  data-toggle="collapse"
  data-target="#navbarCollapse"
>
  {" "}
</button>
<div id="navbarCollapse" className="collapse navbar-collapse">
  <div className="navbar-nav">
    <Link className="nav-item nav-link active" to="/">
      Home
    </Link>{" "}
    <Link className="nav-item nav-link" to="/music">
      Music
    </Link>{" "}
    <Link className="nav-item nav-link" to="/movies">
      Movies
    </Link>{" "}
    <Link className="nav-item nav-link" to="/books">
      Books
    </Link>{" "}
    <Link className="nav-item nav-link" to="/community">
      Community
    </Link>{" "}
    <Link className="nav-item nav-link" to="/contact">
      Contact
    </Link>
    <Link className="nav-item nav-link" to="/login">
      Login
    </Link>
  </div>
  <form className="form-inline ml-auto">
    <input
      className="form-control mr-sm-2"
      type="text"
      placeholder="Search"
    />{" "}
    <button className="btn btn-outline-light" type="submit">
      Search
    </button>
  </form>

</div>
</nav>
)}

export default Nav;