import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// Views
import Album from '../views/Album.jsx'
import Post from '../views/Post.jsx'
import Users from '../views/Users.jsx'
import User from '../views/User.jsx'

// Data
const Stack = createStackNavigator();

export default function Routes() {
	return (
		<NavigationContainer>
			<Stack.Navigator initialRouteName="Post">
				<Stack.Screen name="Album" component={Album} />
				<Stack.Screen name="Post" component={Post} />
				<Stack.Screen name="Users" component={Users} />
				<Stack.Screen name="User" component={User} />
			</Stack.Navigator>
		</NavigationContainer>
  );
}