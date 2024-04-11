import { Dimensions, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import MapView, {MarkerAnimated} from "react-native-maps";
import { useNavigation } from "@react-navigation/native";
import mapStyle from "../assets/Style/Style";
import Icon from "react-native-vector-icons/Feather";
import LocationIcon from "react-native-vector-icons/Fontisto";
import SearchBox from '../components/SearchBox';
import VehicleBox from '../components/VehicleBox';

const { width, height } = Dimensions.get("window")
const RATIO = width / height

const Home = () => {
  const navigation = useNavigation();

  const handlePress = ()=>{
    navigation.navigate("Search")
  }
  return (
    <View style={styles.HomeScreenContainer}>
      <MapView provider='google' style={[StyleSheet.absoluteFillObject]} initialRegion={{ latitude: 30.66773, longitude: 73.11231, latitudeDelta: 0.01, longitudeDelta: 0.01 * RATIO, }} customMapStyle={mapStyle}>
      <MarkerAnimated coordinate={{latitude: 30.66773, longitude: 73.11231}}>
         <View style={styles.LocationPin}>
            <LocationIcon name='map-marker-alt' size={26} color={"#02dc9f"}/>
         </View>
      </MarkerAnimated>
      </MapView>
      <View>
        <SafeAreaView style={styles.Container}>
          <View>
            <Icon name='menu' size={24} color={"#000"} />
          </View>
          <TouchableOpacity style={styles.SearchBox}>
            <SearchBox title={"your pickup location"} color={"#0ddda2"} />
          </TouchableOpacity>
        </SafeAreaView>
       
        <View style={styles.VehicleCategoryWrapper}>
          <VehicleBox heading={"Car"} id={1} name={"car-side"} library={""} />
          <VehicleBox heading={"Tuk"} name={"rickshaw"} library={""} />
          <VehicleBox heading={"Van"} name={"van-passenger"} library={""} />
          <VehicleBox heading={"Truck"} name={"truck"} library={""} />
          <VehicleBox heading={"Bus"} name={"bus-side"} library={""} />
        </View>

      </View>
      <View style={styles.ButtonWrapper}>
        <TouchableOpacity style={styles.ButtonBox} onPress={handlePress}>
          <Text style={styles.ButtonText}>Pick Me</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
  HomeScreenContainer: {
    flex: 1,
    marginTop: 30
  },
  Container: {
    marginHorizontal: 20
  },
  SearchBox: {
    marginVertical: 20,
    padding: 15,
    backgroundColor: "#fff",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderRadius: 5,
    shadowOffset: {
      height: 4,
      width: 0
    },
    shadowRadius: 10,
    shadowOpacity: 0.05,
    elevation: 5
  },
  LocationPin:{
    width: 60,
    height: 60,
    borderRadius: 100,
    backgroundColor: "rgba(2,220,159,.15)",
    justifyContent:"center",
    alignItems: "center",
  },
  VehicleCategoryWrapper: {
    borderTopLeftRadius: 20,
    borderBottomLeftRadius: 20,
    padding: 20,
    alignItems: "flex-end",
    backgroundColor: "#fff",
    position: "absolute",
    right: 0,
    top: height / 4,
    shadowColor: "#000",
    shadowOffset: {
      height: 2,
      width: 2
    },
    shadowRadius: 20,
    shadowOpacity: 0.1,
    elevation: 5
  },
  ButtonWrapper: {
    position: "absolute",
    bottom: 100,
    alignSelf: "center"
  },
  ButtonBox: {
    paddingHorizontal: 20,
    paddingVertical: 15,
    backgroundColor: "black",
    borderRadius: 15
  },
  ButtonText: {
    color: "white",
    fontSize: 25
  },
})