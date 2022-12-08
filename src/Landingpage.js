import React from 'react';
import Navbar from './nav-bar/Navbar';
import Hero from './hero-section/Hero-section';
import Save from './savemoney/Save';
import Footer from './footer/Footer';
import TestimonialCarousel from './testimonial/Testimonial';
import Subscribe from './subscribe/Subscribe';
import Books from './books/Books';
import Button from './button/Button';

export default function Landingpage() {
	return (
		<>
			<Navbar />
			<Hero />
			<Save />
			<Button />
			<Books />
			<TestimonialCarousel />
			<Subscribe />
			<Footer />
		</>
	);
}
