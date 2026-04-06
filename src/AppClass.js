import React, { Component } from "react";
import "./AppClass.css";
import Input from "./Input";

export default class AppClass extends Component {
  constructor(props) {
    super(props);

    this.lastNameRef = React.createRef();
    this.firstNameRef = React.createRef();
    this.dobRef = React.createRef();

    this.state = {
      isTrue: false,
      crowd: [],
    };
  }

  setFirstName(newName) {
    this.setState({ firstName: newName });
  }

  handleSubmit = (event) => {
    event.preventDefault();

    if (this.state.lastName !== "") {
      this.addPerson(this.state.firstName, this.state.lastName, this.state.dob);
    }
  };

  addPerson(newFirst, newLast, newDob) {
    // オブジェクトの作成
    let newPerson = {
      id: this.state.crowd.length + 1,
      firstName: newFirst,
      lastName: newLast,
      dob: newDob,
    };

    const newList = this.state.crowd.concat(newPerson);

    const sorted = newList.sort((a, b) => {
      if (a.lastName < b.lastName) {
        return -1;
      } else if (a.lastName > b.lastName) {
        return 1;
      } else {
        return 0;
      }
    });

    this.setState({ crowd: sorted });
    this.setState({ firstName: "", lastName: "", dob: "" });

    this.firstNameRef.current.value = "";
    this.lastNameRef.current.value = "";
    this.dobRef.current.value = "";
  }

  componentDidMount() {
    this.setState({
      firstName: "",
      lastName: "",
      dob: "",
      crowd: [
        {
          id: 1,
          firstName: "Mary",
          lastName: "Jones",
          dob: "1997-05-02",
        },
        {
          id: 2,
          firstName: "Jack",
          lastName: "Smith",
          dob: "1999-02-04",
        },
      ],
    });
  }

  toggleTrue = () => {
    if (this.state.isTrue) {
      this.setState({ isTrue: false });
      return;
    }
    this.setState({
      isTrue: true,
    });
  };

  render() {
    return (
      <>
        <hr />
        <h1 className="h1-green">{this.props.msg}</h1>
        <hr />
        {this.state.isTrue && (
          <>
            <p>The Current value if isTrue is true</p>
            <hr />
          </>
        )}
        <hr />
        {this.state.isTrue ? <p>Is True</p> : <p>Is False</p>}
        <hr />
        <a
          href="#!"
          className="btn btn-outline-primary"
          onClick={this.toggleTrue}
        >
          Toggle isTrue
        </a>

        <hr />

        <form autoComplete="off" onSubmit={this.handleSubmit}>
          <div className="mb-3">
            <label className="form-label" htmlFor="first-name">
              First Name
            </label>
            <input
              type="text"
              name="first-name"
              id="first-name"
              autoComplete="first-name-new"
              className="form-control"
              ref={this.firstNameRef}
              onChange={(event) => this.setFirstName(event.target.value)}
            />
          </div>

          <Input
            title="Last Name"
            type="text"
            ref={this.lastNameRef}
            name="last-name"
            id="last-name"
            autoComplete="last-name-new"
            className="form-control"
            onChange={(event) =>
              this.setState({ lastName: event.target.value })
            }
          />

          <Input
            title="Date of Birth"
            type="date"
            ref={this.dobRef}
            name="dob"
            id="dob"
            autoComplete="dob-new"
            className="form-control"
            onChange={(event) => this.setState({ dob: event.target.value })}
          />

          <input type="submit" value="Submit" className="btn btn-primary" />
        </form>

        <div>
          First Name: {this.state.firstName} <br />
          Last Name: {this.state.lastName} <br />
          Date of Birth: {this.state.dob} <br />
        </div>

        <hr />
        <h3>People</h3>
        <ul className="list-group">
          {this.state.crowd.map((m) => (
            <li key={m.id} className="list-group-item">
              {m.firstName} {m.lastName}
            </li>
          ))}
        </ul>
      </>
    );
  }
}
