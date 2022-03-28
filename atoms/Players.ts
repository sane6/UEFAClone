import { atom, selector } from 'recoil'
import { players } from '../assets/data/players'

export const myFormationState = atom({
	key: 'myFormation',
	default: {
		FWD: 3,
		MID: 3,
		DEF: 4,
		GK: 1,
	},
})

export const allPlayersState = atom({
	key: 'allPlayersState',
	default: players,
})

export const positionFilterState = atom({
	key: 'positionFilterState',
	default: [] as string[],
})

export const filteredPlayers = selector({
	key: 'filteredPlayers',
	get: ({ get }) => {
		const players = get(allPlayersState)
		const filters = get(positionFilterState)

		return players.filter((player) => filters.length === 0 || filters.includes(player.position))
	},
})
