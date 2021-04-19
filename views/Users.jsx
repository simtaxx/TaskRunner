import React from 'react';
import { Button, Text, FlatList } from 'react-native';

export default function Users({ navigation }) {
	return (
    <FlatList>
			<Text>Hello World</Text>
			<Button
				title="See the user"
				onPress={() => navigation.navigate('User', { userId: 1 })}
			>
			</Button>
		</FlatList>    
      
	);
}