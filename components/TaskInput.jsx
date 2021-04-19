import React, { useState } from 'react';
import { Text, View, TextInput, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function TaskInput({addTodo}){
  const [value, setValue] = useState('')

  const onPress = () => {
    value && addTodo(value)
    setValue('')
  }

  return (
    <View style={styles.taskInput}>
      <Text style={styles.infoLabel}>New Task</Text>
      <TextInput
        style={styles.taskInputValue}
        onChangeText={setValue}
        placeholder="New task"
        value={value}
        onSubmitEditing={onPress}
      />
      <Ionicons 
        style={styles.taskInputIcon}
        name="add-circle" 
        size={32}
        color="#0084E3"
        onPress={onPress}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  taskInput: {
    paddingVertical: 10,
    marginBottom: 10,
    borderBottomColor: "rgba(0,0,0,0.1)",
    borderBottomWidth: StyleSheet.hairlineWidth
  },
  taskInputValue: {
    fontSize: 18,
  },
  taskInputIcon: {
    position: "absolute",
    right: 0,
    top: "50%",
  },
})