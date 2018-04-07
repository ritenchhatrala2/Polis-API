import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Header from './Header';
import Footer from './Footer';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(){
	return(
	<div>
	<Header />
	<App />
	<Footer />
	</div>
	);
}
registerServiceWorker();
