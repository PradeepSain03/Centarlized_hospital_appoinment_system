import { Link } from "react-router-dom";
import LayOut from "./Layout";
import React from "react";
import "../styles/LayoutStyles.css";
import Hos1 from "./image/hos1.avif";
import Hos2 from "./image/hos2.jpg";
import Hos3 from "./image/hos3.jpg";
import Hos4 from "./image/hos4.jpg";

const Appointments=()=>{
    return(
        <>
        <div className="app">
          <h1>Select Your Hospital</h1>
        </div>
    <div className="new">
    <div class="card" style={{width:"400px"}}>
  <img class="card-img-top" src={Hos1} alt="Card image" />
  <div class="card-body">
    <h4 class="card-title">Mahatma Gandhi Hospital</h4>
    <p class="card-text">Sitapur 302022</p>
    <Link to="/book" class="btn btn-primary">Appointment</Link>
  </div>
</div>

<div class="card" style={{width:"400px"}}>
  <img class="card-img-top" src={Hos2} alt="Card image" />
  <div class="card-body">
    <h4 class="card-title">SMS Hospital</h4>
    <p class="card-text">SMS Road Ajmeri Gate</p>
    <Link to="/book" class="btn btn-primary">Appointment</Link>
  </div>
</div>
<div class="card" style={{width:"400px"}}>
  <img class="card-img-top" src={Hos3} alt="Card image" />
  <div class="card-body">
    <h4 class="card-title">Jaipur Hospital</h4>
    <p class="card-text">Near Durgapura  </p>
    <Link to="/book" class="btn btn-primary">Appointment</Link>
  </div>
</div>
<div class="card" style={{width:"400px"}}>
  <img class="card-img-top" src={Hos4} alt="Card image" />
  <div class="card-body">
    <h4 class="card-title">Dr Agarwals</h4>
    <p class="card-text">Gopalpura Road</p>
    <Link to="/book" class="btn btn-primary">Appointment</Link>
  </div>
</div>
    </div>
<div className="Foo" style={{backgroundColor:"gray", color:"white",height:"9vh",textAlign:"center",padding:"10px"}}>
  <h4>© 2023. All Rights Reserved.</h4>
</div>
      
        
        </>
    )
}
export default Appointments;