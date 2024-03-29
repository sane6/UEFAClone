import { View, Text } from 'react-native'
import React from 'react'
import { FontAwesome5 } from '@expo/vector-icons'
import { Player } from '../types'

type FieldPlayerProps = {
	player: Player
	position: string
}

const FieldPlayer = (props: FieldPlayerProps) => {
	const { player, position } = props

	return (
		<View style={{ alignItems: 'center' }}>
			<FontAwesome5 name="tshirt" size={35} color={player ? 'orange' : '#5c5c5cbb'} />
			<Text
				style={{
					backgroundColor: '#333333bb',
					color: 'white',
					fontWeight: 'bold',
					fontSize: 12,
					padding: 2,
					paddingHorizontal: 7,
				}}>
				{player ? player.name : position}
			</Text>
		</View>
	)
}

export default FieldPlayer
