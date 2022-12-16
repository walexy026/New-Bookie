import React from 'react';
import Navbars from '../../Components/nav-bar/Navbars';
import Books from '../../Components/books/Books';
import Footer from '../../Components/footer/Footer';
import Button from '../../Components/button/Button';

export default function BooksPage() {
	return (
		<>
			<Navbars />
			<Button />
			<Books />
			<Books />
			<Books />
			<Footer />
		</>
	);
}
