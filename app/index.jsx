import { View, Text, StyleSheet, ImageBackground, Pressable} from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

import flowerImage from "@/assets/images/IMG_20231006_121152_930.jpg"

const app = () => {
  return (
    <View style={styles.container}>
      <ImageBackground source={flowerImage} resizeMode='cover' style={styles.image}>

        <Text style={styles.title}>Coffee Shop</Text>

        <Link href="/contact" style={{marginHorizontal: 'auto'}} asChild>
          <Pressable style={styles.button}>
            <Text style={styles.buttonText}>Hello</Text>
          </Pressable>
        </Link>

      </ImageBackground>
    </View>
  )
}

export default app

const styles = StyleSheet.create({
  container:{
    flex: 1,
    flexDirection: 'column',
  },
  image:{
    width: '100%',
    height: '100%',
    flex: '1',
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  title:{
    color: 'blue',
    fontSize: 42,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
    marginBottom: 120,
  },
  link:{
    color: 'blue',
    fontSize: 42,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
    textDecorationLine: 'underline',
    padding: '4',
  },
  button:{
    height: 60,
    borderRadius: 20,
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0.7)',
    padding: 6,
  },
  buttonText:{
    color: 'blue',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    padding: '4',
  }
})