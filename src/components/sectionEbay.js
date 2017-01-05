import React from 'react'; 

const SectionMeals = () => {

	return(
		<section id='ebay' className='section-meals'>
			<div className='row ebayheader'>
				<h2>Visit our ebay store</h2>
				<p className='long-copy'>Don't have time to stop by our store? No problem. Visit our ebay store and you will find a great selection of items at unbeatable prices.</p>
			</div>
			<div className='ebaypics'>
			<ul className='meals-showcase clearfix'>
				<li>
					<figure className='meal-photo'>
						<a href='http://stores.ebay.com/PawnBargain'><img src='../styles/img/ebay1.jpg' alt='ebay1' /></a>
					</figure>
				</li>
				<li>
					<figure className='meal-photo'>
						<a href='http://stores.ebay.com/PawnBargain'><img src='../styles/img/ebay2.jpg' alt='ebay2' /></a>
					</figure>
				</li>
				<li>
					<figure className='meal-photo'>
						<a href='http://stores.ebay.com/PawnBargain'><img src='../styles/img/ebay3.jpg' alt='ebay3' /></a>
					</figure>
				</li>
				<li>
					<figure className='meal-photo'>
						<a href='http://stores.ebay.com/PawnBargain'><img src='../styles/img/ebay4.jpg' alt='Autumn pumpkin soup' /></a>
					</figure>
				</li>
			</ul>
			<ul className='meals-showcase clearfix'>
				<li>
					<figure className='meal-photo'>
						<a href='http://stores.ebay.com/PawnBargain'><img src='../styles/img/ebay5.jpg' alt='ebay5' /></a>
					</figure>
				</li>
				<li>
					<figure className='meal-photo'>
						<a href='http://stores.ebay.com/PawnBargain'><img src='../styles/img/ebay6.jpg' alt='ebay6' /></a>
					</figure>
				</li>
				<li>
					<figure className='meal-photo'>
						<a href='http://stores.ebay.com/PawnBargain'><img src='../styles/img/ebay7.jpg' alt='ebay7' /></a>
					</figure>
				</li>
				<li>
					<figure className='meal-photo'>
						<a href='http://stores.ebay.com/PawnBargain'><img src='../styles/img/ebay8.jpg' alt='ebay8' /></a>
					</figure>
				</li>
			</ul>
			</div>
		</section>
	)
}

export default SectionMeals;