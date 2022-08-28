import React from 'react';

import { Box } from '@mui/material';

import Post from './Post';

const posts = [
	{
		id: Math.random(),
		name: 'Mostafa Sayed',
		avatar:
			'https://media-exp1.licdn.com/dms/image/C5603AQGOYpZI2EgxIg/profile-displayphoto-shrink_800_800/0/1643352124889?e=1666828800&v=beta&t=IOTysAQHxYjpIXSdIt0harBBH-5peZWMZu_gjgJs6hQ',
		date: new Date().toUTCString(),
		media:
			'https://images.pexels.com/photos/12705772/pexels-photo-12705772.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
		desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia assumenda iure at veritatis odit, maiores molestias numquam quas id autem quaerat repudiandae? Aspernatur nulla quasi mollitia adipisci, impedit ipsam error.',
	},
	{
		id: Math.random(),
		name: 'Till Daling',
		avatar:
			'https://images.pexels.com/users/avatars/230380428/till-daling-405.jpeg?auto=compress&fit=crop&h=50&w=50&dpr=1',
		date: new Date().toUTCString(),
		media:
			'https://images.pexels.com/photos/12581576/pexels-photo-12581576.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
		desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia assumenda iure at veritatis odit, maiores molestias numquam quas id autem quaerat repudiandae? Aspernatur nulla quasi mollitia adipisci, impedit ipsam error.',
	},
	{
		id: Math.random(),
		name: 'Kelly Carson',
		avatar:
			'https://images.pexels.com/users/avatars/285179239/kelly-carson-468.jpeg?auto=compress&fit=crop&h=50&w=50&dpr=1',
		date: new Date().toUTCString(),
		media:
			'https://images.pexels.com/photos/13106181/pexels-photo-13106181.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
		desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia assumenda iure at veritatis odit, maiores molestias numquam quas id autem quaerat repudiandae? Aspernatur nulla quasi mollitia adipisci, impedit ipsam error.',
	},
	{
		id: Math.random(),
		name: 'Maria Victoria',
		avatar:
			'https://images.pexels.com/users/avatars/1002636/victoria-eckell-317.jpeg?auto=compress&fit=crop&h=50&w=50&dpr=1',
		date: new Date().toUTCString(),
		media:
			'https://images.pexels.com/photos/12873430/pexels-photo-12873430.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
		desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia assumenda iure at veritatis odit, maiores molestias numquam quas id autem quaerat repudiandae? Aspernatur nulla quasi mollitia adipisci, impedit ipsam error.',
	},
	{
		id: Math.random(),
		name: 'Amar Preciado',
		avatar:
			'https://images.pexels.com/users/avatars/2247381/amar-preciado-259.jpeg?auto=compress&fit=crop&h=50&w=50&dpr=1',
		date: new Date().toUTCString(),
		media:
			'https://images.pexels.com/photos/13085461/pexels-photo-13085461.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
		desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia assumenda iure at veritatis odit, maiores molestias numquam quas id autem quaerat repudiandae? Aspernatur nulla quasi mollitia adipisci, impedit ipsam error.',
	},
];

function Feed() {
	return (
		<Box padding={2} flex='4'>
			{posts.map(post => (
				<Post key={post.id} post={post} />
			))}
		</Box>
	);
}

export default Feed;
