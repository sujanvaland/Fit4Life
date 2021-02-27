import React, { Component } from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import { get } from 'lodash';
import { View, Image, Text, KeyboardAvoidingView, ImageBackground, StatusBar, Keyboard, TouchableOpacity } from 'react-native';
import loginStyles from './loginStyles';
import globalStyles from '../../assets/css/globalStyles';
import PropTypes from 'prop-types';
import { TextBoxElementLogin, LinkButton, ButtonElement, OverlayActivityIndicatorElement } from "../../components";
import SplashScreen from 'react-native-splash-screen';
import NetInfo from "@react-native-community/netinfo";
import { ScrollView } from 'react-native-gesture-handler';
import {NavigationEvents} from 'react-navigation';
import Resource_EN from '../../config/Resource_EN';
const { English,Spanish } = Resource_EN;
class LoginView extends Component {

  async componentDidMount() {
    SplashScreen.hide();
    this.setState({ username: "" });
    this.setState({ password: "" });
    NetInfo.fetch().then(state => {
      if (!state.isConnected) {
        alert("No Internet connection");
      }
    });
    this.keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      this._keyboardDidShow,
    );
    this.keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      this._keyboardDidHide,
    );

    const language = await AsyncStorage.getItem('language');
    if(language == "sp"){
      this.setState({lang:Spanish})
    }else{
      this.setState({lang:English})
    }
  }


  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      ErrorMessage: "",
      firstTimeRender: undefined,
      enableScroll: false,
      ShowEnvMsg: false,
      CurrentEnv: "",
      lang:{},
    }
    this.props.loginresponse.ErrorMessage = "";
    this.props.loginresponse.isLoggedIn = true;
  }

  static getDerivedStateFromProps(props, state) {
    const { loginresponse } = props
    let newState = state;
    let nShowEnvMsg = state.ShowEnvMsg;
    let nCurrentEnv = state.CurrentEnv;
    if (get(props, 'loginresponse.isLoggedIn') === false && !state.firstTimeRender) {
      newState = {
        username: '',
        password: '',
        ErrorMessage: '',
        firstTimeRender: true
      }
    }
    newState.ShowEnvMsg = nShowEnvMsg;
    newState.CurrentEnv = nCurrentEnv;
    return newState;
  }


  navigate = async () => {
    this.props.loginresponse.ErrorMessage = '';
    this.submitted = true;
    this.setState({ firstTimeRender: undefined });
    let username = this.state.username;
    let password = this.state.password;
    let cenv = await AsyncStorage.getItem('environment');
    if (username == "ChangeData:com") {
      await AsyncStorage.setItem('environment', 'http://ileaf-dev.com/');
      this.setState({ ShowEnvMsg: true, CurrentEnv: ".com" });
    } else if (username == "ChangeData:testlink") {
      await AsyncStorage.setItem('environment', 'http://45.35.0.114');
      this.setState({ ShowEnvMsg: true, CurrentEnv: ".testlink" });
    }
    else if (username == "ChangeData:stage") {
      await AsyncStorage.setItem('environment', 'http://localhost:3000');
      this.setState({ ShowEnvMsg: true, CurrentEnv: ".stage" });
    }
    else {
      NetInfo.fetch().then(state => {
        if (!state.isConnected) {
          alert("No Internet connection");
        }
        else {
          this.props.onLogin(username, password);
        }
      });
    }
  };

  navigateToForgotPassword = () => {
    this.props.forgotPassword();
  }

  navigateToSignup = () => {
    this.props.Signup();
  }

  updateState = (fieldName, value) => {

    this.setState({
      [fieldName]: value
    });

    if (this.state.username != '' && this.state.password != '') {
      this.props.loginresponse.ErrorMessage = '';
      this.submitted = false;
    } else {
      this.submitted = true;
    }
  };
  componentWillUnmount() {
    this.keyboardDidShowListener.remove();
    this.keyboardDidHideListener.remove();
  }

  
  _keyboardDidShow = () => {
    this.setState({ enableScroll: true });
  }

  _keyboardDidHide = () => {
    this.setState({ enableScroll: false });
  }
  render() {
    const { username, password,lang } = this.state;
    const { ErrorMessage, submitted, loading } = this.props;
    
    const image = require('../../assets/img/img_loginback.png');
    return (
      <View style={loginStyles.loginView}>
        <NavigationEvents onDidFocus={() => this.componentDidMount()} />
        <ImageBackground source={image} style={loginStyles.ImageBack} resizeMode="cover">
          <ScrollView showsVerticalScrollIndicator={false} scrollEnabled={this.state.enableScroll}>
            <KeyboardAvoidingView style={loginStyles.container} enabled>
              {
                get(loading, 'isLoading') && <OverlayActivityIndicatorElement />
              }

              <View style={globalStyles.logoContainer}>
                <StatusBar
                  barStyle="light-content"
                  // dark-content, light-content and default
                  hidden={false}
                  //To hide statusBar
                  backgroundColor="#ffffff"
                  //Background color of statusBar
                  translucent={false}
                  //allowing light, but not detailed shapes
                  networkActivityIndicatorVisible={true}
                />

              </View>

              <View style={loginStyles.loginContainer}>
                <Image source={require('../../assets/img/logo.png')} resizeMode="contain" style={loginStyles.logo} />
                <View style={loginStyles.loginArea}>

                  <View style={loginStyles.textBoxContent}>
                    <View style={loginStyles.textBoxInner}>

                      <Image style={loginStyles.textBoxImg} source={require('../../assets/img/user.png')} resizeMode="cover" />
                      <Image style={loginStyles.lineImg} source={require('../../assets/img/line.png')} resizeMode="cover" />
                    </View>
                    <TextBoxElementLogin
                      placeholder={lang.LoginUsername}
                      value={username}
                      isvalidInput={this.props.loginresponse.ErrorMessage == "" || this.props.loginresponse.ErrorMessage == null}
                      autoCapitalize={'none'}
                      onChangeText={value => this.updateState("username", value)}
                    />

                  </View>
                  <View style={loginStyles.textBoxContent}>
                    <View style={loginStyles.textBoxInner}>

                      <Image style={loginStyles.passwordImg} source={require('../../assets/img/password.png')} resizeMode="cover" />
                      <Image style={loginStyles.lineImg} source={require('../../assets/img/line.png')} resizeMode="cover" />
                    </View>
                    <TextBoxElementLogin
                      placeholder={lang.LoginPassword}
                      secureTextEntry={true}
                      value={password}
                      isvalidInput={this.props.loginresponse.ErrorMessage == "" || this.props.loginresponse.ErrorMessage == null}
                      autoCapitalize={'none'}
                      onChangeText={value => this.updateState("password", value)}
                    />
                    {
                      (!(this.props.loginresponse.ErrorMessage == "" || this.props.loginresponse.ErrorMessage == undefined)) &&
                      <View style={loginStyles.alertMainBox}>
                        <Image style={loginStyles.alertIcon} source={require('../../assets/images/icon_alert.png')} resizeMode="contain" />
                        <Text style={loginStyles.errorMessage}>{this.props.loginresponse.ErrorMessage}</Text>
                      </View>
                    }

                  </View>
                  <LinkButton onPress={this.navigateToForgotPassword} title={lang.ForgotPassword} />
                  <View>
                    <ButtonElement
                      title={lang.Login}
                      onPress={this.navigate}
                      disabled={this.submitted}
                      style={loginStyles.loginButton}
                    />
                  </View>
                  <View style={loginStyles.SocialButton}>
                    <TouchableOpacity style={[loginStyles.BtnFacebook, loginStyles.SocialComonBtn]}>
                      <Image source={require('../../assets/img/icon_facebook.png')} resizeMode="contain" style={loginStyles.SocialIcon} />
                      <Text style={loginStyles.BtnText}>{lang.Facebok}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[loginStyles.BtnInsta, loginStyles.SocialComonBtn]}>
                      <Image source={require('../../assets/img/icon_insta.png')} resizeMode="contain" style={loginStyles.SocialIcon} />
                      <Text style={loginStyles.BtnText}>{lang.Instagram}</Text>
                    </TouchableOpacity>
                  </View>

                  <View style={loginStyles.NewRegistration}>
                    <Text style={loginStyles.accountText}>{lang.NewRegistration}</Text>
                    <TouchableOpacity style={loginStyles.BtnSignup} onPress={this.navigateToSignup}>
                      <Text style={loginStyles.TextSignup}>{lang.Cilckhere}</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>

            </KeyboardAvoidingView>
          </ScrollView>
        </ImageBackground>
      </View>
    );
  }
}

LoginView.propTypes = {
  onLogin: PropTypes.func
};

export default LoginView;
