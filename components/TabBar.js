import React from 'react'
import { StyleSheet, View } from 'react-native'
import PropTypes from 'prop-types'
import TabBarItem from './TabBarItem'

const TabBar = ({ type, setType }) => (
  <View style={ styles.container }>
    <TabBarItem
      type={ type }
      title='All'
      selected={ type === 'All' }
      bordered={ type === 'All' }
      setType={() => setType('All')} />
    <TabBarItem
      type={ type }
      border
      title='Active'
      selected={ type === 'Active' }
      bordered={ type === 'Active' }
      setType={() => setType('Active')} />
    <TabBarItem
      type={ type }
      border
      title='Complete'
      selected={ type === 'Complete' }
      bordered={ type === 'Complete' }
      setType={() => setType('Complete')} />
  </View>
)

const styles = StyleSheet.create({
  container: {
    height: 70,
    flexDirection: 'row',
    borderTopWidth: 1,
    borderTopColor: '#dddddd'
  }
})

TabBar.propTypes = {
  type: PropTypes.any,
  setType: PropTypes.any
}

export default TabBar
