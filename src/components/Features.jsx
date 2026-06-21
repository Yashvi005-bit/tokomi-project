import communication from"../assets/communication.png";
import view from "../assets/view.png"
import leads from "../assets/leads.png"
import quote from "../assets/quote.png"

function Features(){

return (

<section className="features">


<h2>
All features properly designed
</h2>
<p className="features-subtitle">
All our features are the best in Sales management to date <br/>
  Learn how to be more confident
</p>

<div className="feature-row top-row">

<div className="feature-card">

<img src={quote}/>

<div className="content">
<h3>Interesting quotes in two clicks</h3>
<p>Create professional-looking quotations quickly using a user-friendly interface.</p>
</div>

</div>



<div className="feature-card">

<img src={communication}/>

<div className="content">
<h3>Seamless communication</h3>
<p>Communication is key. Incoming emails are automatically added to your pipeline.</p>
</div>

</div>


</div>



<div className="feature-row bottom-row">


<div className="feature-card">

<img src={view}/>

<div className="content">
<h3>Keep opportunities within view</h3>
<p>Each opportunity is shown as a card with all the important information.</p>
</div>

</div>



<div className="feature-card">

<img src={leads}/>

<div className="content">
<h3>Manage leads</h3>
<p>Create, get, import, maintain, rate. Manage all aspects of your leads.</p>
</div>

</div>


</div>


</section>

)

}

export default Features;