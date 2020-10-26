import { StyleSheet, Dimensions } from 'react-native';
import { configureFonts } from 'react-native-paper';
import Styles from '../../config/styles';
const { color, fonts } = Styles;
const { width: viewportWidth, height: viewportHeight } = Dimensions.get('window');

const Instrumentstyles = StyleSheet.create({
    Container: {
        flex: 1,
        width: viewportWidth,
        height: viewportHeight,
        paddingHorizontal: viewportWidth * 0.03,
        paddingVertical: viewportWidth * 0.05

    },
    ContentBoxDetail: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: "space-between",
        marginBottom: viewportWidth * 0.03

    },
    ContentBox: {
        borderWidth: 1,
        borderColor: '#cccccc',
        width: '100%',
        paddingVertical: viewportWidth * 0.03,
        paddingHorizontal: viewportWidth * 0.03,
        marginBottom: viewportWidth * 0.035,

    },
    LabelText: {
        color: '#9d9d9d',
        fontSize: viewportWidth * 0.03
    },
    ValueText: {
        color: '#333333',
        fontSize: viewportWidth * 0.035,
        maxWidth: '100%',
        borderWidth: 0,
    },
    InstrumentTitle: {
        borderWidth: 0,
        marginBottom: viewportWidth * 0.02,
        fontSize: viewportWidth * 0.045,
        lineHeight: viewportWidth * 0.045,

    },
    InsCntBox: {
        width: '48%',
        borderWidth: 0,
    },
    AlignRight: {
        textAlign: 'right'
    }
});

export default Instrumentstyles;
