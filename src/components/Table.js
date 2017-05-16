import React, {Component} from 'react';
import database from '../database';
import StudentList from './StudentList';

export default class Table extends Component{
    constructor (){
        super();
        this.state={
            studentList: {}
        }
    }

    componentDidMount(){
        database.ref('studentList').on('value', (snapshot)=>{
            this.setState({
                studentList: snapshot.val()
            })
        });
    }

    mapStudentList(){
        const stu = this.state.studentList;
        if(!stu){
            return
        }
        return Object.keys(stu).map((key)=>{
            const student = stu[key];
            return <StudentList key={key} studentId={key} name={student.name} course={student.course} grade={student.grade}/>
        })
    }

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
                    {this.mapStudentList()}
                    </tbody>
                </table>
            </div>
        )
    }
}
