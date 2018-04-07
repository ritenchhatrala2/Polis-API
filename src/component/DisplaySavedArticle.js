import React, { Component } from 'react';
import logo from './logo.svg';
import './welcomemain.css';
import './bootstrap.min.css';
import Header from './Header';
import Footer from './Footer';
import img_avatar2 from './../images/img_avatar2.png';
import axios from 'axios';
import { browserHistory, Router,Route } from 'react-router'
import qs from 'query-string'

class DisplaySA extends Component {
	constructor(props) {
        super(props);
		//var d1;
		this.state = {
		  NewsArticle: this.props.location.state.token,
		};
		/*if(this.props.location.state == undefined || this.props.location.state.token.token == undefined){
			browserHistory.push({
				pathname:'/',
			});
			return;
		}*/
		const parsed = qs.parse(this.props.location.search);
		const sta = this.props.location.state.token;
		console.log("sta");
		console.log(this.state.NewsArticle);
		console.log(this.props);

		//console.log(this.props.location.state.name);


      }


  render() {
    return (
	  <div>
	  <Header />
      <div class="container">
		  <div class="row">
			<div class="col-md-12">
			  <h1>
				<strong>News Articles</strong>
			  </h1>
			</div>
		  </div>


			{this.state.NewsArticle.map((newsA, index) => (
			<div class="row row_padding">
				<div class="col-md-2">
					<img src={newsA.article.urlToImage} width="150px" height="80px"/>
				</div>
				<div class="col-md-8">
					<h3>{newsA.article.author}</h3>
					<p>{newsA.article.description}</p>
				</div>
				<div class="col-md-2">
					<a target="_blank" href={newsA.article.url} class='btn btn-success'>Read More</a>
				</div>
			</div>
			))}


	</div>
	<Footer />
	</div>

    );
  }
}

export default DisplaySA;
