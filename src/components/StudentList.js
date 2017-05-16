import React, {Component} from 'react';
import database from '../database';


export default class StudentList extends Component{
    dataDel(id){
        database.ref('studentList').child(id).remove();
    }

    render(){
        const {studentId} = this.props;

        return(
            <tr>
                <td>{this.props.name}</td>
                <td>{this.props.course}</td>
                <td>{this.props.grade}</td>
                <td><button onClick={()=>this.dataDel(studentId)}>Delete</button></td>
            </tr>
        )

    }
}

