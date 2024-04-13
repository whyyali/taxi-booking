import { SafeAreaView, StyleSheet, Text, Dimensions, TouchableOpacity, View } from 'react-native';
import MapView, { MarkerAnimated } from "react-native-maps";
import { useNavigation } from "@react-navigation/native";
import mapStyle from "../assets/Style/Style";
import Icon from "react-native-vector-icons/Feather";
import LocationIcon from "react-native-vector-icons/Fontisto";
import VehicleBox from '../components/VehicleBox';

const { width, height } = Dimensions.get("window")
const RATIO = width / height

const Book = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.BookingContainer}>
      <MapView provider='google' style={[StyleSheet.absoluteFillObject]} initialRegion={{ latitude: 30.66773, longitude: 73.11231, latitudeDelta: 0.01, longitudeDelta: 0.01 * RATIO, }} customMapStyle={mapStyle}>
        <MarkerAnimated coordinate={{ latitude: 30.66773, longitude: 73.11231 }}>
          <View style={styles.LocationPin}>
            <LocationIcon name='map-marker-alt' size={26} color={"#02dc9f"} />
          </View>
        </MarkerAnimated>
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
            <VehicleBox heading={"Car"} id={1} name={"car-side"} library={""} />
            <VehicleBox heading={"Tuk"} name={"rickshaw"} library={""} />
            <VehicleBox heading={"Van"} name={"van-passenger"} library={""} />
            <VehicleBox heading={"Truck"} name={"truck"} library={""} />
            <VehicleBox heading={"Bus"} name={"bus-side"} library={""} />
          </View>
          <View style={styles.BookingNoticeContainer}>
            <View style={styles.BookingDistance}><Text style={styles.BookingDistanceText}>Distance 100km</Text></View>
            <Text style={styles.BookingNotice}>Note: <Text style={styles.BookingNoticeText}>This is approximate estimate, Actual cost may be different due to traffic and waiting time.</Text> </Text>
          </View>

          <View style={styles.BookingVechicle}>
             <View style={styles.BookingVechicleBox}>
             <Text style={[styles.BookingVechicleNameText, {fontWeight: "bold"}]}>Car</Text>
             </View>
             <View style={styles.BookingVechicleBox}>
             <Text style={[styles.BookingVechicleNameText, {textTransform: "uppercase"}]}>abc123</Text>
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
  BookingVechicle:{
    flexDirection: "row",
    justifyContent: "space-evenly",
    padding: 10
  },
  BookingVechicleBox:{
    borderColor: "gray",
    borderWidth: 2,
    paddingHorizontal: 60,
    paddingVertical: 10,
    borderRadius: 10
  },
  BookingVechicleNameText:{
    fontSize: 16,
  },
  BookingButton:{
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#000"

  },
  BookingButtonText:{
    fontSize: 20,
    fontWeight: "bold",
    color: "#fff",
    padding: 20  
  }
})