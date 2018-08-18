import React from "react";
import "./Profile.css";

const Profile = (props) => (
  <div className="sidenav">
    <img alt="someImage" src="someimage" />
    <p>user name</p>
    <p>{props.profileData}</p>
    <p>Count down</p>
    <p>some other data</p>
  </div>
);

export default Profile;
