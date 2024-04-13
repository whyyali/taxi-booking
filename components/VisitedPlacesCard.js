import { StyleSheet, Text, View } from 'react-native';
import Icon from "react-native-vector-icons/Feather";

const VisitedPlacesCard = () => {
    return (
        <View style={styles.VisitedCardContainer}>
            <Text style={styles.HeadingText}>Recently visited Places</Text>
            <View style={styles.VisitedCardBox}>
                <View style={styles.ItemBox}>
                    <Icon name='clock' size={22} color={"brown"}/>
                    <Text style={styles.TitleText}>JDot Girls College Road</Text>
                </View>
                <View style={styles.ItemBox}>
                    <Icon name='clock' size={22} color={"brown"}/>
                    <Text style={styles.TitleText}>Faridia Park</Text>
                </View>
            </View>
        </View>
    )
}

export default VisitedPlacesCard

const styles = StyleSheet.create({
    VisitedCardContainer:{
        marginHorizontal: 20,
        marginVertical: 10,
    },
    HeadingText:{
        fontSize: 20,
        fontWeight: "bold"
    },
    VisitedCardBox:{
        paddingHorizontal: 5,
        paddingVertical: 10
    },
    ItemBox:{
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 5
    },
    TitleText:{
        marginLeft: 10,
        color: "gray",
        fontSize: 16
    }
})