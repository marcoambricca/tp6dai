import { StyleSheet, Text, View } from 'react-native';
import { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Button from './components/button';
import ModalComponent from './components/modal';
import List from './components/list';

export default function App() {
  const [tasks, setTasks] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    getData();
  }, []);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const getData = async () => {
    try {
      const keys = await AsyncStorage.getAllKeys();
      const stores = await AsyncStorage.multiGet(keys);
      const loadedTasks = stores.map((store, i) => {
        const value = JSON.parse(store[1]);
        return { id: i, name: value.name, desc: value.desc };
      });
      setTasks(loadedTasks);
    } catch (e) {
      console.log(e);
    }
  };

  const addTask = (task) => {
    setTasks((prevTasks) => [...prevTasks, task]);
  };

  return (
    <View style={styles.appContainer}>
      <Text style={styles.appTitle}>To-Do List</Text>
      <ModalComponent isVisible={modalOpen} onClose={closeModal} addTask={addTask} />
      <List tasks={tasks} />
      <Button label="Agregar tarea" onPress={openModal} />
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
  },
});
