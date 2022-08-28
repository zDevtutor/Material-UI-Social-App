import { useState } from 'react';
import {
	DeveloperMode,
	Search as SearchIcon,
	Mail as MailIcon,
	Notifications,
} from '@mui/icons-material';
import {
	AppBar,
	Toolbar,
	Typography,
	styled,
	alpha,
	InputBase,
	Box,
	Badge,
	Avatar,
	Menu,
	MenuItem,
} from '@mui/material';

const StyledToolbar = styled(Toolbar)({
	display: 'flex',
	justifyContent: 'space-between',
});

const Search = styled('div')(({ theme }) => ({
	position: 'relative',
	borderRadius: theme.shape.borderRadius,
	backgroundColor: alpha(theme.palette.common.white, 0.15),
	'&:hover': {
		backgroundColor: alpha(theme.palette.common.white, 0.25),
	},
	width: '40%',
	[theme.breakpoints.down('sm')]: {
		width: '50%',
		marginRight: '5px',
	},
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
	padding: theme.spacing(0, 2),
	height: '100%',
	position: 'absolute',
	pointerEvents: 'none',
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
	[theme.breakpoints.down('md')]: {
		display: 'none',
	},
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
	color: 'inherit',
	width: '100%',
	'& .MuiInputBase-input': {
		padding: theme.spacing(1, 1, 1, 0),
		paddingLeft: `calc(1em + ${theme.spacing(4)})`,
		transition: theme.transitions.create('width'),
		width: '70%',
		[theme.breakpoints.down('md')]: {
			paddingLeft: '10px',
		},
	},
}));

const Icons = styled(Box)(({ theme }) => ({
	display: 'none',
	alignItems: 'center',
	gap: '20px',
	[theme.breakpoints.up('sm')]: {
		display: 'flex',
	},
}));

const UserBox = styled(Box)(({ theme }) => ({
	display: 'flex',
	alignItems: 'center',
	gap: '10px',
	[theme.breakpoints.up('sm')]: {
		display: 'none',
	},
}));

function Navbar() {
	const [open, setOpen] = useState(false);
	return (
		<AppBar position='sticky'>
			<StyledToolbar>
				<DeveloperMode
					fontSize='large'
					sx={{ display: { xs: 'block', sm: 'none' } }}
				/>
				<Typography
					variant='h6'
					component='div'
					sx={{ display: { xs: 'none', sm: 'block' } }}>
					zDevtutor
				</Typography>
				<Search>
					<SearchIconWrapper>
						<SearchIcon />
					</SearchIconWrapper>
					<StyledInputBase
						placeholder='Search…'
						inputProps={{ 'aria-label': 'search' }}
					/>
				</Search>
				<Icons>
					<Badge badgeContent={4} color='error'>
						<MailIcon color='white' />
					</Badge>
					<Badge badgeContent={2} color='error'>
						<Notifications color='white' />
					</Badge>
					<Avatar
						onClick={e => setOpen(true)}
						alt='Mostafa Sayed'
						src='https://media-exp1.licdn.com/dms/image/C5603AQGOYpZI2EgxIg/profile-displayphoto-shrink_800_800/0/1643352124889?e=1666828800&v=beta&t=IOTysAQHxYjpIXSdIt0harBBH-5peZWMZu_gjgJs6hQ'
					/>
				</Icons>
				<UserBox onClick={e => setOpen(true)}>
					<Avatar
						alt='Mostafa Sayed'
						src='https://media-exp1.licdn.com/dms/image/C5603AQGOYpZI2EgxIg/profile-displayphoto-shrink_800_800/0/1643352124889?e=1666828800&v=beta&t=IOTysAQHxYjpIXSdIt0harBBH-5peZWMZu_gjgJs6hQ'
					/>
					<Typography variant='span'>Mostafa</Typography>
				</UserBox>
				<Menu
					id='demo-positioned-menu'
					aria-labelledby='demo-positioned-button'
					open={open}
					onClose={e => setOpen(false)}
					anchorOrigin={{
						vertical: 'top',
						horizontal: 'right',
					}}
					transformOrigin={{
						vertical: 'top',
						horizontal: 'right',
					}}>
					<MenuItem onClick={e => setOpen(false)}>Profile</MenuItem>
					<MenuItem onClick={e => setOpen(false)}>My account</MenuItem>
					<MenuItem onClick={e => setOpen(false)}>Logout</MenuItem>
				</Menu>
			</StyledToolbar>
		</AppBar>
	);
}

export default Navbar;
