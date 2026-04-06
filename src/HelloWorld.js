import React, { Fragment, useState } from "react";
import "./HelloWorld.css";

function HelloWorld(props) {
  const [isTrue, setIsTrue] = useState(true);

  const toggleTrue = () => {
    if (isTrue) {
      setIsTrue(false);
      return;
    }
    setIsTrue(true);
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
    </>
  );
}

export default HelloWorld;
