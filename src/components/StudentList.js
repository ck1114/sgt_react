import React, {Component} from 'react';
import database from '../database';


export default class StudentList extends Component{
    constructor(props){
        super(props);
        this.state={
            name: props.name,
            course: props.course,
            grade: props.grade
        }
    }

    dataDel(id){
        database.ref('studentList').child(id).remove();
    }

    dataUpdate(id){
        database.ref('studentList').child(id).update();
    }

    render(){
        const {studentId, name, course, grade} = this.props;
        if ()
        return(
            <tr>
                <td>{name}</td>
                <td>{course}</td>
                <td>{grade}</td>
                <td><button onClick={()=>this.dataUpdate(studentId)}>Edit</button><button onClick={()=>this.dataDel(studentId)}>Delete</button></td>
            </tr>
        )

    }
}

