import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Dimensions, ScrollView, FlatList, TouchableOpacity, SafeAreaView } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons'; 
import Task from '../components/Task'
import TaskInput from '../components/TaskInput'
import Info from '../components/Info'
import H1 from '../ui/H1'
import Map from '../components/Map'

export default function User({ route, navigation }) {
  const { user } = route.params;

  const [todos, setTodos] = useState([])
  const [albums, setAlbums] = useState([])
  const [posts, setPosts] = useState([])

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/todos?userId=${user.id}`)
      .then(response => response.json())
      .then((data) => {
        setTodos(data.reverse())
      })
    fetch(`https://jsonplaceholder.typicode.com/albums?userId=${user.id}`)
      .then(response => response.json())
      .then((data) => {
        setAlbums(data)
      })
    fetch(`https://jsonplaceholder.typicode.com/posts?userId=${user.id}`)
      .then(response => response.json())
      .then((data) => {
        setPosts(data)
      })
  }, [])

  const addTodo = (value) => setTodos([{ id: todos[0].id + 1, title: value, completed: false }, ...todos ])

  return (
    <ScrollView style={styles.container}>
      <View>
        <H1>Personal informations</H1>
        <Info label="Full Name" value={user.name} />
        <Info label="Nickname" value={user.username} />
        <Info label="Email adress" value={user.email} />
        <Info label="Phone number" value={user.phone} />
        <Info label="Website" value={user.website} />
        <Info label="Company" value={user.company.name} />
      </View>
      <View>
        <H1>Address</H1>
        <Info label="Street" value={user.address.street} />
        <Info label="Suite" value={user.address.suite} />
        <Info label="City" value={user.address.city} />
        <Info label="ZIP Code" value={user.address.zipcode} />
        <Map markers={[user.address]}/>
      </View>
      <View>
        <H1>Todo's</H1>
        <TaskInput addTodo={addTodo}/>
        <FlatList
          style={styles.todoList}
          data={todos}
          renderItem={({item}) => <Task name={item.title} icon="add-circle" checked={item.completed}/>}
          keyExtractor={(item) => String(item.id)}
        />
      </View>
      <View>
        <H1>Albums</H1>
        <SafeAreaView style={{flex: 1}}>
          <FlatList
            contentContainerStyle={{flexGrow: 1}}
            numColumns={3}
            columnWrapperStyle={{margin: 5}}
            data={albums}
            renderItem={({item}) => {
              return (
                <TouchableOpacity 
                  style={styles.album}
                  onPress={() => navigation.navigate('Album', { album: item })}
                >
                  <Text 
                    style={styles.albumTitle} 
                    ellipsizeMode='tail'
                    numberOfLines={1}
                  >
                    {item.title}
                  </Text>
                </TouchableOpacity>
              )
            }}
            keyExtractor={(item) => String(item.id)}
          />
        </SafeAreaView>
      </View>
      <View>
        <H1>Articles</H1>
        <SafeAreaView style={{flex: 1}}>
          <FlatList
            data={posts}
            renderItem={({item}) => {
              return (
                <TouchableOpacity 
                  style={styles.article}
                  onPress={() => navigation.navigate('Post', { post: { ...item, author: user.name } })}
                >
                  <Text 
                    style={styles.articleTitle}
                    ellipsizeMode='tail'
                    numberOfLines={1}
                  >
                    {item.title}
                  </Text>
                  <MaterialIcons name="keyboard-arrow-right" size={24} color="black" />
                </TouchableOpacity>
              )
            }}
            keyExtractor={(item) => String(item.id)}
          />
        </SafeAreaView>
      </View>
    </ScrollView>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 10,
  },
  albumContainer: {
    flexGrow: 1,
    justifyContent: "space-between",
    minHeight: 100,
  },
  album: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    width: "30%",
    height: 100,
    marginHorizontal: 5,
    backgroundColor: "blue",
    borderRadius: 10
  },
  albumTitle: {
    color: "white",
    fontWeight: 'bold',
    padding: 10,
  },
  article: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 56,
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,0.1)',
    borderRadius: 10,
    paddingVertical: 18,
    paddingHorizontal: 16,
    marginBottom: 10
  },
  articleTitle: {
    fontSize: 16,
    width: "90%"
  }
});