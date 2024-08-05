import { StyleSheet, ScrollView } from 'react-native';
import Card from '../components/card.jsx'; 

export default function TaskList({ tasks }){
    return (
        <ScrollView style={styles.tasksContainer}>
            {tasks.map((task) => (
                <Card key={task.id} task={task} />
            ))}
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    tasksContainer: {
        flex: 1,
        padding: 10,
    },
});