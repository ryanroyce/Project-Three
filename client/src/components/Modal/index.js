import React from 'react'
import { Button, Header, Modal, Confirm } from 'semantic-ui-react'

const ModalModalExample = () => (
  <Modal trigger={<Button>Show Modal</Button>}>
    <Modal.Header>Select a Photo</Modal.Header>
    <Modal.Content image>
      {/* <Image wrapped size='medium' src='/images/avatar/large/rachel.png' /> */}
      <Modal.Description>
        <Header>Sign Up Confirmed!</Header>
        <p>Please login with your newly created Username & Password</p>
      </Modal.Description>
      <Button className="ui fluid large yellow submit button" 
									 onClick={(e) => {
										// e.preventDefault();
										// this.handleForm(formData);
										this.open(e);
										// e.preventDefault();
										this.handleSubmit(e);
										// this.loadUser(e);
								}}

									// onClick={this.open} 
									// onClick={this.handleSubmit}
									type="submit">Sign Up!</Button>
        <Confirm open={this.state.open} onCancel={this.loadUser} onConfirm={this.loadUser} ></Confirm>
					
    </Modal.Content>
  </Modal>
)

export default ModalModalExample
