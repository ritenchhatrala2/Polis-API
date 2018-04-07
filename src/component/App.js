/*global chrome*/
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import img_avatar2 from './../images/img_avatar2.png';
import axios from 'axios';
import { browserHistory } from 'react-router'
import Header from './Header';
import Footer from './Footer';
//import NewsSource from './NewsSource';
export class App extends Component {
	constructor() {
        super();
        this.state = {
          username: '',
          password: '',
        };
      }

      onChange = (e) => {
        // Because we named the inputs to match their corresponding values in state, it's
        // super easy to update the state
        const state = this.state
        state[e.target.name] = e.target.value;
        this.setState(state);
      }

      onSubmit = (e) => {
        e.preventDefault();
        // get our form data out of state
        const { username, password } = this.state;

		console.log("onsubmin");
        axios.post("http://localhost:8081/api/authenticate",
		{ username, password })
          .then((result) => {
            //access the results here....
			console.log(result.data.token);
			if(result.data.token == undefined){
				browserHistory.push({
				pathname:'/',
			});
			}
			else{
				browserHistory.push({
					pathname:'/Welcome',
					state: {token:result.data.token}
				});
			}
          });
      }
  render() {
	  const { username, password } = this.state;
    return (
	<div>
	<Header />
      <form onSubmit={this.onSubmit}>
		  <div class="imgcontainer">
			<img src={img_avatar2} alt="Avatar" class="avatar" />
		  </div>

		  <div class="app_container">
			<label for="uname"><b>Username</b></label>
			<input type="text" placeholder="Enter Username" value={username} name="username" onChange={this.onChange} required />

			<label for="psw"><b>Password</b></label>
			<input type="password" placeholder="Enter Password" value={password} name="password" onChange={this.onChange} required />

			<button type="submit">Login</button>
		  </div>
		</form>
		<Footer />
	</div>
    );
  }
}

export default App;
