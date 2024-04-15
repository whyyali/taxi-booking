import { SafeAreaView, StyleSheet, Text, Dimensions, TouchableOpacity, View } from 'react-native';
import MapView, {MarkerAnimated } from "react-native-maps";
import MapViewDirections from 'react-native-maps-directions';
import { useNavigation, useRoute } from "@react-navigation/native";
import mapStyle from "../assets/Style/Style";
import Icon from "react-native-vector-icons/Feather";
import VehicleBox from '../components/VehicleBox';
import { Vehicles } from "../components/data";
import { useState } from 'react';

const { width, height } = Dimensions.get("window")
const RATIO = width / height

const Book = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const { selectedVehicle, currentLocation, destinationLocation } = route.params;

  const [selectVechicle, setSelectVechicle] = useState(selectedVehicle);

  const handleVechile = (id) => {
    const selectedVechicle = Vehicles.find(vehicle => vehicle.id === id);
    if (selectedVechicle) {
      setSelectVechicle(selectedVechicle);
    }
  }

  return (
    <View style={styles.BookingContainer}>
      <MapView provider='google' style={[StyleSheet.absoluteFillObject]} initialRegion={{ latitude: 30.66773, longitude: 73.11231, latitudeDelta: 0.01, longitudeDelta: 0.01 * RATIO, }} customMapStyle={mapStyle}>
        <MarkerAnimated coordinate={{ latitude: currentLocation.latitude, longitude: currentLocation.longitude }}>
          <View style={[styles.LocationBox , {borderLeftColor: "red"}]}>
             <Text>Current Location</Text>
          </View>
          <View style={[styles.DotWrapper, {backgroundColor: "rgba(247, 70, 86, 0.25)"}]}>
             <View style={[styles.Dot, {backgroundColor: "red"}]} />
          </View>
        </MarkerAnimated>
        <MarkerAnimated coordinate={{ latitude:30.671175250204 , longitude: 73.12049594755679 }}>
          <View style={[styles.LocationBox , {borderLeftColor: "green"}]}>
            <Text>{destinationLocation}</Text>
          </View>
          <View style={[styles.DotWrapper, {backgroundColor: "rgba(2, 213, 255, 0.25)"}]}>
             <View style={[styles.Dot, {backgroundColor: "green"}]} />
          </View>
        </MarkerAnimated>
        <MapViewDirections 
        origin={{latitude: currentLocation.latitude, longitude: currentLocation.longitude}} 
        destination={{latitude:30.671175250204, longitude: 73.12049594755679 }}
        apikey={''}  // add key 
        mode='WALKING'
        strokeColor='gray'
        strokeWidth={4}
        lineDashPattern={[6,6]} 
         />
      </MapView>

      <View style={styles.BookingHeader}>
        <Icon name='menu' size={24} color={"#000"} />
        <TouchableOpacity onPress={() => { navigation.navigate("Home") }}>
          <Icon name='x' size={24} color={"#000"} />
        </TouchableOpacity>
      </View>

      <SafeAreaView style={{ flex: 1, justifyContent: "flex-end" }}>
        <View style={styles.BookingItemCategories}>
          <View style={styles.BookingCategoryWrapper}>
            {Vehicles.map((data) => (
              <View key={data.id}>
                <VehicleBox name={data.name} icon={data.icon} library={""} isSelected={selectVechicle.id === data.id} onPress={() => { handleVechile(data.id) }} />
              </View>
            ))}
          </View>
          <View style={styles.BookingNoticeContainer}>
            <View style={styles.BookingDistance}><Text style={styles.BookingDistanceText}>Distance 100km</Text></View>
            <Text style={styles.BookingNotice}>Note: <Text style={styles.BookingNoticeText}>This is approximate estimate, Actual cost may be different due to traffic and waiting time.</Text> </Text>
          </View>

          <View style={styles.BookingVechicle}>
            <View style={styles.BookingVechicleBox}>
              <Text style={[styles.BookingVechicleNameText, { fontWeight: "bold" }]}>{selectVechicle.name}</Text>
            </View>
            <View style={styles.BookingVechicleBox}>
              <Text style={[styles.BookingVechicleNameText, { textTransform: "uppercase" }]}>abc123</Text>
            </View>
          </View>

          <View style={styles.BookingButton}>
            <TouchableOpacity>
              <Text style={styles.BookingButtonText}>Book Now</Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    </View>
  )
}

export default Book

const styles = StyleSheet.create({
  BookingContainer: {
    flex: 1,
    marginTop: 30,
  },
  BookingHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginHorizontal: 20
  },
  BookingItemCategories: {
    backgroundColor: "#fff",
    height: height / 3,
    position: "absolute",
    width: width,
    bottom: 0,
  },
  BookingItemCategory: {
    justifyContent: "flex-end"
  },
  BookingCategoryWrapper: {
    marginTop: 4,
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center"
  },
  BookingNoticeContainer: {
    backgroundColor: "#eee",
    padding: 10
  },
  BookingDistance: {
    justifyContent: "center",
    alignItems: "center"
  },
  BookingDistanceText: {
    fontSize: 20,
    fontWeight: "bold"
  },
  BookingNotice: {
    fontSize: 14,
    fontWeight: "600"
  },
  BookingNoticeText: {
    fontWeight: "400",
  },
  BookingVechicle: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    padding: 10
  },
  BookingVechicleBox: {
    borderColor: "gray",
    borderWidth: 2,
    paddingHorizontal: 60,
    paddingVertical: 10,
    borderRadius: 10
  },
  BookingVechicleNameText: {
    fontSize: 16,
  },
  BookingButton: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#000"

  },
  BookingButtonText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#fff",
    padding: 20
  },
  DotWrapper:{
    height: 30,
    width: 30,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
  },
  Dot:{
    height: 12,
    width: 12,
    borderRadius: 20
  },
  LocationBox:{
    width: 150,
    paddingLeft: 8,
    backgroundColor: "#fff",
    position: "relative",
    borderLeftWidth: 6,
  }
})