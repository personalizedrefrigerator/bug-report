import React from 'react';
import MainScreen from './MainScreen';
import {MD3LightTheme, PaperProvider} from 'react-native-paper';

const App = () => {
	return (
		<PaperProvider theme={MD3LightTheme}>
			<MainScreen />
		</PaperProvider>
	);
};

export default App;
