import { View, Text, StyleSheet } from 'react-native'
import * as React from 'react'

const TeamStats = () => {
	return (
		<View style={styles.container}>
			<View style={styles.valueContainer}>
				<Text style={styles.label}>Players</Text>
				<Text style={styles.value}>0 / 15</Text>
			</View>

			<View style={styles.valueContainer}>
				<Text style={styles.label}>Remaining</Text>
				<Text style={styles.value}>$100m</Text>
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: 'white',
		width: '90%',
		padding: 10,
		borderWidth: 4,
		borderColor: '#38abd1',
		borderRadius: 10,
		flexDirection: 'row',
	},
	valueContainer: {
		marginRight: 25,
	},
	label: {
		color: 'gray',
	},
	value: {
		fontSize: 16,
		fontWeight: 'bold',
	},
})

export default TeamStats
