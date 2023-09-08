import React from 'react';
import {useState, useCallback} from 'react';

import {View, Text, StyleSheet, SafeAreaView} from 'react-native';
import {Portal, FAB, Checkbox} from 'react-native-paper';

const MainScreen = () => {
	// Counter state
	const [counter, setCounter] = useState(0);
	const onAdd = useCallback(() => {
		setCounter(counter + 1);
	}, [counter]);
	const onSubtract = useCallback(() => {
		setCounter(counter - 1);
	}, [counter]);

	// FAB state.
	// setShowFAB: Whether to include the FAB in the rendered output.
	const [showFAB, setShowFAB] = useState(true);

	const [open, setOpen] = useState(false);

	const fab = (
		<Portal>
			<FAB.Group
				open={open}
				visible
				accessibilityLabel={'Counter actions'}
				icon={'plus-minus-variant'}
				actions={[
					{icon: 'plus-thick', label: 'Add', onPress: onAdd},
					{icon: 'minus', label: 'Subtract', onPress: onSubtract},
				]}
				onStateChange={() => setOpen(!open)}
			/>
		</Portal>
	);

	return (
		<View>
			<SafeAreaView>
				<View>
					<Text style={styles.description}>
						This sample app demonstrates an accessibility issue in
						react-native-paper. Enable TalkBack or VoiceOver and attempt to move
						accessibility focus to this element by touching it.
					</Text>
					<Text style={styles.counter}>{counter}</Text>

					<Checkbox.Item
						label="Show FAB"
						status={showFAB ? 'checked' : 'unchecked'}
						onPress={() => setShowFAB(!showFAB)}
					/>
				</View>
			</SafeAreaView>
			{showFAB ? fab : null}
		</View>
	);
};

const styles = StyleSheet.create({
	description: {
		fontSize: 18,
	},

	counter: {
		fontSize: 48,
		textAlign: 'center',
	},
});

export default MainScreen;
