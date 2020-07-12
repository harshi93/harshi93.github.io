import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Mainframe from './Mainframe';

class Headers extends Component {
   
    state={
        projectClicked: false,
        experienceClicked: false
    }

    handleProjectClicked = () => {
        this.setState({ projectClicked: true})
    };

    handleExperienceClicked = () => {
        this.setState({ experienceClicked: true})

    }
    
    render () {

        const bio = this.state.projectClicked

        const exp = this.state.experienceClicked

        return (
        <React.Fragment>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <a className="navbar-brand" href="/">Harshit Singh</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav mr-auto">
                        <li className="nav-item active"> 
                            <a className="nav-link" href="/" data-toggle="collapse" data-target=".navbar-collapse.show" target="_blank" rel="noopener noreferrer" onClick={this.handleProjectClicked}>Projects <span className="sr-only" >(current)</span></a> 
                        </li>
                        <li className="nav-item"> 
                            <a className="nav-link" href="/" data-toggle="collapse" data-target=".navbar-collapse.show" target="_blank" rel="noopener noreferrer" onClick={this.handleExperienceClicked}>Experience <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="https://www.youracclaim.com/users/singh-harshit/badges" target="_blank" rel="noopener noreferrer" data-toggle="collapse" data-target=".navbar-collapse.show">Certifications <span className="sr-only">(current)</span></a>
                        </li>
                        </ul>
                    </div>
            </nav>
            <Mainframe projectClick={bio} experienceClick={exp} />
            </React.Fragment>
        )
    }
}

export default Headers;