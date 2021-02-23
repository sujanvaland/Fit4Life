/*
 * Provides universal titles and messages.
 */
import AsyncStorage from '@react-native-community/async-storage';


let AppResources = {
    English : {
        LoginUsername:'english Username',
        NewRegistration:"New Registration",
        heading:{
            TAG_LINE:"",
            HEAD_LINE:"Welcome!",
            FORGOTPASS_HEAD_LINE:"Forgot your password?",
        },
        content:{
            LoginUsername:'Username',
            LoginPassword:'Password', 
        },
        button:{
            LOGIN:'Log In',
        }
    },
    ////////////////////////////////////////////////////////////////////////
    Spanish : {
        LoginUsername:'spanish Username',
        NewRegistration:"New Registration_SP",
        heading:{
            TAG_LINE:"",
            HEAD_LINE:"Welcome!",
            FORGOTPASS_HEAD_LINE:"Forgot your password?",
        },
        content:{
            LoginPassword:'Password', 
        },
        button:{
            LOGIN:'Log In',
        }
    }
}

export default AppResources;