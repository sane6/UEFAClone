import { StyleSheet, SafeAreaView } from 'react-native'
import Field from '../components/Field'

const players: { [key: string]: null[] } = {
	FWD: [null, null, null],
	MID: [null, null, null],
	DEF: [null, null, null, null],
	GK: [null],
}

export default function TabOneScreen() {
	return (
		<SafeAreaView style={styles.container}>
			<Field />
		</SafeAreaView>
	)
}

const styles = StyleSheet.create({
	container: {
		// paddingTop: Platform.OS === 'android' ? 25 : 0,
		flex: 1,
		alignItems: 'center',
	},
})
