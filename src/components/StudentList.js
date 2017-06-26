import React, {Component} from 'react';
import database from '../database';


export default class StudentList extends Component{
    constructor(props){
        super(props);
        this.state={
            name: props.name,
            course: props.course,
            grade: props.grade,
            editTracker: false
        }
    }

    handleEdit(){
        this.setState({
                editTracker: true
            }
        )
    }

    dataDel(id){
        database.ref('studentList').child(id).remove();
    }

    dataUpdate(id){
        const {name, course, grade}=this.state;
        if (name && course && grade){
            database.ref('studentList').child(id).update({
                name,
                course,
                grade
            });
            this.setState({
                editTracker: false
            })
        }
    }

    render(){
        const {studentId, name, course, grade} = this.props;
        if (!this.state.editTracker){
            return(
                <tr>
                    <td>{name}</td>
                    <td>{course}</td>
                    <td>{grade}</td>
                    <td><button className="btn btn-primary glyphicon glyphicon-pencil" onClick={()=>this.handleEdit()}></button><button className="btn btn-danger glyphicon glyphicon-trash" onClick={()=>this.dataDel(studentId)}></button></td>
                </tr>
            )
        }
        else{
            return(
                <tr>
                    <td><input onChange={(event)=>this.setState({name: event.target.value})} value={this.state.name} type="text" className="form-control" name="studentName" placeholder="Student Name" /></td>
                    <td><input onChange={(event)=>this.setState({course: event.target.value})} value={this.state.course} type="text" className="form-control" name="studentCourse" placeholder="Student Course" /></td>
                    <td><input onChange={(event)=>this.setState({grade: event.target.value})} value={this.state.grade} type="text" className="form-control" name="studentGrade" placeholder="Student Grade" /></td>
                    <td><button className="btn btn-success glyphicon glyphicon-floppy-save" onClick={()=>this.dataUpdate(studentId)}></button><button className="btn btn-danger glyphicon glyphicon-trash" onClick={()=>this.dataDel(studentId)}></button></td>
                </tr>
            )
        }
    }
}

