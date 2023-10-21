/* eslint-disable react/prop-types */
/* eslint-disable react/react-in-jsx-scope */
import { View } from 'react-native'
import Todo from './Todo'

const TodoList = props => {
  const todos = props.todos.map((todo, index) => {
    return (
      <Todo
        key={ index }
        todo={ todo }
        deleteTodo={ props.deleteTodo } />
    )
  })

  return (
    <View>
      { todos }
    </View>
  )
}

export default TodoList
