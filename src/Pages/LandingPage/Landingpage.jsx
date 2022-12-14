import React from 'react';
import Navbars from '../../Components/nav-bar/Navbars';
import Hero from '../../Components/hero-section/Hero-section';
import Save from '../../Components/savemoney/Save';
import Footer from '../../Components/footer/Footer';
import TestimonialCarousel from '../../Components/Testimonial/TestimonialCarousel';
import Subscribe from '../../Components/subscribe/Subscribe';
import Books from '../../Components/books/Books';
import Button from '../../Components/button/Button';


export default function Landingpage() {
	return (
		<>
			<Navbars />
			<Hero />
			<Save />
			<Button/>
			<Books />
			<TestimonialCarousel />
			<Subscribe />
			<Footer />
		</>
	);
}
