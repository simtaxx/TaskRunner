import React, { useEffect, useState, useRef } from 'react'
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity
} from 'react-native'

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    width: '100%',
    display: 'flex',
    alignItems: 'center'
  },
  title: {
    marginTop: 32,
    marginBottom: 12,
    fontWeight: 'bold', //"500",
    fontSize: 24
  },
  img: {
    width: 328,
    height: 328,
    borderRadius: 8,
    textAlign: 'center',
    marginBottom: 32
  },
  modal: {
    width: '100%',
    height: '100%'
  },
  modal__wrapper: {
    display: 'none',
    width: '100%',
    height: '100%',
    position: 'absolute',
    top: 0,
    left: 0
  },
  modal__img: {
    width: '100%',
    height: '100%'
  }
})

export default function Album({ route }) {
  const [datas, setDatas] = useState([])
  const [loading, setLoading] = useState(null)

  const [urlPhotos, setUrlPhotos] = useState([])

  const [urlModal, setUrlModal] = useState(null)
  const [modal_pointerEvents, setModal_pointerEvents] = useState('none')
  const photoEl = useRef(null)

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/photos?albumId=1')
      .then(response => response.json())
      .then(json => {
        setDatas(json)
      })
      .catch(error => console.error(error))
      .finally(() => {
        setLoading(false)
      })
  }, [])
  const onPressPhoto = () => {
    setModal_pointerEvents(null)
    photoEl.current.setNativeProps({
      display: 'flex'
    })
  }

  return (
    <>
      <SafeAreaView>
        <ScrollView>
          <View style={styles.container}>
            {/* <Text>{urlModal}</Text> */}
            {/* <Text>Album Page {JSON.stringify(datas[0])}</Text>
					<Text>---------------------------------------</Text> */}

            <Text style={styles.title}>
              Album {datas.length ? datas[0].id : ''}
            </Text>

            {datas.length ? (
              datas.map(data => (
                <TouchableOpacity
                  onPress={() => {
                    setUrlModal(data.thumbnailUrl + '.png')
                    onPressPhoto()
                  }}
                  key={data.id}
                >
                  <Image
                    style={styles.img}
                    source={{ uri: data.thumbnailUrl + '.png' }}
                  />
                </TouchableOpacity>
              ))
            ) : (
              <Text>Chargement..</Text>
            )}
          </View>
        </ScrollView>
        <View pointerEvents={modal_pointerEvents} style={styles.modal__wrapper}>
          <TouchableOpacity
            ref={photoEl}
            style={styles.modal}
            onPress={() => {
              setModal_pointerEvents('none')
              photoEl.current.setNativeProps({
                display: 'none'
              })
            }}
          >
            <Image style={styles.modal__img} source={{ uri: urlModal }} />
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </>
  )
}
