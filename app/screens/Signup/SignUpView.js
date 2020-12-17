import React, { Component } from 'react';
import { get } from 'lodash';
import { View, Text, Image, TouchableOpacity, ImageBackground, KeyboardAvoidingView, ToastAndroid, StatusBar } from 'react-native';
import styles from './signupStyles';
import globalStyles from '../../assets/css/globalStyles';
import Resource_EN from '../../config/Resource_EN';
import PropTypes from 'prop-types';

import { TextBoxElement, PhoneTextBoxElement, ButtonElement, OverlayActivityIndicatorElement } from "../../components";
import { ScrollView } from 'react-native-gesture-handler';

import SplashScreen from 'react-native-splash-screen';
import * as navigationActions from '../../actions/navigationActions';

class SignUpView extends Component {

  constructor(props) {
    super(props);
    //this.props.singupresponse.result ="";
    //this.props.singupresponse.message=true;
    this.state = {
      userDetails: {
        firstname: "",
        lastname: "",
        email: "",
        password: "",
        isvalidfirstname: true,
        isvalidlastname: true,
        isvalidemail: true,
        isvalidpassword: true,
      },
      isvalidfirstname: false,
      isvalidlastname: false,
      isvalidemail: false,
      isvalidpassword: false

    };
  }

  signup = () => {
    const { isvalidfirstname, isvalidlastname, isvalidemail, isvalidpassword } = this.state;
    let allInputsValidated = false;

    //console.log(isvalidfirstname, isvalidlastname, isvalidemail,isvalidphone,isvalidpassword)
    if (isvalidfirstname && isvalidlastname && isvalidemail && isvalidpassword) {
      allInputsValidated = true;
    }
    else {
      this.updateState("isvalidfirstname", isvalidfirstname);
      this.updateState("isvalidlastname", isvalidlastname);
      this.updateState("isvalidemail", isvalidemail);
      this.updateState("isvalidpassword", isvalidpassword);
    }

    if (allInputsValidated) {
      this.props.onSignUp(this.state.userDetails);
    }
  };


  componentDidMount() {
    SplashScreen.hide();
    this.setState(prevState => ({
      userDetails: {                   // object that we want to update
        ...prevState.userDetails,    // keep all other key-value pairs
        firstname: '',
        lastname: '',
        email: '',
        password: ''
      }
    }));
  }
  validateEmail = (value) => {
    if (/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/g.test(value)) {
      return true;
    }
    return false;
  }

  validateAlphanumeric = (value) => {
    let reg = /^[a-zA-Z0-9\$%\^\&*\)\(+=._-]{3,30}$/g;
    if (reg.test(value) === false) { return false; }
    else {
      return true;
    }
  }

  validatePassword = (value) => {
    if (value.length < 8) {
      return false;
    }
    else {
      return true;
    }
  } //Password validation


  validateInputs = (fieldName) => {
    if (fieldName == "firstname") {
      if (this.state.userDetails.firstname == "") {
        this.updateState("isvalidfirstname", false);
        this.setState({ isvalidfirstname: false });
      }
      else {
        if (this.state.userDetails.firstname.length >= 3 && this.state.userDetails.firstname.length <= 50) {
          this.updateState("isvalidfirstname", true);
          this.setState({ isvalidfirstname: true });
        }
        else {
          ToastAndroid.show("firstname should have min 3 chars and max 50", ToastAndroid.SHORT);
          this.updateState("isvalidfirstname", false);
          this.setState({ isvalidfirstname: false });
        }
      }
    }

    if (fieldName == "lastname") {
      if (this.state.userDetails.lastname == "") {
        this.updateState("isvalidlastname", false);
        this.setState({ isvalidlastname: false });
      }
      else {
        if (this.state.userDetails.lastname.length >= 3 && this.state.userDetails.lastname.length <= 50) {
          this.updateState("isvalidlastname", true);
          this.setState({ isvalidlastname: true });
        }
        else {
          ToastAndroid.show("lastname should have min 3 chars and max 50", ToastAndroid.SHORT);
          this.updateState("isvalidlastname", false);
          this.setState({ isvalidlastname: false });
        }
      }
    }

    if (fieldName == "email") {
      if (this.state.userDetails.email == "") {
        this.updateState("isvalidemail", false);
        this.setState({ isvalidemail: false });
      }
      else {
        if (this.validateEmail(this.state.userDetails.email)) {
          this.updateState("isvalidemail", true);
          this.setState({ isvalidemail: true });
        }
        else {
          ToastAndroid.show("Invalid Email", ToastAndroid.SHORT);
          this.updateState("isvalidemail", false);
          this.setState({ isvalidemail: false });
        }
      }
    }

    if (fieldName == "password") {
      if (this.state.userDetails.password == "") {
        this.updateState("isvalidpassword", false);
        this.setState({ isvalidpassword: false });
      }
      else {
        if (this.validatePassword(this.state.userDetails.password)) {
          this.updateState("isvalidpassword", true);
          this.setState({ isvalidpassword: true });
        }
        else {
          ToastAndroid.show("Password must be min 8 chars", ToastAndroid.SHORT);
          this.updateState("isvalidpassword", false);
          this.setState({ isvalidpassword: false });
        }
      }
    }
  };

