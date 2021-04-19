import React from 'react';
import { Text } from 'react-native';

export default function User({ route }) {
    const { userId } = route.params;
    return (
      <Text>User Page {userId}</Text>
    );
  }