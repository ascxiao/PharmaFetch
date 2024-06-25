import React from "react"
import {Image, Text, View, ImageBackground, SafeAreaView, ScrollView } from "react-native"
import Heading from './Header.js'
import ServiceChoices from "./ServiceChoice.js"
import Pharmacist from "./Pharmacist.js"

export default function App() {
  return (
    <ScrollView>
    <SafeAreaView style= {{flex: 1}}>
      <Heading/>
      <ServiceChoices />
      <Pharmacist />
    </SafeAreaView>
    </ScrollView>
  )
}
