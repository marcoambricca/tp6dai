import { StyleSheet, Text, View } from 'react-native';
import { useState, useEffect } from 'react';
import Button from './components/button';
import ModalComponent from './components/modal';
import List from './components/list';
import getData from './modules/get-data.js';

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

  const addTask = (task) => {
    setTasks((prevTasks) => [...prevTasks, task]);
  };

  return (
    <View style={styles.appContainer}>
      <Text style={styles.appTitle}>To-Do List</Text>
      <ModalComponent isVisible={modalOpen} onClose={closeModal} addTask={addTask} />
      <List tasks={tasks} />
      <Button label="Agregar tarea" onPress={openModal} marginB={20}/>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    alignItems: 'center',
    height: 90,
    justifyContent: 'center',
    backgroundColor: '#A3C3D9'
  },
  appTitle: {
    marginVertical: 16,
    fontWeight: 'bold',
    fontSize: 24,
  },
});
