// import React from "react";
// // import { render } from "react-dom";
// import { Button, Modal, Input } from "semantic-ui-react";
// import "semantic-ui-css/semantic.css";

// class PopupExampleClick extends React.Component {
//   state = { open: false, open2: false };

//   render() {
//     return (
      
//       <div>
//         <Button style = {{width : "182px"}} content="Change Email" onClick={() => this.setState({ open: true, open2:false })} />
//         <Modal
//           open={this.state.open}
//           onClose={() => this.setState({ open: false })}
//         >
//           <Modal.Content> <Input placeholder='Enter Your New Email' />
//             <Button
//               content="Save"
//               onClick={() => this.setState({ open2: true })}
//             />
//             <Modal open={this.state.open2}>
//               <Modal.Content> 
//                 <Button onClick={() => this.setState({ open: false })}>
//                   Successfully Updated Your Email

//                 </Button>
//                 <canvas />
//               </Modal.Content>
//             </Modal>
//           </Modal.Content>
//         </Modal>
//       </div>
//     );
//   }
// }

// export default PopupExampleClick;


import React, { Component } from 'react'
import { Button, Confirm } from 'semantic-ui-react'

class SignUpModal extends Component {
  state = { open: false }

  open = () => this.setState({ open: true })
  close = () => this.setState({ open: false })

  render() {
    return (
      <div>
        <Button onClick={this.open}>Show</Button>
        <Confirm open={this.state.open} onCancel={this.close} onConfirm={this.close} > 
        <div className="content">
        asdadads</div>
        </Confirm>
      </div>
    )
  }
}

export default SignUpModal