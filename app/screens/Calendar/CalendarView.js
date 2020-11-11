import React, { Component } from 'react';
import { View, Text, ScrollView, TouchableOpacity, ImageBackground, Image } from 'react-native';

import Calendarstyles from './styles';
import { SliderBox } from "react-native-image-slider-box";
import { Avatar, Button, IconButton, Card, Title, Paragraph, List } from 'react-native-paper';
import globalStyles from '../../assets/css/globalStyles';
import Icon from 'react-native-ionicons';
import SplashScreen from 'react-native-splash-screen';
import * as navigationActions from '../../actions/navigationActions';
import { Calendar, CalendarList, Agenda } from 'react-native-calendars';



class CalendarView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            images: [
                // require('../../assets/images/img_slide1.jpg'),
                // require('../../assets/images/img_slide2.jpg'),
                // require('../../assets/images/img_slide3.jpg'),
            ]
        }
    }


    componentDidMount() {
        SplashScreen.hide();

    }

    navigateToAirVelocity = (id) => {
        // console.log(id);
        navigationActions.navigateToAirVelocity(id);
    };

    navigateToAboutus = () => {
        navigationActions.navigateToAboutus();
    }


    render() {
        const image = require('../../assets/img/img_loginback.png');
        let CalendarSer = [];
        if (this.props.Services) {
            CalendarSer = this.props.Services;
        }

        return (
            <View style={Calendarstyles.container}>
                <ImageBackground source={image} style={globalStyles.ImageBack} resizeMode="cover">
                    <ScrollView>
                        <View style={Calendarstyles.InnerContainer}>
                            <View style={[Calendarstyles.ContainerMargin, Calendarstyles.MarBtm20]}>
                                <View style={Calendarstyles.InnerTitle}>
                                    <View style={Calendarstyles.CustomerFeedLeft}>
                                        <Image source={require('../../assets/images/icon_calendar.png')} resizeMode="contain" style={Calendarstyles.InnerTitleIcon} />
                                        <Text style={Calendarstyles.InnerTitleText}>Calendar</Text>
                                    </View>

                                </View>

                                <View style={Calendarstyles.WhiteBox}>
                                    <Calendar
                                        disableTouchEvent={false}
                                        theme={{
                                            selectedDayBackgroundColor: '#db5059',
                                            selectedDayTextColor: '#ffffff',
                                            todayTextColor: '#db5059',
                                            arrowColor: '#db5059',
                                            textSectionTitleColor: '#949494',
                                            textMonthFontSize: 20,
                                            monthTextColor: '#5a5a5a',
                                        }}

                                    />
                                </View>
                            </View>

                            <View style={[Calendarstyles.FullWidthTitleBack, Calendarstyles.MarTop20]}>

                                <View style={[Calendarstyles.InnerTitle, Calendarstyles.MarTopzero]}>
                                    <View style={Calendarstyles.CustomerFeedLeft}>
                                        <Image source={require('../../assets/images/icon_calendar.png')} resizeMode="contain" style={Calendarstyles.InnerTitleIcon} />
                                        <Text style={Calendarstyles.InnerTitleText}>Last Events</Text>
                                    </View>
                                    <Text style={Calendarstyles.ResultText}>1 Result</Text>
                                </View>
                            </View>
                            <View style={[Calendarstyles.ContainerMargin, Calendarstyles.MarBtm20]}>
                                <View style={Calendarstyles.WhiteBox}>
                                    <Text style={Calendarstyles.DateText}>7/20</Text>
                                    <Text style={Calendarstyles.EventLocation}>Anteayer, 06/11/2020{'\n'}
                                    Clase de musculación{'\n'}
Cristian Arriagada</Text>
                                    <View style={Calendarstyles.RedButtonBox}>
                                        <TouchableOpacity style={Calendarstyles.RedButton}>
                                            <Text style={Calendarstyles.BtnText}>Subscribe</Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </View>

                        </View>
                    </ScrollView>
                </ImageBackground>
            </View >
        );
    }
}

export default CalendarView;
