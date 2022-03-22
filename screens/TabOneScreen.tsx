import { StyleSheet, ImageBackground, SafeAreaView } from 'react-native';
import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';
import field from '../assets/images/field.jpg';

export default function TabOneScreen({ navigation }: RootTabScreenProps<'TabOne'>) {
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground source={field} resizeMode='contain' style={{width: '100%', aspectRatio: 2 / 3}}></ImageBackground>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
});
