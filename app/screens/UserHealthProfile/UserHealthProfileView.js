import React, { Component } from 'react';
import { View, Text, ScrollView, TouchableOpacity, ImageBackground, Image } from 'react-native';
import { Textarea } from 'native-base';
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

import Modal from "react-native-modal";
import Styles from '../../config/styles';



class UserHealthProfileView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalVisible: false,
      showsendcommentForm: false,
      isValidSendComment: true,
      errorMessagesSendComment: false,
      postSendComment: {
        userId: '',
        message: ''
      },
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

  getCommentariesParsedDate(strDate) {//get date formate
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

  toggleModal(fieldName, userId) {
    this.setState({ isModalVisible: !this.state.isModalVisible });
    this.setState({ userId: userId });
    if (fieldName == 'Sendcommenttouser') {
      this.setState({ showsendcommentForm: true });
      this.setState(prevState => ({
        postSendComment: {                   // object that we want to update
          ...prevState.postSendComment, // keep all other key-value pairs
          userId: userId
        }
      }), function () {
      });
    }
    else {
      this.setState({ showsendcommentForm: false });
    }
  }

  closeModal = () => {
    this.setState({ isModalVisible: false });
  }

  // Send Comment Code Start

  onSendCommentValueChange = (fieldName, value) => {
    this.setState(prevState => ({
      postSendComment: {                   // object that we want to update
        ...prevState.postSendComment, // keep all other key-value pairs
        [fieldName]: value
      }
    }), function () {
    });
  }

  _onResetSendCommentForm = () => {
    this.setState({
      postSendComment: {
        message: ''
      }
    });
  };

  _onCancelSendCommentForm = () => {
    this.setState({
      postSendComment: {
        message: ''
      }
    });
    this.closeModal();
  };

  _onSendComment = (userId) => {
    //console.log(userId);
    if (userId != '') {
      if (this.validateSendComment()) {
        //console.log(this.state.postSendComment);
        this.props.sendComment(this.state.postSendComment, userId);
        this.setState({
          postSendComment: {
            message: ''
          }
        });
        this.closeModal();
      }
    }
  };

  validateSendComment = () => {
    //====== title ======//
    let isValidSendComment;
    let allSendCommentInputsValidated;

    if (this.state.postSendComment.message == '') {
      isValidSendComment = false;
    }
    else {
      isValidSendComment = true;
    }

    if (isValidSendComment) {
      allSendCommentInputsValidated = true;
    }
    else {
      Toast.show("Please check all fields", Toast.SHORT);
    }

    this.setState({
      isValidSendComment: isValidSendComment,
      errorMessagesSendComment: !isValidSendComment
    });

    return allSendCommentInputsValidated;
  }

  validateSendCommentInputs = (fieldName) => {
    if (fieldName == "Message") {
      if (this.state.postSendComment.message == "") {
        this.setState({ isValidSendComment: false });
      }
      else {
        this.setState({ isValidSendComment: true });
      }
    }
  };

  

  render() {

    const { lang } = this.state;
    const image = require('../../assets/img/img_loginback.png');
    const { userrolepersonalinformation, userplan, loading, usercommentaries } = this.props;
    //const { params } = this.props.navigation.state;
    //const userId = params ? params.userId : null;

    let personalinformationdata = {};
    if (userrolepersonalinformation) {
      personalinformationdata = userrolepersonalinformation.length > 0 ? userrolepersonalinformation[0] : {};
    }

    let userplandata = {};
    if (userplan) {
      userplandata = userplan.length > 0 ? userplan[0] : {};
    }

    let usercommentariesArr = [];
    if(usercommentaries && usercommentaries != undefined && usercommentaries.length > 0){
      usercommentaries.sort((a, b) => a.createdDate < b.createdDate ? 1 : -1).map((item) =>{
          usercommentariesArr.push(
              <View key={item.id} style={UserHealthProfilestyles.WhiteBox}>
                <Text style={UserHealthProfilestyles.EventTitle}>{lang.Coordinatorname}: {item.createdBy}</Text>
                <Text style={UserHealthProfilestyles.EventLocation}>{item.comment}</Text>
                <Text style={UserHealthProfilestyles.DateText}>{this.getCommentariesParsedDate(item.createdDate)}</Text>
              </View>
          );
      });
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
                        <Text style={[UserHealthProfilestyles.ResultText, UserHealthProfilestyles.Fnt12]}>{usercommentaries?.length} {lang.Result}</Text>
                      </View>
                    </View>
                    <TouchableOpacity style={UserHealthProfilestyles.AddBtn} onPress={() => this.toggleModal("Sendcommenttouser", personalinformationdata.user.id)}>
                      <Text style={UserHealthProfilestyles.AddBtnText}>+ {lang.Add}</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              
                
                <View style={[UserHealthProfilestyles.ContainerMargin]}>
                  {
                    usercommentariesArr
                  } 
                </View>

            </View>

          </ScrollView>
        </ImageBackground>
        <Modal onBackdropPress={() => this.closeModal()}
          isVisible={this.state.isModalVisible}
          onBackButtonPress={() => this.closeModal()}>
          <View style={[UserHealthProfilestyles.modalDocument]}>
            <ScrollView>
              {
                this.state.showsendcommentForm &&
                <View>
                  <ScrollView>
                    <View style={UserHealthProfilestyles.formSpace}>
                      <View style={UserHealthProfilestyles.formInput}>
                        <Textarea placeholder="Write Comment"
                          style={[Styles.textInput, Styles.BorderGrey]}
                          style={[this.state.isValidSendComment ? UserHealthProfilestyles.BorderGrey : UserHealthProfilestyles.BorderRed, UserHealthProfilestyles.textInput]}
                          rowSpan={3}
                          value={this.state.postSendComment.message}
                          placeholderTextColor='#4A4A4A'
                          isvalidInput={this.state.isValidSendComment}
                          onEndEditing={() => this.validateSendCommentInputs("Message")}
                          onChangeText={value => this.onSendCommentValueChange("message", value)} />
                      </View>
                    </View>
                    <View style={[Styles.buttonBox, Styles.flexContent, Styles.contactBtn, UserHealthProfilestyles.pad15]}>
                      <TouchableOpacity activeOpacity={0.7} style={UserHealthProfilestyles.button}
                        onPress={() => this._onSendComment(this.state.postSendComment.userId)}>
                        <Text style={Styles.textBtn}>{lang.Send}</Text>
                      </TouchableOpacity>
                      <TouchableOpacity style={[Styles.btnWidthOne, Styles.borderLeft, UserHealthProfilestyles.ButtonMain]}
                        onPress={() => this._onResetSendCommentForm()}>
                        <Text style={UserHealthProfilestyles.resetText}>{lang.Reset}</Text>
                      </TouchableOpacity>
                      <TouchableOpacity style={[Styles.btnWidthOne, Styles.borderLeft, UserHealthProfilestyles.ButtonMainBlack]}
                        onPress={() => this._onCancelSendCommentForm()}>
                        <Text style={[Styles.textBtn, UserHealthProfilestyles.resetText]}>{lang.Cancel}</Text>
                      </TouchableOpacity>
                    </View>
                  </ScrollView>
                </View>
              }
            </ScrollView>
          </View>
        </Modal>
      </View >
    );
  }
}

export default UserHealthProfileView;
