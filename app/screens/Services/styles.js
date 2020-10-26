import { StyleSheet, Dimensions } from 'react-native';
import { configureFonts } from 'react-native-paper';
import Styles from '../../config/styles';
const { color, fonts } = Styles;
const { width: viewportWidth, height: viewportHeight } = Dimensions.get('window');

const Servicesstyles = StyleSheet.create({
    Container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        height: viewportHeight,
        backgroundColor: color.COLOR_WHITE
    },
    Cardbox: {
        marginBottom: viewportWidth * 0.02,
        borderWidth: 0,

        borderColor: '#000000',
        marginTop: viewportWidth * 0.03,
        width: '100%'
    },
    ServicesTitle: {
        fontSize: viewportWidth * 0.04,
        width: '100%',
        paddingVertical: viewportWidth * 0.02,
        textAlign: 'center'
    }
});

export default Servicesstyles;
