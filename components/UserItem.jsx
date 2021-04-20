import React from 'react'
import { TouchableOpacity, Text, StyleSheet, View } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'
import { Entypo } from '@expo/vector-icons'

const styles = StyleSheet.create({
  userItem: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 65,
    borderColor: 'rgba(0, 0, 0, .1)',
    borderRadius: 4,
    borderWidth: 1,
    marginBottom: 16,
    padding: 16
  },
  userInfo: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  picture: {
    marginRight: 8
  },
  text: {
    textTransform: 'uppercase'
  },
  arrow: {}
})

export default function userItem({ item, navigation }) {
  return (
    <TouchableOpacity
      style={styles.userItem}
      onPress={() => navigation.navigate('User', { user: item })}
    >
      <View style={styles.userInfo}>
        <MaterialIcons
          style={styles.picture}
          name="account-circle"
          size={24}
          color="#005492"
        />
        <Text style={styles.text}>{item.name}</Text>
      </View>
      <Entypo
        style={styles.arrow}
        name="chevron-right"
        size={24}
        color="#005492"
      />
    </TouchableOpacity>
  )
}
