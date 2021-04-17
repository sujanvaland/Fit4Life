import React, { Component } from 'react';
import { View, Text, StatusBar, ScrollView, ImageBackground, Image, TouchableOpacity, Linking } from 'react-native';
import { get } from 'lodash';
import { OverlayActivityIndicatorElement } from "../../components";
import CustomerDetailEventstyles from './styles';
import { SliderBox } from "react-native-image-slider-box";
import { Avatar, Button, IconButton, Card, Title, Paragraph, List } from 'react-native-paper';
import globalStyles from '../../assets/css/globalStyles';
import Icon from 'react-native-ionicons';
import SplashScreen from 'react-native-splash-screen';
import * as navigationActions from '../../actions/navigationActions';
import { Rating, AirbnbRating } from 'react-native-ratings';
import AsyncStorage from '@react-native-community/async-storage';
import Resource_EN from '../../config/Resource_EN';
const { English,Spanish } = Resource_EN;
const downloadManager = require("react-native-simple-download-manager");



class CustomerDetailEventView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            lang:{},
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

    DownloadFile = (downloadurl) =>{
        //console.log(downloadurl);
        downloadManager.download(downloadurl)
        .then(response => {
          alert("Download success!");
        })
        .catch(err => {
          alert("Download failed!");
        });
    }

    getParsedDate(strDate) {
        //get date formate
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

    render() {
        const { lang } = this.state;
        let { loading, customerEventDetail,eventAttendancesList } = this.props;
        let customereventdata = {};
        
        if (customerEventDetail) {
            customereventdata = customerEventDetail.length > 0 ? customerEventDetail[0] : {};
        }

        let eventAttendancesListArr = [];
        if(eventAttendancesList && eventAttendancesList != undefined && eventAttendancesList.length > 0){
            eventAttendancesList.map((item) =>{
                eventAttendancesListArr.push(
                    <View key={item.id} style={CustomerDetailEventstyles.GrayBox}>
                        <View style={CustomerDetailEventstyles.FlexGrayBox}>
                            <Text style={CustomerDetailEventstyles.FlexGrayBoxText1}>{item.user.firstName} {item.user.lastName}</Text>
                            {
                                item.customerArrivalTime &&
                                <Text style={CustomerDetailEventstyles.TimerBox}>{this.getParsedTime(item.customerArrivalTime)}</Text>
                            }
                            
                        </View>

                        {
                            item.fileUrl !=null &&
                            <View style={CustomerDetailEventstyles.TouchPinBox}>
                                {/* <TouchableOpacity style={CustomerDetailEventstyles.NewRoutineIcon}>
                                    <Image source={require('../../assets/img/icon_touchpin.png')} resizeMode='contain' style={CustomerDetailEventstyles.TouchPin} />
                                </TouchableOpacity> */}
                                <TouchableOpacity onPress={() => this.DownloadFile(item.fileUrl)}>
                                    <Text style={CustomerDetailEventstyles.NewRoutine}>{lang.NewRoutine}</Text>
                                </TouchableOpacity>
                                
                            </View>
                        }
                        
                        
                    </View>
                )
            });
        }


        const image = require('../../assets/img/img_loginback.png');
        const WATER_IMAGE = require('../../assets/img/water.png')

        return (
            <View style={CustomerDetailEventstyles.container}>
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
                        <View style={CustomerDetailEventstyles.InnerContainer}>

                            <View style={[CustomerDetailEventstyles.FullWidthTitleBack, CustomerDetailEventstyles.MarTop20]}>

                                <View style={[CustomerDetailEventstyles.InnerTitle, CustomerDetailEventstyles.MarTopzero]}>
                                    <View style={CustomerDetailEventstyles.CustomerDetailEventLeft}>
                                        <Image source={require('../../assets/images/icon_calendar.png')} resizeMode="contain" style={CustomerDetailEventstyles.InnerTitleIcon} />
                                        {
                                            customereventdata.name &&
                                            <Text style={CustomerDetailEventstyles.InnerTitleText}>{customereventdata.name}</Text>
                                        }
                                    </View>
                                    <Text style={CustomerDetailEventstyles.ResultText}>{this.getParsedTime(customereventdata.startTime)} {this.getParsedDate(customereventdata.startTime)}</Text>
                                </View>
                                {
                                    customereventdata.linkUrl &&
                                    <View style={[CustomerDetailEventstyles.InnerTitle, CustomerDetailEventstyles.MarTopzero]}>
                                        <View style={CustomerDetailEventstyles.CustomerDetailEventLeft}>
                                            <Image source={require('../../assets/img/icon_link.png')} resizeMode="contain" style={CustomerDetailEventstyles.InnerTitleIcon} />
                                            <View style={CustomerDetailEventstyles.LinkViewBox}>
                                                <Text style={CustomerDetailEventstyles.InnerTitleText}>{lang.Link}</Text>
                                                <Text style={CustomerDetailEventstyles.LinkTextBox}>{customereventdata.linkUrl}</Text>
                                            </View>
                                        </View>
                                        <TouchableOpacity style={CustomerDetailEventstyles.BtnGo} onPress={ ()=> Linking.openURL(customereventdata.linkUrl) }>
                                            <Text style={CustomerDetailEventstyles.BtnGotext}>{lang.Go}</Text>
                                        </TouchableOpacity>
                                    </View>
                                }
                                
                                <View style={[CustomerDetailEventstyles.InnerTitle, CustomerDetailEventstyles.MarTopzero]}>
                                    <View style={CustomerDetailEventstyles.CustomerDetailEventLeft}>
                                        <Image source={require('../../assets/images/icon_calendar.png')} resizeMode="contain" style={CustomerDetailEventstyles.InnerTitleIcon} />
                                        <Text style={CustomerDetailEventstyles.InnerTitleText}>{lang?.Assistants}</Text>
                                    </View>
                                    <View style={CustomerDetailEventstyles.countPlus}>
                                        <Text style={CustomerDetailEventstyles.ResultText}>{eventAttendancesListArr.length}/{customereventdata.capacity}</Text>
                                        {/* <TouchableOpacity style={CustomerDetailEventstyles.BtnPlus} onPress={() => this.navigateToAddHealthProfile()}>
                                            <Image source={require('../../assets/img/icon_plus.png')} resizeMode="contain" style={CustomerDetailEventstyles.BtnPlusIcon} />
                                        </TouchableOpacity> */}
                                    </View>
                                </View>
                            </View>
                            {
                                eventAttendancesListArr.length > 0 &&
                                <View style={CustomerDetailEventstyles.ContainerMargin}>
                                    <View style={CustomerDetailEventstyles.WhiteBox}>
                                        {
                                            eventAttendancesListArr
                                        }
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

export default CustomerDetailEventView;
