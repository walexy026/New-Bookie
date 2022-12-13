import React from 'react';
import Navbar from '../../Components/nav-bar/Navbar';
import Books from '../../Components/books/Books';
import Footer from '../../Components/footer/Footer';
import Button from '../../Components/button/Button';

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
