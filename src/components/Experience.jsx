import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';


class Experience extends Component {
    render () {

        return (
            <table className="table">
                <thead>
                    <tr>
                    <th scope="col">#</th>
                    <th scope="col">Title</th>
                    <th scope="col">Duration</th>
                    <th scope="col">Organization</th>
                    <th scope="col">Location</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <th scope="row">1</th>
                    <td>System Administrator Intern</td>
                    <td>June 2014 - July 2015</td>
                    <td>Solmeyvn Software</td>
                    <td>India</td>
                    </tr>
                    <tr>
                    <th scope="row">2</th>
                    <td>Marlabs Inc</td>
                    <td>Feburary 2017 - September 2017</td>
                    <td>Front End Engineer</td>
                    <td>Piscataway, NJ</td>
                    </tr>
                    <tr>
                    <th scope="row">3</th>
                    <td>DevOps Engineer</td>
                    <td>October 2017 - December 2018</td>
                    <td>DataCubed Health</td>
                    <td>Brooklyn, NY</td>
                    </tr>
                    <tr>
                    <th scope="row">4</th>
                    <td>Site Reliability Engineer</td>
                    <td>January 2019 - Present</td>
                    <td>Zipwhip Inc</td>
                    <td>Seattle, WA</td>
                    </tr>
                </tbody>
            </table>
        )
    }
}

export default Experience;