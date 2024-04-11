import { StyleSheet, Text, View } from 'react-native';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome';
import MaterialIcon from "react-native-vector-icons/MaterialCommunityIcons";

const VehicleBox = ({ heading, id, name, library }) => {
    const IconComponent = library === 'FontAwesome5' ? FontAwesome5Icon : MaterialIcon;
    return (
        <View style={styles.VehicleCategoryBox}>
            <Text style={[styles.VehicleCategoryHeading, { color: id === 1 ? "#5d5e6b" : "#c1c2c7" }]}>{heading}</Text>
            <IconComponent name={name} size={55} style={[styles.VehicleCategoryIcon, { color: id === 1 ? "#5d5e6b" : "#c1c2c7" }]} />
        </View>
    )
}

export default VehicleBox

const styles = StyleSheet.create({
    VehicleCategoryBox: {
        alignItems: "center",
        marginBottom: 15
    },
    VehicleCategoryHeading: {
        fontSize: 16
    },
    VehicleCategoryIcon: {
        fontSize: 50
    }
})