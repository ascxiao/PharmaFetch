import React from "react"
import {Image, Text, View, ImageBackground, SafeAreaView } from "react-native"
import Heading from './Header.js'
import ServiceChoices from "./ServiceChoice.js"

export default function App() {
  return (
    <SafeAreaView style= {{flex: 1}}>
      <Heading/>
      <ServiceChoices />
    </SafeAreaView>
  )
}
