import React from 'react';
import ReactDOM from 'react-dom';
import Axios from 'axios';
import { Route , withRouter} from "react-router-dom";
import {Link} from "react-router-dom";
import ValidatorField from '../.././validation/validation.js';
import Error from './Error.jsx';
export default class Login extends React.Component{
  constructor(props,context){
    super(props)
    this.buttonClick = this.buttonClick.bind(this);
    this.state = {email:null,password:null,usernameError:null,passwordError:null};
    context.router;
  }

  buttonClick(e){
    var self = this;

    if(e.target.id =="userName"){
      this.setState({email:e.target.value});
      this.setState({usernameError:null});

    }
    else if(e.target.id =="password")
    {
    this.setState({password:e.target.value});
    this.setState({passwordError:null});

    }
    else if(e.target.id =="login"){
      e.preventDefault();
      console.log("In login button")
      console.log("Email is",this.state.email)
      console.log("Password is",this.state.password)
      console.log("Value returned by ValidateEmail is: ",ValidatorField.validateEmail(this.state.email));
      if(!ValidatorField.validateEmail(this.state.email)){
        this.setState({usernameError:"Enter valid username"});
      }else{
        this.setState({usernameError:null});
      }

      console.log("Test call for validatepassword ", ValidatorField.validatePassword(this.state.password));
      if(!ValidatorField.validatePassword(this.state.password)){
        this.setState({passwordError:"Enter valid password"});
      }else{
          this.setState({passwordError:null});
      }

    Axios.post('http://localhost:3000/login', {
    email:this.state.email,
    password:this.state.password
  })
    .then(function (response) {
      console.log(response);
     if(response.status == "200")

      self.context.router.push('/access');
    })
    .catch(function (error) {
      console.log(error);
    });

  }
  }
  render(){
    return(
    <table className="tableStyle">
    <tbody>
    <tr>
    <td>
        <label className="form-control labelStyle"> Login </label>
    </td>
    </tr>
    <tr>
      <td>
        <input type="text"placeholder="UserName" className="form-control" id="userName" onKeyUp={this.buttonClick}/>
      </td>
      <td>
        <Error message={this.state.usernameError} />
      </td>
    </tr>
    <tr>
      <td>
        <input type="password"placeholder="Password" className="form-control" id="password" onKeyUp={this.buttonClick}/>
      </td>
      <td>
        <Error message={this.state.passwordError} />
      </td>
    </tr>
    <tr>
    <td>
    <Link to="access">  <input type="submit" id="login" className="btn btn-primary" onClick={this.buttonClick}/></Link>
    </td>
    </tr>
    </tbody>
  </table>

    )
  }
}
//Login.contextTypes = {
  //  router: React.PropTypes.func.isRequired
//};
