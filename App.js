import { StyleSheet, Text, View } from 'react-native';
import { useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Button from './components/button.jsx';
import ModalComponent from './components/modal.jsx';

export default function App() {
  const [modalOpen, setModalOpen] = useState(false);
  
  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <View style={styles.appContainer}>
        <Text style={styles.appTitle}>To-Do List</Text>
        <Button label="Agregar tarea" onPress={openModal}/>
        <ModalComponent isVisible={modalOpen} onClose={closeModal} />
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