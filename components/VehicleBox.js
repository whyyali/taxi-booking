import { StyleSheet, Text, TouchableOpacity} from 'react-native';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome';
import MaterialIcon from "react-native-vector-icons/MaterialCommunityIcons";

const VehicleBox = ({ name, icon, library, isSelected, onPress }) => {
    const IconComponent = library === 'FontAwesome5' ? FontAwesome5Icon : MaterialIcon;
    return (
        <TouchableOpacity  onPress={onPress} style={styles.VehicleCategoryBox}>
            <Text style={[styles.VehicleCategoryHeading, { color: isSelected ? "#5d5e6b" : "#c1c2c7" }]}>{name}</Text>
            <IconComponent name={icon} size={55} style={[styles.VehicleCategoryIcon, { color: isSelected ? "#5d5e6b" : "#c1c2c7" }]} />
        </TouchableOpacity>
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