import React, { Fragment, useEffect, useState } from "react";
import "./App.css";
import Input from "./Input";

function HelloWorld(props) {
  const [isTrue, setIsTrue] = useState(true);
  const [crowd, setCrowd] = useState([]);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [dob, setDob] = useState("");

  const toggleTrue = () => {
    if (isTrue) {
      setIsTrue(false);
      return;
    }
    setIsTrue(true);
  };

  useEffect(() => {
    console.log("useEffect fired!");

    let people = [
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
    ];

    setCrowd(people);
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(firstName, lastName, dob);
  };

  return (
    <>
      <hr />
      <h1 className="h1-green">{props.msg}</h1>
      <hr />
      {isTrue && (
        <Fragment>
          <p>The Current value if isTrue is true</p>
          <hr />
        </Fragment>
      )}
      <hr />
      {isTrue ? <p>Is True</p> : <p>Is False</p>}
      <hr />
      <a href="#!" className="btn btn-outline-primary" onClick={toggleTrue}>
        Toggle isTrue
      </a>
      <hr />

      <form autoComplete="off" onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="first-name" className="form-label">
            First Name
          </label>
          <input
            type="text"
            name="first-name"
            id="first-name"
            autoComplete="first-name-new"
            className="form-control"
            onChange={(event) => setFirstName(event.target.value)}
          />
        </div>

        <Input
          title="Last Name"
          type="text"
          name="last-name"
          id="last-name"
          autoComplete="last-name-new"
          className="form-control"
          onChange={(event) => setLastName(event.target.value)}
        />

        <Input
          title="Date of Birth"
          type="date"
          name="dob"
          id="dob"
          autoComplete="dob-new"
          className="form-control"
          onChange={(event) => setDob(event.target.value)}
        />

        <input type="submit" value="Submit" className="btn btn-primary" />
      </form>

      <div>
        First Name: {firstName} <br />
        Last Name: {lastName} <br />
        Date of Birth: {dob}
        <br />
      </div>

      <hr />
      <h3>People</h3>
      <ul className="list-group">
        {crowd.map((m) => (
          <li key={m.id} className="list-group-item">
            {m.firstName} {m.lastName}
          </li>
        ))}
      </ul>
    </>
  );
}

export default HelloWorld;
