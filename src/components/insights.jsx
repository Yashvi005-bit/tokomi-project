import follow from "../assets/follow.png";
import report from "../assets/report.png";
import tracking from "../assets/tracking.png";


function Insights(){

return (

<section className="insights">


<div className="insight-row">


<div className="insight-image">
<img src={follow}/>
</div>


<div className="insight-text">

<h2>
Never again forget the follow-up
</h2>

<p>
Schedule calls, meetings, emails, or quotations.
Keep every important activity organized.
</p>

<button>
Learn more
</button>

</div>


</div>




<div className="insight-row">


<div className="insight-image">
<img src={report}/>
</div>


<div className="insight-text">

<h2>
Convert reporting data into money
</h2>

<p>
Smart dashboards help you understand real-time
data and improve your sales process.
</p>

<button>
Learn more
</button>

</div>


</div>





<div className="insight-row">


<div className="insight-image">
<img src={tracking}/>
</div>


<div className="insight-text">

<h2>
Real time tracking of customers
</h2>

<p>
Create professional looking quotations quickly
and manage all customer information.
</p>

<button>
Learn more
</button>

</div>


</div>



</section>

)

}


export default Insights;