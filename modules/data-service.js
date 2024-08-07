import AsyncStorage from '@react-native-async-storage/async-storage';

export async function getData(setTasks){
    try {
      const keys = await AsyncStorage.getAllKeys();
      const stores = await AsyncStorage.multiGet(keys);
      const loadedTasks = stores.map((store, i) => {
        const value = JSON.parse(store[1]);
        console.log(value);
        return { id: i, name: value.name, desc: value.desc, completed: value.completed, dateCreated: value.dateCreated };
      });
      setTasks(loadedTasks);
    } 
    catch (e) {
      console.log(e);
    }
};

export async function storeData(tasks){
  try {
    await AsyncStorage.setItem('tasks', JSON.stringify(tasks));
  } catch (e) {
    console.log(e);
  }
};

export function addTask(task, tasks, setTasks){
  if (tarea != null){
    const date = new Date().toISOString()
    const newTask = {
      id: tasks.length+1,
      name: task.name,
      dateCreated: date,
      completed: false
    };

    const newTasks = [...tasks, newTask];
    setTasks(newTasks);
    storeData(newTasks);
  }
}

export function checkTask(id, tasks, setTasks){
  console.log('tareas en service', tasks)
  const updatedTasks = tasks;
  const task = updatedTasks[id];
  task.completed = !task.completed;
  setTasks(updatedTasks);
  storeData(updatedTasks);
};

export async function deleteTasks(setTasks){
  try {
    await AsyncStorage.removeItem('tasks');
    setTasks([]);
  }
  catch (e) {
    console.log(e);
  }
}