import React from 'react'
import PropTypes from 'prop-types'
import { Text, TouchableHighlight, StyleSheet } from 'react-native'

const TabBarItem = ({ bordered, title, selected, setType, type }) => (
  <TouchableHighlight
    underlayColor='#efefef'
    onPress={ setType }
    style={[
      styles.item,
      selected ? styles.selected : null,
      bordered ? styles.border : null,
      type === title ? styles.selected : null]
    }>
    <Text style={[
      styles.itemText,
      type === title ? styles.bold : null
    ]}>
      { title }
    </Text>
  </TouchableHighlight>
)

const styles = StyleSheet.create({
  item: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  border: {
    borderLeftWidth: 1,
    borderLeftColor: '#dddddd'
  },
  itemText: {
    color: '#777777',
    fontSize: 16
  },
  selected: {
    backgroundColor: '#ffffff'
  },
  bold: {
    fontWeight: 'bold'
  }
})

TabBarItem.propTypes = {
  bordered: PropTypes.bool,
  title: PropTypes.string,
  selected: PropTypes.bool,
  setType: PropTypes.func,
  type: PropTypes.string
}

export default TabBarItem
