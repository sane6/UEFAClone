import { View, Text } from 'react-native'
import React from 'react'
import { BottomSheetFlatList } from '@gorhom/bottom-sheet'
import PlayerListItem from './PlayerListItem'

import { useRecoilState, useRecoilValue } from 'recoil'
import { allPlayersState, filteredPlayers } from '../atoms/Players'

const PlayersList = () => {
	const players = useRecoilValue(filteredPlayers)

	return (
		<BottomSheetFlatList
			data={players}
			renderItem={({ item }) => <PlayerListItem player={item} />}
		/>
	)
}

export default PlayersList
