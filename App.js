import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import Heading from './components/Heading';
import Input from './components/Input';
import TodoList from './components/TodoList';


export default function App() {
  const [todos, setTodos] = useState([
    {text: 'Learn about React Native'},
    {text: 'Learn about React Hooks'},
    {text: 'Build todo app'}
  ]);
  const [type, setType] = useState("");
  const [inputValue, setInputValue] = useState("");

  return (
    <View style={styles.container}>
      <ScrollView style={styles.content} keyboardShouldPersistTaps='always'>
        <Heading />
        <Input />
        <TodoList todos={todos}/>
      </ScrollView>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    justifyContent: 'center',
  },
  content: {
    flex: 1,
    paddingTop: 60,
  },
});
