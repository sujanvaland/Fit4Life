import { StyleSheet, Dimensions } from 'react-native';
import Styles from '../../config/styles';
const { width: viewportWidth , height: viewportHeight } = Dimensions.get('window');
const { color ,Typography} = Styles;

const EditProfileImageStyles = StyleSheet.create({
    loginBg:{
        position:"absolute",
        width:viewportWidth,
        height:viewportHeight,
        top:0
    },
    editprofileimageInner:{
        display:'flex',
        justifyContent:'center',
        alignItems:'center'
    },
    editprofileimage:{
        width:viewportWidth*0.7,
        height:viewportWidth*0.7,
        overflow:'visible',
    },
    ImgContainer:{
       marginTop:viewportWidth*0.15,
       marginBottom:viewportWidth*0.07
    },
    titletext:{
        color:color.COLOR_WHITE,
        fontFamily:Typography.FONT_REGULAR,
        fontSize:Typography.FONT_SIZE20,
        marginBottom:viewportWidth*0.015,
        textAlign:'center'
    },
    Detailtext:{
        color:color.COLOR_WHITE,
        fontFamily:Typography.FONT_REGULAR,
        fontSize:Typography.FONT_SIZE14,
        textAlign:'center', 
    },
    textInput:{
        backgroundColor:color.COLOR_WHITE,
        marginHorizontal:viewportWidth*0.02,
        marginVertical:viewportWidth*0.06,
        fontSize:Typography.FONT_SIZE18,
        height:viewportWidth*0.12,
        width:viewportWidth*0.11,
        borderRadius:viewportWidth*0.01,
        paddingHorizontal:viewportWidth*0.02,
        color:color.COLOR_BLACK,
        textAlign:"center",
        fontFamily:Typography.FONT_BOLD
    },
    flexBox:{
        display:"flex",
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center'
    },
    btnGreen:{
       marginTop:viewportWidth*0.04
    },
    btnText:{
        fontSize:Typography.FONT_SIZE,
        backgroundColor:color.COLOR_PRIMARY,
        paddingHorizontal:viewportWidth*0.12,
        paddingVertical:viewportWidth*0.035,
        color:color.COLOR_WHITE,
        fontFamily:Typography.FONT_REGULAR,
        borderRadius:viewportWidth*0.01
    },
    profileImg:{
        width:400,
        height:400,
    },
    modalDocument:{
        backgroundColor:color.COLOR_WHITE,
        borderRadius:viewportWidth*0.018,
        marginVertical:viewportWidth*0.1
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
    selectText:{
        fontSize:Typography.FONT_SIZE12,
        fontFamily:Typography.FONT_MEDIUM,
        color:color.COLOR_GREYTHREE,
        paddingTop:viewportWidth*0.015
    },
});

export default EditProfileImageStyles;
