import React from "react";
import "../App.css";
function Footer(){


    return(

<>


<section class="position">
  <footer class="text-center text-white" style={{backgroundColor:"#0a4275"}}>
    <div class="container p-4 pb-0">
      <section class="">
        <p class="d-flex justify-content-center align-items-center">
          <span class="me-3">Register for free</span>
          <button type="button" class="btn btn-outline-light btn-rounded">
            Sign up!
          </button>
        </p>
      </section>
    </div>

    <div class="text-center p-3" style={{backgroundcolor:"green"}}>
      © 2020 Copyright:
      <a class="text-white" href="https://mdbootstrap.com/">MDBootstrap.com</a>
    </div>
  </footer>
</section>


</>


    )
}
export default Footer;