import axios from 'axios';
import { browserHistory } from 'react-router';


export function sendEmail(message){
	return function(dispatch){
		axios.post('/sendEmail', message)
			.then(response => console.log('in side the actions ', message))
			.catch(err => console.log('Error: ', err));	
	};
};

