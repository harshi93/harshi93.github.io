import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';

class Footer extends Component {
    render () {
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <a className="navbar-brand" href="#">Harshit Singh</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#footerNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="footerNav">
                        <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link" href="https://github.com/harshi93" target="_blank" rel="noopener noreferrer">GitHub</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="https://linkedin.com/in/singh-harshit" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="https://twitter.com/singhharshit119" target="_blank" rel="noopener noreferrer">Twitter</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="https://www.instagram.com/weirdo_man_photography/" target="_blank" rel="noopener noreferrer">Instagram</a>
                        </li>
                        </ul>
                    </div>
            </nav>
        )
    }
}

export default Footer;