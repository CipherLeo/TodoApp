import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const Todo = ({ todo }) => (
  <View style={ styles.todoContainer }>
    <Text style={styles.todoText}>
      { todo.text }
    </Text>
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
    alignItems: 'center'
  },
  todoText: {
    fontSize: 17
  }
})
export default Todo