/* eslint-disable no-unused-vars */
import React, { useContext, useState } from "react";
import { Button, Col, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";
import { UserContext } from "../contexts/UserContext";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsloading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const { setUserDataHandler } = useContext(UserContext);

  const naviagate = useNavigate();

  const { loginHandler: contextloginHandler } = useContext(AuthContext);

  const showError = (msg) => {
    setErrorMsg(msg);
    setTimeout(() => {
      setErrorMsg("");
    }, 5000);
  };

  const loginHandler = () => {
    if (!(username && password && username.length > 3 && password.length > 3)) {
      showError("Enter InValid username and password");
      return;
    }
    setIsloading(true);
    setTimeout(() => {
      setIsloading(false);
      if (username === password) {
        contextloginHandler();
        setUserDataHandler(username);
        naviagate("/");
      } else {
        showError("Invalid username and password");
      }
    }, 1500);
  };
  const resetHandler = () => {
    setPassword("");
    setUsername("");
    setErrorMsg("");
  };
  return (
    <>
      <center>
        <div style={{ display: "inline-block" }}>
          <Row>
            <Col>
              <label htmlFor="username">Username</label>
            </Col>
            <Col>
              <input
                type="text"
                id="username"
                placeholder="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </Col>
          </Row>
          <Row>
            <Col>
              <label htmlFor="pass">Password</label>
            </Col>
            <Col>
              <input
                type="password"
                id="pass"
                placeholder="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Col>
          </Row>
          <Row>
            <Col>
              <Button variant="primary" onClick={loginHandler}>
                Login
              </Button>
            </Col>
            <Col>
              <Button variant="link" onClick={resetHandler}>
                Reset
              </Button>
            </Col>
          </Row>
          {errorMsg && (
            <Row className="mt-3 md-3">
              <p className="text-danger fw-bold">{errorMsg}</p>
            </Row>
          )}
        </div>
      </center>
    </>
  );
};

export default Login;
