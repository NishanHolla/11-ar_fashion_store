import React from "react";

function Navbar(){
    return(
    <div>
    <nav class="navbar navbar-expand-lg" style={{backgroundColor:"pink", height:"20px"}}>
        <div>
            <a class="navbar-brand" style={{color:"red", fontSize:"15px", fontWeight:"500", position:"relative", left:"650px"}} href="#">Free shipping for orders above Rs.999</a> 
        </div>
    </nav>
    <nav class="navbar navbar-expand-lg">
      <a class="navbar-brand"  style={{paddingLeft:"10px"}} href="#">AR Boutique</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <a class="nav-link" href="#">NEW IN</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">DRESSES</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">JEWELERY</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">SHIRTS</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">SUNGLASSES</a>
          </li>
        </ul>
        <form class="form my-2 my-lg-0">
          <input style={{position:"absolute",right:"125px", top:"10px" ,width:"250px"}} class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
          <a style={{position:"absolute", right:"30px", top:"10px"}} class="btn btn-outline-success my-2 my-sm-0" href="">Checkout</a>
        </form>
        <a style={{border:"2px solid black", padding:"10px", borderRadius:"10px", textDecoration:"none"}} href="http://localhost:5174/">Prompt Designing</a>
      </div>
    </nav>
    </div>
    );
}

export default Navbar;