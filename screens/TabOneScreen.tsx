import { StyleSheet, SafeAreaView, Pressable, Text } from 'react-native'
import Field from '../components/Field'

const players: { [key: string]: null[] } = {
	FWD: [null, null, null],
	MID: [null, null, null],
	DEF: [null, null, null, null],
	GK: [null],
}

export default function TabOneScreen() {
	const viewPlayers = () => {
		console.warn('View Players')
	}

	return (
		<SafeAreaView style={styles.container}>
			<Field />
			<Pressable onPress={viewPlayers} style={styles.buttonContainer}>
				<Text>View Players</Text>
			</Pressable>
		</SafeAreaView>
	)
}

const styles = StyleSheet.create({
	container: {
		// paddingTop: Platform.OS === 'android' ? 25 : 0,
		flex: 1,
		alignItems: 'center',
	},
	buttonContainer: {
		backgroundColor: 'orange',
		width: '90%',
		margin: 20,
		marginTop: 'auto',
		padding: 10,
		alignItems: 'center',
		borderRadius: 50,
	},
})
