import React, { useState } from 'react'
import { Text, View, StyleSheet, TouchableWithoutFeedback } from 'react-native'
import { AntDesign } from '@expo/vector-icons'

export default function Task({ name, checked }) {
  const [active, setActive] = useState(checked)

  return (
    <TouchableWithoutFeedback onPress={() => setActive(!active)}>
      <View style={[styles.task, active && { opacity: 0.5 }]}>
        <Text
          style={[
            styles.taskName,
            active && { textDecorationLine: 'line-through' }
          ]}
          ellipsizeMode="tail"
          numberOfLines={1}
        >
          {name}
        </Text>
        <AntDesign
          name={active ? 'checkcircleo' : 'checkcircle'}
          size={24}
          color="#fff"
        />
      </View>
    </TouchableWithoutFeedback>
  )
}

const styles = StyleSheet.create({
  task: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#0084E3',
    padding: 16,
    borderRadius: 10,
    marginBottom: 10
  },
  taskName: {
    color: '#fff',
    maxWidth: '90%'
  }
})
