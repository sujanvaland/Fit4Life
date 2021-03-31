import React, { Component } from 'react';
import { View, Text, ScrollView, TouchableOpacity, ImageBackground, Image } from 'react-native';
import UserHealthProfilestyles from './Styles';
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



class UserHealthProfileView extends Component {
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
    const { userrolepersonalinformation, userplan, loading } = this.props;

    let personalinformationdata = {};
    if (userrolepersonalinformation) {
      personalinformationdata = userrolepersonalinformation.length > 0 ? userrolepersonalinformation[0] : {};
    }

    let userplandata = {};
    if (userplan) {
      userplandata = userplan.length > 0 ? userplan[0] : {};
    }


    return (
      <View style={UserHealthProfilestyles.container}>
        {
            get(loading, 'isLoading') && <OverlayActivityIndicatorElement />
        }
        <ImageBackground source={image} style={globalStyles.ImageBack} resizeMode="cover">

          <ScrollView>
            <View style={UserHealthProfilestyles.InnerContainer}>
              <View style={UserHealthProfilestyles.MyprofileBox}>
                {
                    (personalinformationdata.profilePictureURL == '' || personalinformationdata.profilePictureURL == undefined) &&
                    <View style={UserHealthProfilestyles.ProfileBox}>
                      <Image source={require('../../assets/img/img_avtar.jpg')} resizeMode="contain" style={UserHealthProfilestyles.ProfilePic} />
                    </View>
                }
                {
                    (personalinformationdata.profilePictureURL != '' && personalinformationdata.profilePictureURL != undefined) &&
                    <View style={NavStyles.ProfilePic}>
                        <Image source={{ uri: personalinformationdata.profilePictureURL }} resizeMode="contain" style={NavStyles.PrifileImage} />
                    </View>
                }
                <View style={UserHealthProfilestyles.ProfileDetail}>
                  <Text style={[UserHealthProfilestyles.NameBox, globalStyles.FontRegular]}>{personalinformationdata.user?.firstName} {personalinformationdata.user?.lastName}</Text>
                  {/* <Text style={[UserHealthProfilestyles.LocationBox, globalStyles.FontRegular]}>San Francisco, CA</Text> */}
                </View>
              </View>
              <View style={[UserHealthProfilestyles.ContainerMargin]}>
                <View style={UserHealthProfilestyles.WhiteBox}>
                  <View style={UserHealthProfilestyles.ProfileContactdetal}>
                    <Image source={require('../../assets/img/icon_email.png')} resizeMode="contain" style={UserHealthProfilestyles.IconAddress} />
                    <Text style={[UserHealthProfilestyles.EmailText, globalStyles.FontRegular]}>{personalinformationdata.user?.email}</Text>
                  </View>
                  <View style={UserHealthProfilestyles.ProfileContactdetal}>
                    <Image source={require('../../assets/img/icon_phone.png')} resizeMode="contain" style={UserHealthProfilestyles.IconAddress} />
                    <Text style={[UserHealthProfilestyles.EmailText, globalStyles.FontRegular]}>{personalinformationdata.phoneNumber}</Text>
                  </View>
                  <View style={UserHealthProfilestyles.ProfileContactdetal}>
                    <Image source={require('../../assets/img/icon_address.png')} resizeMode="contain" style={UserHealthProfilestyles.IconAddress} />
                    <Text style={[UserHealthProfilestyles.EmailTex, globalStyles.FontRegular]}>{personalinformationdata.address}</Text>
                  </View>

                  {userplan?.length > 0 &&
                    <View style={UserHealthProfilestyles.CarBbox}>
                      <Text style={UserHealthProfilestyles.CardTitle, globalStyles.FontBold, {textTransform: 'capitalize'}}>{userplandata.plan.name}</Text>
                      <Text style={UserHealthProfilestyles.CardNumber}>{this.getParsedDate(userplandata.startDate)} to {this.getParsedDate(userplandata.expirationDate)}</Text>
                    </View>
                  }
                </View>
              </View>
              
              <View style={[UserHealthProfilestyles.FullWidthTitleBack]}>
                <View style={[UserHealthProfilestyles.InnerTitle, UserHealthProfilestyles.MarTopzero]}>
                  <View style={UserHealthProfilestyles.CustomerFeedLeft}>
                    <Image source={require('../../assets/images/icon_calendar.png')} resizeMode="contain" style={UserHealthProfilestyles.InnerTitleIcon} />
                    <Text style={UserHealthProfilestyles.InnerTitleText}>{lang.HealthProfile}</Text>
                  </View>
                  <TouchableOpacity style={UserHealthProfilestyles.AddBtn} onPress={() => this.navigateToAddHealthProfile()}>
                    <Text style={UserHealthProfilestyles.AddBtnText}>+ {lang.Add}</Text>
                  </TouchableOpacity>
                </View>
              </View>

              <View style={UserHealthProfilestyles.Spacer}></View>

              
                <View style={[UserHealthProfilestyles.FullWidthTitleBack, UserHealthProfilestyles.PadTop5]}>
                  <View style={[UserHealthProfilestyles.InnerTitle, UserHealthProfilestyles.MarTopzero]}>
                    <View style={UserHealthProfilestyles.CustomerFeedLeft}>

                      <Image source={require('../../assets/images/icon_calendar.png')} resizeMode="contain" style={UserHealthProfilestyles.InnerTitleIcon} />
                      <View>
                        <Text style={[UserHealthProfilestyles.InnerTitleText, UserHealthProfilestyles.FullwidthBox]}>{lang.Commnets}</Text>
                        <Text style={[UserHealthProfilestyles.ResultText, UserHealthProfilestyles.Fnt12]}>211 {lang.Result}</Text>
                      </View>
                    </View>
                    <TouchableOpacity style={UserHealthProfilestyles.AddBtn}>
                      <Text style={UserHealthProfilestyles.AddBtnText}>+ {lang.Add}</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              
              
                <View style={[UserHealthProfilestyles.ContainerMargin]}>
                  <View style={UserHealthProfilestyles.WhiteBox}>
                    <Text style={UserHealthProfilestyles.EventTitle}>{lang.Coordinatorname}: Frank Doe</Text>
                    <Text style={UserHealthProfilestyles.EventLocation}>Exercise and physical activity can be classified into
                    four categories: endurance, strength, flexibility, and balance.</Text>
                    <Text style={UserHealthProfilestyles.DateText}>Morning 09/11/2020</Text>
                  </View>
                </View>

            </View>

          </ScrollView>
        </ImageBackground>
      </View >
    );
  }
}

export default UserHealthProfileView;
