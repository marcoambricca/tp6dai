import { StyleSheet, Text, View } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Button from './components/button.jsx';
import Checkbox from './components/checkbox.jsx';

export default function App() {
  return (
    <View style={styles.appContainer}>
        <Text style={styles.appTitle}>Titulo</Text>
        <Button label="Tocame" />
        <Checkbox />
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  appTitle: {
    marginVertical: 16,
    fontWeight: 'bold',
    fontSize: 24,
  }
});
