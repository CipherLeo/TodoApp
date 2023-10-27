/* eslint-disable react/prop-types */
import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import TodoButton from './TodoButton'

const Todo = props => (
  <View style={styles.todoContainer}>
    <Text style={styles.todoText}>
      {props.todo.text}
    </Text>
    <View style={styles.buttons}>
      <TodoButton
        name='Done'
        isDone={props.todo.isDone}
        onPress={() => { props.completeTodo(props.todo.id) }} ></TodoButton>
      <TodoButton
        name='Delete'
        isDone={props.todo.isDone}
        onPress={() => props.deleteTodo(props.todo.id)} ></TodoButton>
    </View>
  </View>
)
const styles = StyleSheet.create({
  todoContainer: {
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 20,
    marginRight: 20,
    backgroundColor: '#ffffff',
    borderTopWidth: 1,
    borderRightWidth: 1,
    borderLeftWidth: 1,
    borderColor: '#ededed',
    paddingLeft: 14,
    paddingTop: 7,
    paddingBottom: 7,
    shadowOpacity: 0.2,
    shadowRadius: 3,
    shadowColor: '#000000',
    shadowOffset: { width: 2, height: 2 },
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10
  },
  todoText: {
    fontSize: 17
  },
  buttons: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center'
  }
})
export default Todo
