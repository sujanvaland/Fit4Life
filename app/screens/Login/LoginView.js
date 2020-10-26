import React, { Component } from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import { get } from 'lodash';
import { View, Image, Text, KeyboardAvoidingView, StatusBar, Keyboard, TouchableOpacity } from 'react-native';
import loginStyles from './loginStyles';
import globalStyles from '../../assets/css/globalStyles';
import PropTypes from 'prop-types';
import { TextBoxElement, LinkButton, ButtonElement, OverlayActivityIndicatorElement } from "../../components";
import SplashScreen from 'react-native-splash-screen';
import NetInfo from "@react-native-community/netinfo";
import { ScrollView } from 'react-native-gesture-handler';

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
      CurrentEnv: ""
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
    const { username, password } = this.state;
    const { ErrorMessage, submitted, loading } = this.props;

    return (
      <View style={loginStyles.loginView}>
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
                backgroundColor="#a80f19"
                //Background color of statusBar
                translucent={false}
                //allowing light, but not detailed shapes
                networkActivityIndicatorVisible={true}
              />

            </View>

            <View style={loginStyles.loginContainer}>
              <View style={loginStyles.loginArea}>

                {
                  this.state.ShowEnvMsg == true &&
                  <Text style={globalStyles.headingText}>Current Environment : {this.state.CurrentEnv}</Text>
                }
                <View style={loginStyles.textBoxContent}>
                  <TextBoxElement
                    placeholder={"Enter Username"}
                    value={username}
                    isvalidInput={this.props.loginresponse.ErrorMessage == "" || this.props.loginresponse.ErrorMessage == null}
                    autoCapitalize={'none'}
                    onChangeText={value => this.updateState("username", value)}
                  />
                  <View style={loginStyles.textBoxInner}>
                    <Image style={loginStyles.lineImg} source={require('../../assets/img/line.png')} resizeMode="cover" />
                    <Image style={loginStyles.textBoxImg} source={require('../../assets/img/user.png')} resizeMode="cover" />
                  </View>
                </View>
                <View style={loginStyles.textBoxContent}>
                  <TextBoxElement
                    placeholder={"Enter Password"}
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
                  <View style={loginStyles.textBoxInner}>
                    <Image style={loginStyles.lineImg} source={require('../../assets/img/line.png')} resizeMode="cover" />
                    <Image style={loginStyles.passwordImg} source={require('../../assets/img/password.png')} resizeMode="cover" />
                  </View>
                </View>
                <LinkButton onPress={this.navigateToForgotPassword} title={"Forgot Password?"} />
                <View>
                  <ButtonElement
                    title={"Sign In"}
                    onPress={this.navigate}
                    disabled={this.submitted}
                    style={loginStyles.loginButton}
                  />
                </View>
              </View>
            </View>

          </KeyboardAvoidingView>
        </ScrollView>
      </View>
    );
  }
}

LoginView.propTypes = {
  onLogin: PropTypes.func
};

export default LoginView;
