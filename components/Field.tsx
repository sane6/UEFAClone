import { ImageBackground, Text, View } from 'react-native'
import { useRecoilValue } from 'recoil'
import field from '../assets/images/field.jpg'
import { myPlayersByPosition } from '../atoms/MyTeam'
import { Player } from '../types'
import FieldPlayer from './FieldPlayer'

const Field = () => {
	const players: { [key: string]: Player[] } = useRecoilValue(myPlayersByPosition)

	return (
		<ImageBackground
			source={field}
			resizeMode="contain"
			style={{
				width: '100%',
				aspectRatio: 2 / 3,
				justifyContent: 'space-around',
				alignItems: 'center',
			}}>
			{Object.keys(players).map((position, i) => (
				<View
					style={{
						flexDirection: 'row',
						justifyContent: 'space-around',
						width: '100%',
					}}
					key={i}>
					{players[position].map((player, i) => (
						<FieldPlayer player={player} position={position} key={i} />
					))}
				</View>
			))}
		</ImageBackground>
	)
}

export default Field
