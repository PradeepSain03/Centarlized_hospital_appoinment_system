import React from "react";
import "../styles/LayoutStyles.css";
import Card1 from "./image/card1.jpg";
import Card2 from "./image/card2.jpg";
import Card3 from "./image/card3.jpg";
import Card4 from "./image/card4.jpg";
import Card5 from "./image/card5.jpg";
import { userMenu } from "./../Data/data";

import { Link, useLocation, useNavigate } from "react-router-dom";

import { Badge, message } from "antd";
const Layout = ({ children }) => {

  const navigate = useNavigate();
  // logout funtion
  const handleLogout = () => {
    localStorage.clear();
    message.success("Logout Successfully");
    navigate("/login");
  };

  // redering menu list
  const SidebarMenu = userMenu;
  return (
    <>
      <div className="main">
        <div className="layout">
          <div className="sidebar">
            <div className="logo">
              <h6>सर्वे भवन्तु</h6>
              <hr />
            </div>
            <div className="menu">
              <div className={`menu-item `} >
                <i className="fa-solid fa-house"></i>
                <Link to="/">Home</Link>
              </div>

              <div className={`menu-item `} >
                <i className="fa-solid fa-list"></i>
                <Link to="/appointments">Appointments</Link>
              </div>

              <div className={`menu-item `} >
                <i className="fa-solid fa-user-doctor"></i>
                <Link to="/admin">Admin</Link>
              </div>

              <div className={`menu-item `} onClick={handleLogout}>
                <i className="fa-solid fa-right-from-bracket"></i>
                <Link to="/login">Logout</Link>
              </div>
            </div>
          </div>
          <div className="content">
            <div className="cover">
              <div class="content-card home" id="welcome-section">
                <h1 className="Text">Welcome...</h1>
                <h2 className="Text">Here You Can Book Your Appointment</h2>
              </div>
            </div>
            <div className="cards">
            <div class="card1" >
              <img className="card-img-top img" src={Card5} alt="Card image cap" />
              <div className="card-body">
                <p className="card-text">Cardiology is a branch of medicine that deals with disorders of the heart and the cardiovascular system.</p>
              </div>
            </div>
            <div class="card1" >
              <img className="card-img-top img" src={Card3} alt="Card image cap" />
              <div className="card-body">
                <p className="card-text">The eye is made up of three coats, which enclose the optically clear aqueous humour, lens, and vitreous body</p>
              </div>
            </div>
            <div class="card1" >
              <img className="card-img-top img" src={Card4} alt="Card image cap" />
              <div className="card-body">
                <p className="card-text">Neurology is the branch of medicine concerned with the study and treatment of disorders of the nervous system. </p>
              </div>
            </div>
            </div>

          </div>

          
        </div>
        <div class="mt-5 pt-5 pb-5 footer">
<div class="container">
  <div class="row">
   
    <div class="col-lg-3 col-xs-12 links">
      <h4 class="mt-lg-0 mt-sm-3">Time</h4>
      <h6 class="mt-lg-0 mt-sm-3">Mon-Friday : 7:00AM To 9:00 PM </h6>
      <h6 class="mt-lg-0 mt-sm-3">Sat-Sun : 7:00AM To 5:00 PM </h6>
     
    </div>
    <div class="col-lg-4 col-xs-12 location">
      <h4 class="mt-lg-0 mt-sm-4">Location</h4>
      <p>SMS Hospital Jaipur #02022</p>
      <p class="mb-0"><i class="fa fa-phone mr-3"></i>(541) @#48828</p>
      <p><i class="fa fa-envelope-o mr-3"></i>Ps.com</p>
    </div>
  </div>
  <div class="row mt-5">
    <div class="col copyright">
      <p class=""><small class="text-white-50">© 2023. All Rights Reserved.</small></p>
    </div>
  </div>
</div>
</div>

      </div>
    </>
  );
};

export default Layout;