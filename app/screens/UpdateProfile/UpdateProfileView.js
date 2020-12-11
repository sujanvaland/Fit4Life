import React, { Component, useState } from 'react';
import { ToastAndroid,View, Text, TextInput, Button, TouchableOpacity, TouchableHighlight, Picker, Image, ScrollView, FlatList, } from 'react-native';
import UpdateProfileStyles from './UpdateProfileStyles';
import globalStyles from '../../assets/css/globalStyles';
import * as navigationActions from '../../actions/navigationActions';
import { get } from 'lodash';
import Icon from 'react-native-ionicons';
import Modal from 'react-native-modal';
import { TextBoxElement, OverlayActivityIndicatorElement } from '../../components';






class UpdateProfileView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            postUpdateprofile: {
              address: "",
              phonenumber: "",
            },
            isvalidaddress: true,
            isvalidemail: true,
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
    
        if (this.state.address != ''  &&   this.state.phonenumber != '') {
          this.submitted = false;
        } else {
          this.submitted = true;
        }
      }

      
      

    validateInputs = (fieldName) => {
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
            ToastAndroid.show("First Name should have min 3 chars and max 50", ToastAndroid.SHORT);
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
              ToastAndroid.show("Phone Number length should be 8 to 15 digits", ToastAndroid.SHORT);
              this.onValueChange("isvalidphonenumber", false);
              this.setState({ isvalidphonenumber: false });
            }
          }
          else {
            ToastAndroid.show("Phone Number is not valid", ToastAndroid.SHORT);
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
   let isvalidaddress;
   let isvalidphonenumber;
  

   let allInputsValidated;
   
   if (this.state.postUpdateprofile.address == '') {
    isvalidaddress = false;
   } else {
     if (this.state.postUpdateprofile.address.length >= 3 && this.state.postUpdateprofile.address.length <= 50) {
      isvalidaddress = true;
     } else {
       ToastAndroid.show("First Name should have min 3 chars and max 50", ToastAndroid.SHORT);
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
          ToastAndroid.show("Phone Number have min 8 chars and max 15 digits", ToastAndroid.SHORT);
          isvalidphonenumber = false;
        }
      }
      else{
          ToastAndroid.show("Phone Number is not valid", ToastAndroid.SHORT);
          isvalidphonenumber = false;
      }
  }

  if(isvalidaddress && 
    isvalidphonenumber ) 
   {
      allInputsValidated = true;
   }
  else
   {
      ToastAndroid.show("Please check all fields", ToastAndroid.SHORT);
   }
   
   this.setState({ 
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
