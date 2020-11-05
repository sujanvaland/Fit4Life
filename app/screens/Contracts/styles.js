import { StyleSheet, Dimensions } from 'react-native';
import Styles from '../../config/styles';
const { width: viewportWidth, height: viewportHeight } = Dimensions.get('window');
const { color, fonts, Typography } = Styles;
const Contractsstyles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: color.COLOR_WHITE
    },
    Contractsbanner: {
        backgroundColor: color.COLOR_WHITE,
        height: viewportHeight * 0.40,
        borderWidth: 0,
    },
    LinkButton: {
        paddingHorizontal: viewportWidth * 0.02,
        paddingVertical: viewportWidth * 0.02,
        color: color.COLOR_LINKCOLOR,
        textAlign: 'right'

    },
    ContcatsTitle: {
        fontFamily: Typography.FONT_LIGHT,
        fontSize: Typography.FONT_SIZE22
    },
    EventDesc: {
        fontSize: Typography.FONT_SIZE12
    },

    MarTop10: {
        marginTop: viewportWidth * 0.03
    },
    ServicesTitle: {

        color: color.COLOR_GREY,
        fontSize: viewportWidth * 0.042,
        marginBottom: viewportWidth * 0.02

    },
    MarginBottom10: {
        marginBottom: viewportWidth * 0.02
    },
    ServicesBox: {
        borderBottomWidth: 1,
        borderBottomColor: '#e2e2e2',
        paddingBottom: viewportWidth * 0.04,
        paddingTop: viewportWidth * 0.04,
        display: 'flex'
    },
    ServicesBoxList: {
        display: 'flex',


    },
    SubTitle: {
        color: '#9b9b9b'
    },
    InnerContainer: {

        borderWidth: 0,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        flexWrap: 'wrap',

    },
    InnerTitleText: {
        fontSize: Typography.FONT_SIZE17,
        color: color.COLOR_INNERTITLE,
        fontFamily: Typography.FONT_MEDIUM
    },
    HomeLeft: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    MarBtm20: {
        paddingBottom: viewportWidth * 0.05
    },
    InnerTitle: {
        display: "flex",
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderWidth: 0,
        width: '100%',
        marginTop: viewportWidth * 0.02

    },
    InnerTitleIcon: {
        width: viewportWidth * 0.05,
        marginRight: viewportWidth * 0.02
    },
    InnerTitleText: {
        fontSize: Typography.FONT_SIZE17,
        color: color.COLOR_INNERTITLE,
        fontFamily: Typography.FONT_MEDIUM
    },
    ContainerMargin: {
        marginHorizontal: viewportWidth * 0.03,
        marginVertical: viewportWidth * 0.02,
        borderWidth: 0,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        flexWrap: 'wrap',
    },
    WhiteBox: {

        paddingHorizontal: viewportWidth * 0.04,
        paddingVertical: viewportWidth * 0.035,
        backgroundColor: color.COLOR_WHITE,
        borderRadius: viewportWidth * 0.01,
        marginTop: viewportWidth * 0.035,
        shadowColor: '#d7d7d7',
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.6,
        shadowRadius: 2.62,
        elevation: 3,
        borderWidth: 0,
        borderColor: '#d7d7d7',
        width: '100%',


    },

});

export default Contractsstyles;
