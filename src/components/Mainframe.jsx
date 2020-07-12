import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Project from './Project';
import Experience from './Experience';
import LandingPage from './LandingPage';


class Mainframe extends Component {
    render () {

        if (this.props.experienceClick === true) {
            console.log(this.props.bioClick)
            
            return (
                <Experience />
            )
        }
        else if (this.props.projectClick === true ) {
            return (
                <Project />
            )
        }
        else {
            return (
                <LandingPage />
            )
        }
    }
}

export default Mainframe;