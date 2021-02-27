import React, { Component } from 'react';
import { Text, View, TouchableOpacity, Dimensions, Platform, Image, StyleSheet, Alert } from 'react-native';
import { Icon } from 'native-base';
// Use prebuilt version of RNVI in dist folder
const { width: viewportWidth, height: viewportHeight } = Dimensions.get('window');
//import Icon from 'react-native-ionicons';
import * as navigationActions from 'app/actions/navigationActions';
import Modal from "react-native-modal";
import AsyncStorage from '@react-native-community/async-storage';
import Styles from '../config/styles';
const { color, Typography } = Styles;
import { Picker, Item } from "native-base";
import NavStyles from '../navigation/NavigationStyle';
import ApiConstants from '../api/ApiConstants';
import Resource_EN from '../config/Resource_EN';
const { English,Spanish } = Resource_EN;



class HeaderComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
          hideMenu: true,
          isModalVisible:false,
          login_token: '',
          login_role:'',
          firstname: '',
          lastname: '',
          customerimage: '',
          language:"",
          lang:{},
        };
    }

    async componentDidMount() {
        let login_token = await this._retrieveData("login_token");
        let login_role = await this._retrieveData("login_role");
        let firstname = await this._retrieveData("firstname");
        let lastname = await this._retrieveData("lastname");
        let customerimage = await this._retrieveData("customerimage");
        const langvalue = await AsyncStorage.getItem('language');
        this.setState({language:langvalue});
        this.setState({
            login_token: login_token,
            login_role: login_role,
            firstname: firstname,
            lastname: lastname,
            customerimage: customerimage
        });

        if(langvalue == "sp"){
            this.setState({lang:Spanish})
        }else{
            this.setState({lang:English})
        }
    }
      
    _retrieveData = async (key) => {
        try {
            const value = await AsyncStorage.getItem(key);
            if (value !== null) {
            return value
            }
        } catch (error) {
        }
    };
    
    async toggleModal() {
        let login_token = await this._retrieveData("login_token");
        let login_role = await this._retrieveData("login_role");
        let firstname = await this._retrieveData("firstname");
        let lastname = await this._retrieveData("lastname");
        let customerimage = await this._retrieveData("customerimage");
        this.setState({
            login_token: login_token,
            login_role: login_role,
            firstname: firstname,
            lastname: lastname,
            customerimage: customerimage
        });
        
        this.setState({ isModalVisible: !this.state.isModalVisible });
    }

    closeModal=()=>{
        this.setState({ isModalVisible: false });
    }

    navigateToLogin = () => {
        this._storeData("login_token", "")
        this._storeData("loginuser", "");
        this._storeData("password", "");
        this._storeData("userId", "");
        this._storeData("login_role", "");
        this._storeData("firstname", "");
        this._storeData("lastname", "");
        this._storeData("customerimage", "");
        navigationActions.navigateToLogin();
        this.setState({ isModalVisible: !this.state.isModalVisible });
    }

    navigateToHome = () => {
        navigationActions.navigateToHome();
        this.setState({ isModalVisible: !this.state.isModalVisible });
    }

    navigateToMyProfile = () => {
        navigationActions.navigateToPersonalDetail();
        this.setState({ isModalVisible: !this.state.isModalVisible });
    }

    navigateToCalendar = () => {
        navigationActions.navigateToCalendar();
        this.setState({ isModalVisible: !this.state.isModalVisible });
    }

    navigateToHealthParameterPage = () => {
        navigationActions.navigateToHealthParameterPage();
        this.setState({ isModalVisible: !this.state.isModalVisible });
    }

    navigateToPayments = () => {
        navigationActions.navigateToPayments();
        this.setState({ isModalVisible: !this.state.isModalVisible });
    }

    navigateToContracts = () => {
        navigationActions.navigateToContracts();
        this.setState({ isModalVisible: !this.state.isModalVisible });
    }

    _storeData = async (key,value) => {
        try {
          await AsyncStorage.setItem(key, value);
          return value;
        } catch (error) {
          // Error saving data
          return null;
        }
    };

    changeLanguage = async (item) =>{
        try{
            this.setState({language:item});
            await AsyncStorage.setItem("language",item);
            this.navigateToLogin();
       
        } catch (error) {
            
        }
    }
    render() {

        const { lang } = this.state;
        //console.log(lang);
        const props = this.props;
        const {
            pagetitle = false,
            menu = false,
            backbutton = false,
            //pagetitle = false,
            lnmenu=false,
        } = props;
        
        const onBackbutton = () => {
            props.navigation.goBack();
        }

        // const { navigate } = this.props.navigation;
        return (
            <View style={HeaderStyles.HeaderMain}>
                <Modal animationIn={"slideInLeft"} animationOut={"slideOutLeft"} 
                    // animationType={'slide'}
                    animationInTiming={600} animationOutTiming={400}
                    //animationOutTiming={'300'}
                    transparent={true}
                    isVisible={this.state.isModalVisible} style={HeaderStyles.modalStyle}
                    onBackdropPress={() => this.closeModal()}
                    onBackButtonPress={() => this.closeModal()}>
                    <View style={HeaderStyles.modalContentStyle}>
                        <View style={NavStyles.UserArea}>
                            <View style={NavStyles.ProfilePicArea}>
                                {
                                    (this.state.customerimage == '' || this.state.customerimage == undefined) &&
                                    <View style={NavStyles.ProfilePic}>
                                        <Image source={require('../assets/img/img_avtar.jpg')} resizeMode="contain" style={NavStyles.PrifileImage} />
                                    </View>
                                }

                                {
                                    (this.state.customerimage != '' && this.state.customerimage != undefined) &&
                                    <View style={NavStyles.ProfilePic}>
                                        <Image source={{ uri: this.state.customerimage }} resizeMode="contain" style={NavStyles.PrifileImage} />
                                    </View>
                                }
                                <Text style={NavStyles.UserName}>{this.state.firstname} {this.state.lastname}</Text>
                                {/* <Text style={NavStyles.Location}>San Francisco, CA</Text> */}
                            </View>
                        </View>
                        <View>
                            <View>
                                <TouchableOpacity onPress={() => this.navigateToHome()} style={NavStyles.MyAccountlinks}>
                                    <Image source={require('../assets/img/icon_home_menu.png')} style={NavStyles.MenuIcon} />
                                    <Text style={NavStyles.AccountTextLink}>{lang.Home}</Text>
                                </TouchableOpacity>
                            </View>

                            <View>
                                <TouchableOpacity onPress={() => this.navigateToCalendar()} style={NavStyles.MyAccountlinks}>
                                    <Image source={require('../assets/img/icon_calendar_menu.png')} style={NavStyles.MenuIcon} />
                                    <Text style={NavStyles.AccountTextLink}>{lang.Calendar}</Text>
                                </TouchableOpacity>
                            </View>
                            {
                                this.state.login_role == 'ROLE_USER' &&
                                <View>
                                    <View>
                                        <TouchableOpacity onPress={() => this.navigateToHealthParameterPage()} style={NavStyles.MyAccountlinks}>
                                            <Image source={require('../assets/img/icon_calendar_menu.png')} style={NavStyles.MenuIcon} />
                                            <Text style={NavStyles.AccountTextLink}>{lang.HealthParameters}</Text>
                                        </TouchableOpacity>
                                    </View>  

                                    <View>
                                        <TouchableOpacity onPress={() => this.navigateToPayments()} style={NavStyles.MyAccountlinks}>
                                            <Image source={require('../assets/img/icon_calendar_menu.png')} style={NavStyles.MenuIcon} />
                                            <Text style={NavStyles.AccountTextLink}>{lang.Payments}</Text>
                                        </TouchableOpacity>
                                    </View>                     

                                    <View>
                                        <TouchableOpacity onPress={() => this.navigateToContracts()} style={NavStyles.MyAccountlinks}>
                                            <Image source={require('../assets/img/icon_calendar_menu.png')} style={NavStyles.MenuIcon} />
                                            <Text style={NavStyles.AccountTextLink}>{lang.Contracts}</Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            }

                            {
                                this.state.login_token != '' && this.state.login_token != undefined &&
                                <View>
                                    <View>
                                        <TouchableOpacity onPress={() => this.navigateToMyProfile()} style={NavStyles.MyAccountlinks}>
                                            <Image source={require('../assets/img/icon_myprofile_menu.png')} resizeMode="contain" style={NavStyles.MenuIcon} />
                                            <Text style={NavStyles.AccountTextLink}>{lang.MyProfile}</Text>
                                        </TouchableOpacity>
                                    </View>
                                    <View>
                                        <TouchableOpacity onPress={() =>
                                            Alert.alert(
                                                lang.Logout,
                                                lang.LogoutQus,
                                                [
                                                    { text: lang.Cancel, onPress: () => { return null } },
                                                    {
                                                        text: lang.Confirm, onPress: () => {
                                                            AsyncStorage.clear();
                                                            this.navigateToLogin();
                                                        }
                                                    },
                                                ],
                                                { cancelable: false }
                                            )
                                        } style={[NavStyles.MyAccountlinks, NavStyles.MarTop10]}>

                                            <Image source={require('../assets/img/icon_logoutmenu.png')} resizeMode="contain" style={NavStyles.MenuIcon} />
                                            <Text style={NavStyles.AccountTextLink}>{lang.LogoutTxt}</Text>
                                        </TouchableOpacity>
                                    </View>
                                    
                                </View>
                            }
                        </View>
                    </View>
                </Modal>
                <View style={HeaderStyles.HeaderBox}>
                    <View style={HeaderStyles.HeaderContent}>
                        <View style={HeaderStyles.LeftHeader}>

                            {menu === true &&
                                <TouchableOpacity onPress={() => { this.toggleModal()}} style={HeaderStyles.burgerMenu}>
                                    <Image source={require('../assets/images/icon_menu.png')} resizeMode="contain" style={HeaderStyles.iconMenu} />
                                </TouchableOpacity>
                            }
                            {backbutton === true &&
                                <TouchableOpacity style={HeaderStyles.BackButton} onPress={() => { onBackbutton() }}>
                                    <Image source={require('../assets/images/btnback.png')} style={HeaderStyles.BackBtn} resizeMode="contain" />
                                </TouchableOpacity>
                            }
                            {pagetitle === true &&
                                <Text style={HeaderStyles.pagetitleText}>{props.title}</Text>
                            }
                            {lnmenu === true &&
                                <View>
                                    <Item picker>
                                        <Picker
                                            style={HeaderStyles.pagetitleText}
                                            selectedValue={this.state.language}
                                            mode="dropdown"
                                            iosIcon={<Icon name="ios-arrow-down" style={{fontSize:15}}/>}
                                            placeholder="Select Language"
                                            onValueChange={(itemValue) => this.changeLanguage(itemValue)}
                                        >
                                            <Picker.Item value="" label="Select Language" />
                                            <Picker.Item key={1} value={"en"} label={"English"} />
                                            <Picker.Item key={2} value={"sp"} label={"Spanish"} />
                                        </Picker>
                                    </Item>
                                </View>
                            }
                        </View>
                    </View>
                </View>
            </View>
        );
    }
}

