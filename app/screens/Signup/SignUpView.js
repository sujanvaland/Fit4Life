import React, { Component } from 'react';
import { get } from 'lodash';
import { View, Text, Image, TouchableOpacity, KeyboardAvoidingView,ToastAndroid,StatusBar } from 'react-native';
import styles from './signupStyles';
import globalStyles from '../../assets/css/globalStyles';
import Resource_EN from '../../config/Resource_EN';
import PropTypes from 'prop-types';
import { TextBoxElement, PhoneTextBoxElement, ButtonElement,OverlayActivityIndicatorElement } from "../../components";
import { ScrollView } from 'react-native-gesture-handler';
import {CheckBox} from 'native-base';
import SplashScreen from 'react-native-splash-screen';

const { heading } = Resource_EN;
const { content } = Resource_EN;
const { button } = Resource_EN;
class SignUpView extends Component {
 
  constructor(props) {
    super(props);
    //this.props.singupresponse.result ="";
    //this.props.singupresponse.message=true;
    this.state = {
      mainpage: false,
      hire: false,
      work:false,
      termsChecked: false,
      newsChecked: false,
      showNewsCheckbox:true,
      isvalidTextInput:true,
      userDetails:{
        fullname: "",
        email: "",
        phone:"",
        username:"",
        password:"",
        isvalidfullname: true,
        isvalidemail: true,
        isvalidphone:true,
        isvalidusername:true,
        isvalidpassword:true,
      },
      isvalidfullname: false,
      isvalidemail: false,
      isvalidphone:false,
      isvalidusername:false,
      isvalidpassword:false
    };
  }

  signup = () => {
      const { userDetails,isvalidfullname,isvalidemail,isvalidphone,isvalidusername,isvalidpassword } = this.state;
      let allInputsValidated = false;
     
    //console.log(isvalidfullname,isvalidemail,isvalidphone,isvalidusername,isvalidpassword)
      if(isvalidfullname && isvalidemail && isvalidphone && isvalidusername && isvalidpassword)
      {
          allInputsValidated = true;
      }
      else{
        this.updateState("isvalidfullname",isvalidfullname);
        this.updateState("isvalidemail",isvalidemail);
        this.updateState("isvalidphone",isvalidphone);
        this.updateState("isvalidusername",isvalidusername);
        this.updateState("isvalidpassword",isvalidpassword);
      }
     
      if(allInputsValidated){
        // if(!this.state.termsChecked){
        //   ToastAndroid.show("Please agree to Terms of Use", ToastAndroid.SHORT);
        //   allInputsValidated = false;
        // }
      }
      
      if(allInputsValidated){
        this.props.onSignUp(this.state.userDetails);
      }
  };
  componentDidMount(){
    SplashScreen.hide();
  }
  validateEmail = (value) =>
  {
    if (/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/g.test(value))
    {
      return true;
    }
    return false;
  }

  validateAlphanumeric = (value) =>{
    let reg =  /^[a-zA-Z0-9\$%\^\&*\)\(+=._-]{3,30}$/g;
    if(reg.test(value) === false)
    {return false;}
    else {
      return true;
    }
  }

  validatePassword = (value) =>{
    if(value.length < 8){
      return false;
    }
    else{
      return true;
    }
  } //Password validation


