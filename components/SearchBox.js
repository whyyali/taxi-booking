import { StyleSheet, Text, TextInput, View } from 'react-native';
import Icon from "react-native-vector-icons/Feather";

const SearchBox = ({title, color, card}) => {
    return (
        <View style={styles.SearchBoxContainer}>
            <View style={styles.SearchBoxContainerInner}>
                <View style={[styles.Dot, {backgroundColor: color }]} />
                <View>
                  {card === true ? (
                  <TextInput placeholder={title} style={styles.InputTextBox}/>
                  ) : (
                    <Text style={styles.InputTextBox}>{title}</Text>
                  )}
                </View>
            </View>
            <Icon name='heart' size={20} color={"#9798f9"} />
        </View>
    )
}

export default SearchBox

const styles = StyleSheet.create({
    SearchBoxContainer:{
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"
      },
      SearchBoxContainerInner:{
        flexDirection: "row",
        alignItems: "center",
      },
      InputTextBox:{
        fontWeight: "600",
        color: "#8b8d96"
      },
      Dot:{
        height: 10,
        width: 10,
        borderRadius: 10,
        marginRight: 10
      },
})