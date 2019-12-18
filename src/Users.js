import React, { Component } from "react";

import { Card, Button } from "react-bootstrap";

import "./Users.css";

class Users extends Component {
  state = {
    users: [
      { name: "Diego", progress: "Not Started" },
      { name: "Dany", progress: "Not Started" },
      { name: "CodyMac", progress: "In Progress" },
      { name: "Cole", progress: "Finshed" },
      { name: "PWilly", progress: "Not Started" }
    ]
  };

  renderUsers = () => {
    return this.state.users.map(user => {
      return (
        <div key={user.name} style={{ paddingTop: "1%", boxShadow: "" }}>
          <Card className="card">
            <Card.Header>{user.name}</Card.Header>
            <Card.Body>
              {/* <Card.Title>Progress</Card.Title> */}
              <Card.Text>{user.progress}</Card.Text>
              <Button
                variant="primary"
                onClick={() => this.props.showDelPrompt()}
              >
                Go to Profile
              </Button>
            </Card.Body>
          </Card>
        </div>
      );
    });
  };

  render() {
    return (
      <div
        style={{
          top: "0",
          right: "0",
          bottom: "0",
          left: "0",
          display: "flex",
          justifyContent: "center"
        }}
      >
        <div
          style={{
            width: "70%"
          }}
        >
          {this.renderUsers()}
        </div>
      </div>
    );
  }
}

export default Users;
