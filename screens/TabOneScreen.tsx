import { StyleSheet, SafeAreaView, Pressable, Text, Platform } from 'react-native'
import { BottomSheetBackdrop } from '@gorhom/bottom-sheet'
import Field from '../components/Field'
import TeamStats from '../components/TeamStats'

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
			<TeamStats />
			<Field />
			<Pressable onPress={viewPlayers} style={styles.buttonContainer}>
				<Text>View Players</Text>
			</Pressable>
		</SafeAreaView>
	)
}

const styles = StyleSheet.create({
	container: {
		paddingTop: Platform.OS === 'android' ? 45 : 0,
		flex: 1,
		alignItems: 'center',
		backgroundColor: '#72CC5E',
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
