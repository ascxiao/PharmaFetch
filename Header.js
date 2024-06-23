import React from "react"
import {Image, Text, View, ImageBackground } from "react-native"
import styles from './style.js'

export default function Heading() {
    return (
<View style={styles.Heading}>
      <View style={styles.Group712}>
        <View style={styles.Group449}>
          <Image
            style={styles.IonMenu}
            source={require('./assets/ion_menu.png')
            }
          />
          <View style={styles.LogoAndName}>
            <Image
              style={styles.Logo}
              source={
              require('./assets/teenyicons_bag-plus-solid.png')}
            />
            <Text style={styles.Pharmafetch}>PharmaFetch</Text>
          </View>
          <View style={styles.Ellipse1} />
        </View>
        <View style={styles.SearchBar}>
          <Image
            style={styles.IconSearch}
            source={
              require('./assets/search_icon.png')}
          />
          <Text style={styles.SearchForPharmaciesM}>
            Search for pharmacies & medicines...
          </Text>
        </View>
      </View>
    </View>
    )
};
