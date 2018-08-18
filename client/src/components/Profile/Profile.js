import React from "react";
import "./Profile.css";

// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
const Profile = (props) => (
    <div className="sidenav">
      <a href="#about">Wlecome : {props.userData.firstName}</a>
      <a href="#services">Services</a>
      <a href="#clients">Clients</a>
      <a href="#contact">Contact</a>
    </div>
);

export default Profile;
