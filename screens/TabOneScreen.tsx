import { StyleSheet, SafeAreaView, Pressable, Text, View, Platform } from 'react-native'
import BottomSheet, { BottomSheetFlatList } from '@gorhom/bottom-sheet'
import Field from '../components/Field'
import TeamStats from '../components/TeamStats'
import { useRef } from 'react'
import PlayerListItem from '../components/PlayerListItem'
import { players } from '../assets/data/players'
import Filters from '../components/Filters'

export default function TabOneScreen() {
	const viewPlayers = () => {
		playersBottomSheet.current?.expand()
	}

	const snapPoints = [0, '50%']

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
					<Text>View Players</Text>
				</Pressable>
				<BottomSheetFlatList
					data={players}
					renderItem={({ item }) => <PlayerListItem player={item} />}
				/>
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
