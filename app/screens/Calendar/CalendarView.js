import React, { Component } from 'react';
import { View, Text, ScrollView, TouchableOpacity, ImageBackground, Image, Alert } from 'react-native';

import Calendarstyles from './styles';
import { SliderBox } from "react-native-image-slider-box";
import { Avatar, Button, IconButton, Card, Title, Paragraph, List } from 'react-native-paper';
import globalStyles from '../../assets/css/globalStyles';
import Icon from 'react-native-ionicons';
import SplashScreen from 'react-native-splash-screen';
import * as navigationActions from '../../actions/navigationActions';
import { Calendar, CalendarList, Agenda } from 'react-native-calendars';
import { get } from 'lodash';
import { OverlayActivityIndicatorElement } from "../../components";
import AsyncStorage from '@react-native-community/async-storage';
import Resource_EN from '../../config/Resource_EN';
const { English,Spanish } = Resource_EN;


class CalendarView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            mindate: new Date(),
            activedate: new Date(),
            lang:{},
            markedEvents:{},
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
        
        var dateObj = new Date();
        var month = dateObj.getUTCMonth() + 1;
        var year = dateObj.getUTCFullYear();

        this.getMonthEvents({year:year,month:month});
    }

    getMonthEvents(value){
        var year = value.year;
        var month = value.month;
        this.props.ongeteventsByMonth(month,year);

        const { monthevents } = this.props;
        if(monthevents && monthevents?.length > 0){
            const nextDays = monthevents.map(a => a.startTime);
            let markedEvents = {};
            nextDays.forEach((day) => {
                if(new Date(day) >= this.state.mindate){
                    markedEvents[day.split('T')[0]] = {
                        selected: true,
                        marked: true,
                        selectedColor: 'red'
                    };
                }
            });
            this.setState({markedEvents:markedEvents});
        }
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

    getYMDParsedDate(strDate) {//get date formate
        if (strDate != "") {
          var strSplitDate = String(strDate).split('T');
          var dateArray = strSplitDate[0].split('-');
          let date = dateArray[0] +"-" + dateArray[1] +"-" +dateArray[2] ;
          return date;
        }
        return "";
    }

    setsearchdate(day)
    {
      let timestamp = new Date(day.timestamp);
      this.setState({ activedate: timestamp });
      this.props.ongeteventsByDate(this.getYMDParsedDate(timestamp.toISOString()))
    }

    _onsubscribeNow = (EventId,lang) => {
        if(EventId != ""){
            Alert.alert(
              lang.SubscribeNow,
              lang.Subscribeevent,
              [
                { text: lang.Cancel, style: 'cancel' },
                { text: lang.Ok, onPress: () => { this.SubscribeNow(EventId); }, style: 'cancel' }
              ],
              { cancelable: false }
            );
        }
      };
      
      SubscribeNow = (EventId) => {
        if (EventId != "") {
            const { loadSubscribeNow } = this.props;
            loadSubscribeNow(EventId);
        }
      };

      navigateToEventDetail = (obj) => {
        if (this.props.userrole == "ROLE_USER") {
          navigationActions.navigateToCustomerDetailEvent(obj);
        }
    
        if (this.props.userrole == "ROLE_COORDINATOR") {
          navigationActions.navigateToCordinatorDetailEvent(obj);
        }
      };

    render() {
        const { lang } = this.state;
        const { scheduleevents,loading,dateevents,userrole } = this.props;
        
        let scheduleeventsArr = [];
        if(dateevents && dateevents != undefined && dateevents.length > 0){
            dateevents.map((item) =>{
                scheduleeventsArr.push(
                    <View key={item.id} style={Calendarstyles.WhiteBox}>
                        <Text style={Calendarstyles.DateText}>{item.attendances +"/" + item.capacity}</Text>
                        <Text style={Calendarstyles.EventLocation}>{item.startTime}{'\n'}
                        {item.name}</Text>
                        <Text style={Calendarstyles.EventLocation}>{lang.Coordinator}: {item.coordinatorFullName}</Text>
                        {
                            userrole == 'ROLE_USER' &&
                            <View style={Calendarstyles.RedButtonBox}>
                                <TouchableOpacity style={Calendarstyles.RedButton} onPress={() => this._onsubscribeNow(item.id,lang)}>
                                    <Text style={Calendarstyles.BtnText}>{lang.Subscribe}</Text>
                                </TouchableOpacity>
                            </View>
                        }
                        {
                            userrole != 'ROLE_USER' &&
                            <View style={Calendarstyles.RedButtonBox}>
                                <TouchableOpacity style={Calendarstyles.RedButton} onPress={() => this.navigateToEventDetail({ eventid: item.id})}>
                                    <Text style={Calendarstyles.BtnText}>{lang.Detail}</Text>
                                </TouchableOpacity>
                            </View>
                        }
                    </View>
                );
            });
        }

        const image = require('../../assets/img/img_loginback.png');
        return (
            <View style={Calendarstyles.container}>
                {
                    get(loading, 'isLoading') && <OverlayActivityIndicatorElement />
                }
                <ImageBackground source={image} style={globalStyles.ImageBack} resizeMode="cover">
                    <ScrollView>
                        <View style={Calendarstyles.InnerContainer}>
                            <View style={[Calendarstyles.ContainerMargin, Calendarstyles.MarBtm20]}>
                                <View style={Calendarstyles.InnerTitle}>
                                    <View style={Calendarstyles.CustomerFeedLeft}>
                                        <Image source={require('../../assets/images/icon_calendar.png')} resizeMode="contain" style={Calendarstyles.InnerTitleIcon} />
                                        <Text style={Calendarstyles.InnerTitleText}>{lang.Calendar}</Text>
                                    </View>
                                </View>

                                <View style={Calendarstyles.WhiteBox}>
                                    <Calendar
                                        minDate={this.state.mindate}
                                        disableTouchEvent={false}
                                        onMonthChange={(month) => this.getMonthEvents(month)}
                                        theme={{
                                            selectedDayBackgroundColor: '#db5059',
                                            selectedDayTextColor: '#ffffff',
                                            todayTextColor: '#db5059',
                                            arrowColor: '#db5059',
                                            textSectionTitleColor: '#949494',
                                            textMonthFontSize: 20,
                                            monthTextColor: '#5a5a5a',
                                        }}
                                        onDayPress={(day) => this.setsearchdate(day)}
                                        onDayLongPress={(day) => this.setsearchdate(day)}
                                        markedDates={this.state.markedEvents}
                                    />
                                </View>
                            </View>

                            <View style={[Calendarstyles.FullWidthTitleBack, Calendarstyles.MarTop20]}>

                                <View style={[Calendarstyles.InnerTitle, Calendarstyles.MarTopzero]}>
                                    <View style={Calendarstyles.CustomerFeedLeft}>
                                        <Image source={require('../../assets/images/icon_calendar.png')} resizeMode="contain" style={Calendarstyles.InnerTitleIcon} />
                                        <Text style={Calendarstyles.InnerTitleText}>{lang.ScheduleEvents}</Text>
                                    </View>
                                    <Text style={Calendarstyles.ResultText}>{scheduleeventsArr.length} {lang.Result}</Text>
                                </View>
                            </View>
                            <View style={[Calendarstyles.ContainerMargin, Calendarstyles.MarBtm20]}>
                                {
                                    scheduleeventsArr
                                }
                            </View>

                        </View>
                    </ScrollView>
                </ImageBackground>
            </View >
        );
    }
}

export default CalendarView;
