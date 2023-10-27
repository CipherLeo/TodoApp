import React, { useState } from 'react'
import { StatusBar } from 'expo-status-bar'
import { ScrollView, StyleSheet, View } from 'react-native'
import Heading from './components/Heading'
import Input from './components/Input'
import TodoList from './components/TodoList'
import SubmitTodoButton from './components/SubmitTodoButton'
import TabBar from './components/TabBar'

export default function App() {
  const getNextAvailableId = () => {
    const id = nextAvailableId
    setNextAvailableId(nextAvailableId + 1)
    return id
  }
  const [nextAvailableId, setNextAvailableId] = useState(4)
  const [todos, setTodos] = useState([
    { id: 1, text: 'Learn about React Native', isDone: false },
    { id: 2, text: 'Learn about React Hooks', isDone: false },
    { id: 3, text: 'Build todo app', isDone: false }
  ])
  const [type, setType] = useState('All')
  const [inputValue, setInputValue] = useState('')

  const inputValueHandler = (message) => {
    setInputValue(message)
  }
  const submitTodoHandler = () => {
    if (inputValue.match(/^\s*$/)) {
      alert('Empty note.')
      return
    }
    setTodos([{ id: getNextAvailableId(), text: inputValue, isDone: false }, ...todos])
  }
  const completeTodoHandler = (id) => {
    setTodos(todos.map(todo => {
      if (todo.id === id) {
        todo.isDone = true
      }
      return todo
    }))
  }
  const deleteTodoHandler = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id))
  }

  return (
    <View style={styles.container}>
      <Heading />
      <Input onInputValue={inputValueHandler} />
      <SubmitTodoButton submitTodo={submitTodoHandler} />

      <ScrollView
        style={styles.content}
        keyboardShouldPersistTaps='always'>
        <TodoList
          type={type}
          todos={todos}
          completeTodo={completeTodoHandler}
          deleteTodo={deleteTodoHandler} />
      </ScrollView>

      <TabBar type={type} setType={setType} />
      <StatusBar style="auto" />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    backgroundColor: '#fff'
    // alignItems: 'center',
  },
  content: {
    flex: 1,
    paddingTop: 60
  }
})
