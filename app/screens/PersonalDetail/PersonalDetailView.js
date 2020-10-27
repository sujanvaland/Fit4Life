import React, { Component, useState } from 'react';
import { View, Text, Image, TouchableOpacity, StatusBar, TextInput, Dimensions, Platform, ToastAndroid,
  ScrollView} from 'react-native';
import PersonalDetailStyles from './PersonalDetailStyles';
import globalStyles from '../../assets/css/globalStyles';
import PropTypes from 'prop-types';
import Resource_EN from '../../config/Resource_EN';
import { Icon ,ListItem,Radio} from 'native-base';
import Modal from "react-native-modal";
//import DatePicker from 'react-native-datepicker';
import Styles from '../../config/styles';
const { width: viewportWidth , height: viewportHeight } = Dimensions.get('window');
const { color, Typography } = Styles;
import DateTimePicker from '@react-native-community/datetimepicker';
import ApiConstants from '../../api/ApiConstants';
import * as navigationActions from 'app/actions/navigationActions';

var todaydate = new Date();
//let todaydate=today.getDate() + "/"+ parseInt(today.getMonth()+1) +"/"+ today.getFullYear();
//console.log(todaydate);
class PersonalDetailView extends Component {
  constructor(props) {
    super(props); 
    const {accountdetail}=this.props;
    this.state={
      editDetail:false,
      isModalVisible:false,
      datepickershow:false,
      birthdatevalue: (accountdetail[0].birthdate!= null && accountdetail[0].birthdate!='0000-00-00') ? new Date(accountdetail[0].birthdate) : todaydate,
      isValidfirstname: true,
      errorMessagefirstname: false,
      isValidlastname: true,
      errorMessagelastname: false,
      isValidbirthdate: true,
      errorMessagebirthdate: false,
      isValidgender:true,
      errorMessagegender: false,
      isValidemail:true,
      errorMessageemail: false,
      isValidphone:true,
      errorMessagephone: false,
      isValidvehicalno: true,
      errorMessagevehicalno: false,
      updateprofile:{
        firstname:accountdetail[0].firstname,
        lastname:accountdetail[0].lastname,
        birthdate:accountdetail[0].birthdate,
        gender:accountdetail[0].gender,
        email:accountdetail[0].email,
        phone:accountdetail[0].phone,
        vehicalno:accountdetail[0].vehicalno
      },
      // The values, which we get from each of the DateTimePickers. 
        // These values can be saved into your app's state.
        //ToDateValue: null,

        // for iOS & Android: When this flag is true, the relevant <DateTimePicker> is displayed
        isToDatePickerVisible: false,

        // The value of the <DateTimePicker> is stored in this variable, which is used to pass data between the date & time pickers 
        dateOrTimeValue: null, 

        // ONLY FOR ANDROID: note that the current version of the <DateTimePicker> does NOT support "datetime" mode on Android.
        // So, I am using the following 2 flags (datePickerVisible & timePickerVisible) to provide this functionality.

        // (1) ONLY FOR ANDROID: When the datePickerVisible flag is true, the <DateTimePicker> is displayed in "date" mode
        datePickerVisible: false, 

        // (2) ONLY FOR ANDROID: When the timePickerVisible flag is true, the <DateTimePicker> is displayed in "time" mode
        timePickerVisible: false,
    }
  }
  closeModal = () => {
    this.setState({ isModalVisible: false });
  }
  selectGender= (value) => {
    this.setState(prevState => ({
        updateprofile: {                   // object that we want to update
          ...prevState.updateprofile, // keep all other key-value pairs
          ['gender']: value
        }
      }), function () {
       
        if (this.state.updateprofile.gender == null) {
          this.setState({isValidgender:false});
        } else {
          this.setState({isValidgender:true});
        }
    });

    this.setState({ isModalVisible: !this.state.isModalVisible });
  }

  toggleModal=()=>{
    this.setState({ isModalVisible: !this.state.isModalVisible });
  }

  onEdit=()=>{
    this.setState({editDetail:true})
  }

  cancelProfile=()=>{
    this.setState({editDetail:false})
  }

  navigateToEditProfileImage = () => {
    navigationActions.navigateToEditProfileImage();
  }
  navigateToHome=()=>{
    this.props.Home();
  }

