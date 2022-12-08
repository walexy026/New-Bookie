import React from 'react';
import Navbar from '../../Components/nav-bar/Navbar';
import BookShelf from '../../Assets/book-shelf.svg';
import './Buybooks.css';
import WhyUs from '../../Components/why-choose-us/WhyUs';
import Girls from '../../Assets/gils-on-bed.svg';
import Books from '../../Components/books/Books';
import Button from '../../Components/button/Button';
import Subscribe from '../../Components/subscribe/Subscribe';
import Footer from '../../Components/footer/Footer';

export default function Buybooks() {
	return (
		<main>
			<Navbar />
			<section className='buy-book-hero-section'>
				<div className='buy-book-hero-right-container'>
					<h2 className='buybooks-heading'>
						All your Books collections for your Kids in one platform
					</h2>
					<p className='buybooks-para'>
						All the books collection you needed for your kids are in one
						platform where you get it Very easy and assisible
					</p>
					<button className='buy-books-btn'>Buy Books</button>
				</div>
				<div className='book-shelf-container'>
					<img
						src={BookShelf}
						alt='books'
						className='book-shelf-image'
					/>
				</div>
			</section>
			<WhyUs />
			<section className='buy-books-section'>
				<div className='buy-book-hero-right-container-two'>
					<h2 className='buybooks-headingTwo'>New Way to read Book Online</h2>
					<p className='buybooks-paraTwo'>
						Our collection would help your kids better and we provide the best
						one for you
					</p>
				</div>
				<div className='book-shelf-container-two'>
					<img
						src={Girls}
						alt='books'
						className='book-shelf-image-two'
					/>
				</div>
			</section>
			<Button />
			<Books />
			<Subscribe />
			<Footer />
		</main>
	);
}
