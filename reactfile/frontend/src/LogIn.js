import './LogIn.css';
import React from 'react';

import {
  Link
} from "react-router-dom";


class LogIn extends React.Component {
  constructor(props) {
  super(props);
  this.state = {value: ''};


  this.handleChange = this.handleChange.bind(this);
  this.handleSubmit=this.handleSubmit.bind(this);
}

handleChange(event) {
  this.setState({value: event.target.value});

}
  handleSubmit(event){
    this.props.history.push('/kjjk');
    console.log('huhu');
    event.preventDefault();
  }

  render() {
    console.log(this.state.value);
    return (
      <center>
      <div className="LogIn">
      <header className="LogInHeader">
      <h3>D-Book Log in :</h3>

      <form onSubmit={this.handleSubmit}>
      <label>
        <input type="text" value={this.state.value} onChange={this.handleChange} placeholder={'Enter your username...'} />
        </label>
        <br></br>
        <label>
          <input type="password" value1={this.state.value} onChange1={this.handleChange} placeholder={'Enter your password...'} />
          </label>
      <Link className="btn btn-primary small" to="/Home">Log In</Link>

      </form>
      </header>
      </div>
      </center>
    );
  }
}

export default LogIn;
