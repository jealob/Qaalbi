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
            userData: [],
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
        console.log(this.state);
      };

    componentDidMount() {
       
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
                                     start_year={this.state.start_year}
                                     end_year={this.state.end_year}
                                    />
                                
                           
                        
                   
               
              </div>
            

        
    
    
    );
    }

}
