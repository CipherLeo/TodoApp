import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import Heading from './components/Heading';
import Input from './components/Input';
import TodoList from './components/TodoList';
import SubmitTodoButton from './components/SubmitTodoButton';


export default function App() {
  const [todos, setTodos] = useState([
    {text: 'Learn about React Native'},
    {text: 'Learn about React Hooks'},
    {text: 'Build todo app'}
  ]);
  const [type, setType] = useState("");
  const [inputValue, setInputValue] = useState("");

  const inputValueHandler = (message) => {
    setInputValue(message);
  }
  const submitTodoHandler = () => {
    if (inputValue.match(/^\s*$/)) {
      alert("Empty note.");
      return;
    }
    setTodos([{text: inputValue}, ...todos]);
  }

  return (
    <View style={styles.container}>
      <Heading />
      <Input onInputValue={ inputValueHandler } />
      <SubmitTodoButton submitTodo={ submitTodoHandler } />

      <ScrollView 
        style={styles.content} 
        keyboardShouldPersistTaps='always'>
        <TodoList todos={ todos }/>
      </ScrollView>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    // alignItems: 'center',
  },
  content: {
    flex: 1,
    paddingTop: 60,
  },
});
