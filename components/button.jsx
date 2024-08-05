import { StyleSheet, View, Pressable, Text } from 'react-native';

export default function Button({ label, onPress, marginB, marginT }) {
  return (
    <View style={styles.buttonContainer}>
      <Pressable style={[styles.button, { marginBottom: marginB, marginTop: marginT }]} onPress={onPress}>
        <Text style={styles.buttonLabel}>{label}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    borderRadius: 4,
    paddingHorizontal: 40,
    paddingVertical: 16,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    backgroundColor: '#ADB2D3',
    color: 'white'
  },
  buttonIcon: {
    paddingRight: 8,
  },
  buttonLabel: {
    color: '#fff',
    fontSize: 16,
  },
});