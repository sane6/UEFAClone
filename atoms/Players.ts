import { atom, selector } from 'recoil'
import response from '../assets/data/response.json'
import { Player } from '../types'

// const position2position = {
// 	Attacker: 'FWD',
// 	Midfielder: 'MID',
// 	Defender: 'DEF',
// 	Goalkeeper: 'GK',
// }

const position2position = (longPosition: string): string => {
	switch (longPosition) {
		case 'Attacker':
			return 'FWD'
		case 'Midfielder':
			return 'MID'
		case 'Defender':
			return 'DEF'
		case 'Goalkeeper':
			return 'GK'
		default:
			return 'FWD'
	}
}

export const allPlayersState = selector({
	key: 'allPlayersState',
	get: async () => {
		return response.response.map((entry) => ({
			id: entry.player.id,
			name: entry.player.name,
			match: entry.statistics[0].team.name,
			price: 10000000,
			position: position2position(entry.statistics[0].games.position),
			totalPoints: 26,
		}))
	},
})

export const positionFilterState = atom({
	key: 'positionFilterState',
	default: [] as string[],
})

export const filteredPlayers = selector({
	key: 'filteredPlayers',
	get: ({ get }): Player[] => {
		const players = get<Player[]>(allPlayersState)
		const filters = get(positionFilterState)

		return players.filter((player) => filters.length === 0 || filters.includes(player.position))
	},
})
