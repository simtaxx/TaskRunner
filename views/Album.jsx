import React,{useEffect,useState} from 'react';
import {SafeAreaView,ScrollView,View,Text ,Image , StyleSheet,TouchableOpacity  } from 'react-native';


const styles = StyleSheet.create({
	container:{
		width:'100%',
		display:'flex',
		alignItems:'center'
	},	
	title:{
		marginTop:32,
		marginBottom:12,
		fontWeight:"bold", //"500",
		fontSize:24
	},
	img: {
		width: 328,
		height: 328,
		borderRadius:8,
	    textAlign: 'center',
		marginBottom: 32,
	},
	// animatedImg:{
	// 	opacity:fullScreen
	// }
  });


export default function Album({route}) {
	// console.log(route);
	const [ datas , setDatas ] = useState([]);
	const [loading,setLoading] = useState(null);

	const [ urlPhotos , setUrlPhotos ] = useState([]);
	useEffect(() => {
		fetch('https://jsonplaceholder.typicode.com/photos?albumId=1')
		  .then((response) => response.json())
		  .then((json) => {
			  setDatas(json);
			//   init();
			//   var arrayUrlPhotos =0 ;
			//   for(let i = 0; i < data.length; i++){
			// 	arrayUrlPhotos.push(data[i].thumbnailUrl)
			//   }
			//   setUrlPhotos(arrayUrlPhotos);
				// var arrayUrlPhotos = [];
				// if(datas.length){
				// 	datas.forEach((data)=>{
				// 		arrayUrlPhotos.push(data.thumbnailUrl)
				// 	})
				// 	console.log(arrayUrlPhotos);
				// }
				// setUrlPhotos(arrayUrlPhotos)
			})
			// .then(()=>{console.log(data)})

		  .catch((error) => console.error(error))
		  .finally(() => {setLoading(false)});
	  }, []);

	return (
		<>
		<SafeAreaView>

			<ScrollView>
				<View style={styles.container}>

					{/* <Text>Album Page {JSON.stringify(datas[0])}</Text>
					<Text>---------------------------------------</Text> */}

					<Text style={styles.title} >Album {datas.length ? datas[0].id : ''}</Text>

					{datas.length ? datas.map((data)=>
						<TouchableOpacity key = {data.id}>
							<Image 
							style={styles.img} 
							source={{uri: data.thumbnailUrl + '.png'}} />
						</TouchableOpacity>
							
						)
							
						
						: <Text>ERROR</Text>
					}
				</View>


			</ScrollView>
		</SafeAreaView>
		</>

	);
}