import React, { Component } from 'react';
import AboutSection from './aboutSection'
import SectionFeatures from './sectionFeature';
import SectionEbay from './sectionEbay';
import SectionSteps from './sectionSteps';
import SectionForm from './sectionForm';
import Footer from './footer';

export default class FrontPage extends Component {
	render(){
		return (
			<div>
				<AboutSection />
				<SectionEbay />
				<SectionFeatures />
				<SectionSteps />
				<SectionForm />
				<Footer />
			</div>
		);
	}
}

