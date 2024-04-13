import { StyleSheet, Text, View } from 'react-native';
import Icon from "react-native-vector-icons/Feather";

const FavouriteCardItem = ({title, subtitle}) => {
  return (
    <View style={styles.ItemContainer}>
        <View style={styles.ItemBox}>
        <Icon name='heart' size={24} color={"green"}/>
         <View style={styles.ItemTextBox}>
         <Text style={styles.TitleText}>{title}</Text>
         <Text style={styles.SubTitleText}>{subtitle}</Text>
         </View>
        </View>
        <Icon name='minus-circle' size={24} color={"red"}/>
    </View>
  )
}

export default FavouriteCardItem

const styles = StyleSheet.create({
    ItemContainer:{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
    ItemBox:{
        flexDirection: "row",
        alignItems: "center",
    },
    ItemTextBox:{
        marginLeft: 20
    },
    TitleText:{
        fontSize: 18,
        color: "gray"
    },
    SubTitleText:{
        fontSize: 14
    }
})