import { StyleSheet, Dimensions } from 'react-native';
import Styles from '../../config/styles';
const { width: viewportWidth , height: viewportHeight } = Dimensions.get('window');
const { color ,Typography} = Styles;

const UserHealthProfileStyles = StyleSheet.create({
    detailContainer:{
        height: viewportHeight,
        backgroundColor: color.COLOR_PRIMARY,
        paddingVertical: viewportWidth * 0.04,
        width:viewportWidth
    },
    profileDetailMenu:{
        paddingTop:viewportWidth*0.08
      },
      profileDetail:{
        display:'flex',
        flexDirection:'row',
        paddingHorizontal:viewportWidth*0.08,
        paddingVertical:viewportWidth*0.03,
        width:"100%",
        alignItems:'center'
      },
      profileDetailHead:{
        color:color.COLOR_WHITE,
        fontSize:Typography.FONT_SIZE12,
        fontFamily:Typography.FONT_REGULAR,
        textTransform:"uppercase",
        width:"30%"
      },
      profileDetailInfo:{
        color:color.COLOR_WHITE,
        fontSize:Typography.FONT_SIZE14,
        fontFamily:Typography.FONT_MEDIUM,
        width:"70%",
        padding:0,
        margin:0,
        borderBottomWidth:1
      },
      borderInputWhite:{
        borderBottomColor:color.COLOR_WHITE
      },
      borderInput:{
        borderBottomColor:'transparent'
      },
      BorderRed:{
        borderBottomColor:color.COLOR_RED
      },
      textCase:{
        textTransform:"capitalize"
      },
      headrMenu: {
        alignItems: 'center',
        paddingTop: viewportWidth * 0.04,
        paddingHorizontal: viewportWidth * 0.04
      },
      penIconBox:{
        position: 'absolute',
        paddingHorizontal: viewportWidth * 0.06,
        paddingVertical: viewportWidth * 0.03,
        zIndex: 9999,
        right: 0,
        top:18
      },
      penIcon:{
        height:viewportWidth*0.05,
        width:viewportWidth*0.05
      },
      backProfileIcon:{
        position: 'relative',
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        paddingHorizontal: viewportWidth * 0.06,
        paddingVertical: viewportWidth * 0.03,
        zIndex: 9999,
        width:'80%'
      },
      userImg: {
        width: "100%",
        height: "100%",
        aspectRatio: 1,
        resizeMode: "cover"
      },
      userImgBox: {
        width: viewportWidth * 0.25,
        height: viewportWidth * 0.25,
        borderWidth: 1,
        borderRadius: 100,
        overflow: "hidden",
        borderColor: color.COLOR_WHITE,
      },
      containerImgBox:{
        position:'relative'
      },
      camImgContainer:{
        position:'absolute',
        bottom:5,
        right:5
      },
      camImg:{
        width: viewportWidth * 0.05,
        height: viewportWidth * 0.05,
      },
      ProfileIcon:{
        color: color.COLOR_WHITE,
        fontSize: Typography.FONT_SIZE20
      },
      backprofile:{
        color:color.COLOR_WHITE,
        fontSize:Typography.FONT_SIZE,
        fontFamily:Typography.FONT_REGULAR,
        marginLeft:viewportWidth*0.03
      },
      modalDocument:{
        backgroundColor:color.COLOR_WHITE,
        borderRadius:viewportWidth*0.018,
        marginVertical:viewportWidth*0.1
      },
      radioList:{
        width:'100%',
        borderBottomWidth:0,
        paddingLeft:0,
        marginLeft:0,
        paddingTop:0,
        paddingBottom:0,
        marginTop:viewportWidth*0.013,
        marginBottom:viewportWidth*0.013
      },
      radioListButton:{
        marginRight:5,
        paddingLeft:0,
        marginLeft:0,
        paddingTop:0,
        marginTop:0
      },
      radioListText:{
          color:color.COLOR_DARKGRAY,
          fontSize:Typography.FONT_SIZE14,
          fontFamily:Typography.FONT_MEDIUM,
          marginTop:viewportWidth*0.008,
          marginLeft:viewportWidth*0.015
      },
      listRadio:{
        padding:viewportWidth*0.04
      },
      titleText:{
        color:color.COLOR_BLACK,
        fontSize:Typography.FONT_SIZE,
        fontFamily:Typography.FONT_MEDIUM,
        marginBottom:5
        // paddingHorizontal:viewportWidth*0.02
    },
    widthInput:{
      width:'100%'
    },
    modalText:{
      width:"70%"
    },
    datepicker:{
      width:'70%',
      backgroundColor:'transparent'
    },
    bottomBtn:{
      display:'flex',
      flexDirection:'column',
      justifyContent:"space-between",
      padding:viewportWidth*0.08
    },
    btnDefault:{
       backgroundColor:color.COLOR_WHITE,
       borderRadius:viewportWidth*0.01,
       height:40,
       width:'100%',
       marginVertical:viewportWidth*0.02,
       marginHorizontal:viewportWidth*0.02
    },
    btnDefaultText:{
      fontSize:Typography.FONT_SIZE, 
      lineHeight:40,
      textAlign:'center',
      color:Styles.color.COLOR_BLACK,
      borderRadius: viewportWidth*0.009,
      fontFamily:Typography.FONT_REGULAR
    },
    btnDefaultYellow:{
      backgroundColor:color.COLOR_YELLOW
    },
    btnDefaultBlack:{
      backgroundColor:color.COLOR_BLACK
    }
});

export default UserHealthProfileStyles;
