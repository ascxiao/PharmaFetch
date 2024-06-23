import React from "react"
import {Image, Text, View, ImageBackground } from "react-native"
import styles from "./style"

export default function ServiceChoices() {
  return (
    <View style={styles.ServiceChoices}>
      <View style={styles.Container1}>
        <View style={styles.DeliveryBox}>
          <View style={styles.DeliveryDescription}>
            <Text style={styles.MedicineDelivery}>Medicine delivery</Text>
            <Text style={styles.GetYourMedicinesOnYo}>
              Get your medicines on your doorstep!
            </Text>
          </View>
          <Text style={styles.PictureHere}>(picture here)</Text>
        </View>
        <View style={styles.PickUpBox}>
          <Text style={styles.PictureHere1}>(picture here)</Text>
          <View style={styles.Group443}>
            <Text style={styles.PickUp}>Pick-up</Text>
            <Text style={styles.AlreadyOutsidePickIt}>
              Already outside? Pick it up and go!
            </Text>
          </View>
        </View>
      </View>
      <View style={styles.Container2}>
        <View style={styles.PrescriptionBox}>
          <View style={styles.Group6}>
            <Text style={styles.ValidatePrescription}>
              Validate prescription
            </Text>
            <Text style={styles.GetYourDoctorSPrescr}>
              Get your doctor’s prescription validated. Don’t worry! All data
              will be protected and not be shared.
            </Text>
          </View>
          <Text style={styles.PictureHere2}>(picture here)</Text>
        </View>
      </View>
    </View>
  )
}