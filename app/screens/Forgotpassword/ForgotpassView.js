import React, { Component } from 'react';
import { get } from 'lodash';
import { View, Text, TouchableOpacity, Image, ScrollView,Keyboard } from 'react-native';
import ForgotPasswordstyles from './ForgotPasswordstyles';
import globalStyles from '../../assets/css/globalStyles';
import Resource_EN from '../../config/Resource_EN';
import PropTypes from 'prop-types';
import { TextBoxElement, LinkButton, ButtonElement,OverlayActivityIndicatorElement } from "../../components";
const { heading } = Resource_EN;
const { content } = Resource_EN;
const { button } = Resource_EN;
class ForgotpassView extends Component {
  state = {
    username: "",
    disablebtn:true ,
    enableScroll:false,
  }; 
  componentDidMount(){
    this.keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      this._keyboardDidShow,
    );
    this.keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      this._keyboardDidHide,
    );
  }
  componentWillUnmount() {
    this.keyboardDidShowListener.remove();
    this.keyboardDidHideListener.remove();
  }

  _keyboardDidShow = ( )=> {
    this.setState({ enableScroll: true});
  }

  _keyboardDidHide = ( )=>{
    this.setState({ enableScroll: false});
  }
  forgotpassword = () => {
      this.props.onForgotPassword(this.state.username);
  }; 

  navigateToLogin = () => {
    this.props.login();
  }
  
  validateUsername = () =>{
    if(this.state.username == "")
    {
      this.setState({disablebtn:true});
    }
    else {
      this.setState({disablebtn:false});
    }
  }

  updateState = (fieldName, value) => {
    this.setState({
      [fieldName]: value
    });
  };
 
  render() {
    const {username,disablebtn} = this.state;
    const { loginError,loading} = this.props;
    return (
      <View style={globalStyles.innerContainer}>
          {/* <Image style={ForgotPasswordstyles.loginBg} source={require('../../assets/img/login_bg.jpg')} resizeMode="cover" />  */}
          <ScrollView showsVerticalScrollIndicator={false} scrollEnabled={this.state.enableScroll}>
            <View style={ForgotPasswordstyles.verificationInner}>
              <View style={ForgotPasswordstyles.ImgContainer}>
                <Image style={ForgotPasswordstyles.verification} source={require('../../assets/img/paaword_lock.png')} resizeMode="cover" /> 
              </View>
              <Text style={ForgotPasswordstyles.titletext}>Please enter your registered email ID.</Text>
              <Text style={ForgotPasswordstyles.Detailtext}>We will send a verification code to{"\n"}
              your registered email ID. </Text>
                <View style={ForgotPasswordstyles.textBoxContent}>
                  <TextBoxElement
                   placeholder={'Enter Username'}
                   value={username}
                   autoCapitalize={'none'}
                   onBlur={value => this.validateUsername()}
                   onChangeText={value => this.updateState("username", value)}
                  />
                  <View style={ForgotPasswordstyles.textBoxInner}>
                    <Image style={ForgotPasswordstyles.lineImg} source={require('../../assets/img/line.png')} resizeMode="cover" /> 
                    <Image style={ForgotPasswordstyles.textBoxImg} source={require('../../assets/img/user.png')} resizeMode="cover" /> 
                  </View>
                </View>
              <TouchableOpacity disabled={disablebtn} style={ForgotPasswordstyles.btnGreen} 
                onPress={this.forgotpassword}>
                <Text style={[ForgotPasswordstyles.btnText , 
                  (disablebtn) ? ForgotPasswordstyles.btnDisable : ForgotPasswordstyles.btnActive]}>Next</Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </View>
    );
  }
}

ForgotpassView.propTypes = {
    onLogin: PropTypes.func
};

export default ForgotpassView;