  getParsedDate(strDate) {//get date formate
    if (strDate != "") {
      let month_names = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
      var strSplitDate = String(strDate).split('T');
      var dateArray = strSplitDate[0].split('-');
      let monthint = parseInt(dateArray[1]);
      let date = month_names[monthint - 1] + " " + dateArray[2] + ", " + dateArray[0];
      return date;
    }
    return "";
  }

  showDatepicker = () => {
    this.setState({datepickershow:true});
  };

saveEndingDate = (value) => { 
    console.log("saveEndingDate - value:", value);
    this.setState(prevState => ({
      updateprofile: {                   // object that we want to update
        ...prevState.updateprofile, // keep all other key-value pairs
        ['birthdate']: value
      }
    }), function () {
  });

  this.setState({birthdatevalue:value});

  // this.setState({
  //     ToDateValue: value,
  // });
}; 

fRenderDateTimePicker = (dateTimePickerVisible, visibilityVariableName, dateTimePickerMode, defaultValue, saveValueFunctionName ) => {
    // dateTimePickerVisible:   a flag, which is used to show/hide this DateTimePicker
    // visibilityVariableName:              the name of the state variable, which controls showing/hiding this DateTimePicker. 
        // The name of the variable is received in (visibilityVariableName), and the value of it is received in the argument (dateTimePickerVisible).
    // dateTimePickerMode:      the mode mode of this DateTimePicker
    // defaultValue:                the default value, which should be selected initially when the DatTimePicker is displayed 
    // saveValueFunctionName:   the function, which would be called after the user selects a value. 
        // In my case it is a Redux's action creator, which saves the selected value in the app's state. 

    return (
        <View>
            {/* A. For iOS, display the picker in "date", "time" or "datetime" mode - No need for any customisation */}
            {Platform.OS === 'ios' && dateTimePickerVisible &&
                (<DateTimePicker
                    mode={dateTimePickerMode}
                    value={defaultValue}

                    onChange={ (event, value) => {
                        this.setState({
                            dateOrTimeValue: value,

                            // We are done. Hide the <DatTimePicker>
                            // Technically speaking, since this part of the script is only relevant to a certain platform, I don't need to check for the platform (below). 
                            // Note that [visibilityVariableName] refers to the NAME of a state variable
                            [visibilityVariableName]: Platform.OS === 'ios' ? true : false,
                        });

                        if (event.type === "set") {
                            saveValueFunctionName(value);
                            // console.log("visibilityVariableName:", [visibilityVariableName], " - value:", value); 
                        }

                    }}
                />)}

            {/* B.1 For Android - "date" mode:      display the picker in "date" mode */}
            {/*       For Android - "datetime" mode: display the picker in "date" mode (to be followed by another picker (below) in "time" mode) */}
            {Platform.OS === 'android' && dateTimePickerVisible && this.state.datePickerVisible &&
                (<DateTimePicker
                    style={PersonalDetailStyles.datepicker}
                    mode={"date"}
                    display='default' // 'default', 'spinner', 'calendar', 'clock' // Android Only 
                    value={defaultValue}
                    maximumDate={new Date()}

                    onChange={ (event, value) => {
                        this.setState({
                            // In case of (mode == datetime), the TIME part will be added to "dateOrTimeValue" using another DateTimePicker (below).
                            dateOrTimeValue: value,
                            datePickerVisible: false,
                        });

                        // When the mode is "datetime" & this picker was set (the user clicked on OK, rather than cancel), 
                        // we need to display another DateTimePicker in TIME mode (below) 
                        if (event.type === "set" && dateTimePickerMode === "datetime") {
                            this.setState({
                                timePickerVisible: true,
                            });
                        }

                        // When the mode is "date" & this picker was set (the user clicked on OK, rather than cancel), 
                        // (1) We need to hide this picker. 
                        // (2) Save the data. Otherwise, do nothing. Date will be saved after the TIME picker is launched (below). 
                        else if (event.type === "set" && dateTimePickerMode === "date") {
                            // console.log("saveValueFunctionName: ", saveValueFunctionName); 
                            this.setState({ 
                                [visibilityVariableName]: Platform.OS === 'ios' ? true : false, 
                            }); 

                            saveValueFunctionName(value);
                            // console.log("visibilityVariableName:", [visibilityVariableName], " - value:", value); 
                        }

                        if (this.state.updateprofile.birthdate == null || this.state.updateprofile.birthdate == '-') {
                          this.setState({isValidbirthdate:false});
                        } else {
                          this.setState({isValidbirthdate:true});
                        }

                    }}
                />)}
        </View>
    );      
}; 

// This function formats date values. Obviously, using it is optional. 
// If you decide to use it, remember that it needs the XDate library: 
// import XDate from 'xdate';
fFormatDateTime = (date1, format1 = "datetime") => {
    // date1:   the date to be formatted 
    // format1: the date mode - "datetime" , "date" OR "time"
    if (date1 === null) {
        return null;
    }

    // else:
    const format2 = format1.toLowerCase();
    let dateFormatted;
    //const date2 = new XDate(date1);
    let newdate1 = new Date(date1);
    let date2=newdate1.getDate()+"/"+parseInt(newdate1.getMonth()+1)+"/"+newdate1.getFullYear();
    switch (format2) {
        case "datetime": {
            dateFormatted = date2.toString('dd/MM/yyyy - hh:mm TT');
            return dateFormatted;
        }
        case "date": {
            dateFormatted = date2.toString('dd/MM/yyyy');
            return dateFormatted;
        }
        case "time": {
            dateFormatted = date2.toString('hh:mm TT');
            return dateFormatted;
        }
        default:
            return null;
    } 
};

// This function shows/hides the initial DateTimePicker 
// If the mode is "datetime", another picker will be displayed by the DATE picker 
fRenderDatePicker = (mode, visibilityVariableName, formmode) => {
    // mode:                        specifies the mode of the <DateTimePicker> 
    // visibilityVariableName:  the name of the state variable, which controls showing/hiding this DateTimePicker. 
    
    if(formmode=="editable")
    {
      switch (mode) {
        case "datetime":
            return this.setState({ [visibilityVariableName]: true, datePickerVisible: true, timePickerVisible: false });
        case "date":
            return this.setState({ [visibilityVariableName]: true, datePickerVisible: true, timePickerVisible: false });
        case "time":
            return this.setState({ [visibilityVariableName]: true, datePickerVisible: false, timePickerVisible: true });
      }
    }
}


onValueChange = (fieldName, value) => {
  this.setState(prevState => ({
      updateprofile: {                   // object that we want to update
        ...prevState.updateprofile, // keep all other key-value pairs
        [fieldName]: value 
      }
    }), function () {
  });
}

validateEmail = (value) =>
  {
    if (/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/g.test(value))
    {
      return true;
    }
    return false;
  }

