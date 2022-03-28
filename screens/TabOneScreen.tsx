import { StyleSheet, SafeAreaView, Pressable, Text, Platform } from 'react-native'
import BottomSheet from '@gorhom/bottom-sheet'
import Field from '../components/Field'
import TeamStats from '../components/TeamStats'
import { Suspense, useRef } from 'react'
import Filters from '../components/Filters'
import PlayersList from '../components/PlayersList'

export default function TabOneScreen() {
	const viewPlayers = () => {
		playersBottomSheet.current?.expand()
	}

	const snapPoints = [0, '60%']

	const playersBottomSheet = useRef<BottomSheet>(null)
	const filtersBottomSheet = useRef<BottomSheet>(null)

	return (
		<SafeAreaView style={styles.container}>
			<TeamStats />
			<Field />
			<Pressable onPress={viewPlayers} style={styles.buttonContainer}>
				<Text>View Players</Text>
			</Pressable>

			<BottomSheet index={0} snapPoints={snapPoints} ref={playersBottomSheet}>
				<Pressable
					onPress={() => {
						filtersBottomSheet.current?.expand()
					}}
					style={styles.buttonContainer}>
					<Text>Filters</Text>
				</Pressable>
				<Suspense fallback={<Text>Loading</Text>}>
					<PlayersList />
				</Suspense>
			</BottomSheet>
			<BottomSheet index={0} snapPoints={snapPoints} ref={filtersBottomSheet}>
				<Filters />
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
