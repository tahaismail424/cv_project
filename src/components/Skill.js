import React, { Component } from 'react';
import compFunctions from '../compFunctions';

export class Skill extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            name: 'Excellent skill'
        }
    }

    handleName = (e) => {
        this.setState({
            name: e.target.value
        });
    }
    
    render() {
        let UI =
        <div>
            <h4>{this.state.name}</h4>

        </div>
        let form = 
        <div>
            <form>
                <label htmlFor="skill-name">Skill description: </label>
                <input onChange={this.handleName} type="text" value={this.state.name} name="skill-name" id="skill-name"/>
            </form>
        </div>
        let view = compFunctions.getView(UI, form, this.props.edit, this.state);
        return <div>{view}</div>
    }
}

export default Skill


