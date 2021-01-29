import React, { Component } from "react";
import compFunctions from "../compFunctions";

export class Position extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "Office Worker",
      description: "Worked in an office, did office things",
      startDate: "2018-04-08",
      endDate: "2019-07-05",
    };
  }

  handleName = (e) => {
    this.setState({
      name: e.target.value,
    });
  };

  handleDescription = (e) => {
    this.setState({
      description: e.target.value,
    });
  };

  handleStart = (e) => {
    this.setState({
      startDate: e.target.value,
    });
  };

  handleEnd = (e) => {
    this.setState({
      endDate: e.target.value,
    });
  };

  render() {
    let UI = (
      <div>
        <h3>{this.state.name}</h3>
        <h4>{this.state.description}</h4>
        <h4>
          {compFunctions.toDateDisplay(this.state.startDate)}-
          {compFunctions.toDateDisplay(this.state.endDate)}
        </h4>
      </div>
    );

    let form = (
      <div>
        <form>
          <label htmlFor="pos-name">Title: </label>
          <input
            onChange={this.handleName}
            value={this.state.name}
            type="text"
            name="pos-name"
            id="pos-name"
          />

          <label htmlFor="description">Description: </label>
          <input
            onChange={this.handleDescription}
            value={this.state.description}
            type="text"
            name="description"
            id="description"
          />

          <label htmlFor="pos-start">Start date: </label>
          <input
            onChange={this.handleStart}
            value={this.state.startDate}
            type="date"
            name="pos-start"
            id="pos-start"
          />

          <label htmlFor="pos-end">End date: </label>
          <input
            onChange={this.handleEnd}
            value={this.state.endDate}
            type="date"
            name="pos-end"
            id="pos-end"
          />
        </form>
      </div>
    );

    let view = compFunctions.getView(UI, form, this.props.edit, this.state);

    return <div>{view}</div>;
  }
}

export default Position;
