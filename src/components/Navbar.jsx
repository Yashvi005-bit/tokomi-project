import logo from "../assets/logo.png"
import { useState } from "react";

function Navbar(){
const [open, setOpen] = useState(false);

return (

<nav className="nav">


<div className="logo">

<img src={logo}></img>

</div>


<div className={`links ${open ? "active" : ""}`}>

<span className="nav-link">Home</span>
<span className="nav-link">General Production</span>
<span className="nav-link">Feature</span>
<span className="nav-link">Community</span>


</div>


<button className="nav-btn">
Login
</button>

 <button className="hamburger" onClick={() => setOpen(!open)}> ☰ </button>

</nav>

)

}


export default Navbar;