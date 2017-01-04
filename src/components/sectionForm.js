import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import * as actions from '../actions';


class SectionPlans extends Component {

	handleFormSubmit(message){
		this.props.sendEmail(message);
	}



	render(){
		const { handleSubmit, fields: { name, email, message, find_us } } = this.props;
		return (
			<section id='contactus' className='section-Form'> 
				<div className='row'>
					<h2>We're happy to hear from you</h2>
					<p className='contact'>Call us 9am to 6pm Monday – Saturday @ 510-261-3777<br/> Easy Money Pawn & Jewelry<br/> 3451 International Blvd<br/> Oakland, Ca 94601</p>
				</div>
				<div className='row'>
					<form className='contact-form' onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
						<fieldset className='row'>
							<div className='col span-1-of-3'>
								<label htmlFor='name'>Name</label>
							</div>
							<div className='col span-2-of-3'>
								<input {...name} type='text' name='name' id='name' placeholder='Your Name' required />
							</div>
						</fieldset>
						<fieldset className='row'>
							<div className='col span-1-of-3'>
								<label htmlFor='email'>Email</label>
							</div>
							<div className='col span-2-of-3'>
								<input {...email} type='email' name='email' id='email' placeholder='Your Email' required />
							</div>
						</fieldset>
						<fieldset className='row'>
							<div className='col span-1-of-3'>
								<label htmlFor='find_us'>How did you find us?</label>
							</div>
							<div className='col span-2-of-3'>
								<select {...find_us} name='find_us' id='find_us'>
									<option value='friends' defaultValue>Friends</option>
									<option value='search Engine'>Search Engine</option>
									<option value='advertisement'>Advertisement</option>
									<option value='Other'>Other</option>
								</select>
							</div>
						</fieldset>
						<fieldset className='row'>
							<div className='col span-1-of-3'>
								<label>Drop us a line</label>
							</div>
							<div className='col span-2-of-3'>
								<textarea {...message} name='message' placeholder='Your message' ></textarea>
							</div>
						</fieldset>
						<div className='row'>
							<div className='col span-1-of-3'>
								<label>&nbsp;</label>
							</div>
							<div className='col span-2-of-3'>
								<input type='submit' value='Send it!'/>
							</div>
						</div>
					</form>
				</div>
			</section>
		)
	}
}


export default reduxForm({
	form: 'sendEmail',
	fields: ['name', 'email', 'message', 'find_us']
}, null, actions)(SectionPlans);