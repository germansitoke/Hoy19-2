import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { Example } from './app/components/Example';

export default function App() {
  return (
    <View style={styles.container}>
      <Example />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
});
