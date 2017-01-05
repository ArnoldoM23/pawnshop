import axios from 'axios';
import { browserHistory } from 'react-router';

export function sendEmail(message){
	return function(dispatch){
		axios.post('/sendEmail', message)
			.then(response => console.log(response))
			.catch(err => console.log('Error: ', err));	
	};
};

