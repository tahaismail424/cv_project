import React, { Component } from 'react';
import compFunctions from '../compFunctions';

export class School extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
            name: 'The Good Univeristy',
            startDate: '2016-08-05',
            endDate: '2020-06-15',
            major: 'The best major',
            gpa: '7.00'
             
        }
    }

    handleName = (e) => {
        this.setState({
            name: e.target.value
        });
    }

    handleStart = (e) => {
        this.setState({
            startDate: e.target.value
        });
    }

    handleEnd = (e) => {
        this.setState({
            endDate: e.target.value
        });
    }

    handleMajor = (e) => {
        this.setState({
            major: e.target.value
        });
    }

    handleGPA = (e) => {
        this.setState({
            gpa: e.target.value
        });
    }

    render() {

        let UI =
        <div>
            <h3>{this.state.name}</h3>
            <h4>{compFunctions.toDateDisplay(this.state.startDate)}-{compFunctions.toDateDisplay(this.state.endDate)}</h4>
            <h4>{this.state.major}</h4>
            <h4>{this.state.gpa}</h4>    
        </div>
        
        let form =
        <div>
            <form>
                <label htmlFor="school-name">School name: </label>
                <input onChange={this.handleName} value={this.state.name} type="text" name="school-name" id="school-name"/>
                    
                <label htmlFor="school-start">Start date: </label>
                <input onChange={this.handleStart} value={this.state.startDate} type="date" name="school-start" id="school-start"/>

                <label htmlFor="school-end">End date: </label>
                <input onChange={this.handleEnd} value={this.state.endDate} type="date" name="school-end" id="school-end"/>

                <label htmlFor="major">Major: </label>
                <input onChange={this.handleMajor} value={this.state.major} type="text" name="major" id="major"/>

                <label htmlFor="gpa">GPA: </label>
                <input onChange={this.handleGPA} value={this.state.gpa} type="number" name="gpa" id="gpa"/>
            </form>
        </div>

        let view = compFunctions.getView(UI, form, this.props.edit, this.state);

        return <div>{view}</div>
    }
}

export default School;
