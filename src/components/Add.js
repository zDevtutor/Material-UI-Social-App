import {
	Avatar,
	Box,
	Button,
	ButtonGroup,
	Fab,
	Modal,
	Stack,
	styled,
	TextField,
	Tooltip,
	Typography,
} from '@mui/material';
import {
	Add as AddIcon,
	DateRange,
	EmojiEmotions,
	Image,
	PersonAdd,
	VideoCameraBack,
} from '@mui/icons-material';
import React, { useState } from 'react';

const StyledModal = styled(Modal)({
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
});

const UserBox = styled(Box)({
	display: 'flex',
	alignItems: 'center',
	gap: '10px',
	marginBottom: '20px',
});

function Add() {
	const [open, setOpen] = useState(false);

	return (
		<>
			<Tooltip
				onClick={e => setOpen(true)}
				title='Add'
				sx={{
					position: 'fixed',
					bottom: '20px',
					left: { xs: 'calc(50% - 25px)', md: '30px' },
				}}>
				<Fab color='primary' aria-label='add'>
					<AddIcon />
				</Fab>
			</Tooltip>
			<StyledModal
				open={open}
				onClose={e => setOpen(false)}
				aria-labelledby='modal-modal-title'
				aria-describedby='modal-modal-description'>
				<Box
					minWidth={400}
					minHeight={300}
					bgcolor={'background.default'}
					color={'text.primary'}
					p={2}
					borderRadius={5}>
					<Typography
						component={'h6'}
						variant='h6'
						color='gray'
						textAlign={'center'}>
						Create Post
					</Typography>
					<UserBox>
						<Avatar
							alt='Mostafa Sayed'
							src='https://media-exp1.licdn.com/dms/image/C5603AQGOYpZI2EgxIg/profile-displayphoto-shrink_800_800/0/1643352124889?e=1666828800&v=beta&t=IOTysAQHxYjpIXSdIt0harBBH-5peZWMZu_gjgJs6hQ'
						/>
						<Typography variant='span'>Mostafa Sayed</Typography>
					</UserBox>
					<TextField
						sx={{ width: '100%' }}
						id='standard-multiline-static'
						multiline
						rows={3}
						placeholder="What's on your mind?"
						variant='standard'
					/>
					<Stack direction={'row'} gap={1} mt={2} mb={3}>
						<EmojiEmotions color='primary' />
						<Image color='secondary' />
						<VideoCameraBack color='success' />
						<PersonAdd color='error' />
					</Stack>
					<ButtonGroup
						fullWidth
						variant='contained'
						aria-label='outlined primary button group'>
						<Button>Post</Button>
						<Button sx={{ width: '100px' }}>
							<DateRange />
						</Button>
					</ButtonGroup>
				</Box>
			</StyledModal>
		</>
	);
}

export default Add;
