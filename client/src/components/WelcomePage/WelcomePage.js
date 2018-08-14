import React from "react";
import './WelcomePage.css';
import Instafeed from 'react-instafeed';
// import { React_Bootstrap_Carousel } from "react-bootstrap-carousel";
//  import "bootstrap/dist/css/bootstrap.css";
//  import "react-bootstrap-carousel/dist/react-bootstrap-carousel.css";




export class Carousel extends React.PureComponent {
  render() {
    return (
      // <div id="carouselExampleControls" ClassName="carousel slide" data-ride="carousel">
      //   <div ClassName="carousel-inner">
      //     <div ClassName="carousel-item active">
      //       <img ClassName="d-block w-100" src={require("../../images/g1.jpg")} alt="pic1" alt="First slide" />
      //     </div>
      //     <div ClassName="carousel-item">
      //       <img ClassName="d-block w-100" src={require("../../images/g2.jpg")} alt="pic2" alt="Second slide" />
      //     </div>
      //     <div ClassName="carousel-item">
      //       <img ClassName="d-block w-100" src={require("../../images/g3.jpg")} alt="pic3" alt="Third slide" />
      //     </div>
      //   </div>
      //   <a ClassName="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
      //     <span ClassName="carousel-control-prev-icon" aria-hidden="true"></span>
      //     <span ClassName="sr-only">Previous</span>
      //   </a>
      //   <a ClassName="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
      //     <span ClassName="carousel-control-next-icon" aria-hidden="true"></span>
      //     <span ClassName="sr-only">Next</span>
      //   </a>
      // </div>

      <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img class="d-block w-100" src={require("../../images/g1.jpg")} alt="First slide" />
          </div>
          <div class="carousel-item">
            <img class="d-block w-100" src={require("../../images/g2.jpg")} alt="Second slide" />
          </div>
          <div class="carousel-item">
            <img class="d-block w-100" src={require("../../images/g3.jpg")} alt="Third slide" />
          </div>
        </div>
        <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>
      </div>
    );
  }
}


export const Header = () => (
  <div className="hdr">
    <div className="container-fluid">
      <div className="text-center banner">
        <img className="logo" src={require("../../images/logo.jpg")} alt="logo" />
        <p className="subtext ">Here to serve all your needs</p>
        <a className="btn btn-dark btn-xl text-uppercase " id="getStrt" href="">Get Started</a>
      </div>
    </div>
  </div>
);

export const About = () => (
  <div className="hdr">
    <div className="container py-3">
      <h2 className="text-center" id="titles">About Us</h2>
      <div className="alert alert-light mt-3" role="alert">
        <p>We provide a multitude of services ranging from Day-of to Full Service Event Coordination. Your coordinator will collaborate with you to produce an unforgettable event that will be tailored to you & your vision on your joyous occasion. During a complimentary initial consultation, you will have the opportunity to look through our portfolios, learn more about our services and ask any questions you may have. Once we determine what services are needed through this consultation, a proposal will be created and customized especially for you to best fit your needs. QAALBI IS ALL ABOUT CREATING AN UNFORGETTABLE EXPERIENCE FOR EACH INDIVIDUAL CLIENT. </p>
        <hr />
      </div>
    </div>
  </div>
);

export class InstagramFeed extends React.PureComponent {
  render() {
    const instafeedTarget = 'instafeed'
    return (
      <div>
        <h2 className="text-center hdr" id="titles">View Our Instagram Feed</h2>
        <div id={instafeedTarget}>
          <Instafeed
            limit='16'
            ref='instafeed'
            resolution='thumbnail'
            sortBy='most-recent'
            target={instafeedTarget}
            template={
            
          `
          <div class='insta'>
            <a href='{{link}}' target='_blank' class='instafeed__item  '>
            
            <img class='instafeed__item__background pics' src='{{image}}' />  
             
            </a>
          </div>
          `
        }
            userId='5583030622'
            clientId='5583030622'
            accessToken='5583030622.ba4c844.186ef35d5451485b80e09eff337e69b6'
          />
        </div>
      </div>
    )
  }
};

export const Services = () => (

  <div className="hdr">
    <div className="container">
      <h2 className="text-center mb-3" id="titles">Services</h2>
      <div className="row">
        <div className="card" style={{ width: 350 }}>
          <img className="card-img-top" src={require("../../images/g3.jpg")} alt="image1" />

          <div className="card-body ml-3 mr-3 rounded planning-column">
            <h5 className="text-center card-title pt-2 list-group-item active">Day-Of-Planning</h5>
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
        <div className="card" style={{ width: 350 }}>
          <img className="card-img-top" src={require("../../images/g2.jpg")} alt="image2" />
          <div className="card-body mr-3 ml-3  planning-column">
            <h5 className="text-center card-title pt-2 list-group-item active">Month-of-Planning</h5>
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

        <div className="card" style={{ width: 350 }}>
          <img className="card-img-top" src={require("../../images/g1.jpg")} alt="image3" />
          <div className="card-body mr-3 ml-3 planning-column">
            <h5 className="text-center card-title pt-2 list-group-item active">Full-Service-Planning</h5>
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

