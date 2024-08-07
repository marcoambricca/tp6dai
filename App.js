import { StyleSheet, Text, View } from 'react-native';
import { useState, useEffect } from 'react';
import Button from './components/button';
import ModalComponent from './components/modal';
import List from './components/list';
import { getData, storeData, deleteTasks, addTask } from './modules/data-service.js';

export default function App() {
  const [tasks, setTasks] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    getData(setTasks);
  }, []);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const handleDelete = async () => {
    await deleteTasks(setTasks);
  }

  return (
    <View style={styles.appContainer}>
      <Text style={styles.appTitle}>To-Do List</Text>
      <List tasks={tasks} setTasks={setTasks} />
      <Button label="Agregar tarea" onPress={openModal} marginB={20}/>
      <Button label="Borrar tareas" onPress={handleDelete} marginB={20}/>
      <ModalComponent isVisible={modalOpen} onClose={closeModal} addTask={addTask} setTasks={setTasks} tasks={tasks} />
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    alignItems: 'center',
    height: '100%',
    justifyContent: 'center',
    backgroundColor: '#A3C3D9',
    width: '100%'
  },
  appTitle: {
    marginVertical: 16,
    fontWeight: 'bold',
    fontSize: 24,
  },
});