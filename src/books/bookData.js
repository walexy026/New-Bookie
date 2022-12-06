import React, { useEffect, useState } from 'react';
import chemistry from '../assets/chemistry.svg';
import phonectics from '../assets/phonectics.svg';
import quantitatives from '../assets/quantitative.svg';
import biology from '../assets/biology.svg';
import nursery from '../assets/nursery-rhymes.svg';
import primary from '../assets/map.svg';

const data = [
	{
		id: 1,
		imgUrl: chemistry,
		price: 'NGN3,500',
		title: 'Advanced Chemistry',
		description: 'Senior-Secondary',
	},
	{
		id: 2,
		imgUrl: phonectics,
		price: 'NGN3,500',
		title: 'Phonics Worksheet',
		description: 'Nursery-Secondary',
	},
	{
		id: 3,
		imgUrl: biology,
		price: 'NGN3,500',
		title: 'Essential Biology',
		description: 'Senior-Secondary',
	},
	{
		id: 4,
		imgUrl: primary,
		price: 'NGN3,500',
		title: 'Mathematics Breakdown',
		description: 'Junior-Secondary',
	},
	{
		id: 5,
		imgUrl: nursery,
		price: 'NGN2,500',
		title: 'Nursery Rythme',
		description: 'Nusery School',
	},
	{
		id: 6,
		imgUrl: quantitatives,
		price: 'NGN1,500',
		title: 'Quantitative Reasoning',
		description: 'Primary  School',
	},
];

export default data;
