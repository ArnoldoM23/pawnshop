import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';

class Header extends Component {

	render(){
	  return (
		<header>
		  <nav>
			<div className='row'>
			  <img className='logo' src='../styles/img/pawnshoplogo.gif' alt='Omnifood-logo'/>
			  <ul className='main-nav'>
				<li><a href='#about'>About us</a></li>
				<li><a href='#ebay'>Ebay store</a></li>
                <li><a href='#howitworks'>How it works</a></li>
				<li><a href='#contactus'>Contact us</a></li>
			  </ul>
			</div>
		  </nav>
          <div className='hero-text-box'>
		    <h1>EASY MONEY PAWN &amp; JEWELRY</h1>
            <img src='../styles/img/pawnshop1.png' />	
		  </div>
	 	</header>
	  );
	}
}


export default Header;