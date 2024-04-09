import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { FlatList, Image, ImageBackground, ScrollView, StyleSheet, Text, View } from 'react-native';

export default function App() {

  const [months, setMonths] = useState([
    {name: 'January', id: 1},
    {name: 'February', id: 2},
    {name: 'March', id: 3},
    {name: 'April', id: 4},
    {name: 'May', id: 5},
    {name: 'June', id: 6},
    {name: 'July', id: 7},
    {name: 'August', id: 8},
    {name: 'September', id: 9},
    {name: 'October', id: 10},
    {name: 'November', id: 11},
    {name: 'December', id: 12},
  ])

  return (
    <View style={styles.container}>
      {/* <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" /> */}

      {/* <textInput style={styles.textInput} placeholder="Enter your name" /> */}

      {/* <Image source={require('./assets/000.jpg')} style={styles.image} resizeMode='cover' />
      <Image source={{ uri: 'https://picsum.photos/200' }} style={styles.image} resizeMode='center' />
      <Image
        style={styles.logo}
        source={{
          uri: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAAzCAYAAAA6oTAqAAAAEXRFWHRTb2Z0d2FyZQBwbmdjcnVzaEB1SfMAAABQSURBVGje7dSxCQBACARB+2/ab8BEeQNhFi6WSYzYLYudDQYGBgYGBgYGBgYGBgYGBgZmcvDqYGBgmhivGQYGBgYGBgYGBgYGBgYGBgbmQw+P/eMrC5UTVAAAAABJRU5ErkJggg==',
        }}
      /> */}

      {/* <ImageBackground
        source={require('./assets/janu.jpg')}
        style={styles.bgImage}
      >
        <Text style={styles.textHome}>Hii... Janushankan</Text>
      </ImageBackground> */}

      {/* <ScrollView>
        {
          months.map((month) => {
            return (
              <Text key={month.id} style={styles.textScrollView}>{month.name}</Text>
            )
          })
        }
      </ScrollView> */}

      <FlatList
        data = {months}
        // horizontal
        numColumns={2}
        keyExtractor = {(item) => item.id}
        renderItem = {({item}) => (
          <Text style={styles.textScrollView}>{item.name}</Text>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 50,
  },

  // textInput: {
  //   height: 40,
  //   borderColor: 'gray',
  //   borderWidth: 1,
  //   width: 200,
  //   margin: 10,
  //   padding: 10,
  // },

  // image: {
  //   width: 100,
  //   height: 100,
  //   borderWidth: '1',
  //   borderColor: 'gray',
  // },

  // bgImage: {
  //   flex: 1,
  //   width: '100%',
  //   height: '100%',
  //   alignItems: 'center',
  //   justifyContent: 'center',
  // },

  // textHome: {
  //   backgroundColor: 'yellow',
  //   color: 'white',
  //   fontSize: 18,
  //   fontWeight: 'bold',
  // }

  textScrollView: {
    fontWeight: 'bold',
    backgroundColor: 'yellow',
    color: 'red',
    width: 150,
    // height: 80,
    padding: 15,
    margin: 15,
    borderRadius: 10,
  }
});
