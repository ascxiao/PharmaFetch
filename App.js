import { React } from 'react';
import { SafeAreaView, StatusBar, Image, StyleSheet, Text, View, Platform, Dimensions } from 'react-native';
import { useFonts } from 'expo-font';

export default function App() {

  return (
    <SafeAreaView id = "header" style={header.container}>
      <SafeAreaView>
      <Image source={require('./assets/teenyicons_bag-plus-solid.png')} style = {header.logo}/>
      <Text style = {header.brandStyle}> PharmaFetch</Text>
      </SafeAreaView>
    </SafeAreaView>
  );
}



const header = StyleSheet.create({
  container: {
    backgroundColor: '#0EB8B8',
    alignItems: 'center',
    justifyContent: 'top',
    height: 163
  },

  brandStyle:{
    fontSize: 13,
    fontFamily: 'Inter-Bold',
    fontWeight: 'bold',
    paddingTop: 24,
    paddingLeft: 12,
    color: '#fff',
  },

  logo:{
    height: 20,
    width: 20,
  },

  nameBrand: {
    backgroundColor: '#0EB8B8',
    alignItems: 'center',
    justifyContent: 'top',
  },
});
