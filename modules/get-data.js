import AsyncStorage from '@react-native-async-storage/async-storage';

export default async function getData(setTasks){
    try {
      const keys = await AsyncStorage.getAllKeys();
      const stores = await AsyncStorage.multiGet(keys);
      const loadedTasks = stores.map((store, i) => {
        const value = JSON.parse(store[1]);
        return { id: i, name: value.name, desc: value.desc };
      });
      setTasks(loadedTasks);
    } 
    catch (e) {
      console.log(e);
    }
};