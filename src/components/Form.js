import React, {Component} from 'react';
import database from '../database';

export default class Form extends Component {
    constructor (){
        super();
        this.state={
            name: '',
            course: '',
            grade: '',
            formError: false
        }
    }

    addStudent(){
        const {name, course, grade} = this.state;
        if (name && course && grade){
            const studentRef = database.ref('studentList');
            studentRef.push({
                name: name,
                course: course,
                grade: grade
            });
            this.resetForm();
        }
        else{
            this.setState({
                formError: true
            })
        }

    }

    resetForm(){
        console.log('called');
        this.setState({
            name: '',
            course: '',
            grade: '',
            formError: false
        });
    }

    formError(){
        if(this.state.formError){
            return <div className="alert alert-danger">Please fill out all input fields</div>
        }
    }

    render(){
        return(
            <div className="student-add-form form-group pull-right col-sm-4 col-xs-12">
                <h4>Add Student</h4>
                <div className="form-group input-group">
            <span className="input-group-addon">
                <span className="glyphicon glyphicon-user" aria-hidden="true"></span>
            </span>
                    <input onChange={(event)=>this.setState({name: event.target.value})} value={this.state.name} type="text" className="form-control" name="studentName" id="studentName" placeholder="Student Name" />
                </div>
                <div className="form-group input-group">
            <span className="input-group-addon">
                <span className="glyphicon glyphicon-list-alt" aria-hidden="true"></span>
            </span>
                    <input onChange={(event)=>this.setState({course: event.target.value})} value={this.state.course} type="text" className="form-control" name="course" id="course"
                           placeholder="Student Course" />
                </div>
                <div className="form-group input-group">
            <span className="input-group-addon">
                <span className="glyphicon glyphicon-education" aria-hidden="true"></span>
            </span>
                    <input onChange={(event)=>this.setState({grade: event.target.value})} value={this.state.grade} type="number" className="form-control" name="studentGrade" id="studentGrade"
                           placeholder="Student Grade" />
                </div>
                {this.formError()}
                <button type="button" className="btn btn-success" onClick={()=>this.addStudent()}>Add</button>
                <button type="button" className="btn btn-default" onClick={()=>this.resetForm()}>Cancel</button>
            </div>
        )
    }
}
