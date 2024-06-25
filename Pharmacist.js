import React from "react"
import {Image, Text, View, ImageBackground } from "react-native"
import styles from "./style.js"

export default function Pharmacist() {
  return (
    <View style={styles.Frame13}>
      <View style={styles.BestPharmacistNearYou}>
        <View style={styles.Pharmactist}>
          <View style={styles.OrderNowButton}>
            <Text style={styles.OrderNow}>ORDER NOW</Text>
          </View>
        </View>
        <Text style={styles.YourMedsReadyWhenYou}>
          YOUR MEDS, READY WHEN YOU ARE
        </Text>
        <Image
          style={styles.PharmacistBannerE16836444302391}
          source={require('./assets/pharmacist.png')}
        />
        <View style={styles.Group147}>
          <Text style={styles.BestPharmaciesNearYo}>
            Best pharmacies near you
          </Text>
          <Text style={styles.DiscoverTheBestPharm}>
            Discover the best pharmacies with the best pharmacists as
            recommended by our users — ensuring fast and great service.
          </Text>
        </View>
      </View>
    </View>
  )
}


