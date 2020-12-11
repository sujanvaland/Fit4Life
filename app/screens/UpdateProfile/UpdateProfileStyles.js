import { StyleSheet, Dimensions } from 'react-native';
const { width: viewportWidth, height: viewportHeight } = Dimensions.get('window');
import Styles from '../../config/styles';

const { color, Typography } = Styles;
const UpdateProfileStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: color.COLOR_WHITE,

    },

    mainContainer: {
        paddingHorizontal: viewportWidth * 0.035,
        paddingVertical: viewportWidth * 0.06,
        paddingBottom: 0,
        height: '100%'

    }, TabContainer: {
        marginTop: -10,
        minHeight: viewportHeight * 0.7,
        display: 'flex',
        paddingHorizontal: 15,
        paddingTop: 0,
        paddingBottom: 5,
        borderWidth: 3,
        borderColor: color.COLOR_RED,
        zIndex: 9999
    },
    paraText: {
        fontFamily: Typography.FONT_REGULAR,
        fontSize: Typography.FONT_SIZE12,
        lineHeight: viewportWidth * 0.05,
    },

    InnerContainer: {
        marginTop: -80,
    },
    InnerBannerImagebox: {
        paddingTop: 0,
        textAlign: "center",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginTop: -15,
        zIndex: 0,

    },
    ServicesOoptionBox: {
        paddingHorizontal: 20,
        paddingVertical: 20,
        minHeight: 100,
        borderWidth: 0,
        borderRadius: 10,
        width: '100%',
        backgroundColor: color.COLOR_WHITE,
        marginTop: 0,
        marginBottom: 20,
        shadowColor: color.COLOR_LIGHTGRAYTWO,
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.8,
        shadowRadius: 2.62,
        elevation: 3,
        zIndex: 999
    },
    AddressTotalBox: {
        display: "flex",
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    AmtTotal: {
        fontWeight: 'bold',

    },
    UpdateProfileForm: {
        backgroundColor: color.COLOR_WHITE,
        width: '100%',
        marginHorizontal: 0,
        marginVertical: 0,
        paddingHorizontal: 15,
        paddingVertical: 15,
        borderRadius: 15,
    },
    ModalTitle: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: viewportWidth * 0.05,
        width: '100%',
        paddingBottom: 10,
        textAlign: 'left',
        fontFamily: Typography.FONT_MEDIUM,
        borderBottomWidth: 1,
        borderBottomColor: color.COLOR_LIGHTGRAY,


    },
    FormArea: {
        paddingHorizontal: 15,
        paddingVertical: 15,
    },
    PickerDropdown: {
        width: '100%',
        height: 40,
    },
    PikerBox: {
        borderWidth: 1,
        borderColor: color.COLOR_LIGHTGRAY,
        borderRadius: 5,

    },
    RegTitle: {
        textAlign: 'left',
        borderWidth: 0,
        width: '100%',
        marginBottom: 10,
    },
    RegSubTitle: {
        textAlign: 'left',
        borderWidth: 0,
        width: '100%',
        marginBottom: 5,
        fontSize: Typography.FONT_SIZE16,
        fontFamily: Typography.FONT_BOLD,
    },
    Mt20: { marginTop: 15 },
    AddressSaveas: {
        backgroundColor: color.COLOR_WHITE,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: '30%',
        borderRadius: 30,
        height: 35,
        paddingTop: 2,
        borderWidth: 1,
        borderColor: color.COLOR_LIGHTGRAY

    },
    AddressText: {
        fontSize: viewportWidth * 0.032,

    },
    RegisterRadiobtn: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        borderWidth: 0,
        marginBottom: 20,

    },
    CheckedBox: {
        width: viewportWidth * 0.035,
        height: viewportWidth * 0.035,
        marginRight: viewportWidth * 0.01,
        marginTop: -1
    },

    radioButton: {
        fontSize: viewportWidth * 0.1,
        fontFamily: Typography.FONT_REGULAR,
    },
    radioButton: {
        fontSize: viewportWidth * 0.1,
        fontFamily: Typography.FONT_REGULAR,
    },
    TextBoxContainer: {
        width: '100%',
        backgroundColor: color.COLOR_WHITE,
        borderColor: color.COLOR_TEXTBOXBRDR,
        borderWidth: 1,
        height: 44,
        paddingHorizontal: 0,
        paddingVertical: 0,
        borderRadius: 5,
        overflow: 'hidden',
        marginBottom: 10,
    },
    TextBoxContainerTwo: {
        width: '100%',
        // backgroundColor: color.COLOR_WHITE,
        // borderColor: color.COLOR_TEXTBOXBRDR,
        // borderWidth: 1,
        height: 44,
        paddingHorizontal: 0,
        paddingVertical: 0,
        borderRadius: 5,
        overflow: 'hidden',
        marginBottom: 10,
    },
    ModalTitleBox: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 0

    },
    SelectPicker: {
        borderWidth: 0,
        width: '100%',
        height: '50'
    },
    DetailTitle: {
        fontSize: viewportWidth * 0.05,
        fontFamily: Typography.FONT_MEDIUM,
        color: color.COLOR_SECONDARY,
        marginBottom: viewportWidth * 0.02,

    },
    PlusIcon: { color: color.COLOR_WHITE },
    btnUpdateProfile: {


    },
    CartTotalBox: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between'

    },
    AddressItembox: {
        borderWidth: 0,
        paddingBottom: viewportWidth * 0.02,
        marginBottom: 0,
        paddingVertical: 15,
        borderBottomWidth: 1,
        borderBottomColor: color.COLOR_LIGHTGRAY,
        position: 'relative'

    },
    AddressmianBox: {
        borderWidth: 0,
    },
    RadioButton: {
        width: viewportWidth * 0.07,
        height: viewportWidth * 0.07,
        position: 'absolute',
        right: 0,
        top: 0,

    },
    AddressImgmain: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingBottom: 15,
        borderBottomColor: color.COLOR_LIGHTGRAYFOUR, marginBottom: 15
    },
    ServicesImagebox: {
        width: viewportWidth * 0.25,
        height: viewportWidth * 0.26,
    },
    AddressDetail: {
        borderWidth: 0,
        width: '68%'
    },
    AddressImgSmall: { borderWidth: 0, width: '32%', marginRight: 10, },
    SmallTtl: {
        fontSize: viewportWidth * 0.03,
    },
    serPrice: {
        color: color.COLOR_SECONDARY,
        fontSize: viewportWidth * 0.04,
        fontFamily: Typography.FONT_MEDIUM
    },
    FlexBoxRow: {
        display: 'flex',
        flexDirection: 'row',
    },
    GrayTitle: {
        color: color.COLOR_GRAYTITLE, lineHeight: viewportWidth * 0.04, marginTop: -2,
        marginBottom: 10,
    },
    Pdl10: {
        paddingHorizontal: 20,
        color: color.COLOR_WHITE,
    },
    TtlOne: {
        borderWidth: 0,
        lineHeight: viewportWidth * 0.06,
        textAlign: 'left',
        borderWidth: 0,
    },
    UnitBox: { marginRight: 10, fontWeight: 'bold', borderWidth: 0 },
    BlackTitle: {
        fontSize: viewportWidth * 0.033, lineHeight: viewportWidth * 0.045, borderWidth: 0, marginTop: -12
    },
    FntTwo: { fontSize: viewportWidth * 0.03, borderWidth: 0, lineHeight: viewportWidth * 0.04, borderWidth: 0, marginTop: 3, },
    PriceBox: { marginTop: 3 },
    FlexBoxColumn: {
        display: 'flex',
        flexDirection: 'column',
    },
    BooknowBox: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: viewportWidth * 0.03,
        paddingVertical: viewportWidth * 0.01,
        backgroundColor: color.COLOR_LIGHTRED
    },
    BottomSpace: {
        height: 150,
        width: '100%',
        borderWidth: 0,
    },
    UnitPriceBox: {
        marginRight: 10, fontWeight: 'bold',
        color: color.COLOR_RED, fontSize: viewportWidth * 0.035
    },
    BookPrice: {
        fontSize: viewportWidth * 0.04,
        color: color.COLOR_WHITE,
        fontFamily: Typography.FONT_MEDIUM,
        lineHeight: viewportWidth * 0.05,
    },
    BookAmount: {
        fontSize: viewportWidth * 0.05,
        color: color.COLOR_WHITE,
        fontFamily: Typography.FONT_MEDIUM,
        lineHeight: viewportWidth * 0.06,
    },
    BtnBooknow: {
        backgroundColor: color.COLOR_LIGHTRED,
        borderRadius: 50,
        width: '100%',
        height: 45,
        marginTop: 3,
        display: 'flex',
        flexDirection: "row",
        justifyContent: 'center',
        alignItems: 'center',


    },
    BtnTtl: {
        color: color.COLOR_WHITE,
        textTransform: 'uppercase',
        fontFamily: Typography.FONT_BOLD
    },
    mt50: { marginTop: 40, }




});

export default UpdateProfileStyles;
