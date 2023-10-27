import React from 'react'
import { StyleSheet, TextInput, View } from 'react-native'
import PropTypes from 'prop-types'

const Input = ({ onInputValue }) => {
  const messageChangeHandler = (message) => {
    onInputValue(message)
  }
  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.input}
        onChangeText={messageChangeHandler}
        placeholder="What needs to be done?"
        placeholderTextColor='#CACACA'
        selectionColor='#666666' />
    </View>
  )
}

const styles = StyleSheet.create({
  inputContainer: {
    marginLeft: 20,
    marginRight: 20,
    shadowOpacity: 0.2,
    shadowRadious: 3,
    shadowColor: '#000000',
    shadowOffset: { width: 2, height: 2 }
  },
  input: {
    height: 60,
    backgroundColor: '#ffffff',
    paddingLeft: 10,
    paddingRight: 10
  }
})

Input.propTypes = {
  onInputValue: PropTypes.func
}

export default Input
