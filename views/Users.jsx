import React, { useState, useEffect } from 'react'
import { FlatList, StyleSheet, ScrollView } from 'react-native'
import { SearchBar } from 'react-native-elements'

const styles = StyleSheet.create({
  container: {
    padding: 24,
  }
})

// Components
import UserItem from '../components/UserItem'
import Map from '../components/Map'
import H1 from '../ui/H1'

export default function Users({ navigation }) {
  const [usersList, setUsersList] = useState([])
  const [searchValue, setSearchValue] = useState('')
  const [displayedUsers, setDisplayedUsers] = useState([])
  const SearchBarContainerStyle = {
    padding: 0,
    backgroundColor: '#F9F9F9',
    borderBottomColor: 'transparent',
    borderTopColor: 'transparent',
    marginTop: 24,
    marginLeft: 24,
    marginRight: 24,
    borderRadius: 4
  }

  useEffect(() => {
    fetch('https://jsonplaceholder.cypress.io/users')
      .then(response => response.json())
      .then(data => {
        setUsersList(data)
        setDisplayedUsers(data)
      })
  }, [])

  const updateQuery = input => {
    setDisplayedUsers(
      usersList.filter(user => {
        if (user.name.toLowerCase().includes(input.toLowerCase())) {
          return user
        }
      })
    )
    setSearchValue(input)
  }

  return (
    <ScrollView style={{ flex: 1 }}>
      <SearchBar
        containerStyle={SearchBarContainerStyle}
        inputStyle={{ backgroundColor: '#F9F9F9' }}
        inputContainerStyle={{ padding: 0, backgroundColor: '#F9F9F9' }}
        placeholder="Search user..."
        onChangeText={updateQuery}
        value={searchValue}
      />
      <FlatList
        style={styles.container}
        data={displayedUsers}
        renderItem={({ item }) => (
          <UserItem item={item} navigation={navigation} />
        )}
        keyExtractor={item => item.id.toString()}
      />
      <H1>Map</H1>
      <Map markers={displayedUsers.map(user => user.address)} />
    </ScrollView>
  )
}