  validateInputs = (fieldName) =>{
    if(fieldName == "fullname"){
      if(this.state.userDetails.fullname == "" ){
        this.updateState("isvalidfullname", false);
        this.setState({isvalidfullname:false});
      }
      else{
        if(this.state.userDetails.fullname.length >= 3 && this.state.userDetails.fullname.length <=50){
          this.updateState("isvalidfullname", true);
          this.setState({isvalidfullname:true});
        }
        else{
          ToastAndroid.show("Fullname should have min 3 chars and max 50", ToastAndroid.SHORT);
          this.updateState("isvalidfullname", false);
          this.setState({isvalidfullname:false});
        }
      }
    }
    
    if(fieldName == "email"){
      if(this.state.userDetails.email == "" ){
        this.updateState("isvalidemail", false);
        this.setState({isvalidemail:false});
      }
      else{
          if(this.validateEmail(this.state.userDetails.email)){
            this.updateState("isvalidemail", true);
            this.setState({isvalidemail:true});
          }
          else{
            ToastAndroid.show("Invalid Email", ToastAndroid.SHORT);
            this.updateState("isvalidemail", false);
            this.setState({isvalidemail:false});
          }
      }
    }

    if(fieldName == "phone"){
      if(this.state.userDetails.phone == "" ){
        this.updateState("isvalidphone", false);
        this.setState({isvalidphone:false});
      }
      else{
        let reg =  /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s/0-9]*$/g;
        if(reg.test(this.state.userDetails.phone) === true){
          if(this.state.userDetails.phone.length >=10 && this.state.userDetails.phone.length <=15){
            this.updateState("isvalidphone", true);
            this.setState({isvalidphone:true});
          }
          else{
            ToastAndroid.show("Phone Number length should be 10 to 15 digits", ToastAndroid.SHORT);
            this.updateState("isvalidphone", false);
            this.setState({isvalidphone:false});
          }
        }
        else{
            ToastAndroid.show("Phone Number is not valid", ToastAndroid.SHORT);
            this.updateState("isvalidphone", false);
            this.setState({isvalidphone:false});
        }
      }
    }

    if(fieldName == "username"){
      if(this.state.userDetails.username == "" ){
        this.updateState("isvalidusername", false);
        this.setState({isvalidusername:false});
      }
      else{
        if(this.validateAlphanumeric(this.state.userDetails.username)){
            this.updateState("isvalidusername", true);
            this.setState({isvalidusername:true});
        }
        else{
            ToastAndroid.show("Username should have min 3 and max 30 char", ToastAndroid.SHORT);
            this.updateState("isvalidusername", false);
            this.setState({isvalidusername:false});
        }
      }
    }

    if(fieldName == "password"){
      if(this.state.userDetails.password == "" ){
        this.updateState("isvalidpassword", false);
        this.setState({isvalidpassword:false});
      }
      else{
        if(this.validatePassword(this.state.userDetails.password)){
          this.updateState("isvalidpassword", true);
          this.setState({isvalidpassword:true});
        }
        else{
          ToastAndroid.show("Password must be min 8 chars", ToastAndroid.SHORT);
            this.updateState("isvalidpassword", false);
            this.setState({isvalidpassword:false});
        }
      }
    }

