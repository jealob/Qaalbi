import React from "react";
import "./Profile.css";

const Profile = (props) => (
  <div className="sidenav">
    <img alt="someImage" src={props.userData.picture} height="100px" />
    <p>{props.userData.firstName} {props.userData.lastName}</p>
    <p>{props.profileData}</p>
    <p>Count down</p>
    <p>Some other data</p>
  </div>
);

export default Profile;
