import { atom, selector } from 'recoil'
import { Player } from '../types'

export const myFormationState = atom({
	key: 'myFormationState',
	default: {
		FWD: 3,
		MID: 3,
		DEF: 4,
		GK: 1,
	},
})

export const myPlayersState = atom({
	key: 'MyPlayersState',
	default: [] as Player[],
})

const positions = ['FWD', 'MID', 'DEF', 'GK']

export const myPlayersByPosition = selector({
	key: 'myPlayersByPosition',
	get: ({ get }) => {
		const players = get(myPlayersState)
		const formation = get(myFormationState)

		const groupedPlayers: any = {}

		positions.forEach((position) => {
			groupedPlayers[position] = players.filter((player) => player.position === position)

			// fill with null values based on formation
			for (let i: number = groupedPlayers[position]?.length || 0; i < formation[position]; i++) {
				groupedPlayers[position]?.push(null)
			}
		})

		return groupedPlayers
	},
})
