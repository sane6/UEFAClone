import { View, Text } from 'react-native'
import React from 'react'
import { BottomSheetFlatList } from '@gorhom/bottom-sheet'
import PlayerListItem from './PlayerListItem'

import { useRecoilState } from 'recoil'
import { allPlayersState } from '../atoms/Players'

const PlayersList = () => {
	const [players, setPlayers] = useRecoilState(allPlayersState)

	return (
		<BottomSheetFlatList
			data={players}
			renderItem={({ item }) => <PlayerListItem player={item} />}
		/>
	)
}

export default PlayersList
