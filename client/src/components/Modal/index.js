import React from "react";
// import { render } from "react-dom";
import { Button, Modal } from "semantic-ui-react";
import "semantic-ui-css/semantic.css";

class PopupExampleClick extends React.Component {
  state = { open: false, open2: false };

  render() {
    return (
      
      <div>
        <Button content="Change Email" onClick={() => this.setState({ open: true })} />
        <Modal
          open={this.state.open}
          onClose={() => this.setState({ open: false })}
        >
          <Modal.Content>
            <Button
              content="Enter Your New Email"
              onClick={() => this.setState({ open2: true })}
            />
            <Modal open={this.state.open2}>
              <Modal.Content>
                <Button onClick={() => this.setState({ open2: false })}>
                  Successfully Updated Your Email

                </Button>
                <canvas />
              </Modal.Content>
            </Modal>
          </Modal.Content>
        </Modal>
      </div>
    );
  }
}

export default PopupExampleClick;