  validateInputs = (fieldName) =>{

    if(fieldName == "firstname"){
      if(this.state.updateprofile.firstname == "" ){
        this.setState({isValidfirstname:false});
      }
      else{
        if(this.state.updateprofile.firstname.length >= 3 && this.state.updateprofile.firstname.length <=30){
          this.setState({isValidfirstname:true});
        }
        else{
          ToastAndroid.show("First Name should have min 3 chars and max 30", ToastAndroid.SHORT);
          this.setState({isValidfirstname:false});
        }
      }
    }

    if(fieldName == "lastname"){
      if(this.state.updateprofile.lastname == "" ){
        this.setState({isValidlastname:false});
      }
      else{
        if(this.state.updateprofile.lastname.length >= 3 && this.state.updateprofile.lastname.length <=30){
          this.setState({isValidlastname:true});
        }
        else{
          ToastAndroid.show("Last Name should have min 3 chars and max 30", ToastAndroid.SHORT);
          this.setState({isValidlastname:false});
        }
      }
    }
    
    if(fieldName == "email"){
      if(this.state.updateprofile.email == "" ){
        this.setState({isValidemail:true});
      }
      else{
          if(this.validateEmail(this.state.updateprofile.email)){
            this.setState({isValidemail:true});
          }
          else{
            ToastAndroid.show("Invalid Email", ToastAndroid.SHORT);
            this.setState({isValidemail:false});
          }
      }
    }

    if(fieldName == "phone"){
      if(this.state.updateprofile.phone == "" ){
        this.setState({isValidphone:false});
      }
      else{
        let reg =  /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s/0-9]*$/g;
        if(reg.test(this.state.updateprofile.phone) === true){
          if(this.state.updateprofile.phone.length ==10){
            this.setState({isValidphone:true});
          }
          else{
            ToastAndroid.show("Phone Number length should be 10 digits", ToastAndroid.SHORT);
            this.setState({isValidphone:false});
          }
        }
        else{
            ToastAndroid.show("Phone Number is not valid", ToastAndroid.SHORT);
            this.setState({isValidphone:false});
        }
      }
    }

