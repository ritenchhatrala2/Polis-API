import React, { Component } from 'react';
import logo from './logo.svg';
import './welcomemain.css';
import './bootstrap.min.css';
import Header from './Header';
import Footer from './Footer';
import axios from 'axios';
import { browserHistory, Router,Route } from 'react-router'
import qs from 'query-string'

class DisplayNA extends Component {
	constructor(props) {
        super(props);
		//var d1;
		this.state = {
		  NewsArticle: [{}],
		  savedArticle: [{}],
		};
		//token = this.props.location.state.token.token;
		if(this.props.location.state == undefined || this.props.location.state.token.token == undefined){
			browserHistory.push({
				pathname:'/',
			});
			return;
		}
		const parsed = qs.parse(this.props.location.search);
		const sta = qs.parse(this.props.location.state);
		console.log(parsed.d);
		console.log(this.props.location.state.token.token);

		//console.log(this.props.location.state.name);
		axios.get("http://localhost:8081/api/source", {
		params: {
		  source: parsed.d
		},headers : {
			'token': this.props.location.state.token.token
		}})
          .then((result) => {
            //access the results here....
			var d1 = result.data.message;
			console.log(d1);
			//setInterval(()=>{
			  console.log('Updating time...')
			  this.setState({
				NewsArticle: d1.articles,
				token: this.props.location.state.token.token
			  })
			  console.log("in "+this.state.NewsArticle);
			//}, 1)

          });

		axios.get("http://localhost:8081/api/searchsa", {
		params: {
		  source: parsed.d
		},headers : {
			'token': this.props.location.state.token.token
		}})
          .then((result1) => {
            //access the results here....
			var d2 = result1.data;
			console.log(result1);
			//setInterval(()=>{
			  console.log('andbvashUpdating time...')
			  this.setState({
				savedArticle: d2
			  })
			  //console.log(this.state.savedArticle);
			//}, 1)

          });


      }

	  onClickSaved = (e) => {
        e.preventDefault();
        // get our form data out of state
		console.log("hi onClickSaved");
		//console.log(this.props);
		console.log(this.state.savedArticle);
		const parsed = qs.parse(this.props.location.search);
		browserHistory.push({
				pathname:'/DisplaySA',
				query: { d:parsed.d },
				state:{token:this.state.savedArticle}
			});
      }

      onClick = (e,s) => {
        e.preventDefault();
        // get our form data out of state
        const { Source } = this.state;
		console.log("hi");
		console.log(s);
        axios.post("http://localhost:8081/api/savearticle", {
		'article' : s,
		'token': this.props.location.state.token.token
		})
          .then((result) => {
            //access the results here....
			console.log(result.data.message);
			if(result.data.message == 'saved'){
				alert("Article Saved");
			}
			else{
				alert("Article not saved");
			}
			/*browserHistory.push({
				pathname:'/',
			});*/
          });
      }
  render() {
    return (
	  <div>
	  <Header />
			<br/>
      <div class="container">
		  <div class="row">
			<div class="col-md-8">
			  <h1>
				<strong>News Articles</strong>
			  </h1>
			</div>
			<div class="col-md-2">
			  <button onClick={((e) =>this.onClickSaved(e))} class="btn">Get Saved Articles</button>
			</div>
		  </div>


			{this.state.NewsArticle.map((newsA, index) => (
			<div class="row row_padding">
				<div class="col-md-2">
					<img src={newsA.urlToImage} width="150px" height="80px"/>
				</div>
				<div class="col-md-8">
					<h3>{newsA.author}</h3>
					<p>{newsA.description}</p>
				</div>
				<div class="col-md-2">
					<button onClick={((e) =>this.onClick(e,newsA))} class="btn" value={newsA.author}>Save</button>
					<a target="_blank" href={newsA.url} class='btn'>Read More</a>
				</div>
			</div>
			))}


	</div>
	<Footer />
	</div>

    );
  }
}

export default DisplayNA;