  updateState = (fieldName, value) => {

    this.setState(prevState => ({
      userDetails: {                   // object that we want to update
        ...prevState.userDetails,    // keep all other key-value pairs
        [fieldName]: value       // update the value of specific key
      }
    }));

    if (this.state.password != '' && this.state.firstname != '' && this.state.lastname != '' && this.state.email != '') {
      this.submitted = false;
    } else {
      this.submitted = true;
    }
  };



  navigateToLogin = () => {
    navigationActions.navigateToLogin();
  }


  render() {

    const { userDetails } = this.state;
    const { loading, disabled } = this.props;
    const image = require('../../assets/img/img_loginback.png');

    return (

      <View style={styles.loginView}>
        <ImageBackground source={image} style={styles.ImageBack} resizeMode="cover">
          <ScrollView showsVerticalScrollIndicator={false} scrollEnabled={this.state.enableScroll}>
            <KeyboardAvoidingView style={styles.container} enabled>
              {
                get(loading, 'isLoading') && <OverlayActivityIndicatorElement />
              }

              <View style={styles.logoContainer}>
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

              <View style={styles.loginContainer}>

                <View style={styles.loginArea}>
                  <Text style={styles.TitleText}>Create an Account</Text>
                  <View style={styles.textBoxContent}>
                    <TextBoxElement
                      placeholder={"First Name"}
                      value={userDetails.firstname}
                      autoCapitalize={'none'}
                      onChangeText={value => this.updateState("firstname", value)}
                      isvalidInput={userDetails.isvalidfirstname}
                      onEndEditing={() => this.validateInputs("firstname")}
                      maxLength={50}
                      style={styles.TextBox}
                    />
                  </View>
                  <View style={styles.textBoxContent}>
                    <TextBoxElement
                      placeholder={"Last Name"}
                      value={userDetails.lastname}
                      autoCapitalize={'none'}
                      onChangeText={value => this.updateState("lastname", value)}
                      isvalidInput={userDetails.isvalidlastname}
                      onEndEditing={() => this.validateInputs("lastname")}
                      maxLength={50}
                      style={styles.TextBox}
                    />
                  </View>
                  <View style={styles.textBoxContent}>
                    <TextBoxElement
                      placeholder={"Email"}
                      value={userDetails.email}
                      autoCapitalize={'none'}
                      onChangeText={value => this.updateState("email", value)}
                      isvalidInput={userDetails.isvalidemail}
                      onEndEditing={() => this.validateInputs("email")}
                      maxLength={200}
                      caretHidden
                      autoCorrect={false}
                      keyboardType='email-address'
                      autoCompleteType='email'
                    />
                  </View>
                  <View style={styles.textBoxContent}>
                    <TextBoxElement
                      placeholder={"Password"}
                      secureTextEntry={true}
                      value={userDetails.password}
                      onChangeText={value => this.updateState("password", value)}
                      isvalidInput={userDetails.isvalidpassword}
                      onEndEditing={() => this.validateInputs("password")}
                      autoCapitalize={'none'}
                    />
                  </View>

                  <View style={[styles.flexBox, styles.Mrtop20]}>
                    <TouchableOpacity onPress={this.signup} disabled={this.submitted} style={[styles.buttonStyle, (disabled) ? styles.buttonStyleDisable : styles.buttonStyleActive]}>
                      <Text style={[styles.buttonStyleText, (disabled) ? styles.buttonStyleDisable : styles.buttonStyleActive]}>Register</Text>
                    </TouchableOpacity>
                  </View>


                  <View style={styles.NewRegistration}>
                    <Text style={styles.accountText}>Already having Account?</Text>
                    <TouchableOpacity style={styles.BtnSignup} onPress={() => this.navigateToLogin()}>
                      <Text style={styles.TextSignup}>Sign In</Text>
                    </TouchableOpacity>
                  </View>

                  {/* <View style={styles.checkboxContainer}>
                    <Text style={styles.Chklabel}>By creating an account you accept the{"\n"}
                      Terms  and Conditions of information use</Text>
                  </View> */}
                </View>
              </View>

            </KeyboardAvoidingView>
          </ScrollView>
        </ImageBackground>
      </View>
    );
  }
}

SignUpView.propTypes = {
  onLogin: PropTypes.func
};

export default SignUpView;
