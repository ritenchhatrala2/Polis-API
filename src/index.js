import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import App from './component/App';
import Header from './component/Header';
import Footer from './component/Footer';
import DisplayNA from './component/DisplayNA'
import WelcomeMain from './component/welcomeMain';
import { browserHistory, Router,Route } from 'react-router'
import DisplaySA from './component/DisplaySavedArticle'
//import MultiSelect from './multiselect'

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
	<Router history={browserHistory}>
		<Route path="/" component={App} />
		<Route path="/Welcome" component={WelcomeMain} />
		<Route path="/DisplayNA" component={DisplayNA} />
		<Route path="/DisplaySA" component={DisplaySA} />
	</Router>
	, document.getElementById('root'));
registerServiceWorker();
