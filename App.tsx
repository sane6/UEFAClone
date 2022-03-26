// import 'react-native-gesture-handler'
import { StatusBar } from 'expo-status-bar'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import { SafeAreaProvider } from 'react-native-safe-area-context'

import useCachedResources from './hooks/useCachedResources'
import useColorScheme from './hooks/useColorScheme'
// import Navigation from './navigation'
import TabOneScreen from './screens/TabOneScreen'

export default function App() {
	const isLoadingComplete = useCachedResources()
	const colorScheme = useColorScheme()

	if (!isLoadingComplete) {
		return null
	} else {
		return (
			<GestureHandlerRootView style={{ flex: 1 }}>
				<SafeAreaProvider>
					<TabOneScreen />
					<StatusBar />
				</SafeAreaProvider>
			</GestureHandlerRootView>
		)
	}
}