    if(fieldName == "company"){
      if(this.state.userDetails.company != "" ){
        if(this.state.userDetails.company.length > 200){
          ToastAndroid.show("Company name should be less then 200 char", ToastAndroid.SHORT);
          this.updateState("isvalidcompany", false);
          this.setState({isvalidpassword:false});
        }
        else{
          this.updateState("isvalidcompany", true);
          this.setState({isvalidcompany:true});
        }
      }
      else{
        this.updateState("isvalidcompany", true);
        this.setState({isvalidcompany:true});
      }
    }
  };

  updateState = (fieldName, value) => {
    if(fieldName=="username"){
      value = value.toLowerCase();//To convert Lower Case
    }
    this.setState(prevState => ({
      userDetails: {                   // object that we want to update
          ...prevState.userDetails,    // keep all other key-value pairs
          [fieldName]: value       // update the value of specific key
      }
    }));

    if (this.state.username != '' && this.state.password != '' && this.state.fullname != '' && this.state.phone != '' && this.state.email != ''){
      this.submitted=false;
    } else {
      this.submitted=true;
    }
  };

  
 
  navigateToLogin = () => {
    this.props.Login();
  } //redirect to Terms page

  render() {
    
    const { userDetails} = this.state;
    const { country,loading,disabled } = this.props;
    const { overlayStyle } = styles;
    
    return (
      <View style={styles.loginView}>
      {/* <Image style={styles.loginBg} source={require('../../assets/img/login_bg.jpg')} resizeMode="cover" />  */}
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
            backgroundColor="#a80f19"
            //Background color of statusBar
            translucent={false}
            //allowing light, but not detailed shapes
            networkActivityIndicatorVisible={true}
          />
          {/* <Image style={styles.logoImg} source={require('../../assets/img/logo1.png')} resizeMode="cover" />  */}
        </View>
        
        <View style={globalStyles.loginContainer}>
          
          {
              this.state.ShowEnvMsg == true &&
              <Text style={globalStyles.headingText}>Current Environment : {this.state.CurrentEnv}</Text>
          }
          <View style={styles.textBoxContent}>
          <TextBoxElement
            placeholder={"Enter Full Name"}
            value={userDetails.fullname}
            autoCapitalize={'none'}
            onChangeText={value => this.updateState("fullname", value)}
            isvalidInput={userDetails.isvalidfullname}
            onEndEditing={() => this.validateInputs("fullname") }
            maxLength={50}
          />
            <View style={styles.textBoxInner}>
              <Image style={styles.lineImg} source={require('../../assets/img/line.png')} resizeMode="cover" /> 
              <Image style={styles.textBoxImg} source={require('../../assets/img/user.png')} resizeMode="cover" /> 
            </View>
          </View>
          <View style={styles.textBoxContent}>
            <TextBoxElement
                placeholder={"Enter Email"}
                value={userDetails.email}
                autoCapitalize={'none'}
                onChangeText={value => this.updateState("email", value)}
                isvalidInput={userDetails.isvalidemail}
                onEndEditing={() => this.validateInputs("email") }
                maxLength={200}
            />
              <View style={styles.textBoxInner}>
                <Image style={styles.lineImg} source={require('../../assets/img/line.png')} resizeMode="cover" /> 
                <Image style={styles.textBoxmailImg} source={require('../../assets/img/mail.png')} resizeMode="cover" /> 
              </View>
          </View>
          <View style={styles.textBoxContent}>
              <PhoneTextBoxElement
                  placeholder={"Enter Mobile Number"}
                  value={userDetails.phone}
                  autoCapitalize={'none'}
                  onChangeText={value => this.updateState("phone", value)}
                  isvalidInput={userDetails.isvalidphone}
                  onEndEditing={() => this.validateInputs("phone") }
                  maxLength={15}
                />
              <View style={styles.textBoxInner}>
                <Image style={styles.lineImg} source={require('../../assets/img/line.png')} resizeMode="cover" /> 
                <Image style={styles.textBoxImg} source={require('../../assets/img/phone.png')} resizeMode="cover" /> 
              </View>
          </View>
          <View style={styles.textBoxContent}>
          <TextBoxElement
            placeholder={"Enter Username"}
            value={userDetails.username}
            autoCapitalize={'none'}
            onChangeText={value => this.updateState("username", value)}
            isvalidInput={userDetails.isvalidusername}
            onEndEditing={() => this.validateInputs("username") }
            maxLength={200}
          />
            <View style={styles.textBoxInner}>
              <Image style={styles.lineImg} source={require('../../assets/img/line.png')} resizeMode="cover" /> 
              <Image style={styles.textBoxImg} source={require('../../assets/img/user.png')} resizeMode="cover" /> 
            </View>
          </View>
          <View style={styles.textBoxContent}>
             <TextBoxElement
                  placeholder={"Enter Password"}
                  secureTextEntry={true}
                  value={userDetails.password}
                  onChangeText={value => this.updateState("password", value)}
                  isvalidInput={userDetails.isvalidpassword}
                  onEndEditing={() => this.validateInputs("password") }
                  autoCapitalize={'none'}
                />
            <View style={styles.textBoxInner}>
              <Image style={styles.lineImg} source={require('../../assets/img/line.png')} resizeMode="cover" /> 
              <Image style={styles.passwordImg} source={require('../../assets/img/password.png')} resizeMode="cover" /> 
            </View>
          </View>
          
          <View style={styles.flexBox}>
            <TouchableOpacity onPress={this.signup} disabled={this.submitted} style={[styles.buttonStyle , (disabled) ? styles.buttonStyleDisable : styles.buttonStyleActive]}>
              <Text style={[styles.buttonStyleText , (disabled) ? styles.buttonStyleDisable : styles.buttonStyleActive]}>Sign Up</Text>
            </TouchableOpacity>
          </View>
          <Text style={styles.accountText}>Already having Account</Text>
          <View style={styles.flexBox}>
         
          <TouchableOpacity style={styles.signButton}
              onPress={this.navigateToLogin}>
              <Text style={styles.signText}>Sign In</Text>
          </TouchableOpacity>
           
          </View>
        </View>
        
      </KeyboardAvoidingView>
      </ScrollView>
      </View>
    );
  }
}

SignUpView.propTypes = {
    onLogin: PropTypes.func
};

export default SignUpView;
