import React, { useState } from "react";

function App(props) {
  const [isCover, setCover] = useState(false);

  const activeCover = () => {
    return setCover(!isCover);
  };

  return (
    <div className="main">
      <div className="login-card">
        <div className={isCover ? "cover" : "cover active"}></div>
        <Login toogleCover={activeCover} />
        <Register toogleCover={activeCover} />
      </div>
    </div>
  );
}

function Login(props) {
  return (
    <div className="login">
      <Card_form
        password_type="password"
        button="Login"
        content="Create new account!"
        toogleCover={props.toogleCover}
      />
    </div>
  );
}

function Register(props) {
  return (
    <div className="register">
      <Card_form
        password_type="text"
        button="Create"
        content="Already have an account!"
        toogleCover={props.toogleCover}
      />
    </div>
  );
}

function Card_form(props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const clearInputs = () => {
    setUsername("");
    setPassword("");
  };

  const activeCover = () => {
    clearInputs();
    props.toogleCover();
  };

  return (
    <div className="element-container" id={props.pid}>
      <div className="input-container">
        <h4>UserName</h4>
        <input
          type="text"
          placeholder="Type here ..."
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div className="input-container">
        <h4>Password</h4>
        <input
          type={props.password_type}
          placeholder="Type here ..."
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button onClick={clearInputs}>{props.button}</button>
      <p onClick={activeCover}>{props.content}</p>
    </div>
  );
}

export default App;
