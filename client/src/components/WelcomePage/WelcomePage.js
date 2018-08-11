import React from "react";
import './WelcomePage.css';
import { React_Bootstrap_Carousel } from "react-bootstrap-carousel";
import "bootstrap/dist/css/bootstrap.css";
import "react-bootstrap-carousel/dist/react-bootstrap-carousel.css";


export class Carousel extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      autoplay: true
    };
  }
  onSelect = (active, direction) => {
    console.log(`active=${active} && direction=${direction}`);
  };
  slideNext = () => {
    this.slider.slideNext();
  };
  slidePrev = () => {
    this.slider.slidePrev();
  };
  goToSlide = () => {
    this.slider.goToSlide(4);
  };
  autoplay = () => {
    this.setState({ autoplay: !this.state.autoplay });
  };

  render() {
   

    let { leftIcon, rightIcon } = this.state;
    return (
      <div className="container-fluid">
     
        <div className="row">
          <div className="col-md-12" style={{ marginTop: 0 }}>
            <React_Bootstrap_Carousel
              animation={true}
              autoplay={this.state.autoplay}
              slideshowSpeed={3000}
              leftIcon={leftIcon}
              rightIcon={rightIcon}
              onSelect={this.onSelect}
              ref={r => (this.slider = r)}
              version={4}
            >
              <div style={{ height: 500 }}>
                <img
                  style={{ width: "100%", height: "80%" }}
                  src={require("../../images/g1.jpg")} alt="pic1"
                />
              </div>
              <div style={{ height: 500 }}>
              <img
                  style={{ width: "100%", height: "100%" }}
                  src={require("../../images/g2.jpg")} alt="pic2"
                />
              </div>
              <div style={{ height: 300 }}>
              <img
                  style={{ width: "100%", height: "100%" }}
                  src={require("../../images/g3.jpg")} alt="pic3"
                />
              </div>
              
            </React_Bootstrap_Carousel>
          </div>
        </div>
      </div>
    );
  }
}
 export const Header = () => (
   <div className="container-fluid">
  <div className="text-center banner">
  <img className="logo" src={require("../../images/logo.jpg")} alt="logo"/>
  <p className="subtext ">Here to serve all your needs</p>
<a className="btn btn-dark btn-xl text-uppercase " id="getStrt" href="">Get Started</a>
</div>
</div>
 );

  export const About = () => (
    <div className="container fpy-3">
  <h2 className="text-center"id="titles">About Us</h2>
<div className="alert alert-light  mt-5" role="alert">
  <p>We provide a multitude of services ranging from Day-of to Full Service Event Coordination. Your coordinator will collaborate with you to produce an unforgettable event that will be tailored to you & your vision on your joyous occasion. During a complimentary initial consultation, you will have the opportunity to look through our portfolios, learn more about our services and ask any questions you may have. Once we determine what services are needed through this consultation, a proposal will be created and customized especially for you to best fit your needs. QAALBI IS ALL ABOUT CREATING AN UNFORGETTABLE EXPERIENCE FOR EACH INDIVIDUAL CLIENT. </p>
  <hr/>
 </div>
    </div>
  );

  export const Instagram = () => (
    <h2 className="text-center" id="titles">View Our Instagram Feed</h2>

  );
  
  export const Services = props => (

<div>
<div className="container">
<h2 className="text-center mb-3" id="titles">Services</h2>
<div className="row">
<div className="card" style={{width:350}}>
  <img className="card-img-top" src={require("../../images/g3.jpg")} alt=""/>
  
  <div className="card-body ml-3 mr-3 rounded planning-column">
     <h5 class="text-center card-title pt-2 list-group-item active">Day-Of-Planning</h5>
    <div className="card-text"> 
      <ul className="list-group">
          <li className="list-group-item">One Face-To-Face</li>
          <li className="list-group-item">Meeting The Month Of</li>
          <li className="list-group-item">Scheduled Phone and Email Consultations</li>
          <li className="list-group-item">Day Of Coordination (up to twelve hours)</li>
          <li className="list-group-item">One Planner and One Assistant</li>
          <li className="list-group-item">Set Up Dècor Guest Book | Cake Sets | Menus | Place Cards | Favors | Etc.</li>
          <li className="list-group-item">Manage Timeline Created by Client</li>
          <li className="list-group-item">Monitor All Vendors From Check in To Check</li>
          <li className="list-group-item">Distribute Vendor Payments and Gratuities</li>
          <li className="list-group-item">Ceremony Coordination-Rehearsal Not Included</li>
          <li className="list-group-item">Guide The Newlyweds Through Their Reception</li>
          <li className="list-group-item">Return Personal Dècor and Gifts At The End Of The Evening</li>
      </ul>
      </div>
</div>
</div>
<div className="card" style={{width:350}}>
  <img className="card-img-top" src={require("../../images/g2.jpg")} alt="pic1"/>
  <div className="card-body mr-3 ml-3  planning-column">
     <h5 class="text-center card-title pt-2 list-group-item active">Month-of-Planning</h5>
    <div className="card-text"> 
    <ul className="list-group">
      <li className="list-group-item">Three Face-To-Face Meetings</li>
      <li className="list-group-item">Finalize Floor Plans</li>
      <li className="list-group-item">Meeting The Month Of </li>
      <li className="list-group-item">Confirm Final Details With Vendors</li>
      <li className="list-group-item">Scheduled Phone and Email Consultations</li>
      <li className="list-group-item">Direct Rehearsal (Up to one hour)</li>
      <li className="list-group-item">Day of Coordination (Up to twelve hours)</li>
      <li className="list-group-item">One Planner and One Assistant</li>
      <li className="list-group-item">Set Up Dècor Guest Book | Cake Sets | Menus | Place Cards | Favors | Etc.</li>
      <li className="list-group-item">Create and Manage Full Event Timeline</li>
      <li className="list-group-item">Guide The Newlyweds Through Their Reception</li>
      <li className="list-group-item">Return Personal Dècor and Gifts At The End Of The Evening</li>
    </ul>
    </div>
  </div>
</div>
 
<div className="card" style={{width:350}}>
  <img className="card-img-top" src={require("../../images/g1.jpg")} alt="My Awesome Image"/>
  <div className="card-body mr-3 ml-3 planning-column">
     <h5 class="text-center card-title pt-2 list-group-item active">Full-Service-Planning</h5>
    <div className="card-text"> 
    <ul className="list-group">
      <li className="list-group-item">Three Face-To-Face Meetings</li>
      <li className="list-group-item">Meeting The Month Of </li>
      <li className="list-group-item">Confirm Final Details With Vendors</li>
      <li className="list-group-item">Scheduled Phone and Email Consultations</li>
      <li className="list-group-item">Day of Coordination (Up to twelve hours)</li>
      <li className="list-group-item">Three Vendor Meetings</li>
      <li className="list-group-item">Venue Selection</li>
      <li className="list-group-item">Set Up Dècor Guest Book | Cake Sets | Menus | Place Cards | Favors | Etc.</li>
      <li className="list-group-item">Venue Selection</li>
      <li className="list-group-item">Budget Development and Tracking</li>
      <li className="list-group-item"> Officiant | Rentals | Florals | Draping | Music Entertainment | Photography | Videography</li>
      <li className="list-group-item">Return Personal Dècor and Gifts At The End Of The Evening</li>
  </ul>
  </div>
  </div>
</div>
</div>
</div>
</div> 
 
 


  );

 