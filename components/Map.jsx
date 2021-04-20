import React from 'react'
import MapView, { Marker } from 'react-native-maps'
import { View, StyleSheet, Dimensions } from 'react-native'

export default function Map({ markers }) {
  return (
    <View style={styles.mapContainer}>
      <MapView style={styles.map}>
        {markers &&
          markers.map(address => (
            <Marker
              coordinate={{
                latitude: Number(address.geo.lat),
                longitude: Number(address.geo.lng)
              }}
              pinColor={'red'}
              title={address.street}
              description={address.suite}
            />
          ))}
      </MapView>
    </View>
  )
}

const styles = StyleSheet.create({
  mapContainer: {
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: 'transparent',
    borderRadius: 10,
    marginTop: 10
  },
  map: {
    width: Dimensions.get('window').width,
    height: 300
  }
})
