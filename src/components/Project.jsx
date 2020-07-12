import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';


class Project extends Component {
    render () {

        return (
            <table className="table">
                <thead>
                    <tr>
                    <th scope="col">#</th>
                    <th scope="col">Project Title</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <th scope="row">1</th>
                    <td>Kubernetes namespace and secret injector utility</td>
                    </tr>
                    <tr>
                    <th scope="row">2</th>
                    <td>RDS schemas migration utility</td>
                    </tr>
                    <tr>
                    <th scope="row">3</th>
                    <td>Route53 record set CRUD utility</td>
                    </tr>
                    <tr>
                    <th scope="row">4</th>
                    <td>SG Rule management utility</td>
                    </tr>
                    <tr>
                    <th scope="row">5</th>
                    <td>EC2 operations state monitoring and state restoration utility</td>
                    </tr>
                    <tr>
                    <th scope="row">6</th>
                    <td>SES Quota Usage MAP utility</td>
                    </tr>
                    <tr>
                    <th scope="row">7</th>
                    <td>Mongo schema and user migration utility</td>
                    </tr>
                    <tr>
                    <th scope="row">8</th>
                    <td>Couchbase bucket creation utility</td>
                    </tr>
                    <tr>
                    <th scope="row">9</th>
                    <td>Kubernetes roles/service-account/configs management utility</td>
                    </tr>
                    <tr>
                    <th scope="row">10</th>
                    <td>okta apps/configuration management utility</td>
                    </tr>
                    <tr>
                    <th scope="row">11</th>
                    <td>S3 bucket lifecycle management utility</td>
                    </tr>
                    <tr>
                    <th scope="row">12</th>
                    <td>Cross Account AWS ECS Task Deployment utility</td>
                    </tr>
                </tbody>
            </table>
        )
    }
}
export default Project;