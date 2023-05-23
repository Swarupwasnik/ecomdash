import React from "react";
import { Link, useNavigate } from "react-router-dom";
const Nav = () => {

  const navigate = useNavigate();
  const auth = localStorage.getItem("user");
  const logout = () => {
    localStorage.clear();
    navigate("/signup");
  };
// Search



  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <Link class="navbar-brand" to="/">
        <img src="https://images.ctfassets.net/0nm5vlv2ad7a/6naVcO5MsOWXuYiol4l43R/9170af8985a9af2f9218cb02806eecbc/benefits-of-react.png" style={{height:"60px",background:"white"}} alt="sheuie"  />
        </Link>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          {auth ? (
            <ul class="navbar-nav mr-auto">
              <li class="nav-item active">
                <Link class="nav-link" to="/products">
                  Products <span class="sr-only">(current)</span>
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/add">
                  Add Product
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/update/:id">
                  Update Product
                </Link>
              </li>

              <li class="nav-item">
                <Link class="nav-link" to="/profile">
                  profile
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" onClick={logout} to="/signup">
                  Logout({JSON.parse(auth).name})
                </Link>
              </li>
            </ul>
          ) : (
            <ul className="navbar-nav mr-auto form-inline my-2 my-lg-0">
                  <li class="nav-item active">
                <Link class="nav-link" to="/signup">
                  Signup
                </Link>
              </li>
              <li class="nav-item active">
                <Link class="nav-link" to="/login">
                  Login
                </Link>
              </li>
         
            </ul>
          )}

          <form class="form-inline my-2 my-lg-0">
            <input
              class="form-control mr-sm-2"
              type="text"
              placeholder="Search"
              aria-label="Search"
              // onChange={searchHandle}

            />
            <button class="btn btn-outline-success my-2 my-sm-0" type="submit">
              Search
            </button>
          </form>
        </div>
      </nav>
    </div>
  );
};
export default Nav;
