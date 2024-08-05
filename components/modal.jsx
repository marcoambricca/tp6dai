import React, { useState } from 'react';
import { View, Text, StyleSheet, Pressable, TextInput, SafeAreaView } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Modal from 'react-native-modal';

const ModalComponent = ({ isVisible, onClose }) => {
  const storeData = async (name, value) => {
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem(name, jsonValue);
    } 
    catch (e) {
      console.log(e);
    }
  };

  const getData = async (name) => {
    try {
      const jsonValue = await AsyncStorage.getItem(name);
      return jsonValue != null ? JSON.parse(jsonValue) : null;
    } 
    catch (e) {
      console.log(e);
    }
  };

  const [formData, setFormData] = useState({ name: '', desc: '' });

  const handleNameChange = (text) => {
    setFormData({
      ...formData,
      name: text
    });
  };

  const handleDescChange = (text) => {
    setFormData({
      ...formData,
      desc: text
    });
  };

  return (
    <Modal
      isVisible={isVisible}
      onBackdropPress={onClose}
      style={styles.modal}
      swipeDirection="down"
      onSwipeComplete={onClose}
    >
      <View style={styles.modalContent}>
        <SafeAreaView>
          <TextInput
            style={styles.input}
            onChangeText={handleNameChange}
            value={formData.name}
            placeholder="Nombre"
            keyboardType="default"
          />
          <TextInput
            style={styles.input}
            onChangeText={handleDescChange}
            value={formData.desc}
            placeholder="Descripcion"
            keyboardType="default"
          />
        </SafeAreaView>
        <Pressable
          style={styles.button}
          onPress={() => {
            storeData('task', formData);
            console.log(formData);
            onClose();
            setFormData({
                name: '',
                desc: ''
            });
          }}
        >
          <Text style={styles.buttonText}>Agregar tarea</Text>
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
    borderColor: 'gray',
    borderWidth: 0.5,
    marginBottom: 12,
    paddingVertical: 10,
    paddingHorizontal: 18,
    borderRadius: 4,
    width: '100%',
  },
  button: {
    paddingVertical: 10,
    paddingHorizontal: 30,
    backgroundColor: '#ADB2D3',
    borderRadius: 3,
    marginTop: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
});

export default ModalComponent;