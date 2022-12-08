import React from 'react';
import Navbar from '../nav-bar/Navbar';
import Coins from '../assets/save-coins.svg';
import './Savemoneypage.css';
import WhyUs from '../why-choose-us/WhyUs';
import flower from '../assets/flower.svg';
import Paypal from '../assets/paypal.svg';
import flutter from '../assets/flutterwave.svg';
import Visa from '../assets/visa.svg';
import Paystack from '../assets/paystack.svg';
import Subscribe from '../subscribe/Subscribe';
import Footer from '../footer/Footer';

export default function Savemoneypage() {
	return (
		<main>
			<Navbar />
			<section className='savemoney-hero-section'>
				<div className='saveoney-heading-container'>
					<h2 className='savemoney-heading'>
						Keep saving For the Bright future
					</h2>
					<p className='savemoney-para'>
						Manage your finacial plan for better days in the future Lets start
						saving from today
					</p>
					<button className='savemoney-section-button'>
						Start Saving Today
					</button>
				</div>
				<div className='image-hero-section'>
					<img
						src={Coins}
						alt='coins'
						className='savemoney-hero-section-img'
					/>
				</div>
			</section>
			<WhyUs />
			<section className='savemoney-second-section'>
				<div className='savemoney-content-container'>
					<h2 className='savemoney-headingTwo'>Spend Less. Save More</h2>
					<p className='savemoney-paraTwo'>
						Put money away automatically while you live your life.Just set a
						goal and watch your savings grow
					</p>
				</div>
				<div className='savemoney-content-imageTwo'>
					<img
						src={flower}
						alt='imae'
						className='savemoney-imageTwo'
					/>
				</div>
			</section>
			<section className='Patnership-section'>
				<h2 className='Partnership-heading'>Our Best Patnership</h2>
				<div className='Partners'>
					<img
						src={Visa}
						alt='visa'
						className='partners-icon'
					/>
					<img
						src={Paypal}
						alt='visa'
						className='partners-icon'
					/>
					<img
						src={Paystack}
						alt='visa'
						className='partners-icon'
					/>
					<img
						src={flutter}
						alt='visa'
						className='partners-icon'
					/>
				</div>
			</section>
			<Subscribe />
			<Footer />
		</main>
	);
}
