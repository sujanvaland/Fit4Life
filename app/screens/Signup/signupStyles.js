import { StyleSheet , Dimensions } from 'react-native';
import Styles from '../../config/styles';
import { Row, Content } from 'native-base';
import { clockRunning } from 'react-native-reanimated';
const { color ,Typography} = Styles;


const { width: viewportWidth , height: viewportHeight } = Dimensions.get('window');
const cols = 2;
const width = (Dimensions.get('window').width / cols) - 17;


const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: viewportHeight,
        width: viewportWidth,
        alignItems: 'center',
      },
    loginBottom:{
        flexDirection:'row',
        justifyContent:'space-between',
        marginTop: viewportWidth* 0.042 
    },
    loginView:{
        position:"relative"
    },
    loginBg:{
        position:"absolute",
        width:viewportWidth,
        height:viewportHeight,
        top:0
    },
    textBoxStyle: {
        marginBottom: 17,
        paddingHorizontal:12,
        paddingVertical:5,
        fontSize: Typography.FONT_SIZE,
        fontWeight: Typography.FONT_WEIGHT_NORMAL,
        fontStyle: Typography.FONT_STYLE_NORMAL,
        lineHeight: 20,
        letterSpacing: 0,
        borderRadius: 4,
        borderStyle: "solid",
        borderWidth: 1,
        borderColor: color.COLOR_CHECKBOX,
        position:'relative',
        backgroundColor:'red'
      },
    errorMessage:{
        color:color.COLOR_RED,
        fontSize:viewportWidth* 0.035,
        fontWeight: Typography.FONT_WEIGHT_NORMAL,
        fontStyle: Typography.FONT_STYLE_NORMAL, 
        lineHeight: viewportWidth* 0.05,
        letterSpacing: 0,
        color:color.COLOR_RED,   
        paddingLeft:0, 
        position:"relative",
        borderWidth:0,
        paddingLeft:22,
        marginBottom:24
    },
    logomain:{
        width:viewportWidth* 0.5,
        marginBottom:10
    },
    alertIcon:{
        width:viewportWidth*0.05,
        height:viewportWidth*0.05,
        position:"absolute",   
        top:2   
    },
    alertMainBox:{position:"relative",
        display:"flex",
        flexDirection:"row",
        justifyContent:"space-between"
    },
    logoImg:{
        width:viewportWidth - viewportWidth*0.15,
        height:viewportWidth*0.17
    },
    logoContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: "20%",
      },
    textBoxContent:{
      position:"relative"
    },
    textBoxInner:{
        position:"absolute",
        right:viewportWidth*0.035,
        top:10,
        display:'flex',
        flexDirection:"row",
        alignItems:'center', 
    },
    lineImg:{
        height:viewportWidth*0.07, 
    },
    textBoxImg:{
        height:viewportWidth*0.04,
        width:viewportWidth*0.042,
        marginLeft:viewportWidth*0.035
    },
    textBoxmailImg:{
        height:viewportWidth*0.03,
        width:viewportWidth*0.04,
        marginLeft:viewportWidth*0.035
    },
    passwordImg:{
        height:viewportWidth*0.046,
        width:viewportWidth*0.036,
        marginLeft:viewportWidth*0.035
    },
    // signButton:{
    //     backgroundColor:color.COLOR_YELLOW,
    //     borderRadius:viewportWidth*0.01,
    // },
    flexBox:{
        display:'flex',
        justifyContent:'center',
        alignItems:"center",
    },
    signText:{
        borderRadius:viewportWidth*0.009,
        height:42,
        lineHeight:40,
        textAlign:'center',
        fontSize:Typography.FONT_SIZE12,
        color:color.COLOR_WHITE,
        backgroundColor:color.COLOR_PRIMARY,
        paddingHorizontal:viewportWidth*0.07
    },
    accountText:{
        color:color.COLOR_WHITE,
        fontSize:Typography.FONT_SIZE12,
        lineHeight: 50,
        letterSpacing: 0,
        textAlign:'center',
        fontFamily:Typography.FONT_OpenSansRegular
    },
    buttonStyle:{
        fontSize:Typography.FONT_SIZE, 
        textAlign:'center',
        color:Styles.color.COLOR_BLACK,
        fontWeight: Typography.FONT_WEIGHT_BOLD,
        textTransform:'none', 
        shadowOpacity: 0,   
        marginTop:viewportWidth*0.018,
        height:50,
        borderRadius: viewportWidth*0.009,
        display:'flex',
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        width:'70%'
      },
      buttonStyleDisable: {
        backgroundColor:"#ad923c",
      },
      buttonStyleActive: {
        backgroundColor:color.COLOR_YELLOW,
      },
      buttonStyleText:{
        fontSize:Typography.FONT_SIZE17, 
        //lineHeight:45,
        textAlign:'center',
        color:Styles.color.COLOR_DARKBLUE,
        textTransform:'none', 
        borderRadius: viewportWidth*0.009,
      },
      
});

export default styles;
