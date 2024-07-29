import { Pressable, StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function Checkbox() {
    const [checked, setChecked] = useState(false);
    return (
        <View style={styles.checkboxContainer}>
            <Pressable
                style={[styles.checkboxBase, checked && styles.checkboxChecked]}
                onPress={() => setChecked(!checked)}>
                {checked && <Ionicons name="checkmark" size={24} color="white" />}
            </Pressable>
            <Text style={styles.checkboxLabel}>{`⬅️ Click!`}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    checkboxBase: {
      width: 24,
      height: 24,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 4,
      borderWidth: 2,
      borderColor: 'coral',
      backgroundColor: 'black',
    },
    checkboxChecked: {
      backgroundColor: 'coral',
    },
    checkboxContainer: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    checkboxLabel: {
      marginLeft: 8,
      fontWeight: '500',
      fontSize: 18,
    }
});