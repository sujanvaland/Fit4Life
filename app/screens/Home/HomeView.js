import React, { Component } from 'react';
import { View, Text, StatusBar, ScrollView, ImageBackground, Image, TouchableOpacity } from 'react-native';
import { Textarea } from 'native-base';
import { get } from 'lodash';
import { OverlayActivityIndicatorElement } from "../../components";
import Homestyles from './styles';
import { SliderBox } from "react-native-image-slider-box";
import { Avatar, Button, IconButton, Card, Title, Paragraph, List } from 'react-native-paper';
import globalStyles from '../../assets/css/globalStyles';
import Icon from 'react-native-ionicons';
import SplashScreen from 'react-native-splash-screen';
import * as navigationActions from '../../actions/navigationActions';
import Modal from "react-native-modal";
import Styles from '../../config/styles';



class HomeView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isModalVisible: false,
            showsendfeedbackForm: false,
            isValidRating: true,
            errorMessagesRating: false,
            isValidSendFeedback: true,
            errorMessagesSendFeedback: false,
            postSendFeedback: {
              eventAttendanceID:'',
              Default_Rating: 0,
              Max_Rating: 5,
              message: ''
            }
        }

        //Filled Star. You can also give the path from local
        this.Star = 'https://raw.githubusercontent.com/AboutReact/sampleresource/master/star_filled.png';
        //Empty Star. You can also give the path from local
        this.Star_With_Border = 'https://raw.githubusercontent.com/AboutReact/sampleresource/master/star_corner.png';
    }


    componentDidMount() {
        SplashScreen.hide();

    }

    navigateToEventDetail = (obj) => {
      //console.log(this.props.accountdetail.authorities);
      if(this.props.accountdetail.authorities[0]=="ROLE_USER")
      {
        navigationActions.navigateToCustomerDetailEvent(obj);
      }

      if(this.props.accountdetail.authorities[0]=="ROLE_CORDINATOR")
      {
        navigationActions.navigateToCordinatorDetailEvent(obj);
      }
    };

    ratingCompleted(rating) {
        console.log("Rating is: " + rating)
    }

    toggleModal(fieldName,eventAttendanceID) {
        this.setState({ isModalVisible: !this.state.isModalVisible });
        this.setState({ eventAttendanceID: eventAttendanceID });
        if (fieldName == 'Sendfeedbacktoevent') {
          this.setState({ showsendfeedbackForm: true });
          this.setState(prevState => ({
                postSendFeedback: {                   // object that we want to update
                ...prevState.postSendFeedback, // keep all other key-value pairs
                eventAttendanceID: eventAttendanceID
                }
            }), function () {
          });
        }
        else {
          this.setState({ showsendfeedbackForm: false });
        }
      }

    closeModal = () => {
    this.setState({ isModalVisible: false });
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

    getParsedTime(strDate) {//get date formate
        if (strDate != "") {
          var strSplitTime = String(strDate).split('T');
          var TimeArray = strSplitTime[1];
          var newstrSplitTime = String(TimeArray).split('Z');
          var newtimeArray = newstrSplitTime[0];
          return newtimeArray;
        }
        return "";
      }

    // Send Feedback Code Start

  onSendFeedbackValueChange = (fieldName, value) => {
    this.setState(prevState => ({
      postSendFeedback: {                   // object that we want to update
        ...prevState.postSendFeedback, // keep all other key-value pairs
        [fieldName]: value
      }
    }), function () {
    });
  }

  _onResetSendFeedbackForm = () => {
    this.setState({
      postSendFeedback: {
        Default_Rating: 0,
        Max_Rating: 5,
        message: ''
      }
    });
  };

  _onCancelSendFeedbackForm = () => {
    this.setState({
      postSendFeedback: {
        Default_Rating: 0,
        Max_Rating: 5,
        message: ''
      }
    });
    this.closeModal();
  };

  _onSendFeedback = (eventAttendanceID) => {
    //console.log(eventAttendanceID);
    if (eventAttendanceID != '') {
      if (this.validateSendFeedback()) {
        //console.log(this.state.postSendFeedback);
        this.props.sendFeedback(this.state.postSendFeedback, eventAttendanceID);
        this.setState({
          postSendFeedback: {
            Default_Rating: 0,
            Max_Rating: 5,
            message: ''
          }
        });
        this.closeModal();
      }
    }
  };

  validateSendFeedback = () => {
    //====== title ======//
    let isValidRating;
    let isValidSendFeedback;
    let allSendFeedbackInputsValidated;

    if (this.state.postSendFeedback.Default_Rating < 0) {
      isValidRating = false;
    }
    else {
      isValidRating = true;
    }

    if (this.state.postSendFeedback.message == '') {
      isValidSendFeedback = false;
    }
    else {
      isValidSendFeedback = true;
    }

    if (isValidSendFeedback && isValidRating) {
      allSendFeedbackInputsValidated = true;
    }
    else {
      ToastAndroid.show("Please check all fields", ToastAndroid.SHORT);
    }

    this.setState({
      isValidRating: isValidRating,
      errorMessagesRating: !isValidRating,
      isValidSendFeedback: isValidSendFeedback,
      errorMessagesSendFeedback: !isValidSendFeedback
    });

    return allSendFeedbackInputsValidated;
  }

  validateSendFeedbackInputs = (fieldName) => {
    if (fieldName == "Message") {
      if (this.state.postSendFeedback.message == "") {
        this.setState({ isValidSendFeedback: false });
      }
      else {
        this.setState({ isValidSendFeedback: true });
      }
    }
  };

  UpdateRating(key) {
    this.setState(prevState => ({
      postSendFeedback: {                   // object that we want to update
        ...prevState.postSendFeedback, // keep all other key-value pairs
        'Default_Rating': key
      }
    }), function () {
    });
  }

    render() {

        const { upcomingevents,pastevents,loading } = this.props;
        
        let upcomingeventsArr = [];
        let pasteventsArr = [];
        //console.log(upcomingevents);
        if(upcomingevents && upcomingevents != undefined && upcomingevents.length > 0){
            //filteredupcomingevents = upcomingevents;
            upcomingevents.sort((a, b) => a.startTime > b.startTime ? 1 : -1).slice(0,2).map((item) =>{
                upcomingeventsArr.push(
                    <View key={item.id} style={Homestyles.WhiteBox}>
                        <Text style={Homestyles.DateText}>{this.getParsedDate(item.startTime)}</Text>
                        <Text style={Homestyles.EventTitle}>{item.name}</Text>
                        <Text style={Homestyles.EventLocation}>Coordinator: {item.coordinator.firstName} {item.coordinator.lastName}</Text>
                        <View style={Homestyles.RedButtonBox}>
                            <TouchableOpacity style={Homestyles.RedButton} onPress={() => this.navigateToEventDetail({ eventid: item.id})}>
                                <Text style={Homestyles.BtnText}>Detail</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                );
            });
        }

        //console.log(pastevents);

        if(pastevents && pastevents != undefined && pastevents.length > 0){
            pastevents.map((item) =>{
                
                let default_rating=0;
                if(item.evaluation=="ONE")
                {
                    default_rating=1;
                }
                if(item.evaluation=="TWO")
                {
                    default_rating=2;
                }
                if(item.evaluation=="THREE")
                {
                    default_rating=3;
                }
                if(item.evaluation=="FOUR")
                {
                    default_rating=4;
                }
                if(item.evaluation=="FIVE")
                {
                    default_rating=5;
                }

                let React_Native_Rating_Bar = [];
                //Array to hold the filled or empty Stars
                for (var i = 1; i <= 5; i++) {
                    React_Native_Rating_Bar.push(
                        <TouchableOpacity
                        activeOpacity={0.7}
                        key={i}
                        >
                        <Image
                            style={Homestyles.StarImage}
                            source={
                            i <= default_rating
                                ? { uri: this.Star }
                                : { uri: this.Star_With_Border }
                            }
                        />
                        </TouchableOpacity>
                    );
                }

                pasteventsArr.push(
                    <View key={item.id} style={Homestyles.WhiteBox}>
                        <Text style={Homestyles.LastEventText}>{this.getParsedTime(item.event.startTime)} {this.getParsedDate(item.event.startTime)}{'\n'}
                        {item.event.name}{'\n'}
                            Arrive time : {this.getParsedTime(item.customerArrivalTime)}</Text>
                        {
                          item.evaluation!="" &&
                            <View>
                                <View style={Homestyles.RatingBox}>
                                    {React_Native_Rating_Bar}
                                    {/* <Rating
                                        type='custom'
                                        ratingImage={WATER_IMAGE}
                                        ratingColor='#c5353f'
                                        ratingBackgroundColor='#d9d9d9'
                                        ratingCount={5}
                                        imageSize={18}
                                        onFinishRating={this.ratingCompleted}
                                        style={{ paddingVertical: 8 }}
                                    /> */}
                                </View>
                                <View>
                                    <Text style={Homestyles.LastEventText}>{item.observation}</Text>
                                </View>
                            </View>
                        }
                        
                        {
                           (item.evaluation=="" || item.evaluation==null) &&
                            <View>
                                <TouchableOpacity style={Homestyles.RedButton} onPress={() => this.toggleModal("Sendfeedbacktoevent", item.id)}>
                                    <Text style={Homestyles.BtnText}>Get Evaluate</Text>
                                </TouchableOpacity>
                            </View>
                        }
                        
                    </View>

                )
            });
        }
        const image = require('../../assets/img/img_loginback.png');
        const WATER_IMAGE = require('../../assets/img/water.png');

        let React_Native_Rating_Bar = [];
        //Array to hold the filled or empty Stars
        for (var i = 1; i <= this.state.postSendFeedback.Max_Rating; i++) {
        React_Native_Rating_Bar.push(
            <TouchableOpacity
            activeOpacity={0.7}
            key={i}
            onPress={this.UpdateRating.bind(this, i)}>
            <Image
                style={Homestyles.StarImageforRate}
                source={
                i <= this.state.postSendFeedback.Default_Rating
                    ? { uri: this.Star }
                    : { uri: this.Star_With_Border }
                }
            />
            </TouchableOpacity>
        );
        }

        return (
            <View style={Homestyles.container}>
                {
                    get(loading, 'isLoading') && <OverlayActivityIndicatorElement />
                }
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

                <ImageBackground source={image} style={globalStyles.ImageBack} resizeMode="cover">

                    <ScrollView>
                        <View style={Homestyles.InnerContainer}>
                                
                            <View style={[Homestyles.ContainerMargin, Homestyles.MarBtm20]}>
                                <View style={Homestyles.InnerTitle}>
                                    <View style={Homestyles.HomeLeft}>
                                        <Image source={require('../../assets/images/icon_calendar.png')} resizeMode="contain" style={Homestyles.InnerTitleIcon} />
                                        <Text style={Homestyles.InnerTitleText}>Upcoming Events</Text>
                                    </View>
                                    <Text style={Homestyles.ResultText}>{upcomingevents.length} Result</Text>
                                </View>
                                {
                                    upcomingeventsArr
                                }
                            </View>

                            <View style={[Homestyles.FullWidthTitleBack, Homestyles.MarTop20]}>

                                <View style={[Homestyles.InnerTitle, Homestyles.MarTopzero]}>
                                    <View style={Homestyles.HomeLeft}>
                                        <Image source={require('../../assets/images/icon_calendar.png')} resizeMode="contain" style={Homestyles.InnerTitleIcon} />
                                        <Text style={Homestyles.InnerTitleText}>Last Events</Text>
                                    </View>
                                    <Text style={Homestyles.ResultText}>{pasteventsArr.length} Result</Text>
                                </View>
                            </View>
                            {
                                pasteventsArr.length > 0 &&
                                <View style={Homestyles.ContainerMargin}>
                                    {
                                        pasteventsArr
                                    }
                                </View>
                            }
                        </View>
                    </ScrollView>
                </ImageBackground>
                <Modal onBackdropPress={() => this.closeModal()}
                    isVisible={this.state.isModalVisible}
                    onBackButtonPress={() => this.closeModal()}>
                    <View style={[Homestyles.modalDocument]}>
                        <ScrollView>
                            {
                                this.state.showsendfeedbackForm &&
                                <View>
                                    <ScrollView>
                                        <View style={Homestyles.formSpace}>
                                            <View style={Homestyles.MainContainer}>
                                                <Text style={Homestyles.textStyle}>How was your experience with us</Text>
                                                <Text style={Homestyles.textStyleSmall}>Please Rate Us</Text>
                                                {/*View to hold our Stars*/}
                                                <View style={Homestyles.childView}>{React_Native_Rating_Bar}</View>
                                                <Text style={Homestyles.textStyle}>
                                                    {/*To show the rating selected*/}
                                                    {this.state.postSendFeedback.Default_Rating} / {this.state.postSendFeedback.Max_Rating}
                                                </Text>
                                            </View>
                                            <View style={Homestyles.formInput}>
                                                <Textarea placeholder="Write Observation"
                                                    style={[Styles.textInput, Styles.BorderGrey]}
                                                    style={[this.state.isValidSendFeedback ? Homestyles.BorderGrey : Homestyles.BorderRed, Homestyles.textInput]}
                                                    rowSpan={3}
                                                    value={this.state.postSendFeedback.message}
                                                    placeholderTextColor='#4A4A4A'
                                                    isvalidInput={this.state.isValidSendFeedback}
                                                    onEndEditing={() => this.validateSendFeedbackInputs("Message")}
                                                    onChangeText={value => this.onSendFeedbackValueChange("message", value)} />
                                            </View>
                                        </View>
                                        <View style={[Styles.buttonBox, Styles.flexContent, Styles.contactBtn, Homestyles.pad15]}>
                                            <TouchableOpacity activeOpacity={0.7} style={Homestyles.button}
                                                onPress={() => this._onSendFeedback(this.state.postSendFeedback.eventAttendanceID)}>
                                                <Text style={Styles.textBtn}>Send</Text>
                                            </TouchableOpacity>
                                            <TouchableOpacity style={[Styles.btnWidthOne, Styles.borderLeft, Homestyles.ButtonMain]}
                                                onPress={() => this._onResetSendFeedbackForm()}>
                                                <Text style={Homestyles.resetText}>Reset</Text>
                                            </TouchableOpacity>
                                            <TouchableOpacity style={[Styles.btnWidthOne, Styles.borderLeft, Homestyles.ButtonMainBlack]}
                                                onPress={() => this._onCancelSendFeedbackForm()}>
                                                <Text style={[Styles.textBtn, Homestyles.resetText]}>Cancel</Text>
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

export default HomeView;
