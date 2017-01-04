import axios from 'axios';
import { browserHistory } from 'react-router';


export function sendEmail(message){
	return function(){
		console.log('in side the actions ', message);
	}
}

