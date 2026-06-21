import logo from "../assets/logo.png"

function Navbar(){


return (

<nav className="nav">


<div className="logo">

<img src={logo}></img>

</div>


<div className="links">

{/* <span>Home</span>
<span>General Production</span>
<span>Feature</span>
<span>Community</span> */}

<span className="nav-link">Home</span>
<span className="nav-link">General Production</span>
<span className="nav-link">Feature</span>
<span className="nav-link">Community</span>


</div>


<button className="nav-btn">
Login
</button>


</nav>

)

}


export default Navbar;