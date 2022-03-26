import { Text, View, Image, StyleSheet } from 'react-native'
import React, { Component } from 'react'
import { Player } from '../types'

interface Props {
	player: Player
}

const PlayerListItem = ({ player }: Props) => {
	return (
		<View style={styles.container}>
			<Image
				source={{ uri: `https://media.api-sports.io/football/players/${player.id}.png` }}
				style={styles.image}
			/>
			<View style={{ flex: 1 }}>
				<Text style={styles.name}>{player.name}</Text>
				<Text>{player.match}</Text>
			</View>
			<View style={{ marginHorizontal: 20, alignItems: 'flex-end' }}>
				<Text style={styles.name}>{(player.price / 1000000).toFixed(1)}m</Text>
				<Text>{player.match}</Text>
			</View>
			<Text style={styles.points}>{player.totalPoints}</Text>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		width: '100%',
		padding: 10,
		borderBottomWidth: 1,
		borderColor: '#eee',
	},
	colContainer: { marginHorizontal: 20 },
	image: {
		width: 35,
		height: 35,
		marginRight: 10,
		borderRadius: 20,
		borderWidth: 1,
		borderColor: '#eee',
	},
	name: {
		fontWeight: 'bold',
	},
	points: {
		fontWeight: 'bold',
		fontSize: 18,
	},
})

export default PlayerListItem
