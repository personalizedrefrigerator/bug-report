
import React from 'react';
import { useState, useCallback } from 'react';

import { View, Text, StyleSheet } from 'react-native';
import { Portal, FAB } from 'react-native-paper';


const MainScreen = () => {
	const [ open, setOpen ] = useState(false);

	const onStateChange = useCallback(() => {
		setOpen(!open);
	}, [ open ]);

	const [ counter, setCounter ] = useState(0);
	const onAdd = useCallback(() => {
		setCounter(counter + 1);
	}, [ counter ]);
	const onSubtract = useCallback(() => {
		setCounter(counter - 1);
	}, [ counter ]);

	return (
		<View>
			<View>
				<Text style={styles.description}>
					This sample app demonstrates an accessibility
					issue in react-native-paper. Enable TalkBack or
					VoiceOver and attempt to move accessibility focus
					to this element by touching it.
				</Text>
			</View>
			<View>
				<Text style={styles.counter}>{counter}</Text>
			</View>
			<Portal>
				<FAB.Group
					open={open}
					visible
					accessibilityLabel={'Counter actions'}
					icon={'plus-minus-variant'}
					actions={[
						{ icon: 'plus-thick', label: 'Add', onPress: onAdd },
						{ icon: 'minus', label: 'Subtract', onPress: onSubtract }
					]}
					onStateChange={onStateChange}
				/>
			</Portal>
		</View>
	);
};

const styles = StyleSheet.create({
	description: {
		fontSize: 1.2,
	},

	counter: {
		fontSize: 3,
	},
});

export default MainScreen;
