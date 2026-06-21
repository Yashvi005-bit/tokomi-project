
import automation from "../assets/automation.png";
import scoring from "../assets/scoring.png";
import entry from "../assets/entry.png";


function Needs(){


return (

<section className="needs">


<h2>
Many needs, one application.
</h2>


{/* <p className="needs-subtitle">
Powerful tools to simplify your sales workflow
</p> */}


<div className="needs-wrapper">
<div className="needs-cards">


<div className="need-card">


<div className="need-image">
<img src={automation} />
</div>

<h3>
Enable automation
</h3>

<p>
Automate your workflow
</p>

</div>



<div className="need-card">

<div className="need-image">
<img src={scoring} />
</div>

<h3>
AI powered lead scoring
</h3>

<p>
Find better leads
</p>

</div>



<div className="need-card">

<div className="need-image">
<img src={entry} />
</div>

<h3>
Reduce manual entry
</h3>

<p>
Save time
</p>

</div>


</div>

</div> 

</section>

)

}

export default Needs;