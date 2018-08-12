import React from "react";
import "./Profile.css";

// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
const Profile = (props) => (
    <div className="sidenav">
      <a href="#">About</a>
      <a href="#">Services</a>
      <a href="#">Clients</a>
      <a href="#">Contact</a>
    </div>
);

export default Profile;
