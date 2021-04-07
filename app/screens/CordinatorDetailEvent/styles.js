import { StyleSheet, Dimensions } from 'react-native';
import Styles from '../../config/styles';
const { width: viewportWidth, height: viewportHeight } = Dimensions.get('window');
const { color, fonts, Typography } = Styles;
const CordinatorDetailstyles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: color.COLOR_WHITE,
        borderWidth: 0,


    },
    InnerContainer: {

        borderWidth: 0,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        flexWrap: 'wrap',

    },
    ButtionMaron: {
        backgroundColor: color.COLOR_PRIMARY,
        paddingHorizontal: viewportWidth * 0.03,
        paddingVertical: viewportWidth * 0.01,
        paddingBottom: viewportWidth * 0.015,
        borderRadius: viewportWidth * 0.01,
        marginLeft: viewportWidth * 0.02
    },
    ButtonMaronText: {
        color: color.COLOR_WHITE,
        fontSize: Typography.FONT_SIZE12,

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
    CustomerFeedbanner: {
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
    CustomerFeedLeft: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center'
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
    InnerTitle: {
        display: "flex",
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderWidth: 0,
        width: '100%',
        marginTop: viewportWidth * 0.02,
        marginBottom: viewportWidth * 0.03

    },
    LinkTextBox: {


        fontSize: viewportWidth * 0.026,
        borderWidth: 0,

    },
    LinkViewBox: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: "flex-start"
    },
    CordinatorDetailLeft: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        flexWrap: 'wrap',

    },
    MarTopzero: {
        marginTop: 0,
    },
    DateText: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        width: '100%',
        borderWidth: 0,
        textAlign: 'right',
        fontSize: Typography.FONT_SIZE10,
        lineHeight: viewportWidth * 0.035,
        color: color.COLOR_INNERTITLE,
        fontFamily: Typography.FONT_REGULAR,
    },
    EventLocation: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        width: '100%',
        textAlign: 'left',
        fontFamily: Typography.FONT_REGULAR,
        fontSize: Typography.FONT_SIZE10,
        color: color.COLOR_INNERTITLE
    },
    RedButtonBox: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-end'
    },
    RedButton: {
        backgroundColor: color.COLOR_LINKCOLOR,
        width: 100,
        borderRadius: viewportWidth * 0.01,
        paddingVertical: viewportWidth * 0.01,
        paddingBottom: viewportWidth * 0.015,
        textAlign: 'center',
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'row'
    },
    BtnText: {
        color: color.COLOR_WHITE
    },
    RatingBox: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start'
    },
    EventTitle: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        width: '100%',
        fontFamily: Typography.FONT_REGULAR,
        fontSize: Typography.FONT_SIZE17,
        color: color.COLOR_INNERTITLE,
        marginBottom: viewportWidth * 0.02,
    },
    LastEventText: {
        fontSize: Typography.FONT_SIZE12,
        fontFamily: Typography.FONT_REGULAR,
        lineHeight: viewportWidth * 0.048
    },
    WhiteBox: {

        paddingHorizontal: viewportWidth * 0.04,
        paddingVertical: viewportWidth * 0.035,
        backgroundColor: color.COLOR_WHITE,
        borderRadius: viewportWidth * 0.01,
        marginTop: viewportWidth * 0.045,
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
    MarBtm20: {
        paddingBottom: viewportWidth * 0.05
    },
    FullWidthTitleBack: {
        paddingHorizontal: viewportWidth * 0.03,
        paddingVertical: viewportWidth * 0.025,
        backgroundColor: color.COLOR_WHITE,
        borderRadius: 0,
        marginBottom: viewportWidth * 0.02,
        shadowColor: '#d7d7d7',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        flexWrap: 'wrap',
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
    ResultText: {
        fontSize: viewportWidth * 0.032
    },
    InnerTitleIcon: {
        width: viewportWidth * 0.055,
        marginRight: viewportWidth * 0.02
    },
    InnerTitleText: {
        fontSize: Typography.FONT_SIZE17,
        color: color.COLOR_INNERTITLE,
        fontFamily: Typography.FONT_MEDIUM,
        lineHeight: viewportWidth * 0.05
    },
    BtnPlus: {
        borderWidth: 0,
        paddingHorizontal: viewportWidth * 0.02,
        marginLeft: viewportWidth * 0.015
    },
    BtnPlusIcon: {
        width: viewportWidth * 0.04
    },
    countPlus: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    BtnGo: {
        backgroundColor: color.COLOR_PRIMARY,
        paddingHorizontal: viewportWidth * 0.025,
        paddingVertical: viewportWidth * 0.01,
        paddingBottom: viewportWidth * 0.015,
        borderRadius: viewportWidth * 0.01
    },
    BtnGotext: {
        color: color.COLOR_WHITE
    },
    GrayBox: {
        backgroundColor: color.COLOR_LEVELCOLOR,
        paddingHorizontal: viewportWidth * 0.03,
        paddingVertical: viewportWidth * 0.03,
        borderRadius: viewportWidth * 0.01,
        paddingBottom: viewportWidth * 0.04,
        marginBottom: viewportWidth * 0.02,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    FlexGrayBoxText1: {
        fontSize: Typography.FONT_SIZE14
    },
    TimerBox: {
        fontSize: viewportWidth * 0.03
    },
    TouchPinBox: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    TouchPin: {
        width: viewportWidth * 0.05,
        marginRight: viewportWidth * 0.012
    },
    modalDocument: {
        backgroundColor: color.COLOR_WHITE,
        borderRadius: viewportWidth * 0.018,
        marginVertical: viewportWidth * 0.1
    },
    titleModal: {
        paddingTop: viewportWidth * 0.04,
        paddingLeft: viewportWidth * 0.04,
        paddingBottom: viewportWidth * 0.02
    },
    formSpace: {
        paddingHorizontal: viewportWidth * 0.02
    },
    BorderGrey: {
        borderWidth: 1,
        borderColor: '#cccccc'
    },
    formInput: {
        paddingHorizontal: 10,
    },
    BorderRed: {
        borderWidth: 1,
        borderColor: '#ff0000'
    },
    pad15: {
        paddingHorizontal: 15,
        marginBottom: 20,
    },
    button: {
        justifyContent: 'center',
        flexDirection: 'row',
        marginTop: 30,
        padding: 15,
        backgroundColor: '#8ad24e',
    },
    ButtonMain: {
        width: '100%',
        textAlign: 'center',
        backgroundColor: color.COLOR_DARKBLUE,
        paddingVertical: viewportWidth * 0.035,
        marginTop: viewportWidth * 0.01,
    },
    resetText: {
        color: color.COLOR_WHITE,
        width: '100%',
        textAlign: 'center'
    },
    ButtonMainBlack: {
        width: '100%',
        textAlign: 'center',
        backgroundColor: color.COLOR_BLACK,
        paddingVertical: viewportWidth * 0.035,
        marginTop: viewportWidth * 0.01,
    },
    radioListCenter:{
        textAlign:"center",
        fontSize:Typography.FONT_SIZE18,
        paddingTop:0,
        marginTop:0
    },
    radioListBorder:{
        borderTopWidth:1,
        borderBottomWidth:1,
    },
    radioListStyle:{
        paddingTop:viewportWidth*0.035,
        paddingBottom:viewportWidth*0.035
    },
    modalStyle:{
        backgroundColor:color.COLOR_WHITE,
        paddingHorizontal:viewportWidth*0.04,
        paddingTop:viewportWidth*0.03,
        paddingBottom:viewportWidth*0.06,
        borderRadius:viewportWidth*0.018,
        marginVertical:viewportWidth*0.1
    },
    radioList: { 
        borderWidth: 0, 
        borderBottomWidth: 0, 
        padding:0,
        margin:0,
        marginLeft:0,
        paddingBottom:0
    },
    radioListButton: {
        display:'none'
    },
    radioListText: {
        display: "flex", 
        flexDirection: "row", 
        fontSize: Typography.FONT_SIZE, 
        fontFamily:Typography.FONT_MEDIUM, 
        color: color.COLOR_TEXT
     },
    radioTextWidth:{
       width:'100%'
    },
    flexBox:{
        display:"flex",
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center'
    },
    selectText:{
        fontSize:Typography.FONT_SIZE12,
        fontFamily:Typography.FONT_MEDIUM,
        color:color.COLOR_GREYTHREE,
        paddingTop:viewportWidth*0.015
    }
});

export default CordinatorDetailstyles;
