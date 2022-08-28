import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Add from './components/Add';

import { Box, createTheme, ThemeProvider } from '@mui/material';
import Sidebar from './components/Sidebar';
import Rightbar from './components/Rightbar';
import Feed from './components/Feed';

function App() {
	const [mode, setMode] = useState('light');

	const theme = createTheme({
		palette: {
			mode,
		},
	});

	return (
		<ThemeProvider theme={theme}>
			<Navbar />
			<Box
				component='main'
				sx={{
					display: 'flex',
					gap: '20px',
					backgroundColor: 'background.default',
					color: 'text.primary',
				}}>
				<Sidebar mode={mode} setMode={setMode} />
				<Feed />
				<Rightbar />
			</Box>
			<Add />
		</ThemeProvider>
	);
}

export default App;