//export default HeaderComponent;
const HeaderStyles = StyleSheet.create({
    HeaderBox: {
        marginTop: 0, paddingVertical: 5,
        position: "relative",
        width: '100%',
        zIndex: 99,
        paddingHorizontal: 0,
        backgroundColor: '#a80f19',
        ...Platform.select({
            ios:{
                paddingTop:viewportWidth * 0.09,
            }
        })
    },
    pagetitleText: {
        fontFamily: Typography.FONT_SEMIBOLD,
        fontSize: viewportWidth * 0.05,
        color: color.COLOR_WHITE,
        width: viewportWidth * 0.6,
        height: viewportWidth * 0.1,
        textAlign: "left",
        paddingLeft: viewportWidth * 0.05,
        paddingTop: viewportWidth * 0.01,
        marginTop: 0,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 0,
        borderColor: 'white',

    },
    BackButton: {
        marginHorizontal: 0,
        marginTop: 4,
        width: viewportWidth * 0.10,
        borderWidth: 0,
        borderColor: 'white'
    },
    BackBtn: {
        width: viewportWidth * 0.08,
        height: viewportWidth * 0.08,
    },
    iconMenu: {
        height: viewportHeight * 0.036,
        width: viewportHeight * 0.036,

    },
    burgerMenu: {
        borderWidth: 0,
        borderColor: 'white',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        height: viewportWidth * 0.1,
        
    },
    HeaderMain: {
        position: 'relative',
        zIndex: 99,
        zIndex: 99,
        paddingHorizontal: 0,
    },
    HeaderContent: {
        display: 'flex',
        flexDirection: "row",
        justifyContent: "space-between",
        borderWidth: 0,
        borderColor: color.COLOR_WHITE,
        width: viewportWidth,
        paddingHorizontal: 10,
        paddingTop: viewportWidth * 0.02,
        height: viewportWidth * 0.13,
    },
    LeftHeader: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start'
    },
    modalStyle:{
      marginTop:0,
      marginBottom:0,
      marginLeft:0,
      marginRight:0,
      height:"100%"
    },
    modalContentStyle:{
        flex:1,
        backgroundColor:'#a80f19',
        width:'70%',
        height:viewportHeight,
    }
});

export {HeaderComponent} ;