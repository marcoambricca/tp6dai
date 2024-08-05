import React, { useState } from 'react';
import { View, Text, StyleSheet, Pressable, TextInput, SafeAreaView } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Modal from 'react-native-modal';

export default function ModalComponent({ isVisible, onClose, addTask }){
  const [formData, setFormData] = useState({ name: '', desc: '' });

  const handleChange = (name, value) => {
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async () => {
    const newTask = { ...formData, id: new Date().toISOString() };
    await storeData(newTask);
    addTask(newTask);
    onClose();
  };

  const storeData = async (task) => {
    try {
      await AsyncStorage.setItem(task.id, JSON.stringify(task));
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <Modal isVisible={isVisible} onBackdropPress={onClose} style={styles.modal} swipeDirection="down" onSwipeComplete={onClose}>
      <View style={styles.modalContent}>
        <SafeAreaView>
          <TextInput
            style={styles.input}
            onChangeText={(value) => handleChange('name', value)}
            value={formData.name}
            placeholder="Nombre"
            keyboardType="default"
          />
          <TextInput
            style={styles.input}
            onChangeText={(value) => handleChange('desc', value)}
            value={formData.desc}
            placeholder="Descripcion"
            keyboardType="default"
          />
        </SafeAreaView>
        <Pressable style={styles.button} onPress={handleSubmit}>
          <Text style={styles.buttonText}>Agregar tarea</Text>
        </Pressable>
        <Pressable style={styles.button} onPress={onClose}>
          <Text style={styles.buttonText}>Cerrar</Text>
        </Pressable>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modal: {
    justifyContent: 'flex-end',
    margin: 0,
  },
  modalContent: {
    height: 300,
    backgroundColor: 'white',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    width: '100%',
    padding: 10,
    marginVertical: 10,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
  },
  button: {
    padding: 10,
    backgroundColor: '#007BFF',
    borderRadius: 5,
    marginTop: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
});