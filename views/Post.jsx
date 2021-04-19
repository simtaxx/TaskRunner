import React,{useEffect,useState,useRef} from 'react';
import {Button, TextInput, SafeAreaView,ScrollView,View,Text ,Image , StyleSheet,TouchableOpacity  } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

export default function Post({route}) {
	const { post } = route.params
	const [ datasComments , setDatasComments ] = useState([]);
	const [loadingComments,setLoadingComments] = useState(null);
	const [ urlPhotos , setUrlPhotos ] = useState([]);
	const [inputText, onChangeText] = useState("Waaaaahouu");
	const inputEl = useRef(null);

	useEffect(() => {
		fetch('https://jsonplaceholder.typicode.com/posts/2/comments')
		  .then((response) => response.json())
		  .then((json) => {
			setDatasComments(json);
			})
		  .catch((error) => console.error(error))
		  .finally(() => {setLoadingComments(false)});
	}, []);

	const addComment = () => {
		// `current` fait référence au champ textuel monté dans le DOM
		// alert(inputText);
		var newElement = {
			id:  (datasComments[0].id + datasComments.length+1),
			name: 'unknown',
			body: inputText
		}
		setDatasComments(oldArray => [...oldArray, newElement])
	}

	return (
		<>
		<SafeAreaView>
			<ScrollView>
				<View style={styles.wrapper}>
					<View style={styles.container}>
						<Text style={styles.title}>Post n°{post.id}</Text>
						<Text style={styles.author}>{post.author}</Text>
						<Text style={styles.content}>{post.body}</Text>
					</View>
					<View style={styles.separator}/>
					{datasComments.length ? datasComments.map((comment)=>
						<View key = {comment.id} style={styles.comment__wrapper} >
							{/* <Text style={styles.comment__ico}>ICO HERE</Text> */}
							<MaterialIcons
								style={styles.comment__ico}
								name="account-circle"
								size={33}
								color="#005492"
							/>	
							<Text style={styles.comment__name}>{comment.name}</Text>
							<Text style={styles.comment__content}>{comment.body}</Text>
												
						</View>
						)
							
						
						: <Text>ERROR</Text>
					}
					{/* <Text>{JSON.stringify(datasComments)}</Text> */}
					<View style={styles.comment__wrapper__add} >
						<TextInput ref={inputEl} style={styles.input} value={inputText} onChangeText={onChangeText}/>
						<Button
							onPress={addComment}
							title="Ajouter un commentaire"
							color="#005492"
							accessibilityLabel="Ajouter un commentaire"
							/>
					</View>
					
				</View>
			</ScrollView>
		</SafeAreaView>
		</>
	);
}

const styles = StyleSheet.create({
	wrapper:{
		width:'100%',
		display:'flex',
		alignItems:'center'
	},	
	container:{

		width:328,
		// display:'flex',
		// alignItems:'center'
	},	
	title:{
		marginTop:32,
		fontSize:24,
		fontWeight:"bold" //"500"

	},
	author:{
		marginTop:8,
		fontSize:16,
		fontWeight:"bold" //"500"
	},
	content:{
		marginTop:28,
		marginBottom:23,
		fontSize:16,
		fontWeight:"300"
	},
	separator:{
		width:328,
		height:2,
		backgroundColor:"rgba(0,0,0,.1)",
		marginBottom:23
	},
	comment__wrapper:{
		width:328,
		borderRadius:4,
		borderWidth:1,
		borderColor:'rgba(0,0,0,.1)',
		paddingLeft: 57,
		paddingRight: 24,
		paddingTop: 24,
		paddingBottom: 24,
		marginBottom:16,
	},
	comment__ico:{
		position:'absolute',
		width:33,
		height:33,
		// backgroundColor:'rgba(155,200,0,1)',
		top:16,
		left:16,
	},
	comment__name:{
		textTransform:'uppercase',
		marginBottom:16,

	},
	comment__content:{},

	comment__wrapper__add:{
		width:328,
		borderRadius:4,
		borderWidth:1,
		borderColor:'rgba(0,0,0,.1)',
		paddingLeft: 24,
		paddingRight: 24,
		paddingTop: 24,
		paddingBottom: 24,
		marginBottom:16,
	},
	input:{
		minHeight:50,
		paddingLeft:16,
		borderRadius:5,
		borderWidth:1,
		borderColor:'rgba(0,0,0,.1)',
		marginBottom:23,
	}

});



// 		<>
// 		<SafeAreaView>

// 			<ScrollView>
// 				<View style={styles.container}>

// 					{/* <Text>Album Page {JSON.stringify(datas[0])}</Text>
// 					<Text>---------------------------------------</Text> */}

// 					<Text style={styles.title} >Album {datas.length ? datas[0].id : ''}</Text>

// 					{datas.length ? datas.map((data)=>
// 						<TouchableOpacity key = {data.id}>
// 							<Image 
// 							style={styles.img} 
// 							source={{uri: data.thumbnailUrl + '.png'}} />
// 						</TouchableOpacity>
							
// 						)
							
						
// 						: <Text>ERROR</Text>
// 					}
// 								<Text>------------------------------------</Text>

// 				</View>


// 			</ScrollView>
// 		</SafeAreaView>
// 		</>

// 	);
// }