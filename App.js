import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import RealDoll from './src/view/RealDol'

export default function App() {
  return (
    <View style={styles.container}>
      <RealDoll/>
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
