import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';


class LandingPage extends Component {
    render () {

        return (
            <div className="jumbotron">
                <h1 className="display-4">Singh, Harshit</h1>
                <p className="lead">DevOps | Site-Reliability | System | Engineer | Linux | Cloud | InfraSec | AWS | Python</p>
                <hr className="my-4" />
                <p>Specializing in automating environment provisioning, Improving observability, visibility and microservice performance.</p>
                <p>Work impact can be viewed as someone who performs lifecycle management operations across multiple production clusters supporting, 
                   platform which supports about 30,000 businesses and a network that processes 45 million texts per day. 
                   Additionally, lifecycle management operations and developer support across multiple development clusters 
                   for a team of 200 software engineers that supports software development lifecycle for 4 different SaaS products.</p>
            </div>
        )
    }
}
export default LandingPage;