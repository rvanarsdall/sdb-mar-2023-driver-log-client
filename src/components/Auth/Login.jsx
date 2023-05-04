import React, { useState } from "react";

import { Button, Form, FormGroup, Input, Label } from "reactstrap";

const Login = (props) => {
  // UseState variables
  const [email, setEmail] = useState("test1@test.com");
  const [password, setPassword] = useState("password1234");
  // function here
  async function handleSubmit(e) {
    e.preventDefault();
    let url = `http://localhost:4000/user/login`;

    let bodyObject = {
      email: email,
      password: password,
    };

    let myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const requestOptions = {
      headers: myHeaders,
      method: "POST",
      body: JSON.stringify(bodyObject),
    };

    try {
      const response = await fetch(url, requestOptions);
      const data = await response.json();
      console.log(data);
      props.updateToken(data.token);
    } catch (error) {
      console.error(error.message);
    }
  }
  return (
    <>
      <h2>Login</h2>
      <Form onSubmit={handleSubmit}>
        {/* Start of email */}
        <FormGroup>
          <Label>Email:</Label>
          <Input
            value={email}
            type="email"
            required
            onChange={(e) => setEmail(e.target.value)}
          />
        </FormGroup>
        {/* End of email */}

        {/* Start of Password */}
        <FormGroup>
          <Label>Password:</Label>
          <Input
            value={password}
            type="password"
            required
            onChange={(e) => setPassword(e.target.value)}
          />
        </FormGroup>
        {/* End of Password */}

        <div className="d-grid gap-2 mb-4">
          <Button type="submit" color="danger">
            Login
          </Button>
        </div>
      </Form>
    </>
  );
};

export default Login;
