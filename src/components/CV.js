import React, { Component } from 'react';
import Header from './Header';
import '../styles.css';

class CV extends Component { 

    constructor(props) {
        super(props)
    
        this.state = {
             edit: false
        }
    }
    
    edit = () => {
        this.setState({
            edit: true
        })
    }
    save = () => {
        this.setState({
            edit: false
        })
    }

    render() {
        let curButton;
        if (this.state.edit) {
            curButton =
            <button className="save" onClick={this.save}>Save</button>
        } else {
            curButton =
            <button className="edit" onClick={this.edit}>Edit</button>
        }
        return (
            <div id="cv-container">
                <div>{curButton}</div>
                <Header name="Info" edit={this.state.edit} />
                <Header name="Education" edit={this.state.edit} />
                <Header name="Distinctions" edit={this.state.edit}/>
                <Header name="Skills" edit={this.state.edit}/>
                <Header name="Experience" edit={this.state.edit}/>
            </div>
        )
    }
}

export default CV;
