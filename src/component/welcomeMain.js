import React, { Component } from 'react';
import logo from './logo.svg';
import './welcomemain.css';
import './bootstrap.min.css';
import Header from './Header';
import Footer from './Footer';
import axios from 'axios';
import DisplayNA from './DisplayNA'
import { browserHistory, Router,Route } from 'react-router'

class WelcomeMain extends Component {
	constructor(props) {
        super(props);
        this.state = {
          Source: '',
        };
		if(this.props.location.state == undefined || this.props.location.state.token == undefined){
			browserHistory.push({
				pathname:'/',
			});
		}
      }

      onClick = (e,s) => {
        e.preventDefault();
        // get our form data out of state
        const { Source } = this.state;
		console.log(s);
		browserHistory.push({
				pathname:'/DisplayNA',
				query: { d:s },
				state: {token:this.props.location.state}
			});
        /*axios.get("http://192.168.1.10:8081/api/source", {
		params: {
		  source: s
		}
		})
          .then((result) => {
            //access the results here....
			var d = result.data.message;
			console.log(result.data.message);
			browserHistory.push({
				pathname:'/DisplayNA',
				query: { d }
			});
          });*/
      }
  render() {
    return (
			<div>
			<Header />
      <div class="container">
		  <div class="row">
			<div class="col-md-12">
			  <h1>
				<strong>News Sources</strong>
			  </h1>
			</div>
		  </div>
		  <div class="row">
			<div class="col-sm-4">
				<a onClick={((e) =>this.onClick(e,'bbc-news'))} class="tile purple">
				  <h3 class="title">bbc News</h3>
				   <p>Get Most Recent News</p>
				</a>
			</div>
			<div class="col-sm-4">
				<a onClick={((e) =>this.onClick(e,'bloomberg'))} class="tile orange">
				  <h3 class="title">Bloomberg News</h3>
				   <p>Get Most Recent News</p>
				</a>
			</div>
			<div class="col-sm-4">
				<a onClick={((e) =>this.onClick(e,'the-verge'))} class="tile blue">
				  <h3 class="title">The Verge News</h3>
				   <p>Get Most Recent News</p>
				</a>
			</div>
		  </div>
		  <div class="row">
			<div class="col-sm-4">
				<a onClick={((e) =>this.onClick(e,'abc-news'))} class="tile blue">
				  <h3 class="title">Abc News</h3>
				  <p>Get Most Recent News</p>
				</a>
			</div>
			<div class="col-sm-4">
				<a onClick={((e) =>this.onClick(e,'axios'))} class="tile green">
				  <h3 class="title">Axios News</h3>
				   <p>Get Most Recent News</p>
				</a>
			</div>
		  </div>

		</div>
		<br/>
		<br/>
		<br/>
		<Footer />
		</div>
    );
  }
}

export default WelcomeMain;
