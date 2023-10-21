/* eslint-disable react/prop-types */
/* eslint-disable react/react-in-jsx-scope */
import { StyleSheet, TextInput, View } from 'react-native'

const Input = props => {
  const messageChangeHandler = (message) => {
    props.onInputValue(message)
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

export default Input
