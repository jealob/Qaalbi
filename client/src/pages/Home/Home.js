import React, { Component } from "react";
// import { Input, FormBtn } from "../../components/Form";
import {Carousel, About, Services, Header, InstaFeedTitle} from "../../components/WelcomePage";
import axios from "axios";
import { Link } from "react-router-dom";
import Instafeed from 'react-instafeed';



export default class Home extends Component {
    constructor(props) {
        super(props);

        this.state = {
            events:[]
        }
    }

    componentDidMount() {
        axios.get('/api/events')
            .then((response) => {
                this.setState({ events: response.data });      
            })
            .catch((error) => {
                console.log(error);
            });           
    }
    render() {
        const instafeedTarget = 'instafeed';
        
        return (
            <div>
                <Header/>
                <Carousel/>
                <About/>
                <div id={instafeedTarget} class="hdr">
                <InstaFeedTitle/>
      <Instafeed
             limit='7'
             ref='instafeed'
             resolution='thumbnail'
             sortBy='most-recent'
             target={instafeedTarget}
             template={
                 `<a href='{{link}}' target='_blank' class='instafeed__item'>
                  <img class='pics' src='{{image}}' />
                 </a>`
            }
             userId='5583030622'
             clientId='clientIdInstagramApiString'
             accessToken='5583030622.ba4c844.186ef35d5451485b80e09eff337e69b6'
      />
    </div>
                
                <Services/>
            </div>
        )
    }
}








  

  