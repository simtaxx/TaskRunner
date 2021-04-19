import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default function Info({label, value}){
  return (
    <View style={styles.info}>
      <Text style={styles.infoLabel}>{label}</Text>
      <Text style={styles.infoValue}>{value}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  info: {
    paddingVertical: 10, 
    borderBottomColor: "rgba(0,0,0,0.1)",
    borderBottomWidth: StyleSheet.hairlineWidth
  },
  infoLabel: {
    fontSize: 16,
    fontWeight: "300",
    marginBottom: 4
  },
  infoValue: {
    fontSize: 18,
    fontWeight: "normal",
  },
})