import React, { Component } from "react";
import API from "../../utils/API";
import AddEvent from "../../components/AddEvent";
import { Nav, Footer } from "../../components/Nav";
import Profile from "../../components/Profile";
import Jumbotron from "../../components/Jumbotron";
//import token from "../../Auth/token";

export default class Dashboard extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name:'',
            email:'',
            phone:'',
            eventDate:'',
            contactOptions:'',
            hairService:false,
            makeupService:false,
            manicurePedicure:false
        }
    }



   

    handleInputChange = event => {
        // Getting the value and name of the input which triggered the change
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;


        // Updating the input's state
        this.setState({
            [name]: value
        });

    };

    handleFormSubmit = event => {
        event.preventDefault();
        let eventData = []
        eventData.push(this.state);
        this.saveEvent(eventData)
      };

    saveEvent = eventData => {
        API.saveEvent(eventData)
    }

    getAllEvents= () => {
        API.getAllEvents().then(res => console.log(res))
    }
    componentDidMount() {
        this.getAllEvents();
    }


    render() {
       
        // console.log(this.state.events);
        return (
           
              
                   
                
                 <div>
                          
                               
                                    <AddEvent id="events" 
                                     handleInputChange={this.handleInputChange}
                                     handleFormSubmit={this.handleFormSubmit}
                                     name={this.state.name}
                                     email={this.state.email}
                                     phone={this.state.phone}
                                     eventDate={this.state.eventDate}
                                     contactOptions={this.state.contactOptions}
                                     hairService={this.state.hairService}
                                     makeupService={this.state.makeupService}
                                     manicurePedicure={this.state.manicurePedicure}
                                     
                                    />
                                
                           
                        
                   
               
              </div>
            

        
    
    
    );
    }

}
