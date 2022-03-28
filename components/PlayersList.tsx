import React from 'react'
import { BottomSheetFlatList } from '@gorhom/bottom-sheet'
import PlayerListItem from './PlayerListItem'

import { useRecoilValue } from 'recoil'
import { filteredPlayers } from '../atoms/Players'
import { Player } from '../types'

const PlayersList = () => {
	const players = useRecoilValue(filteredPlayers)

	return (
		<BottomSheetFlatList
			data={players}
			renderItem={({ item }) => <PlayerListItem player={item} key={item.id} />}
		/>
	)
}

export default PlayersList
