import dashboard from "../assets/dashboard.png"

function Hero(){


return (

<section className="hero">


<div>

<h1>
Sales team,<br/>
from good to<br/>
extraordinary
</h1>


<p>
Track leads, get accurate forecasts,
and focus on what's important.
</p>


<button>
Schedule Demo
</button>


</div>



<img

src={dashboard}
 />


</section>


)

}


export default Hero;