import React, { Component } from 'react';
import Info from './Info';
import School from './School';
import Distinction from './Distinction';
import Skill from './Skill';
import Position from './Position';
import '../styles.css';

export class Header extends Component {
    constructor(props) {
        super(props)
    }
    
    
    render() {

        let fields;
        switch (this.props.name) {
            case "Info":
                fields =
                <div>
                    <Info type="Name" edit={this.props.edit}/>
                    <Info type="Email" edit={this.props.edit}/>
                    <Info type="Phone" edit={this.props.edit}/>
                    <Info type="Address" edit={this.props.edit}/>
                </div>
                break;
            case "Education":
                fields =
                <div>
                    <School edit={this.props.edit}/>
                    <School edit={this.props.edit}/>
                    <School edit={this.props.edit}/>
                    <School edit={this.props.edit}/>
                </div>
                break;
            case "Distinctions":
                fields = 
                <div>
                    <Distinction edit={this.props.edit}/>
                    <Distinction edit={this.props.edit}/>
                    <Distinction edit={this.props.edit}/>
                    <Distinction edit={this.props.edit}/>
                    <Distinction edit={this.props.edit}/>
                    <Distinction edit={this.props.edit}/>
                </div>
                break;
            case "Skills":
                fields =
                <div>
                    <Skill edit={this.props.edit}/>
                    <Skill edit={this.props.edit}/>
                    <Skill edit={this.props.edit}/>
                    <Skill edit={this.props.edit}/>
                    <Skill edit={this.props.edit}/>
                    <Skill edit={this.props.edit}/>
                    <Skill edit={this.props.edit}/>
                    <Skill edit={this.props.edit}/>
                </div>
                break;
            case "Experience":
                fields = 
                <div>
                    <Position edit={this.props.edit} />
                    <Position edit={this.props.edit} />
                    <Position edit={this.props.edit} />
                    <Position edit={this.props.edit} />
                    <Position edit={this.props.edit} />
                    <Position edit={this.props.edit} />
                    <Position edit={this.props.edit} />
                </div>
                break;
        }
        let header = (this.props.name === "Info")
        ? <div></div>
        : <h2 className="header">{this.props.name}</h2>
        return (
            <div id={`${this.props.name.toLowerCase()}-box`}>
                <div>{header}</div>
                <div>{fields}</div>
            </div>
        )
    }
}

export default Header;
