import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Header from './Header';
import Footer from './Footer';
import WelcomeMain from './welcomeMain.js';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
	<div>
	<Header />
	<WelcomeMain />
	<Footer />
	</div>
	, document.getElementById('root'));
registerServiceWorker();
