import { Dimensions, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import MapView, {MarkerAnimated} from "react-native-maps";
import { useNavigation } from "@react-navigation/native";
import mapStyle from "../assets/Style/Style";
import Icon from "react-native-vector-icons/Feather";
import LocationIcon from "react-native-vector-icons/Fontisto";
import SearchBox from '../components/SearchBox';
import VehicleBox from '../components/VehicleBox';
import { Vehicles } from "../components/data";
import { useState } from 'react';

const { width, height } = Dimensions.get("window")
const RATIO = width / height

const Home = () => {
  const navigation = useNavigation();
  const [selectedPlace, setSelectedPlace] = useState({latitude: 30.66773, longitude: 73.11231});
  const [selectVechicle, setSelectVechicle] = useState(Vehicles[0].id);

  const handlePress = ()=>{
    navigation.navigate("Search", {
      selectedVehicle: {name: Vehicles[selectVechicle-1].name, id:selectVechicle},
      currentLocation: selectedPlace
    })
  }

  const handleVechile = (id) =>{
    setSelectVechicle(id)
  }

  const handleLocationChange = (region) => {
    setSelectedPlace({latitude: region.latitude , longitude: region.longitude});
  }

  return (
    <View style={styles.HomeScreenContainer}>
      <MapView provider='google' style={[StyleSheet.absoluteFillObject]} initialRegion={{ latitude: selectedPlace.latitude, longitude: selectedPlace.longitude, latitudeDelta: 0.01, longitudeDelta: 0.01 * RATIO, }} customMapStyle={mapStyle} onRegionChange={handleLocationChange}>
      <MarkerAnimated coordinate={{latitude: selectedPlace.latitude, longitude: selectedPlace.longitude}}>
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
          {Vehicles.map((data)=>(
            <View key={data.id}>
               <VehicleBox  name={data.name} icon={data.icon}  library={""} isSelected={selectVechicle === data.id} onPress={()=>{handleVechile(data.id)}}/>
            </View>
          ))}
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