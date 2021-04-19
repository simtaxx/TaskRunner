import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// Views
import Users from '../views/Users.jsx'
import User from '../views/User.jsx'

// Data
const Stack = createStackNavigator();

export default function Routes() {
	return (
		<NavigationContainer>
			<Stack.Navigator initialRouteName="Users">
				<Stack.Screen name="Users" component={Users} />
				<Stack.Screen name="User" component={User} />
			</Stack.Navigator>
		</NavigationContainer>
  );
}