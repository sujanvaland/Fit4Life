import React, { Component, useState } from 'react';
import {View, Text, TextInput, Button, TouchableOpacity, TouchableHighlight, Picker, Image, ScrollView, FlatList, } from 'react-native';
import UpdateProfileStyles from './UpdateProfileStyles';
import globalStyles from '../../assets/css/globalStyles';
import * as navigationActions from '../../actions/navigationActions';
import { get } from 'lodash';
import Icon from 'react-native-ionicons';
import Modal from 'react-native-modal';
import { TextBoxElement, OverlayActivityIndicatorElement } from '../../components';
import Toast from 'react-native-simple-toast';

class UpdateProfileView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            postUpdateprofile: {
              firstname: "",
              lastname: "",
              address: "",
              phonenumber: "",
            },
            isvalidfirstname: true,
            isvalidlastname: true,
            isvalidaddress: true,
            isvalidphonenumber: true
          }


    }
    componentDidMount(){

        let { personalinformation,accountdetail } = this.props;
        let newpostUpdateprofile = this.state.postUpdateprofile;

        let personalinformationdata = {};
        if (personalinformation) {
          personalinformationdata = personalinformation.length > 0 ? personalinformation[0] : {};
        }
        
        if(personalinformationdata)
        {
            newpostUpdateprofile.firstname = personalinformationdata.user.firstName;
            newpostUpdateprofile.lastname = personalinformationdata.user.lastName;
            newpostUpdateprofile.address = personalinformationdata.address;
            newpostUpdateprofile.phonenumber = personalinformationdata.phoneNumber;
         
          this.setState({
            postUpdateprofile : newpostUpdateprofile
          });
        }
      }
   
    onValueChange = (fieldName, value) => {
        this.setState(prevState => ({
          postUpdateprofile: {                   // object that we want to update
            ...prevState.postUpdateprofile, // keep all other key-value pairs
            [fieldName]: value
          }
        }), function () {
        });
    
        if (this.state.firstname != ''  && this.state.lastname != ''  && this.state.address != ''  &&   this.state.phonenumber != '') {
          this.submitted = false;
        } else {
          this.submitted = true;
        }
      }

      
      

    validateInputs = (fieldName) => {

      if (fieldName == "firstname") {
        if (this.state.postUpdateprofile.firstname == "") {
          this.onValueChange("isvalidfirstname", false);
          this.setState({ isvalidfirstname: false });
        }
        else {
          if (this.state.postUpdateprofile.firstname.length >= 3 && this.state.postUpdateprofile.firstname.length <= 50) {
            this.onValueChange("isvalidfirstname", true);
            this.setState({ isvalidfirstname: true });
          }
          else {
            Toast.show("First Name should have min 3 chars and max 50", Toast.SHORT);
            this.onValueChange("isvalidfirstname", false);
            this.setState({ isvalidfirstname: false });
          }
        }
      }

      if (fieldName == "lastname") {
        if (this.state.postUpdateprofile.lastname == "") {
          this.onValueChange("isvalidlastname", false);
          this.setState({ isvalidlastname: false });
        }
        else {
          if (this.state.postUpdateprofile.lastname.length >= 3 && this.state.postUpdateprofile.lastname.length <= 50) {
            this.onValueChange("isvalidlastname", true);
            this.setState({ isvalidlastname: true });
          }
          else {
            Toast.show("Last Name should have min 3 chars and max 50", Toast.SHORT);
            this.onValueChange("isvalidlastname", false);
            this.setState({ isvalidlastname: false });
          }
        }
      }
      if (fieldName == "address") {
        if (this.state.postUpdateprofile.address == "") {
          this.onValueChange("isvalidaddress", false);
          this.setState({ isvalidaddress: false });
        }
        else {
          if (this.state.postUpdateprofile.address.length >= 3 && this.state.postUpdateprofile.address.length <= 50) {
            this.onValueChange("isvalidaddress", true);
            this.setState({ isvalidaddress: true });
          }
          else {
            Toast.show("Address should have min 3 chars and max 50", Toast.SHORT);
            this.onValueChange("isvalidaddress", false);
            this.setState({ isvalidaddress: false });
          }
        }
      }
    
      if (fieldName == "phonenumber") {
        if (this.state.postUpdateprofile.phonenumber == "") {
          this.onValueChange("isvalidphonenumber", false);
          this.setState({ isvalidphonenumber: false });
        }
        else {
          let reg = /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s/0-9]*$/g;
          if (reg.test(this.state.postUpdateprofile.phonenumber) === true) {
            if (this.state.postUpdateprofile.phonenumber.length >= 8 && this.state.postUpdateprofile.phonenumber.length <= 15) {
              this.onValueChange("isvalidphonenumber", true);
              this.setState({ isvalidphonenumber: true });
            }
            else {
              Toast.show("Phone Number length should be 8 to 15 digits", Toast.SHORT);
              this.onValueChange("isvalidphonenumber", false);
              this.setState({ isvalidphonenumber: false });
            }
          }
          else {
            Toast.show("Phone Number is not valid", Toast.SHORT);
            this.onValueChange("isvalidphonenumber", false);
            this.setState({ isvalidphonenumber: false });
          }
        }
      }
   };
  
  navigateToUpdateprofile = () => {
    if(this.validatePersonalDetail()){
      this.props.UpdateProfile(this.state.postUpdateprofile);
    }
  };

  validatePersonalDetail=()=>{
    //====== title ======//
   let isvalidfirstname;
   let isvalidlastname;
   let isvalidaddress;
   let isvalidphonenumber;
  

   let allInputsValidated;

   if (this.state.postUpdateprofile.firstname == '') {
    isvalidfirstname = false;
   } else {
     if (this.state.postUpdateprofile.firstname.length >= 3 && this.state.postUpdateprofile.firstname.length <= 50) {
      isvalidfirstname = true;
     } else {
       Toast.show("First Name should have min 3 chars and max 50", Toast.SHORT);
       isvalidfirstname = false;
     }
   }

   if (this.state.postUpdateprofile.lastname == '') {
    isvalidlastname = false;
   } else {
     if (this.state.postUpdateprofile.lastname.length >= 3 && this.state.postUpdateprofile.lastname.length <= 50) {
      isvalidlastname = true;
     } else {
       Toast.show("Last Name should have min 3 chars and max 50", Toast.SHORT);
       isvalidlastname = false;
     }
   }
   
   if (this.state.postUpdateprofile.address == '') {
    isvalidaddress = false;
   } else {
     if (this.state.postUpdateprofile.address.length >= 3 && this.state.postUpdateprofile.address.length <= 50) {
      isvalidaddress = true;
     } else {
       Toast.show("Address should have min 3 chars and max 50", Toast.SHORT);
       isvalidaddress = false;
     }
   }

   if(this.state.postUpdateprofile.phonenumber == "" ){
    isvalidphonenumber = false;
    }
    else{
      let reg =  /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s/0-9]*$/g;
      if(reg.test(this.state.postUpdateprofile.phonenumber) === true){
        if(this.state.postUpdateprofile.phonenumber.length >=8 &&this.state.postUpdateprofile.phonenumber.length <=15){
          isvalidphonenumber = true;
        }
        else{
          Toast.show("Phone Number have min 8 chars and max 15 digits", Toast.SHORT);
          isvalidphonenumber = false;
        }
      }
      else{
          Toast.show("Phone Number is not valid", Toast.SHORT);
          isvalidphonenumber = false;
      }
  }

  if(isvalidfirstname && isvalidlastname && isvalidaddress && 
    isvalidphonenumber ) 
   {
      allInputsValidated = true;
   }
  else
   {
      Toast.show("Please check all fields", Toast.SHORT);
   }
   
   this.setState({ 
    isvalidfirstname: isvalidfirstname,
    isvalidlastname: isvalidlastname,
    isvalidaddress: isvalidaddress,
    isvalidphonenumber: isvalidphonenumber,
    });

   return allInputsValidated;
 }
    
    render() {
        const{loading} = this.props;
        return (

            <View style={[UpdateProfileStyles.container, globalStyles.Pagecontainer]} >
              {get(loading, 'isLoading') && <OverlayActivityIndicatorElement />}
                <ScrollView>
                    <View style={[globalStyles.InnerBannerTitle, UpdateProfileStyles.InnerBannerImagebox]}>
                        {/* <Image source={require('../../assets/images/icon_ac.png')} style={ThankyouStyles.BannerImage} /> */}
                        <View style={{ height: 150, }}>

                        </View>
                    </View>
                    <View style={{ marginTop: -160, }}>

                    </View>
                    <View style={[UpdateProfileStyles.mainContainer]}>
                        <View style={[UpdateProfileStyles.ServicesOoptionBox, UpdateProfileStyles.ContianerHeight]}>
                            <View>
                                <View style={UpdateProfileStyles.FormArea}>
                                    <Text>Firstname</Text>
                                    <View style={UpdateProfileStyles.TextBoxContainer}>
                                       
                                        <TextBoxElement
                                        placeholder={'Firstname'}
                                        value={this.state.postUpdateprofile.firstname}
                                        onChangeText={value => this.onValueChange("firstname", value)}
                                        isvalidInput={this.state.isvalidfirstname}
                                        onEndEditing={() => this.validateInputs("firstname")}
                                        maxLength={50}
                                        />
                                    </View>
                                    <Text>Lastname</Text>
                                    <View style={UpdateProfileStyles.TextBoxContainer}>
                                       
                                        <TextBoxElement
                                        placeholder={'Lastname'}
                                        value={this.state.postUpdateprofile.lastname}
                                        onChangeText={value => this.onValueChange("lastname", value)}
                                        isvalidInput={this.state.isvalidlastname}
                                        onEndEditing={() => this.validateInputs("lastname")}
                                        maxLength={50}
                                        />
                                    </View>
                                    <Text>Address</Text>
                                    <View style={UpdateProfileStyles.TextBoxContainer}>
                                       
                                        <TextBoxElement
                                        placeholder={'Address'}
                                        value={this.state.postUpdateprofile.address}
                                        onChangeText={value => this.onValueChange("address", value)}
                                        isvalidInput={this.state.isvalidaddress}
                                        onEndEditing={() => this.validateInputs("address")}
                                        maxLength={50}
                                        />
                                    </View>
                                    <Text>Phone Number</Text>
                                    <View style={UpdateProfileStyles.TextBoxContainer}>
                                       <TextBoxElement
                                        placeholder={'Enter your phone no.'}
                                        value={this.state.postUpdateprofile.phonenumber}
                                        isvalidInput={this.state.isvalidphonenumber}
                                        onEndEditing={() => this.validateInputs("phonenumber")}
                                        onChangeText={value => this.onValueChange("phonenumber", value)}
                                        maxLength={15}
                                    />
                                    </View>

                                </View>

                            </View>
                        </View>
                    </View>
                </ScrollView>
                <View style={UpdateProfileStyles.BooknowBox}>
                    {/* <View>
                        <Text style={UpdateProfileStyles.BookPrice}>Total</Text>
                        <Text style={UpdateProfileStyles.BookAmount}>AED 97.00</Text>
                    </View> */}
                    <TouchableOpacity style={UpdateProfileStyles.BtnBooknow} onPress={() => this.navigateToUpdateprofile()}  disabled={this.submitted}>
                        <Text style={UpdateProfileStyles.BtnTtl}>Update</Text>
                    </TouchableOpacity>

                    
                </View>
            </View >
        );
    }
}

export default UpdateProfileView;
