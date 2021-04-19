import React from 'react';
import { Text, StyleSheet } from 'react-native';

const H1 = ({children}) => <Text style={styles.h1}>{children}</Text>

const styles = StyleSheet.create({
  h1: {
    marginTop: 32,
    marginBottom: 15,
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center"
  },
})

export default H1
