import { View } from "react-native";
import Todo from "./Todo";

const TodoList = ({ todos }) => {
  todos = todos.map((todo, index) => {
    return (
      <Todo 
        key={index}
        todo={todo} />
    )
  })

  return (
    <View>
      { todos }
    </View>
  )
}

export default TodoList