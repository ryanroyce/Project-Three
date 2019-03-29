// import React from "react";
// import "./style.css";

// function LoginForm() {
//   return (
//       <div className="ui middle aligned center aligned grid" id="body">
//         <div className="six wide column">
//           <h2 className="ui black image header">
//             <div className="content">
//               Log-in to your account
//             </div>
//           </h2>
//           {/* login form */}
//           <form className="ui large form">
//             <div className="ui stacked segment">
//               <div className="field">
//                 <div className="ui left icon input">
//                   <i className="user icon"></i>
//                   <input type="text" name="email" placeholder="E-mail address" />
//                 </div>
//               </div>

//               <div className="field">
//                 <div className="ui left icon input">
//                   <i className="lock icon"></i>
//                   <input type="password" name="password" placeholder="Password" />
//                 </div>
//               </div>
//               <a href="/search">
//               <div className="ui fluid large grey submit button">Login</div>
//               </a>
//             </div>

//             <div className="ui error message"></div>
//           </form>

//           <div className="ui message">
//           <i className="us flag"></i>
//             New to us? 
            
//             <button className="ui button yellow create_btn" type="button" id="signup">Sign Up</button>
//           </div>
       
//           {/* signup modal */}
//           <div className="ui modal signup-modal">
//             <i className="close icon"></i>
//             <div className="header"> Sign Up for an account</div>

//             <div className="image content">
//               <div className="description">
//                 {/* sign up form */}
//                 <form className="ui large form">
//                   <div className="ui stacked segment">
//                     <div className="field">
//                       <div className="ui left icon input">
//                         <i className="user icon"></i>
//                         <input type="text" name="email" placeholder="E-mail address" />
//                       </div>
//                     </div>

//                     <div className="field">
//                       <div className="ui left icon input">
//                         <i className="lock icon"></i>
//                         <input type="password" name="password" placeholder="Password" />
//                       </div>
//                     </div>
              
//                     <a href="/">
//                     <div className="ui fluid large grey submit button">Sign Up</div>
//                     </a>
//                   </div>

//                     <div className="ui error message"></div>
//                  </form>
//                </div>
//              </div>
//            </div>
//          </div>
//        </div>
//   );
// }

// export default LoginForm;

import React, { Component } from "react";
import { Redirect } from 'react-router-dom'
import "./style.css";
import axios from 'axios'
import API from "../../utils/API"

// eslint-disable-next-line no-undef
class LoginForm extends Component {
  constructor() {
    super()
    this.state = {
      username: '',
      password: '',
      redirectTo: null
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }
  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    })
  }


  handleSubmit(event) {
    event.preventDefault()
    console.log('handleSubmit BOI')

    if (this.state.username && this.state.password) {
      API.getUser({
          username: this.state.username,
          password: this.state.password
      })
        .then(res => {
              console.log("output:"+res.data);
               if(res.data){
                 this.setState({ redirectTo:"/settings"})
                console.log("inside output: " + res.data);

                // window.location.href="/settings";
              } else
              console.log("login machine broke")
              this.setState({ redirectTo: null});
        })
        .catch(err => console.log(err));
    }
  }

  render() {
    if (this.state.redirectTo) {
      return <Redirect to={{ pathname: this.state.redirectTo }} />
    } else {
    return (
      <div>
        <h4>Login</h4>
        <form className="form-horizontal">
          <div className="form-group">
            <div className="col-1 col-ml-auto">
              <label className="form-label" htmlFor="username">Username</label>
            </div>
            <div className="col-3 col-mr-auto">
              <input className="form-input"
                type="text"
                id="username"
                name="username"
                placeholder="Username"
                value={this.state.username}
                onChange={this.handleChange}
              />
            </div>
          </div>
          <div className="form-group">
            <div className="col-1 col-ml-auto">
              <label className="form-label" htmlFor="password">Password: </label>
            </div>
            <div className="col-3 col-mr-auto">
              <input className="form-input"
                placeholder="password"
                type="password"
                name="password"
                value={this.state.password}
                onChange={this.handleChange}
              />
            </div>
          </div>
          <div className="form-group ">
            <div className="col-7"></div>
            <button
              className="btn btn-primary col-1 col-mr-auto"
              onClick={this.handleSubmit}
              type="submit">Login</button>
          </div>
        </form>
      </div>
    )
  }
}}

export default LoginForm;