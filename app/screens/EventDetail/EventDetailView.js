import React, { Component } from 'react';
import { View, Text, StatusBar, ScrollView, ImageBackground, Image, TouchableOpacity } from 'react-native';
import { get } from 'lodash';
import { OverlayActivityIndicatorElement } from "../../components";
import EventDetailstyles from './styles';
import { SliderBox } from "react-native-image-slider-box";
import { Avatar, Button, IconButton, Card, Title, Paragraph, List } from 'react-native-paper';
import globalStyles from '../../assets/css/globalStyles';
import Icon from 'react-native-ionicons';
import SplashScreen from 'react-native-splash-screen';
import * as navigationActions from '../../actions/navigationActions';
import { Rating, AirbnbRating } from 'react-native-ratings';
import PropTypes from 'prop-types';



class EventDetailView extends Component {
    constructor(props) {
        super(props);
        //Filled Star. You can also give the path from local
        this.Star = 'https://raw.githubusercontent.com/AboutReact/sampleresource/master/star_filled.png';
        //Empty Star. You can also give the path from local
        this.Star_With_Border = 'https://raw.githubusercontent.com/AboutReact/sampleresource/master/star_corner.png';
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
    ratingCompleted(rating) {
        console.log("Rating is: " + rating)
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

    render() {

        const { eventdetail,loading } = this.props;
        let eventdata = {};
        if (eventdetail) {
        eventdata = eventdetail.length > 0 ? eventdetail[0] : {};
        }

        console.log(eventdata);
        
        const image = require('../../assets/img/img_loginback.png');
        const WATER_IMAGE = require('../../assets/img/water.png');

        return (
            <View style={EventDetailstyles.container}>
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
                        <View style={EventDetailstyles.InnerContainer}>
                            <View style={[EventDetailstyles.ContainerMargin, EventDetailstyles.MarBtm20]}>
                                <View style={EventDetailstyles.WhiteBox}>
                                    <Text style={EventDetailstyles.DateText}>{this.getParsedDate(eventdata.event.startTime)}</Text>
                                    <Text style={EventDetailstyles.EventTitle}>{eventdata.event.name}</Text>
                                    <Text style={EventDetailstyles.EventLocation}>Coordinator: {eventdata.event.coordinator.firstName} {eventdata.event.coordinator.lastName}</Text>
                                </View>
                            </View>
                        </View>
                    </ScrollView>
                </ImageBackground>
            </View >
        );
    }
}

EventDetailView.propTypes = {
    onLogin: PropTypes.func
  };

export default EventDetailView;
