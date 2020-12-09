import { StyleSheet, Dimensions } from 'react-native';
import Styles from '../../config/styles';
const { width: viewportWidth, height: viewportHeight } = Dimensions.get('window');
const { color, fonts, Typography } = Styles;
const Paymentsstyles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: color.COLOR_WHITE
    },
    InnerContainer: {

        borderWidth: 0,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        flexWrap: 'wrap',

    },
    RedBox: {

        paddingHorizontal: viewportWidth * 0.04,
        paddingVertical: viewportWidth * 0.035,
        backgroundColor: color.COLOR_PRIMARY,
        borderRadius: viewportWidth * 0.01,
        marginTop: viewportWidth * 0.045,
        shadowColor: color.COLOR_PRIMARY,
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.6,
        shadowRadius: 2.62,
        elevation: 3,
        borderWidth: 0,
        borderColor: color.COLOR_PRIMARY,
        width: '100%',


    },
    PaymentTitle: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: viewportWidth * 0.025
    },
    PaymentTtlText: {
        fontSize: Typography.FONT_SIZE30,
        fontFamily: Typography.FONT_LIGHT,
        color: color.COLOR_WHITE,
        textTransform: 'capitalize'
    },
    PaymentPrice: {
        fontSize: Typography.FONT_SIZE24,
        fontFamily: Typography.FONT_REGULAR,
        color: color.COLOR_WHITE
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
    BanktransferDate: {
        color: color.COLOR_WHITE,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        marginBottom: viewportWidth * 0.03
    },
    Banktransfer: {
        color: color.COLOR_WHITE,
        fontSize: Typography.FONT_SIZE15,
        fontFamily: Typography.FONT_MEDIUM,
        textTransform: 'capitalize'
    },
    DateToend: {
        color: color.COLOR_WHITE,
        fontSize: Typography.FONT_SIZE12,
        fontFamily: Typography.FONT_REGULAR
    },
    BottomDate: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        marginTop: viewportWidth * 0.02,
        marginBottom: viewportWidth * 0.02
    },
    BottomDateText: {
        color: color.COLOR_WHITE,
        fontSize: Typography.FONT_SIZE12,
        fontFamily: Typography.FONT_REGULAR
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
    InnerTitleText: {
        fontSize: Typography.FONT_SIZE17,
        color: color.COLOR_INNERTITLE,
        fontFamily: Typography.FONT_MEDIUM
    },
    CustomerFeedLeft: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    InnerTitleIcon: {
        width: viewportWidth * 0.055,
        marginRight: viewportWidth * 0.02
    },
    ImageBack: {
        height: viewportHeight,
        width: viewportWidth,
        borderWidth: 0,
        backgroundColor: color.COLOR_WHITE,
        display: 'flex',
        paddingHorizontal: 0,
        paddingVertical: 0,
        marginVertical: 0,
        flexDirection: 'column',
        justifyContent: 'flex-end',
    },
    Paymentsbanner: {
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
    }

});

export default Paymentsstyles;
