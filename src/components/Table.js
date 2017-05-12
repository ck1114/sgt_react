import React, {Component} from 'react';

export default class Table extends Component{
    render(){
        return(
            <div className="student-list-container col-sm-8 col-xs-12">
                <table className="student-list table table-condensed table-striped">
                    <thead>
                    <tr>
                        <th>Student Name</th>
                        <th>Student Course</th>
                        <th>Student Grade</th>
                        <th>Operations</th>
                    </tr>
                    </thead>
                    <tbody>
                    </tbody>
                </table>
            </div>
        )
    }
}
