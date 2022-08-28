import React from 'react';

import {
	CardHeader,
	Avatar,
	IconButton,
	CardMedia,
	CardContent,
	Typography,
	CardActions,
	Card,
	Checkbox,
} from '@mui/material';

import { MoreVert, Favorite, Share, FavoriteBorder } from '@mui/icons-material';

function Post(props) {
	const { name, avatar, media, date, desc } = props.post;

	return (
		<Card sx={{ marginBottom: '20px' }}>
			<CardHeader
				avatar={<Avatar alt={name} src={avatar} />}
				action={
					<IconButton aria-label='settings'>
						<MoreVert />
					</IconButton>
				}
				title={name}
				subheader={date}
			/>
			<CardMedia component='img' height='350px' image={media} alt='Post' />
			<CardContent>
				<Typography variant='body2' color='text.secondary'>
					{desc}
				</Typography>
			</CardContent>
			<CardActions disableSpacing>
				<IconButton aria-label='add to favorites'>
					<Checkbox
						icon={<FavoriteBorder />}
						checkedIcon={<Favorite sx={{ color: 'red' }} />}
					/>
				</IconButton>
				<IconButton aria-label='share'>
					<Share />
				</IconButton>
			</CardActions>
		</Card>
	);
}

export default Post;
