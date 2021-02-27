import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity, ImageBackground, ScrollView, Keyboard } from 'react-native';
import ForgotPasswordstyles from './ForgotPasswordstyles';
import globalStyles from '../../assets/css/globalStyles';
import PropTypes from 'prop-types';
import { get } from 'lodash';
import { TextBoxElement,OverlayActivityIndicatorElement } from "../../components";
import AsyncStorage from '@react-native-community/async-storage';
import Resource_EN from '../../config/Resource_EN';
const { English,Spanish } = Resource_EN;

class ForgotpassView extends Component {
  state = {
    username: "",
    disablebtn: true,
    enableScroll: false,
    lang:{},
  };

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
  forgotpassword = () => {
    this.props.onForgotPassword(this.state.username);
  };

  navigateToLogin = () => {
    this.props.login();
  }

  validateUsername = () => {
    if (this.state.username == "") {
      this.setState({ disablebtn: true });
    }
    else {
      this.setState({ disablebtn: false });
    }
  }

  updateState = (fieldName, value) => {
    this.setState({
      [fieldName]: value
    });
  };




  render() {
    const { username, disablebtn, lang } = this.state;
    const { loginError, loading } = this.props;
    const image = require('../../assets/img/img_loginback.png');
    return (
      <View style={ForgotPasswordstyles.loginView}>
        {
            get(loading, 'isLoading') && <OverlayActivityIndicatorElement />
        }
        <ImageBackground source={image} style={ForgotPasswordstyles.ImageBack} resizeMode="cover">
          <ScrollView showsVerticalScrollIndicator={false} scrollEnabled={this.state.enableScroll}>
            <View style={ForgotPasswordstyles.verificationInner}>


              <View style={ForgotPasswordstyles.loginContainer}>
                <View style={ForgotPasswordstyles.loginArea}>
                  <Text style={ForgotPasswordstyles.TitleText}>{lang.forgotyourpassword}</Text>
                  <View style={ForgotPasswordstyles.textBoxContent}>
                    <TextBoxElement
                      placeholder={lang.EnterUsername}
                      value={username}
                      autoCapitalize={'none'}
                      onBlur={value => this.validateUsername()}
                      onChangeText={value => this.updateState("username", value)}
                    />
                  </View>
                  <Text style={ForgotPasswordstyles.FgtText}>{lang.forgotpasswordmessage}</Text>
                  <TouchableOpacity disabled={disablebtn} style={[ForgotPasswordstyles.buttonStyle, (disablebtn) ? ForgotPasswordstyles.buttonStyleDisable : ForgotPasswordstyles.buttonStyleActive]}
                  >
                    <Text style={ForgotPasswordstyles.btnText}>{lang.SendConfirmation}</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={[ForgotPasswordstyles.buttonStyle, ForgotPasswordstyles.BtnCancle]}
                    onPress={this.navigateToLogin}>
                    <Text style={ForgotPasswordstyles.btnText}>{lang.Cancel}</Text>
                  </TouchableOpacity>

                </View>




              </View>
            </View>
          </ScrollView>
        </ImageBackground>
      </View >
    );
  }
}

ForgotpassView.propTypes = {
  onLogin: PropTypes.func
};

export default ForgotpassView;
