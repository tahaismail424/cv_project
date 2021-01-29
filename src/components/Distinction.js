import React, { Component } from "react";
import compFunctions from "../compFunctions";

export class Distinction extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "Prestige Award",
      date: "2019-04-06",
    };
  }

  handleName = (e) => {
    this.setState({
      name: e.target.value,
    });
  };

  handleDate = (e) => {
    this.setState({
      date: e.target.value,
    });
  };

  render() {
    let UI = (
      <div>
        <h3>{this.state.name}</h3>
        <h4>Received {compFunctions.toDateDisplay(this.state.date)}</h4>
      </div>
    );
    let form = (
      <div>
        <form>
          <label htmlFor="dist-name">Title: </label>
          <input
            onChange={this.handleName}
            type="text"
            value={this.state.name}
            name="dist-name"
            id="dist-name"
          />
          <label htmlFor="dist-date">Date received: </label>
          <input
            onChange={this.handleDate}
            type="date"
            value={this.state.date}
            name="dist-name"
            id="dist-date"
          />
        </form>
      </div>
    );
    let view = compFunctions.getView(UI, form, this.props.edit, this.state);
    return <div>{view}</div>;
  }
}

export default Distinction;
