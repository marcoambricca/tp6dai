import AsyncStorage from '@react-native-async-storage/async-storage';

export async function getData(setTasks){
  try {
      const storedTasks = await AsyncStorage.getItem('tasks');
      const loadedTasks = storedTasks ? JSON.parse(storedTasks) : [];
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
  if (task != null){
      const date = new Date().toISOString();
      const newTask = {
          id: tasks.length+1,
          name: task.name,
          desc: task.desc,
          dateCreated: date,
          completed: false
      };
      const newTasks = [...tasks, newTask];
      setTasks(newTasks);
      storeData(newTasks);
  }
}

export function checkTask(task, tasks, setTasks){
  const updatedTasks = tasks.map(t => t.id === task.id ? { ...t, completed: !t.completed } : t);
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

export async function deleteTask(task, tasks, setTasks){
  const updatedTasks = tasks.filter(t => t.id !== task.id);
  setTasks(updatedTasks);
  storeData(updatedTasks);
}
