import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity, ImageBackground, Keyboard, KeyboardAvoidingView } from 'react-native';
import ChangePasswordStyles from './ChangePasswordStyles';
import globalStyles from '../../assets/css/globalStyles';
import PropTypes from 'prop-types';
import { TextBoxElement, TextBoxElementLogin, TextBoxElementChangepass } from "../../components";
import { ScrollView } from 'react-native-gesture-handler';
import Toast from 'react-native-simple-toast';
import { get } from 'lodash';
import { OverlayActivityIndicatorElement } from "../../components";
import AsyncStorage from '@react-native-community/async-storage';
import Resource_EN from '../../config/Resource_EN';
const { English,Spanish } = Resource_EN;

class ChangePasswordView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      enableScroll: false,
      isValidoldpassword: true,
      errorMessageoldpassword: false,
      isValidnewpassword: true,
      errorMessagenewpassword: false,
      isValidconfirmpassword: true,
      errorMessageconfirmpassword: false,
      eyeOpen: false,
      disable: true,
      postChangePassword: {
        oldpassword: '',
        newpassword: '',
        confirmpassword: ''
      },
      lang:{},
    }
  }

  async componentDidMount() {
    this.keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      this._keyboardDidShow,
    );
    this.keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      this._keyboardDidHide,
    );

    const language = await AsyncStorage.getItem('language');
    //console.log(language);
    if(language == "sp"){
      this.setState({lang:Spanish})
    }else{
      this.setState({lang:English})
    }
  }
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

  onValueChange = (fieldName, value) => {
    this.setState(prevState => ({
      postChangePassword: {                   // object that we want to update
        ...prevState.postChangePassword, // keep all other key-value pairs
        [fieldName]: value
      }
    }), function () {
    });
  }

  validateInputs = (fieldName) => {

    if (fieldName == "oldpassword") {
      if (this.state.postChangePassword.oldpassword == "") {
        this.setState({ isvalidoldpassword: false });
      }
      else {
        if (this.state.postChangePassword.oldpassword.length >= 3 && this.state.postChangePassword.oldpassword.length <= 20) {

          if (this.state.postChangePassword.oldpassword === this.state.postChangePassword.newpassword) {
            Toast.show("Old Password and New Password are same. Please change it.", Toast.SHORT);
            this.setState({ isvalidoldpassword: false });
          }
          else {
            this.setState({ isvalidoldpassword: true });
          }

        }
        else {
          Toast.show("Current Password should have min 3 chars and max 20", Toast.SHORT);
          this.setState({ isvalidoldpassword: false });
        }
      }
    }

    if (fieldName == "newpassword") {
      if (this.state.postChangePassword.newpassword == "") {
        this.setState({ isvalidnewpassword: false });
      }
      else {
        if (this.state.postChangePassword.newpassword.length >= 3 && this.state.postChangePassword.newpassword.length <= 20) {
          if (this.state.postChangePassword.oldpassword === this.state.postChangePassword.newpassword) {
            Toast.show("Old Password and New Password are same. Please change it.", Toast.SHORT);
            this.setState({ isvalidnewpassword: false });
          }
          else {
            this.setState({ isvalidnewpassword: true });
          }
        }
        else {
          Toast.show("New Password should have min 3 chars and max 20", Toast.SHORT);
          this.setState({ isvalidnewpassword: false });
        }
      }
    }

    if (fieldName == "confirmpassword") {
      if (this.state.postChangePassword.confirmpassword == "") {
        this.setState({ isvalidconfirmpassword: false });
      }
      else {
        if (this.state.postChangePassword.confirmpassword.length >= 3 && this.state.postChangePassword.confirmpassword.length <= 20) {

          if (this.state.postChangePassword.newpassword === this.state.postChangePassword.confirmpassword) {
            this.setState({ isvalidconfirmpassword: true });
          }
          else {
            Toast.show("New Password and Confirm Password are diffrent.", Toast.SHORT);
            this.setState({ isvalidconfirmpassword: false });
          }
        }
        else {
          Toast.show("Confirm Password should have min 3 chars and max 20", Toast.SHORT);
          this.setState({ isvalidconfirmpassword: false });
        }
      }
    }

  };

  changePassword = () => {
    if (this.validatePassword()) {
      this.props.onChangePassword(this.state.postChangePassword);
    }
  }

  validatePassword = () => {
    //====== title ======//
    let isvalidoldpassword;
    let isvalidnewpassword;
    let isvalidconfirmpassword;

    let allInputsValidated;

    if (this.state.postChangePassword.oldpassword == "") {
      isvalidoldpassword = false;
    }
    else {
      if (this.state.postChangePassword.oldpassword.length >= 3 && this.state.postChangePassword.oldpassword.length <= 20) {
        if (this.state.postChangePassword.oldpassword === this.state.postChangePassword.newpassword) {
          Toast.show("Old Password and New Password are same. Please change it.", Toast.SHORT);
          isvalidoldpassword = false;
        }
        else {
          isvalidoldpassword = true;
        }
      }
      else {
        Toast.show("Current Password should have min 3 chars and max 20", Toast.SHORT);
        isvalidoldpassword = false;
      }
    }


    if (this.state.postChangePassword.newpassword == "") {
      isvalidnewpassword = false;
    }
    else {
      if (this.state.postChangePassword.newpassword.length >= 3 && this.state.postChangePassword.newpassword.length <= 20) {
        if (this.state.postChangePassword.oldpassword === this.state.postChangePassword.newpassword) {
          Toast.show("Old Password and New Password are same. Please change it.", Toast.SHORT);
          isvalidnewpassword = false;
        }
        else {
          isvalidnewpassword = true;
        }
      }
      else {
        Toast.show("New Password should have min 3 chars and max 20", Toast.SHORT);
        isvalidnewpassword = false;
      }
    }


    if (this.state.postChangePassword.confirmpassword == "") {
      isvalidconfirmpassword = false;
    }
    else {
      if (this.state.postChangePassword.confirmpassword.length >= 3 && this.state.postChangePassword.confirmpassword.length <= 20) {

        if (this.state.postChangePassword.newpassword === this.state.postChangePassword.confirmpassword) {
          isvalidconfirmpassword = true;
        }
        else {
          Toast.show("New Password and Confirm Password are diffrent.", Toast.SHORT);
          isvalidconfirmpassword = false;
        }
      }
      else {
        Toast.show("Confirm Password should have min 3 chars and max 20", Toast.SHORT);
        isvalidconfirmpassword = false;
      }
    }

    if (isvalidoldpassword && isvalidnewpassword && isvalidconfirmpassword) {
      allInputsValidated = true;
    }
    else {
      Toast.show("Please check all fields", Toast.SHORT);
    }

    this.setState({
      isvalidoldpassword: isvalidoldpassword,
      errorMessageoldpassword: !isvalidoldpassword,
      isvalidnewpassword: isvalidnewpassword,
      errorMessagenewpassword: !isvalidnewpassword,
      isvalidconfirmpassword: isvalidconfirmpassword,
      errorMessageconfirmpassword: !isvalidconfirmpassword
    });

    return allInputsValidated;
  }

  render() {
    const { lang } = this.state;
    const { loading } = this.props;
    const image = require('../../assets/img/img_loginback.png');
    return (

      <View style={ChangePasswordStyles.loginView}>
        {
            get(loading, 'isLoading') && <OverlayActivityIndicatorElement />
        }
        <ImageBackground source={image} style={ChangePasswordStyles.ImageBack} resizeMode="cover">
          <ScrollView showsVerticalScrollIndicator={false} scrollEnabled={this.state.enableScroll}>
            <KeyboardAvoidingView style={ChangePasswordStyles.container} enabled>
              <View style={ChangePasswordStyles.loginContainer}>
                <View style={ChangePasswordStyles.textBoxContent}>
                  <View style={ChangePasswordStyles.textBoxInner}>

                    <Image style={ChangePasswordStyles.passwordImg} source={require('../../assets/img/password.png')} resizeMode="cover" />
                    <Image style={ChangePasswordStyles.lineImg} source={require('../../assets/img/line.png')} resizeMode="cover" />
                  </View>
                  <TextBoxElementChangepass placeholder={lang.CurrentPassword}
                    style={[this.state.isValidoldpassword ? ChangePasswordStyles.BorderGrey : ChangePasswordStyles.BorderRed, ChangePasswordStyles.textInput]}
                    value={this.state.postChangePassword.oldpassword}
                    onChangeText={value => this.onValueChange("oldpassword", value)}
                    placeholderTextColor='#4A4A4A'
                    maxLength={20}
                    isvalidInput={this.state.isValidoldpassword}
                    onEndEditing={() => this.validateInputs("oldpassword")}
                    secureTextEntry={true}
                    autoCapitalize={'none'} />

                </View>
                <View style={ChangePasswordStyles.textBoxContent}>
                  <View style={ChangePasswordStyles.textBoxInner}>
                    <Image style={ChangePasswordStyles.passwordImg} source={require('../../assets/img/password.png')} resizeMode="cover" />
                    <Image style={ChangePasswordStyles.lineImg} source={require('../../assets/img/line.png')} resizeMode="cover" />
                  </View>


                  <TextBoxElementChangepass
                    placeholder={lang.Password}
                    secureTextEntry={true}
                    value={this.state.postChangePassword.newpassword}
                    //  isvalidInput={this.props.loginresponse.ErrorMessage == "" || this.props.loginresponse.ErrorMessage == null}
                    autoCapitalize={'none'}
                  // onChangeText={value => this.updateState("password", value)}
                  />

                </View>
                <View style={ChangePasswordStyles.textBoxContent}>
                  <View style={ChangePasswordStyles.textBoxInner}>
                    <Image style={ChangePasswordStyles.passwordImg} source={require('../../assets/img/password.png')} resizeMode="cover" />
                    <Image style={ChangePasswordStyles.lineImg} source={require('../../assets/img/line.png')} resizeMode="cover" />
                  </View>

                  <TextBoxElementChangepass placeholder={lang.ConfirmPassword}
                    style={[this.state.isValidconfirmpassword ? ChangePasswordStyles.BorderGrey : ChangePasswordStyles.BorderRed, ChangePasswordStyles.textInput]}
                    value={this.state.postChangePassword.confirmpassword}
                    onChangeText={value => this.onValueChange("confirmpassword", value)}
                    placeholderTextColor='#4A4A4A'

                    isvalidInput={this.state.isValidconfirmpassword}
                    onEndEditing={() => this.validateInputs("confirmpassword")}
                    secureTextEntry={true}
                    autoCapitalize={'none'} />
                </View>
                <View style={ChangePasswordStyles.ButtonBox}>
                  <TouchableOpacity style={ChangePasswordStyles.buttonStyle}
                    onPress={() => this.changePassword()}>
                    <Text style={ChangePasswordStyles.btnText}>{lang.UpdatePassword}</Text>
                  </TouchableOpacity>


                </View>

              </View>

            </KeyboardAvoidingView>
          </ScrollView>
        </ImageBackground>
      </View >


    );
  }
}

ChangePasswordView.propTypes = {
  onLogin: PropTypes.func
};

export default ChangePasswordView;
