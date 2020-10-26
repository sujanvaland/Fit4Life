import { StyleSheet, Dimensions } from 'react-native';
import { configureFonts } from 'react-native-paper';
import Styles from '../../config/styles';
const { color, fonts } = Styles;
const { width: viewportWidth, height: viewportHeight } = Dimensions.get('window');

const Contactstyles = StyleSheet.create({
    Container: {
        flex: 1,
        backgroundColor: color.COLOR_WHITE,
        width: viewportWidth,
        height: viewportHeight,
        backgroundColor: '#00b1d6',
    },
    ContactMainBox: {
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'row',
        alignItems: 'center'
    },
    ContactBox: {
        paddingHorizontal: viewportWidth * 0.06,
        paddingVertical: viewportWidth * 0.03,
        backgroundColor: color.COLOR_WHITE,
        width: '90%',
        borderRadius: viewportWidth * 0.03,
        height: viewportHeight * 0.3,
        marginTop: viewportWidth * 0.05
    },
    ContactTitle: {
        fontSize: viewportWidth * 0.05,
        marginBottom: viewportWidth * 0.03,
        marginTop: viewportWidth * 0.03
    },
    ContactPara: {
        fontSize: viewportWidth * 0.035,
        lineHeight: viewportWidth * 0.05,
        marginBottom: viewportWidth * 0.03,
        borderWidth: 0
    }
});

export default Contactstyles;
