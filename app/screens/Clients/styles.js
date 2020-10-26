import { StyleSheet, Dimensions } from 'react-native';
import { configureFonts } from 'react-native-paper';
import Styles from '../../config/styles';
const { color, fonts } = Styles;
const { width: viewportWidth, height: viewportHeight } = Dimensions.get('window');

const Clientstyles = StyleSheet.create({
    Container: {
        flex: 1,
        backgroundColor: color.COLOR_WHITE,
        width: viewportWidth,
        height: viewportHeight

    },

    ClientImageMain: {
        paddingHorizontal: viewportWidth * 0.03,
        paddingVertical: viewportWidth * 0.03,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: "space-between",
        borderWidth: 0,
        flexWrap: 'wrap'
    },
    ClientBox: {
        width: '49%',
        borderWidth: 1,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: '#dbdbdb',
        marginBottom: viewportWidth * 0.02
    },
    ClientImage: {
        height: viewportWidth * 0.3,
        width: viewportWidth * 0.3
    }
});

export default Clientstyles;
