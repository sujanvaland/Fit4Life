import { StyleSheet, Dimensions } from 'react-native';
const { width: viewportWidth, height: viewportHeight } = Dimensions.get('window');
import Styles from '../config/styles';
const { color, Typography } = Styles;

const NavStyles = StyleSheet.create({
    contentOptions: {
        fontFamily: Typography.FONT_LIGHT,
    },
    UserArea: {
        backgroundColor: color.COLOR_LIGHTRED,
        height: viewportWidth * 0.5,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    ProfilePic: {
        width: viewportWidth * 0.25,
        height: viewportWidth * 0.25,
        backgroundColor: '#D82C31',
        borderRadius: 100,
        borderWidth: 4,
        borderColor: '#FB8C8F',
        overflow: 'hidden',
        marginBottom: viewportWidth * 0.03,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 10,
    },
    PrifileImage: {
        width: viewportWidth * 0.26,
        height: viewportWidth * 0.26,

    },
    UserName: {
        color: '#ffffff',
        fontSize: viewportWidth * 0.045
    },
    MyaccountBox: {
        borderWidth: 0,
        borderColor: "#cccccc"
    },
    MyAccountlinks: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        paddingLeft: viewportWidth * 0.039,
        alignItems: 'center',
        paddingVertical: viewportWidth * 0.018
    },
    LinkMenuIcon: {
        width: viewportWidth * 0.053,
        marginRight: viewportWidth * 0.088,
        opacity: 0.6
    },
    AccountTextLink: {
        fontWeight: "bold",
        fontSize: viewportWidth * 0.033
    }


});

export default NavStyles;

