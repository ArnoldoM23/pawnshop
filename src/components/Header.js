import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';

class Header extends Component {

	renderLoginLinks(){
		if(this.props.authenticate){
			
		}
	}

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

function mapStateToProps(state){
	return { authenticate: state.auth.authenticated }
}

export default connect(mapStateToProps)(Header);






    // <meta charset="utf-8">
    // <meta http-equiv="X-UA-Compatible" content="IE=edge">
    // <meta name="viewport" content="width=device-width, initial-scale=1">
  

    // <!-- Static navbar -->
    // <nav class="navbar navbar-default navbar-static-top">
    //   <div class="container">
    //     <div class="navbar-header">
    //       <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
    //         <span class="sr-only">Toggle navigation</span>
    //         <span class="icon-bar"></span>
    //         <span class="icon-bar"></span>
    //         <span class="icon-bar"></span>
    //       </button>
    //       <a class="navbar-brand" href="#">Project name</a>
    //     </div>
    //     <div id="navbar" class="navbar-collapse collapse">
    //       <ul class="nav navbar-nav">
    //         <li class="active"><a href="#">Home</a></li>
    //         <li><a href="#about">About</a></li>
    //         <li><a href="#contact">Contact</a></li>
    //         <li class="dropdown">
    //           <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Dropdown <span class="caret"></span></a>
    //           <ul class="dropdown-menu">
    //             <li><a href="#">Action</a></li>
    //             <li><a href="#">Another action</a></li>
    //             <li><a href="#">Something else here</a></li>
    //             <li role="separator" class="divider"></li>
    //             <li class="dropdown-header">Nav header</li>
    //             <li><a href="#">Separated link</a></li>
    //             <li><a href="#">One more separated link</a></li>
    //           </ul>
    //         </li>
    //       </ul>
    //       <ul class="nav navbar-nav navbar-right">
    //         <li><a href="../navbar/">Default</a></li>
    //         <li class="active"><a href="./">Static top <span class="sr-only">(current)</span></a></li>
    //         <li><a href="../navbar-fixed-top/">Fixed top</a></li>
    //       </ul>
    //     </div><!--/.nav-collapse -->
    //   </div>
    // </nav>


    // <div class="container">

    //   <!-- Main component for a primary marketing message or call to action -->
    //   <div class="jumbotron">
    //     <h1>Navbar example</h1>
    //     <p>This example is a quick exercise to illustrate how the default, static and fixed to top navbar work. It includes the responsive CSS and HTML, so it also adapts to your viewport and device.</p>
    //     <p>To see the difference between static and fixed top navbars, just scroll.</p>
    //     <p>
    //       <a class="btn btn-lg btn-primary" href="../../components/#navbar" role="button">View navbar docs &raquo;</a>
    //     </p>
    //   </div>

    // </div> 


