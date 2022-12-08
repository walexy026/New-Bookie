import React from 'react';
import Navbar from './nav-bar/Navbar';
import Books from './books/Books';
import Footer from './footer/Footer';
import Button from './button/Button';

export default function BooksPage() {
	return (
		<>
			<Navbar />
			<Button />
			<Books />
			<Books />
			<Books />
			<Footer />
		</>
	);
}