    if(fieldName == "vehicalno"){
      if(this.state.updateprofile.vehicalno == "" ){
        this.setState({isValidvehicalno:false});
      }
      else{
        if(this.state.updateprofile.vehicalno.length >= 5 && this.state.updateprofile.vehicalno.length <=15){
          this.setState({isValidvehicalno:true});
        }
        else{
          ToastAndroid.show("Vehical No should have min 5 chars and max 15", ToastAndroid.SHORT);
          this.setState({isValidvehicalno:false});
        }
      }
    }

  };

  updatepersonaldetails = () => {
    if(this.validatePersonalDetail()){
      this.props.onUpdatePersonalDetail(this.state.updateprofile);
      ToastAndroid.show("Profile Updated Successfully.", ToastAndroid.SHORT);
      this.setState({editDetail:false});
    }
  }

  validatePersonalDetail=()=>{
    //====== title ======//
   let isValidfirstname;
   let isValidlastname;
   let isValidbirthdate;
   let isValidgender;
   let isValidemail;
   let isValidphone;
   let isValidvehicalno;
  

   let allInputsValidated;
   
   if (this.state.updateprofile.firstname == '') {
    isValidfirstname = false;
   } else {
     if (this.state.updateprofile.firstname.length >= 3 && this.state.updateprofile.firstname.length <= 30) {
      isValidfirstname = true;
     } else {
       ToastAndroid.show("First Name should have min 3 chars and max 30", ToastAndroid.SHORT);
       isValidfirstname = false;
     }
   }

   if (this.state.updateprofile.lastname == '') {
    isValidlastname = false;
   } else {
     if (this.state.updateprofile.lastname.length >= 3 && this.state.updateprofile.lastname.length <= 40) {
      isValidlastname = true;
     } else {
       ToastAndroid.show("Last Name should have min 3 chars and max 40", ToastAndroid.SHORT);
       isValidlastname = false;
     }
   }

   if (this.state.updateprofile.birthdate == null || this.state.updateprofile.birthdate == '-') {
      isValidbirthdate = false;
    } else {
      isValidbirthdate = true;
    }

   if (this.state.updateprofile.gender == null) {
      isValidgender = false;
    } else {
      isValidgender = true;
    }

   if(this.state.updateprofile.email == "" ){
      isValidemail = true;
    }
    else{
        if(this.validateEmail(this.state.updateprofile.email)){
          isValidemail = true;
        }
        else{
          ToastAndroid.show("Invalid Email", ToastAndroid.SHORT);
          isValidemail = false;
        }
    }

   if(this.state.updateprofile.phone == "" ){
      isValidphone = false;
    }
    else{
      let reg =  /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s/0-9]*$/g;
      if(reg.test(this.state.updateprofile.phone) === true){
        if(this.state.updateprofile.phone.length ==10){
          isValidphone = true;
        }
        else{
          ToastAndroid.show("Mobile Number length should be 10 digits", ToastAndroid.SHORT);
          isValidphone = false;
        }
      }
      else{
          ToastAndroid.show("Mobile Number is not valid", ToastAndroid.SHORT);
          isValidphone = false;
      }
    }

    if (this.state.updateprofile.vehicalno == '') {
      isValidvehicalno = false;
     } else {
       if (this.state.updateprofile.vehicalno.length >= 5 && this.state.updateprofile.vehicalno.length <= 15) {
        isValidvehicalno = true;
       } else {
         ToastAndroid.show("Vehical No should have min 5 chars and max 15", ToastAndroid.SHORT);
         isValidvehicalno = false;
       }
     }

  if(isValidfirstname && 
    isValidlastname && 
    isValidbirthdate &&
    isValidgender && 
    isValidemail &&
    isValidphone &&
    isValidvehicalno) 
   {
      allInputsValidated = true;
   }
  else
   {
      ToastAndroid.show("Please check all fields", ToastAndroid.SHORT);
   }
   
   this.setState({ 
    isValidfirstname: isValidfirstname,
    errorMessagefirstname:!isValidfirstname,
    isValidlastname: isValidlastname,
    errorMessagelastname:!isValidlastname,
    isValidbirthdate: isValidbirthdate,
    errorMessagebirthdate:!isValidbirthdate,
    isValidgender: isValidgender,
    errorMessagegender:!isValidgender,
    isValidemail: isValidemail,
    errorMessageemail:!isValidemail,
    isValidphone: isValidphone,
    errorMessagephone:!isValidphone,
    isValidvehicalno: isValidvehicalno,
    errorMessagevehicalno:!isValidvehicalno,
    });

   return allInputsValidated;
 }

  render() {

    // let defaultShiftEndDateTime = new Date();
    // defaultShiftEndDateTime.setDate(defaultShiftEndDateTime.getDate());
    const {accountdetail}=this.props;
    const {button} =Resource_EN;
    let birthdate='-';
    if(this.state.updateprofile.birthdate!= null && this.state.updateprofile.birthdate!='0000-00-00')
    {
      birthdate=this.fFormatDateTime(this.state.updateprofile.birthdate, "date");
    }

    let profileImgPath = ApiConstants.SITEURL + ApiConstants.PROFILEIMGPATH + accountdetail[0].customerimage;

    return (
        <View style={globalStyles.innerContainer}>
            <StatusBar
              barStyle="light-content"
              // dark-content, light-content and default
              hidden={false}
              //To hide statusBar
              backgroundColor="#009846"
              //Background color of statusBar
              translucent={false}
              //allowing light, but not detailed shapes
              networkActivityIndicatorVisible={true}
            />
         
            <View style={PersonalDetailStyles.detailContainer}>
                <TouchableOpacity style={PersonalDetailStyles.backProfileIcon} onPress={() => { this.navigateToHome() }}>
                  <Icon name={"chevron-back"} style={PersonalDetailStyles.ProfileIcon} />
                  <Text style={PersonalDetailStyles.backprofile}>My Personal Information</Text>
                </TouchableOpacity>
                {
                  !this.state.editDetail &&
                  <TouchableOpacity style={PersonalDetailStyles.penIconBox} onPress={() => { this.onEdit() }}>
                    <Image style={PersonalDetailStyles.penIcon} source={require('../../assets/img/pen.png')} resizeMode="contain" />
                  </TouchableOpacity>
                }
                
                    <View style={PersonalDetailStyles.headrMenu}>
                      <View style={PersonalDetailStyles.containerImgBox}>
                        <View style={PersonalDetailStyles.userImgBox}>
                          {
                            accountdetail[0].customerimage != '' && accountdetail[0].customerimage != undefined &&
                            <Image style={PersonalDetailStyles.userImg} source={{ uri: profileImgPath }} resizeMode="contain" />
                          }

                          {
                            (accountdetail[0].customerimage == '' || accountdetail[0].customerimage == undefined) &&
                            <Image style={PersonalDetailStyles.userImg} source={require('../../assets/img/user_img.png')} resizeMode="contain" />
                          }
                            
                        </View>
                        {
                          this.state.editDetail &&
                          <TouchableOpacity style={PersonalDetailStyles.camImgContainer} onPress={this.navigateToEditProfileImage}>
                              <Image style={PersonalDetailStyles.camImg} source={require('../../assets/img/camara.png')} resizeMode="contain" />
                          </TouchableOpacity>
                        }
                      </View>
                    </View>
                    <View style={PersonalDetailStyles.profileDetailMenu}>
                    <ScrollView>
                      <View style={PersonalDetailStyles.profileDetail}>
                        <Text style={PersonalDetailStyles.profileDetailHead}>First Name:</Text>
                        <TextInput
                            editable={(this.state.editDetail) ? true : false}
                            style={[PersonalDetailStyles.profileDetailInfo,PersonalDetailStyles.textCase,
                              (this.state.editDetail) ?PersonalDetailStyles.borderInputWhite :PersonalDetailStyles.borderInput,
                              (this.state.isValidfirstname) ? '' : PersonalDetailStyles.BorderRed ]}
                            maxLength={30}
                            isvalidInput={this.state.isValidfirstname}
                            onEndEditing={() => this.validateInputs("firstname")}
                            placeholderTextColor='#ffffff'
                            cursorColor={'#ffffff'}
                            value={this.state.updateprofile.firstname}
                            onChangeText={value => this.onValueChange("firstname", value)}
                          />
                      </View>
                      <View style={PersonalDetailStyles.profileDetail}>
                        <Text style={PersonalDetailStyles.profileDetailHead}>Last Name:</Text>
                        <TextInput
                            editable={(this.state.editDetail) ? true : false}
                            style={[PersonalDetailStyles.profileDetailInfo,PersonalDetailStyles.textCase,
                              (this.state.editDetail) ?PersonalDetailStyles.borderInputWhite :PersonalDetailStyles.borderInput,
                              (this.state.isValidlastname) ? '' : PersonalDetailStyles.BorderRed ]}
                            maxLength={30}
                            isvalidInput={this.state.isValidlastname}
                            onEndEditing={() => this.validateInputs("lastname")}
                            placeholderTextColor='#ffffff'
                            cursorColor={'#ffffff'}
                            value={this.state.updateprofile.lastname}
                            onChangeText={value => this.onValueChange("lastname", value)}
                          />
                      </View>
                      <View style={PersonalDetailStyles.profileDetail}>
                        <Text style={PersonalDetailStyles.profileDetailHead}>Birthday:</Text>
                        <TouchableOpacity
                            style={[PersonalDetailStyles.profileDetailInfo,PersonalDetailStyles.textCase,
                              (this.state.editDetail) ?PersonalDetailStyles.borderInputWhite :PersonalDetailStyles.borderInput,
                              (this.state.isValidbirthdate) ? '' : PersonalDetailStyles.BorderRed ]}
                            onPress={() => {this.fRenderDatePicker("date", "isToDatePickerVisible",
                            (this.state.editDetail) ? "editable" : "");}}>
                            <TextInput
                                editable={false}
                                style={[PersonalDetailStyles.profileDetailInfo,PersonalDetailStyles.textCase,PersonalDetailStyles.borderInput ]}
                                placeholderTextColor='#ffffff'
                                cursorColor={'#ffffff'}
                                value={birthdate}
                                isvalidInput={this.state.isValidbirthdate}
                                onEndEditing={() => this.validateInputs("birthdate")}
                                onChangeText={value => this.onValueChange("birthdate", value)}
                            />
                        </TouchableOpacity>
                        {this.fRenderDateTimePicker(
                            this.state.isToDatePickerVisible,
                            "isToDatePickerVisible",
                            "date",
                            this.state.birthdatevalue,
                            // This is my function, which saves the selected value to my app's state. 
                            // YOU NEED TO REPLACE IT WITH SOMETHING RELEVANT TO YOUR APP. 
                            this.saveEndingDate,
                        )}
                      </View>
                      <View style={PersonalDetailStyles.profileDetail}>
                        <Text style={PersonalDetailStyles.profileDetailHead}>gender:</Text>
                        {/* <Text style={[PersonalDetailStyles.profileDetailInfo,PersonalDetailStyles.textCase]}>male</Text> */}
                        <TouchableOpacity onPress={this.toggleModal} style={PersonalDetailStyles.modalText} disabled={(this.state.editDetail) ? false : true}>
                          <TextInput
                              editable={false}
                              value={this.state.updateprofile.gender}
                              style={[PersonalDetailStyles.profileDetailInfo,PersonalDetailStyles.textCase,PersonalDetailStyles.widthInput,
                                (this.state.editDetail) ?PersonalDetailStyles.borderInputWhite :PersonalDetailStyles.borderInput,
                                (this.state.isValidgender) ? '' : PersonalDetailStyles.BorderRed ]}
                              placeholderTextColor='#ffffff'
                              value={this.state.updateprofile.gender}
                              isvalidInput={this.state.isValidgender}
                            />
                        </TouchableOpacity>
                        
                      </View>
                      <View style={PersonalDetailStyles.profileDetail}>
                        <Text style={PersonalDetailStyles.profileDetailHead}>Email:</Text>
                        {/* <Text style={[PersonalDetailStyles.profileDetailInfo]}>sahinpatel78@gmail.com</Text> */}
                        <TextInput
                            editable={(this.state.editDetail) ? true : false}
                            style={[PersonalDetailStyles.profileDetailInfo,PersonalDetailStyles.textCase,
                              (this.state.editDetail) ?PersonalDetailStyles.borderInputWhite :PersonalDetailStyles.borderInput,
                              (this.state.isValidemail) ? '' : PersonalDetailStyles.BorderRed ]}
                            maxLength={200}
                            isvalidInput={this.state.isValidemail}
                            onEndEditing={() => this.validateInputs("email")}
                            placeholderTextColor='#ffffff'
                            value={this.state.updateprofile.email}
                            onChangeText={value => this.onValueChange("email", value)}
                          />
                      </View>
                      <View style={PersonalDetailStyles.profileDetail}>
                        <Text style={PersonalDetailStyles.profileDetailHead}>Phone:</Text>
                        {/* <Text style={[PersonalDetailStyles.profileDetailInfo]}>sahinpatel78@gmail.com</Text> */}
                        <TextInput
                            editable={(this.state.editDetail) ? true : false}
                            style={[PersonalDetailStyles.profileDetailInfo,PersonalDetailStyles.textCase,
                              (this.state.editDetail) ? PersonalDetailStyles.borderInputWhite : PersonalDetailStyles.borderInput,
                              (this.state.isValidphone) ? '' : PersonalDetailStyles.BorderRed ]}
                            maxLength={10}
                            isvalidInput={this.state.isValidphone}
                            onEndEditing={() => this.validateInputs("phone")}
                            placeholderTextColor='#ffffff'
                            value={this.state.updateprofile.phone}
                            onChangeText={value => this.onValueChange("phone", value)}
                            keyboardType = "phone-pad"
                          />
                      </View>
                      <View style={PersonalDetailStyles.profileDetail}>
                        <Text style={PersonalDetailStyles.profileDetailHead}>Vehical No:</Text>
                        <TextInput
                            editable={(this.state.editDetail) ? true : false}
                            style={[PersonalDetailStyles.profileDetailInfo,PersonalDetailStyles.textCase,
                              (this.state.editDetail) ?PersonalDetailStyles.borderInputWhite :PersonalDetailStyles.borderInput,
                              (this.state.isValidvehicalno) ? '' : PersonalDetailStyles.BorderRed ]}
                            maxLength={15}
                            isvalidInput={this.state.isValidvehicalno}
                            onEndEditing={() => this.validateInputs("vehicalno")}
                            placeholderTextColor='#ffffff'
                            cursorColor={'#ffffff'}
                            value={this.state.updateprofile.vehicalno}
                            onChangeText={value => this.onValueChange("vehicalno", value)}
                          />
                      </View>
                        {
                          this.state.editDetail &&
                            <View style={PersonalDetailStyles.bottomBtn}>
                              <TouchableOpacity style={[PersonalDetailStyles.btnDefault,PersonalDetailStyles.btnDefaultYellow]} onPress={() => this.updatepersonaldetails()}>
                                <Text style={PersonalDetailStyles.btnDefaultText}>Update</Text>
                              </TouchableOpacity>
                              <TouchableOpacity style={[PersonalDetailStyles.btnDefault,PersonalDetailStyles.btnDefaultYellow]} onPress={() => this.cancelProfile()}>
                                <Text style={PersonalDetailStyles.btnDefaultText}>Cancel</Text>
                              </TouchableOpacity>
                            </View>
                        }
                    </ScrollView> 
                  </View>
            </View>
           

           <Modal onBackdropPress={() => this.closeModal()}
            isVisible={this.state.isModalVisible}
            onBackButtonPress={() => this.closeModal()}>
            <View style={[PersonalDetailStyles.modalDocument]}>
                  <View style={PersonalDetailStyles.listRadio}>
                  <Text style={PersonalDetailStyles.titleText}>Select Gender</Text>
                      <ListItem style={[PersonalDetailStyles.radioList]}
                          onPress={() => this.selectGender('male')}>
                          <Radio style={PersonalDetailStyles.radioListButton}
                            onPress={() => this.selectGender('male')}
                            selected={this.state.updateprofile.gender== 'male'}
                            color={"#bbb"} selectedColor={"#009846"} />
                          <Text style={[PersonalDetailStyles.radioListText, PersonalDetailStyles.radioTextWidth]}>Male</Text>
                      </ListItem>
                      <ListItem style={PersonalDetailStyles.radioList}
                          onPress={() => this.selectGender('female')}>
                          <Radio style={PersonalDetailStyles.radioListButton}
                            onPress={() => this.selectGender('female')}
                            selected={this.state.updateprofile.gender== 'female'} color={"#bbb"} selectedColor={"#009846"} />
                          <Text style={[PersonalDetailStyles.radioListText, PersonalDetailStyles.radioTextWidth]}>Female</Text>
                      </ListItem>
                  </View>
            </View>
          </Modal>
        </View>
      
    );
  }
}

PersonalDetailView.propTypes = {
  onLogin: PropTypes.func
};

export default PersonalDetailView;