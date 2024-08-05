import React, { useState } from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function Card({ task }) {
    const [checked, setChecked] = useState(false);

    return (
        <View style={[styles.card, checked && styles.cardChecked]}>
            <Text style={[styles.taskText, checked && styles.taskTextChecked]}>
                {task.name} - {task.desc}
            </Text>
            <Pressable
                style={[styles.checkboxBase, checked && styles.checkboxChecked]}
                onPress={() => setChecked(!checked)}
            >
                {checked && <Ionicons name="checkmark" size={24} color="white" />}
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: 'white',
        width: '100%',
        padding: 15,
        marginVertical: 10,
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 8,
        elevation: 5,
    },
    cardChecked: {
        opacity: 0.5,
    },
    taskText: {
        fontSize: 16,
        color: '#333',
    },
    taskTextChecked: {
        textDecorationLine: 'line-through',
        color: '#999',
    },
    checkboxBase: {
        width: 24,
        height: 24,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 4,
        borderWidth: 2,
        borderColor: '#ddd',
        backgroundColor: '#f1f1f1',
        flex: 'flex-end'
    },
    checkboxChecked: {
        backgroundColor: 'green',
        borderColor: 'green',
    },
});