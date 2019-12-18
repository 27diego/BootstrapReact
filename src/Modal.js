import React, { Component } from "react";

import BootstrapModal from "react-bootstrap/Modal";
import { Button } from "react-bootstrap";

class Modal extends Component {
  render() {
    return (
      <BootstrapModal show={this.props.show} onHide={this.props.close}>
        <BootstrapModal.Header closeButton>
          <BootstrapModal.Title>Modal heading</BootstrapModal.Title>
        </BootstrapModal.Header>
        <BootstrapModal.Body>
          Woohoo, you're reading this text in a modal!
        </BootstrapModal.Body>
        <BootstrapModal.Footer>
          <Button variant="secondary" onClick={this.props.close}>
            Close
          </Button>
          <Button variant="primary" onClick={this.props.close}>
            Save Changes
          </Button>
        </BootstrapModal.Footer>
      </BootstrapModal>
    );
  }
}

export default Modal;
