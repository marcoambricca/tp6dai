import React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { checkTask, deleteTask } from '../modules/data-service.js';

export default function Card({ task, tasks, setTasks }) {
    const checked = task.completed;

    const handleDelete = () => {
        deleteTask(task, tasks, setTasks);
    };

    return (
        <View style={[styles.card, checked && styles.cardChecked]}>
            <View style={styles.taskInfo}>
                <Text style={[styles.taskTitle, checked && styles.taskTextChecked]}>
                    {task.name}
                </Text>
                <Text style={[styles.taskDesc, checked && styles.taskTextChecked]}>
                    {task.desc}
                </Text>
            </View>
            <View style={styles.actionButtons}>
                <Pressable
                    style={[styles.checkboxBase, checked && styles.checkboxChecked]}
                    onPress={() => checkTask(task, tasks, setTasks)}
                >
                    {checked && <Ionicons name="checkmark" size={24} color="white" />}
                </Pressable>
                <Pressable style={styles.deleteButton} onPress={handleDelete}>
                    <Ionicons name="trash" size={24} color="red" />
                </Pressable>
            </View>
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
        minWidth: 200,
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
    taskInfo: {
        flex: 1,
        flexDirection: 'column',
    },
    taskTitle: {
        fontSize: 16,
        fontWeight: '600',
        color: '#333',
    },
    taskDesc: {
        fontSize: 12,
        color: '#333',
    },
    taskTextChecked: {
        textDecorationLine: 'line-through',
        color: '#999',
    },
    actionButtons: {
        flexDirection: 'row',
        alignItems: 'center',
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
        marginRight: 10,
    },
    checkboxChecked: {
        backgroundColor: 'green',
        borderColor: 'green',
    },
    deleteButton: {
        marginLeft: 10,
    },
});
