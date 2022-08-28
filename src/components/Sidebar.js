import {
	Box,
	List,
	ListItem,
	ListItemButton,
	ListItemIcon,
	ListItemText,
	Switch,
} from '@mui/material';
import {
	Home,
	Article,
	Group,
	Storefront,
	Person,
	Settings,
	AccountBox,
	ModeNight,
} from '@mui/icons-material';
import React from 'react';

function Sidebar({ mode, setMode }) {
	return (
		<Box padding={2} flex='1' sx={{ display: { xs: 'none', sm: 'block' } }}>
			<Box position='fixed'>
				<List>
					<ListItem disablePadding>
						<ListItemButton component='a' href='#home'>
							<ListItemIcon>
								<Home />
							</ListItemIcon>
							<ListItemText primary='Homepage' />
						</ListItemButton>
					</ListItem>
					<ListItem disablePadding>
						<ListItemButton component='a' href='#pages'>
							<ListItemIcon>
								<Article />
							</ListItemIcon>
							<ListItemText primary='Pages' />
						</ListItemButton>
					</ListItem>
					<ListItem disablePadding>
						<ListItemButton component='a' href='#groups'>
							<ListItemIcon>
								<Group />
							</ListItemIcon>
							<ListItemText primary='Groups' />
						</ListItemButton>
					</ListItem>
					<ListItem disablePadding>
						<ListItemButton component='a' href='#marketplace'>
							<ListItemIcon>
								<Storefront />
							</ListItemIcon>
							<ListItemText primary='Marketplace' />
						</ListItemButton>
					</ListItem>
					<ListItem disablePadding>
						<ListItemButton component='a' href='#friends'>
							<ListItemIcon>
								<Person />
							</ListItemIcon>
							<ListItemText primary='Friends' />
						</ListItemButton>
					</ListItem>
					<ListItem disablePadding>
						<ListItemButton component='a' href='#settings'>
							<ListItemIcon>
								<Settings />
							</ListItemIcon>
							<ListItemText primary='Settings' />
						</ListItemButton>
					</ListItem>
					<ListItem disablePadding>
						<ListItemButton component='a' href='#profile'>
							<ListItemIcon>
								<AccountBox />
							</ListItemIcon>
							<ListItemText primary='Profile' />
						</ListItemButton>
					</ListItem>
					<ListItem disablePadding>
						<ListItemButton>
							<ListItemIcon>
								<ModeNight />
							</ListItemIcon>
							<Switch
								onChange={() => setMode(mode === 'light' ? 'dark' : 'light')}
							/>
						</ListItemButton>
					</ListItem>
				</List>
			</Box>
		</Box>
	);
}

export default Sidebar;
