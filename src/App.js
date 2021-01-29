import React, { Component } from "react";
import CV from "./components/CV";

class App extends Component {
  
  render() {
    return (
      <div>
        <h1>My CV Application!</h1>
        <CV />
      </div>
    )
  }
}
/*  
class CV extends Component {
  render() {
    return (
      <div>
        <Personal />
        <Education />
        <Distinctions />
        <Skills />
        <Experience />
      </div>
    )
  }
} */

/* class Personal extends Component {
  render() {
    return (
      <div>
        <Name />
        <Contact variety="email" />
        <Contact variety="phone" />
        <Contact variety="address" />
        <input type="text" kind="name" />
        <input type="text" kind="contact" />
        <input type="text" kind="contact" />
        <input type="text" kind="contact" />
      </div>
    )
  }
}

class Name extends Component {

}

class Contact extends Component {

}

class Education extends Component {
  render() {
    return(
      <div>
        <AddButton />
        <School />
      </div>
    )
  }
}

class School extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      startDate: "",
      endDate: "",
      major: "",
      GPA: 4.00,
    }
  }
  render() {
    return(
      <div>
        <h2>{this.state.name}</h2>
        <h4>{this.state.startDate}{this.state.endDate}</h4>
        <h4>{this.state.major}</h4>
        <h4>{this.state.GPA}</h4>
        <input type="text" />
        <input type="date" />
        <input type="date" />
        <input type="text" />
        <input type="number" />
        <button onClick={remove}></button>
      </div>
    )
  }
}

class Distinctions extends Component {
  render() {
    return(
      <div>
        <AddButton />
        <Distinction />
      </div>
    )
  }
}

class Distinction extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      date: "",
    }
  }
  render() {
    return(
      <div>
        <h3>{this.state.title}</h3>
        <h4>{this.state.date}</h4>
        <input type="text" />
        <input type="date" />
        <button onClick={remove}></button>
      </div>
    )
  }
} 

class Skills extends Component {
  render() {
    return(
      <div>
        <AddButton />
        <Skill />
      </div>
    )
  }
}

class Skill extends Component {
  constructor(props) {
    super(props);
    this.state = {
      skill: ""
    }
  }
  render() {
    return(
      <div>
        <h4>{this.state.skill}</h4>
        <input type="text" />
        <button onClick={remove}></button>
      </div>
    )
  }
}

class Experience extends Component {
  render() {
    return(
      <div>
        <AddButton />
        <Position />
      </div>
    )
  }
}

class Position extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      description: "",
      dateFrom: "",
      dateTo: "",
    }
  }
  render() {
    return(
      <div>
        <h2>{this.state.name}</h2>
        <h4>{this.state.description}</h4>
        <h4>{this.state.dateFrom}</h4>
        <h4>{this.state.dateTo}</h4>
        <input type="text" />
        <input type="text" />
        <input type="date" />
        <input type="date" />
        <button onClick={remove}></button>
      </div>
    )
  }
}

class AddButton extends Component {
  constructor(props) {
    super(props);
    this.addItem = this.addItem.bind(this);
  }

  addItem()

  render() {
    <button onClick={this.addItem}>+</button>
  }
}
 */

export default App;
