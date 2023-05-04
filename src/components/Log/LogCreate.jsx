import React, { useState } from "react";

import { Form, FormGroup, Input, Label, Button } from "reactstrap";

const LogCreate = (props) => {
  const [mode, setMode] = useState("");
  const [totalHours, setTotalHours] = useState(0);
  const [totalMiles, setTotalMiles] = useState(0);
  const [licensePlate, setLicensePlate] = useState("");
  // functions

  async function handleSubmit(e) {
    e.preventDefault();
    let url = `http://localhost:4000/log/create`;

    let bodyObject = {
      mode: mode,
      totalHours: totalHours,
      totalMiles: totalMiles,
      licensePlate: licensePlate,
    };

    let myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Authorization", props.token);
    // May need something else in our headers

    const requestOptions = {
      headers: myHeaders,
      method: "POST",
      body: JSON.stringify(bodyObject),
    };

    try {
      const response = await fetch(url, requestOptions);
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error(error.message);
    }
  }
  return (
    <>
      <h3>Create a Driver Log</h3>
      <Form className="mb-5" onSubmit={handleSubmit}>
        <FormGroup>
          <Label>Mode:</Label>
          <Input
            type="text"
            value={mode}
            onChange={(e) => setMode(e.target.value)}
          />
        </FormGroup>

        <FormGroup>
          <Label>Total Hours:</Label>
          <Input
            type="number"
            value={totalHours}
            onChange={(e) => setTotalHours(e.target.value)}
          />
        </FormGroup>

        <FormGroup>
          <Label>Total Miles:</Label>
          <Input
            type="number"
            value={totalMiles}
            onChange={(e) => setTotalMiles(e.target.value)}
          />
        </FormGroup>
        <FormGroup>
          <Label>License Plate:</Label>
          <Input
            type="text"
            value={licensePlate}
            onChange={(e) => setLicensePlate(e.target.value)}
          />
        </FormGroup>
        <div className="d-grid gap-2 mb-4">
          <Button type="submit" color="success">
            Save Log
          </Button>
        </div>
      </Form>
    </>
  );
};

export default LogCreate;
