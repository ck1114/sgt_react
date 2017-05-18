import React, { Component } from 'react';
import database from '../database';

export default class Header extends Component {
    constructor(){
        super();
        this.state={
            gradeAvg: ''
        }

    }

    componentDidMount(){
        database.ref('studentList').on('value', (snapshot)=>{
            const stuGrades = snapshot.val();
            if(!stuGrades){
                this.setState({
                    gradeAvg: ''
                })
                return
            }
            const gradeAvgArray=[];
            Object.keys(stuGrades).map((key)=>{
                const studentGradeAvg = stuGrades[key].grade;
                gradeAvgArray.push(parseInt(studentGradeAvg,10));
                return gradeAvgArray;
            })
            const gradeAvg = Math.round(gradeAvgArray.reduce((total, amount) => total + amount)/gradeAvgArray.length);
            console.log(gradeAvg);
            this.setState({
                gradeAvg
                }
            )
        });
    }


    render(){
        return (
            <div className="page-header">
                <h1 className="hidden-xs">Student Grade Table
                    <small className="pull-right">Grade Average : <span className="avgGrade label label-default">{this.state.gradeAvg}</span></small>
                </h1>
                <h3 className="visible-xs col-xs-12">Student Grade Table
                    <small className="col-xs-7 col-xs-offset-6">Grade Average : <span className="avgGrade label label-default">{this.state.gradeAvg}</span></small>
                </h3>
            </div>
        )
    }
}