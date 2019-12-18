import React from "react";
import "./App.css";
import Modal from "./Modal";
import Users from "./Users";

import { Button, Dropdown, DropdownButton } from "react-bootstrap";

class App extends React.Component {
  state = {
    showModal: false
  };

  closeModal = () => {
    this.setState({ showModal: false });
  };

  showDelPropmt = () => {
    this.setState({ showModal: true });
  };

  greeting = () => {
    const date = new Date();
    const time = date.getHours();

    if (time < 12) {
      return "Good Morning, ";
    } else if (time > 12) {
      return "Good Afternoon, ";
    }
  };

  render() {
    return (
      <div style={{ paddingTop: "3%", marginRight: "10%" }} className="App ">
        <span>CIG Dashboard</span>
        <div className="container">
          <div className="users left-half">
            <Users showDelPrompt={this.showDelPropmt} />
          </div>
          <div className="admin">
            <span style={{ width: "20%" }}>{this.greeting()} Admin</span>
            <div style={{ paddingTop: "2%" }}>Actions: </div>
            <div className="admin-section">
              <div>Manage Users</div>
              <Button variant="success">Create User</Button>
              <div
                style={{
                  width: ".5%",
                  height: "auto",
                  display: "inline-block"
                }}
              />
              <Button variant="warning">Edit Users</Button>
            </div>
            <div style={{ paddingTop: "5%" }}>Filter List</div>
            <div className="filterlists, btn-group">
              <span>Order:</span>
              <DropdownButton id="dropdown-basic-button" title="state value">
                <Dropdown.Item>Ascending</Dropdown.Item>
                <Dropdown.Item>Descending</Dropdown.Item>
              </DropdownButton>
              <div
                style={{
                  paddingLeft: "1rem",
                  height: "auto",
                  display: "inline-block"
                }}
              />
              <span>Filter:</span>
              <DropdownButton id="dropdown-basic-button" title="state value">
                <Dropdown.Item>First Name</Dropdown.Item>
                <Dropdown.Item>Last Name</Dropdown.Item>
                <Dropdown.Item>Progress</Dropdown.Item>
              </DropdownButton>
            </div>
          </div>
          <div className="modal">
            <button>{"Open modal"}</button>
            {this.state.showModal ? (
              <Modal show={this.state.showModal} close={this.closeModal} />
            ) : (
              ""
            )}
          </div>
          <div className="right-half"></div>
        </div>
      </div>
    );
  }
}

export default App;
