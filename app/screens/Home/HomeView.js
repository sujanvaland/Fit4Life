import React, { Component } from 'react';
import { View, Text, StatusBar, ScrollView, ImageBackground, Image, TouchableOpacity } from 'react-native';

import Homestyles from './styles';
import { SliderBox } from "react-native-image-slider-box";
import { Avatar, Button, IconButton, Card, Title, Paragraph, List } from 'react-native-paper';
import globalStyles from '../../assets/css/globalStyles';
import Icon from 'react-native-ionicons';
import SplashScreen from 'react-native-splash-screen';
import * as navigationActions from '../../actions/navigationActions';
import { Rating, AirbnbRating } from 'react-native-ratings';



class HomeView extends Component {
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
    ratingCompleted(rating) {
        console.log("Rating is: " + rating)
    }

    render() {

        let HomeSer = [];
        if (this.props.Services) {
            HomeSer = this.props.Services;
        }
        const image = require('../../assets/img/img_loginback.png');
        const WATER_IMAGE = require('../../assets/img/water.png')

        return (
            <View style={Homestyles.container}>
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
                                    <Text style={Homestyles.ResultText}>211 Result</Text>
                                </View>

                                <View style={Homestyles.WhiteBox}>
                                    <Text style={Homestyles.DateText}>Morning 09/11/2020</Text>
                                    <Text style={Homestyles.EventTitle}>Class Muscles</Text>
                                    <Text style={Homestyles.EventLocation}>Coordinator: Cristian Arriagada</Text>
                                    <View style={Homestyles.RedButtonBox}>
                                        <TouchableOpacity style={Homestyles.RedButton}>
                                            <Text style={Homestyles.BtnText}>Detail</Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </View>

                            <View style={[Homestyles.FullWidthTitleBack, Homestyles.MarTop20]}>

                                <View style={[Homestyles.InnerTitle, Homestyles.MarTopzero]}>
                                    <View style={Homestyles.HomeLeft}>
                                        <Image source={require('../../assets/images/icon_calendar.png')} resizeMode="contain" style={Homestyles.InnerTitleIcon} />
                                        <Text style={Homestyles.InnerTitleText}>Last Events</Text>
                                    </View>
                                    <Text style={Homestyles.ResultText}>211 Result</Text>
                                </View>
                            </View>
                            <View style={Homestyles.ContainerMargin}>
                                <View style={Homestyles.WhiteBox}>
                                    <Text style={Homestyles.LastEventText}>Yesterday, 18:00 06/11/2020{'\n'}
                                    Body building Class{'\n'}
                                        Arrive time : 18:14</Text>
                                    <View style={Homestyles.RatingBox}>
                                        <Rating
                                            type='custom'
                                            ratingImage={WATER_IMAGE}
                                            ratingColor='#c5353f'
                                            ratingBackgroundColor='#d9d9d9'
                                            ratingCount={5}
                                            imageSize={18}
                                            onFinishRating={this.ratingCompleted}
                                            style={{ paddingVertical: 8 }}
                                        />
                                    </View>
                                    <Text style={Homestyles.LastEventText}>Without Qualifications</Text>


                                </View>


                                <View style={Homestyles.WhiteBox}>
                                    <Text style={Homestyles.LastEventText}>Today, 09:30 06/11/2020{'\n'}
                                    Running Class{'\n'}
                                       Note Arrive</Text>
                                    <View style={Homestyles.RatingBox}>
                                        <Rating
                                            type='custom'
                                            ratingImage={WATER_IMAGE}
                                            ratingColor='#c5353f'
                                            ratingBackgroundColor='#d9d9d9'
                                            ratingCount={5}
                                            imageSize={18}
                                            onFinishRating={this.ratingCompleted}
                                            style={{ paddingVertical: 8 }}
                                        />
                                    </View>
                                    <Text style={Homestyles.LastEventText}>Without Qualifications</Text>


                                </View>
                            </View>

                        </View>
                    </ScrollView>
                </ImageBackground>
            </View >
        );
    }
}

export default HomeView;
