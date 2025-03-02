import { StyleSheet, View } from 'react-native';
import YoutubeMusicScreen from './components/YoutubeMusicScreen';

export default function App() {
  return (
    <View style={styles.container}>
      <YoutubeMusicScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
