import React, { Component } from 'react';


export default class Header extends Component {
    render(){
        return (
            <div className="page-header">
                <h1 className="hidden-xs">Student Grade Table
                    <small className="pull-right">Grade Average : <span className="avgGrade label label-default"></span></small>
                </h1>
                <h3 className="visible-xs col-xs-12">Student Grade Table
                    <small className="col-xs-7 col-xs-offset-6">Grade Average : <span className="avgGrade label label-default"> </span></small>
                </h3>
            </div>
        )
    }
}