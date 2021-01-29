import React, { Component } from "react";
import mail from "../assets/mail.png";
import phone from "../assets/phone.png";
import address from "../assets/address.png";
import compFunctions from "../compFunctions";

class Info extends Component {
  constructor(props) {
    super(props);

    this.state = {
      text: props.type,
    };
  }

  handleText = (e) => {
    this.setState({
      text: e.target.value,
    });
  };

  render() {
    let UI;
    switch (this.props.type) {
      case "Name":
        UI = <h2>{this.state.text}</h2>;
        break;
      case "Email":
        UI = (
          <div>
            <img src={mail} alt="mail icon" height="50" width="50" />
            <h3>{this.state.text}</h3>
          </div>
        );
        break;
      case "Phone":
        UI = (
          <div>
            <img src={phone} alt="phone icon" height="50" width="50" />
            <h3>{this.state.text}</h3>
          </div>
        );
        break;
      case "Address":
        UI = (
          <div>
            <img src={address} alt="home icon" height="50" width="50" />
            <h3>{this.state.text}</h3>
          </div>
        );
        break;
      default:
        UI = <div></div>;
    }

    let form = (
      <div>
        <form>
          <label htmlFor="personal">{`${this.props.type}: `}</label>
          <input
            onChange={this.handleText}
            type="text"
            id="personal"
            name="personal"
            value={this.state.text}
          />
        </form>
      </div>
    );

    let view = compFunctions.getView(UI, form, this.props.edit, this.state);

    return <div>{view}</div>;
  }
}

export default Info;
