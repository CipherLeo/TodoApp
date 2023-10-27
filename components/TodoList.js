import React from 'react'
import { View } from 'react-native'
import PropTypes from 'prop-types'
import Todo from './Todo'

const TodoList = ({ todos, deleteTodo, completeTodo, type }) => {
  let filteredTodos
  if (type === 'All') {
    filteredTodos = todos
  } else if (type === 'Complete') {
    filteredTodos = todos.filter(t => t.isDone)
  } else {
    filteredTodos = todos.filter(t => !t.isDone)
  }
  const todoItems = filteredTodos.map((todo, index) => {
    return (
      <Todo
        key={index}
        todo={todo}
        completeTodo={completeTodo}
        deleteTodo={deleteTodo} />
    )
  })

  return (
    <View>
      {todoItems}
    </View>
  )
}

TodoList.propTypes = {
  todos: PropTypes.array,
  deleteTodo: PropTypes.func,
  type: PropTypes.string
}

export default TodoList
