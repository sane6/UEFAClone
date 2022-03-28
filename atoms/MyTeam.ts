import { atom, selector } from 'recoil'
import { Player } from '../types'

export const myPlayersState = atom({
	key: 'MyPlayersState',
	default: [] as Player[],
})

const positions = ['FWD', 'MID', 'DEF', 'GK']

export const myPlayersByPosition = selector({
	key: 'myPlayersByPosition',
	get: ({ get }) => {
		const players = get(myPlayersState)

		const groupedPlayers: { [key: string]: Player[] } = {}

		positions.forEach((position) => {
			groupedPlayers[position] = players.filter((player) => player.position === position)
		})

		return groupedPlayers
	},
})
