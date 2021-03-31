import React, { Component } from 'react';
import { View, Text, StatusBar, ScrollView, ImageBackground, Image, TouchableOpacity } from 'react-native';
import { get } from 'lodash';
import { OverlayActivityIndicatorElement } from "../../components";
import CordinatorDetailstyles from './styles';
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



class CordinatorDetailView extends Component {
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

    navigateToUserHealthProfileDetail = (obj) => {
        navigationActions.navigateToUserHealthProfileDetail(obj);
    };

    sendArrivalConfirmation = (eventAttendanceID) => {
        this.props.sendArrivalConfirmation(eventAttendanceID);
    };

    cancelArrivalConfirmation = (eventAttendanceID) => {
        this.props.cancelArrivalConfirmation(eventAttendanceID);
    };
    
    render() {
        const { lang } = this.state;
        let { loading, coordinatorEventDetail,eventAttendancesList } = this.props;
        let coordinatoreventdata = {};
        
        if (coordinatorEventDetail) {
            coordinatoreventdata = coordinatorEventDetail.length > 0 ? coordinatorEventDetail[0] : {};
        }

        //console.log(coordinatoreventdata);

        let eventAttendancesListArr = [];
        if(eventAttendancesList && eventAttendancesList != undefined && eventAttendancesList.length > 0){
            eventAttendancesList.map((item) =>{
                eventAttendancesListArr.push(
                    <View key={item.id} style={CordinatorDetailstyles.GrayBox}>
                        <View style={CordinatorDetailstyles.FlexGrayBox}>
                            <TouchableOpacity onPress={() => this.navigateToUserHealthProfileDetail({ userId: item.user.id})}>
                                <Text style={CordinatorDetailstyles.FlexGrayBoxText1}>{item.user.firstName} {item.user.lastName}</Text>
                            </TouchableOpacity>
                            { item.customerArrivalTime &&
                                <Text style={CordinatorDetailstyles.TimerBox}>{this.getParsedTime(item.customerArrivalTime)}</Text>
                            }
                        </View>
                        <View style={CordinatorDetailstyles.TouchPinBox}>
                            {
                                item.fileUrl !=null &&
                                <View>
                                    <TouchableOpacity style={CordinatorDetailstyles.NewRoutineIcon}>
                                        <Image source={require('../../assets/img/icon_touchpin.png')} resizeMode='contain' style={CordinatorDetailstyles.TouchPin} />
                                    </TouchableOpacity>
                                    <Text style={CordinatorDetailstyles.NewRoutine}>{lang.NewRoutine}</Text>
                                </View>
                            }
                            { !item.customerArrivalTime &&
                                <TouchableOpacity style={CordinatorDetailstyles.ButtionMaron} onPress={() => this.sendArrivalConfirmation(item.id)}>
                                    <Text style={CordinatorDetailstyles.ButtonMaronText}>Register</Text>
                                </TouchableOpacity>
                            }

                            { item.customerArrivalTime &&
                                <TouchableOpacity style={CordinatorDetailstyles.ButtionMaron} onPress={() => this.cancelArrivalConfirmation(item.id)}>
                                    <Text style={CordinatorDetailstyles.ButtonMaronText}>Cancel</Text>
                                </TouchableOpacity>
                            }
                        </View>
                    </View>
                )
            });
        }

        const image = require('../../assets/img/img_loginback.png');
        const WATER_IMAGE = require('../../assets/img/water.png')

        return (
            <View style={CordinatorDetailstyles.container}>
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
                        <View style={CordinatorDetailstyles.InnerContainer}>

                            <View style={[CordinatorDetailstyles.FullWidthTitleBack, CordinatorDetailstyles.MarTop20]}>

                                <View style={[CordinatorDetailstyles.InnerTitle, CordinatorDetailstyles.MarTopzero]}>
                                    <View style={CordinatorDetailstyles.CordinatorDetailLeft}>
                                        <Image source={require('../../assets/images/icon_calendar.png')} resizeMode="contain" style={CordinatorDetailstyles.InnerTitleIcon} />
                                        {
                                            coordinatoreventdata.name &&
                                            <Text style={CordinatorDetailstyles.InnerTitleText}>{coordinatoreventdata.name}</Text>
                                        }
                                    </View>
                                    <Text style={CordinatorDetailstyles.ResultText}>{this.getParsedTime(coordinatoreventdata.startTime)} {this.getParsedDate(coordinatoreventdata.startTime)}</Text>
                                </View>
                                
                                {
                                    coordinatoreventdata.linkUrl &&
                                    <View style={[CordinatorDetailstyles.InnerTitle, CordinatorDetailstyles.MarTopzero]}>
                                        <View style={CordinatorDetailstyles.CordinatorDetailLeft}>
                                            <Image source={require('../../assets/img/icon_link.png')} resizeMode="contain" style={CordinatorDetailstyles.InnerTitleIcon} />
                                            <View style={CordinatorDetailstyles.LinkViewBox}>
                                                <Text style={CordinatorDetailstyles.InnerTitleText}>{lang.Link}</Text>
                                                <Text style={CordinatorDetailstyles.LinkTextBox}>{coordinatoreventdata.linkUrl}</Text>
                                            </View>
                                        </View>
                                        <TouchableOpacity style={CordinatorDetailstyles.BtnGo} onPress={ ()=> Linking.openURL(coordinatoreventdata.linkUrl) }>
                                            <Text style={CordinatorDetailstyles.BtnGotext}>{lang.Go}</Text>
                                        </TouchableOpacity>
                                    </View>
                                }

                                <View style={[CordinatorDetailstyles.InnerTitle, CordinatorDetailstyles.MarTopzero]}>
                                    <View style={CordinatorDetailstyles.CordinatorDetailLeft}>
                                        <Image source={require('../../assets/images/icon_calendar.png')} resizeMode="contain" style={CordinatorDetailstyles.InnerTitleIcon} />
                                        <Text style={CordinatorDetailstyles.InnerTitleText}>{lang.Assistants}</Text>
                                    </View>
                                    <View style={CordinatorDetailstyles.countPlus}>
                                        <Text style={CordinatorDetailstyles.ResultText}>{eventAttendancesListArr.length}/{coordinatoreventdata.capacity}</Text>
                                        <TouchableOpacity style={CordinatorDetailstyles.BtnPlus}>
                                            <Image source={require('../../assets/img/icon_plus.png')} resizeMode="contain" style={CordinatorDetailstyles.BtnPlusIcon} />
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </View>
                            {
                                eventAttendancesListArr.length > 0 &&
                                <View style={CordinatorDetailstyles.ContainerMargin}>
                                    <View style={CordinatorDetailstyles.WhiteBox}>
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

export default CordinatorDetailView;
