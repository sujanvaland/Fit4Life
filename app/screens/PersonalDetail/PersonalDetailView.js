import React, { Component } from 'react';
import { View, Text, ScrollView, TouchableOpacity, ImageBackground, Image } from 'react-native';
import PersonalDetailstyles from './Styles';
import { SliderBox } from "react-native-image-slider-box";
import { Avatar, Button, IconButton, Card, Title, Paragraph, List } from 'react-native-paper';
import globalStyles from '../../assets/css/globalStyles';
import Icon from 'react-native-ionicons';
import SplashScreen from 'react-native-splash-screen';
import * as navigationActions from '../../actions/navigationActions';
import { get } from 'lodash';
import { OverlayActivityIndicatorElement } from "../../components";
import AsyncStorage from '@react-native-community/async-storage';
import Resource_EN from '../../config/Resource_EN';
import NavStyles from '../../navigation/NavigationStyle';
const { English,Spanish } = Resource_EN;



class PersonalDetailView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lang:{},
      customerimage:"",
    }
  }

  async componentDidMount() {
    SplashScreen.hide();
    const language = await AsyncStorage.getItem('language');
    //console.log(language);
    if(language == "sp"){
      this.setState({lang:Spanish})
    }else{
      this.setState({lang:English})
    }
  }

  navigateToUpdateProfile = () => {
    navigationActions.navigateToUpdateProfile();
  }

  navigateToEditProfileImage = () => {
      navigationActions.navigateToEditProfileImage();
  }

  navigateToAddHealthProfile = () => {
      navigationActions.navigateToAddHealthProfile();
  }

  getParsedDate(strDate) {//get date formate
    if (strDate != "") {
      var dateArray = strDate.split('-');
      let date = dateArray[2] + "/" + dateArray[1] + "/" + dateArray[0];
      return date;
    }
    return "";
  }

  

  render() {

    const { lang } = this.state;
    const image = require('../../assets/img/img_loginback.png');
    const { accountdetail,personalinformation, userplan, loading } = this.props;

    let account_detail = accountdetail;
    if (!account_detail) {
      account_detail = {};
    } 

    let personalinformationdata = {};
    if (personalinformation) {
      personalinformationdata = personalinformation.length > 0 ? personalinformation[0] : {};
    }

    let userplandata = {};
    if (userplan) {
      userplandata = userplan.length > 0 ? userplan[0] : {};
    }


    return (
      <View style={PersonalDetailstyles.container}>
        {
            get(loading, 'isLoading') && <OverlayActivityIndicatorElement />
        }
        <ImageBackground source={image} style={globalStyles.ImageBack} resizeMode="cover">

          <ScrollView>
            <View style={PersonalDetailstyles.InnerContainer}>
              <View style={PersonalDetailstyles.MyprofileBox}>
                {
                    (personalinformationdata.profilePictureURL == '' || personalinformationdata.profilePictureURL == undefined) &&
                    <View style={PersonalDetailstyles.ProfileBox}>
                      <Image source={require('../../assets/img/img_avtar.jpg')} resizeMode="contain" style={PersonalDetailstyles.ProfilePic} />
                    </View>
                }
                {
                    (personalinformationdata.profilePictureURL != '' && personalinformationdata.profilePictureURL != undefined) &&
                    <View style={NavStyles.ProfilePic}>
                        <Image source={{ uri: personalinformationdata.profilePictureURL }} resizeMode="contain" style={NavStyles.PrifileImage} />
                    </View>
                }
                <View style={PersonalDetailstyles.ProfileDetail}>
                  <Text style={[PersonalDetailstyles.NameBox, globalStyles.FontRegular]}>{personalinformationdata?.user?.firstName} {personalinformationdata?.user?.lastName}</Text>
                  {/* <Text style={[PersonalDetailstyles.LocationBox, globalStyles.FontRegular]}>San Francisco, CA</Text> */}
                </View>

                <TouchableOpacity style={PersonalDetailstyles.btnEditProfile} onPress={this.navigateToEditProfileImage}>
                  <Image source={require('../../assets/img/icon_profileedit.png')} resizeMode="contain" style={PersonalDetailstyles.ProfileEdit} />
                </TouchableOpacity>
              </View>
              <View style={[PersonalDetailstyles.ContainerMargin]}>
                <View style={PersonalDetailstyles.WhiteBox}>
                  <TouchableOpacity style={PersonalDetailstyles.btnEditProfile} onPress={() => this.navigateToUpdateProfile()}>
                    <Image source={require('../../assets/img/icon_contactedit.png')} resizeMode="contain" style={[PersonalDetailstyles.ProfileEdit, PersonalDetailstyles.ProfileEditSmall]} />
                  </TouchableOpacity>
                  <View style={PersonalDetailstyles.ProfileContactdetal}>
                    <Image source={require('../../assets/img/icon_email.png')} resizeMode="contain" style={PersonalDetailstyles.IconAddress} />
                    <Text style={[PersonalDetailstyles.EmailText, globalStyles.FontRegular]}>{personalinformationdata?.user?.email}</Text>
                  </View>
                  <View style={PersonalDetailstyles.ProfileContactdetal}>
                    <Image source={require('../../assets/img/icon_phone.png')} resizeMode="contain" style={PersonalDetailstyles.IconAddress} />
                    <Text style={[PersonalDetailstyles.EmailText, globalStyles.FontRegular]}>{personalinformationdata.phoneNumber}</Text>
                  </View>
                  <View style={PersonalDetailstyles.ProfileContactdetal}>
                    <Image source={require('../../assets/img/icon_address.png')} resizeMode="contain" style={PersonalDetailstyles.IconAddress} />
                    <Text style={[PersonalDetailstyles.EmailTex, globalStyles.FontRegular]}>{personalinformationdata.address}</Text>
                  </View>

                  {userplan?.length > 0 &&
                    <View style={PersonalDetailstyles.CarBbox}>
                      <Text style={PersonalDetailstyles.CardTitle, globalStyles.FontBold, {textTransform: 'capitalize'}}>{userplandata.plan.name}</Text>
                      <Text style={PersonalDetailstyles.CardNumber}>{this.getParsedDate(userplandata.startDate)} to {this.getParsedDate(userplandata.expirationDate)}</Text>
                    </View>
                  }
                </View>
              </View>
              {/* { accountdetail.authorities[0]=="ROLE_COORDINATOR" &&
                <View style={[PersonalDetailstyles.FullWidthTitleBack]}>
                  <View style={[PersonalDetailstyles.InnerTitle, PersonalDetailstyles.MarTopzero]}>
                    <View style={PersonalDetailstyles.CustomerFeedLeft}>
                      <Image source={require('../../assets/images/icon_calendar.png')} resizeMode="contain" style={PersonalDetailstyles.InnerTitleIcon} />
                      <Text style={PersonalDetailstyles.InnerTitleText}>{lang.HealthProfile}</Text>
                    </View>
                    <TouchableOpacity style={PersonalDetailstyles.AddBtn} onPress={() => this.navigateToAddHealthProfile()}>
                      <Text style={PersonalDetailstyles.AddBtnText}>+ {lang.Add}</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              } */}

              <View style={PersonalDetailstyles.Spacer}></View>

              { accountdetail.authorities[0]=="ROLE_COORDINATOR" &&
                <View style={[PersonalDetailstyles.FullWidthTitleBack, PersonalDetailstyles.PadTop5]}>
                  <View style={[PersonalDetailstyles.InnerTitle, PersonalDetailstyles.MarTopzero]}>
                    <View style={PersonalDetailstyles.CustomerFeedLeft}>

                      <Image source={require('../../assets/images/icon_calendar.png')} resizeMode="contain" style={PersonalDetailstyles.InnerTitleIcon} />
                      <View>
                        <Text style={[PersonalDetailstyles.InnerTitleText, PersonalDetailstyles.FullwidthBox]}>{lang.Commnets}</Text>
                        <Text style={[PersonalDetailstyles.ResultText, PersonalDetailstyles.Fnt12]}>211 {lang.Result}</Text>
                      </View>
                    </View>
                    <TouchableOpacity style={PersonalDetailstyles.AddBtn}>
                      <Text style={PersonalDetailstyles.AddBtnText}>+ {lang.Add}</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              }
              
              { accountdetail.authorities[0]=="ROLE_COORDINATOR" &&
                <View style={[PersonalDetailstyles.ContainerMargin]}>
                  <View style={PersonalDetailstyles.WhiteBox}>
                    <Text style={PersonalDetailstyles.EventTitle}>{lang.Coordinatorname}: Frank Doe</Text>
                    <Text style={PersonalDetailstyles.EventLocation}>Exercise and physical activity can be classified into
                    four categories: endurance, strength, flexibility, and balance.</Text>
                    <Text style={PersonalDetailstyles.DateText}>Morning 09/11/2020</Text>
                  </View>
                </View>
              }
            </View>

          </ScrollView>
        </ImageBackground>
      </View >
    );
  }
}

export default PersonalDetailView;
