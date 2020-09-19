import React, { useState, useEffect } from "react";
import API from "./utils/API";
import "bootstrap/dist/css/bootstrap.min.css";
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";

import Table from "react-bootstrap/Table";
import "./App.css";

function App() {
  const [employees, setEmployees] = useState([]);
  const [allEmployees, setAllEmployees] = useState([]);

  useEffect(() => {
    API.getEmployees().then(({ data }) => {
      setEmployees(data.results);
      setAllEmployees(data.results);
    });
  }, []);

  const search = (e) => {
    const searchValue = e.target.value;
    const searchEmployees = allEmployees.filter((employees) => {
      if (
        employees.name.first.toLowerCase().includes(searchValue.toLowerCase())
      ) {
        return true;
      }
      return false;
    });
    setEmployees(searchEmployees);
  };

  const sortFirst = () => {
    const sortedEmployees = employees.sort((a, b) => {
      if (a.name.first < b.name.first) {
        return -1;
      } else if (a.name.first > b.name.first) {
        return 1;
      } else {
        return 0;
      }
    });
    setEmployees([...sortedEmployees]);
  };

  const sortLast = () => {
    const sortedEmployees = employees.sort((a, b) => {
      if (a.name.last < b.name.last) {
        return -1;
      } else if (a.name.last > b.name.last) {
        return 1;
      } else {
        return 0;
      }
    });
    setEmployees([...sortedEmployees]);
  };

  return (
    <div className="App">
      <Jumbotron fluid>
        <Container>
          <h1>Employee Directory</h1>
          <h6>Enter a first name to search for an employee</h6>
          <input className="input-group-lg" onChange={search} />
          <br />
          <br />
          <button onClick={sortFirst}>
            Sort employees alphabetically by first name
          </button>
          <br />
          <br />
          <button onClick={sortLast}>
            Sort employees alphabetically by last name
          </button>
        </Container>
      </Jumbotron>

      <div className="container">
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email Address</th>
              <th>Phone Number</th>
              <th>Employee Photo</th>
            </tr>
          </thead>
          <tbody>
            {employees.map((employees) => {
              return (
                <tr key={employees.id.value}>
                  <th>{employees.name.first}</th>
                  <th>{employees.name.last}</th>
                  <th>{employees.email}</th>
                  <th>{employees.phone}</th>
                  <th>
                    <img src={employees.picture.thumbnail} alt="employee"></img>
                  </th>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </div>
    </div>
  );
}

export default App;
