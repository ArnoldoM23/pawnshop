import React from 'react';

const SectionSteps = () => {

	return (
		<section id='howitworks' className='section-steps'> 
			<div className='row'>
				<h2>How it works</h2>
				<p className='textcenter'>Pawning or selling an item is a quick and easy process!</p>
			</div>
			<div className='row'>
				<div className=' steps-box'>
					<div className='work-step'>
						<div>1</div>
						<p>The first step is to bring your item to our retail location. We accept various items, with the most popular ones being jewelry and electronics, such as televisions, computers, cameras, and car stereos. Our highly experienced pawn brokers will evaluate your item, and then make you an offer.</p>
					</div>
					<div className='work-step'>
						<div>2</div>
						<p>The loan amount (if you are pawning) or the cash value offered (if you are selling) is based on a percentage of what we can sell the item for in our store.</p>
					</div>
					<div className='work-step'>
						<div>3</div>
						<p>If you choose to sell your item, you will no longer have any claim to said item after payment is issued. In the event that you are pawning an item, we will provide you with your cash loan, and give you a claim ticket. Your item will be securely stored at our pawn shop facility during the term of your loan.</p>
					</div>
				</div>
			</div>
		</section>
	)
}

export default SectionSteps;

