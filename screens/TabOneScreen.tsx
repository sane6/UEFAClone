import { StyleSheet, SafeAreaView, Pressable, Text, View, Platform } from 'react-native'
import BottomSheet from '@gorhom/bottom-sheet'
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

	const snapPoints = [0, '50%']

	return (
		<SafeAreaView style={styles.container}>
			<TeamStats />
			<Field />
			<Pressable onPress={viewPlayers} style={styles.buttonContainer}>
				<Text>View Players</Text>
			</Pressable>

			<BottomSheet index={1} snapPoints={snapPoints}>
				<BottomSheet index={1} snapPoints={snapPoints}>
					<Text>Awesome</Text>
				</BottomSheet>
			</BottomSheet>
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
