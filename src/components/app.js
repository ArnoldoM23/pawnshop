import React, { Component } from 'react';
import Header from './Header';
import { connect } from 'react-redux';
import * as actions from '../actions';

class App extends Component {


	render(){
		return (
			<div>
				<Header />
				{ this.props.children }
			</div>
		)
	}
}

export default connect(null, actions)(App);

