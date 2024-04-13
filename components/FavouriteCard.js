import { StyleSheet, Text, View } from 'react-native';
import FavouriteCardItem from './FavouriteCardItem';
import FavouritePlaces from "./data";

const FavouriteCard = ({}) => {

  return (
    <View style={styles.CardContainer}>
      <Text style={styles.CardHeading}>Favourite Places</Text>
      {FavouritePlaces.map((data) => (
        <View style={styles.CardBox}>
            <FavouriteCardItem key={data.id} title={data.title} subtitle={data.subtitle} />
        </View>
      ))}
    </View>
  )
}

export default FavouriteCard

const styles = StyleSheet.create({
    CardContainer:{
        marginHorizontal: 20,
        marginVertical: 10,
    },
    CardHeading:{
        fontSize: 20,
        fontWeight: "bold"
    },
    CardBox:{
        paddingHorizontal: 5,
        paddingVertical: 10
    }
})