import React from 'react';

const Footer = () => {

	return (
		<footer className='section-Form'> 
			<div className='row'>
				<div className='col span-1-of-2'>
					<ul className='footer-nav'>
						<li><a href='#about'>About us</a></li>
						<li><a href='#ebay'>Ebay store</a></li>
						<li><a href='#howitworks'>How it works</a></li>
						<li><a href='#contactus'>Contact us</a></li>
					</ul>
				</div>
				<div className='col span-1-of-2'>
					<ul className='social-links'>
						<li><a href='#'><i className='ion-social-facebook'></i></a></li>
						<li><a href='#'><i className='ion-social-twitter'></i></a></li>
						<li><a href='#'><i className='ion-social-googleplus'></i></a></li>
						<li><a href='#'><i className='ion-social-instagram'></i></a></li>
					</ul>
				</div>
			</div>
			<div className='row'>
				<p>Copyright &copy; 2015 Easy Money Pawn &amp; Jewelry Inc . All rights reserved. 3451 International Blvd Unit #B Oakland, Ca 94601</p>
			</div>
		</footer>
	)
}

export default Footer;

