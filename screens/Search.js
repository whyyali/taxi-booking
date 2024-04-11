import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Icon from "react-native-vector-icons/Feather";
import SearchBox from '../components/SearchBox';
import LocationIcon from "react-native-vector-icons/Fontisto";

const Search = () => {
  return (
    <View style={styles.SearchContainer}>
      <SafeAreaView>
        <View style={styles.SearchCard}>
          <View style={styles.SearchDropBox}>
            <Text style={styles.SearchDropText}>Drop location</Text>
            <TouchableOpacity>
                <Icon name='x' size={24}/>
            </TouchableOpacity>
          </View>
          <View style={styles.SearchBox}>
            <SearchBox card={true} title={"Where are you going?"} color={"#ff4858"}/>
          </View>
          <View style={styles.SearchBoxBottom}>
              <View style={styles.BottomBox}>
                <LocationIcon name='map-marker-alt' size={24} style={styles.BottomBoxIcon}/>
                <Text style={styles.BottomBoxText}>Tap to select from map</Text>
              </View>
              <TouchableOpacity style={styles.BottomButton}>
                <Icon  name='arrow-right' size={22} color={"#fff"}/>
              </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    </View>
  )
}

export default Search

const styles = StyleSheet.create({
  SearchContainer:{
    flex: 1,
    backgroundColor: "#fff",
    marginTop: 30
  },
  SearchCard:{
    padding: 20,
    marginHorizontal: 10,
    borderColor: "#efefef",
    borderRadius: 20,
    borderWidth: 1,
    marginTop: 30,
  },
  SearchDropBox:{
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  SearchDropText:{
    color: "#ff5563",
    fontWeight: "bold"
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
  SearchBoxBottom:{
    marginTop: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  BottomBox:{
    flexDirection: "row",
    alignItems: "center"
  },
  BottomBoxIcon:{
    color: "#ff4858",
    marginRight: 10
  },
  BottomBoxText:{
    color: "#92939b",
    fontSize: 16,
    fontWeight: "bold"
  },
  BottomButton:{
    width: 50,
    height: 50,
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#000"
  }
})