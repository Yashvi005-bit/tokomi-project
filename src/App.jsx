import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Needs from "./components/Needs";
import Showcase from "./components/insights";
import CTA from "./components/CTA";
import Footer from "./components/Footer";
import Trusted from "./components/Trusted";
import Insights from "./components/insights";
import Reveal from "./components/Reveal"

// import "./style.css";


function App(){

return (

<div className="page">

<div className="website">


<Navbar/>

<Reveal>
<Hero/>
</Reveal>

<Reveal>
<Trusted/>
</Reveal>

<Reveal delay={0.1}>
  <Features/>
</Reveal>

<Reveal delay={0.1}>
  <Needs/>
</Reveal>

<Reveal delay={0.1}>
  <Insights/>
</Reveal>

<Reveal delay={0.1}>
  <CTA/>
</Reveal>

<Footer/>


</div>

</div>

)

}


export default App;



