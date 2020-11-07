import React, { Component } from 'react';
import { View, Text, StatusBar, ScrollView, ImageBackground, Image, TouchableOpacity } from 'react-native';

import CustomerFeedstyles from './styles';
import { SliderBox } from "react-native-image-slider-box";
import { Avatar, Button, IconButton, Card, Title, Paragraph, List } from 'react-native-paper';
import globalStyles from '../../assets/css/globalStyles';
import Icon from 'react-native-ionicons';
import SplashScreen from 'react-native-splash-screen';
import * as navigationActions from '../../actions/navigationActions';
import { Rating, AirbnbRating } from 'react-native-ratings';



class CustomerFeedView extends Component {
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

        let CustomerFeedSer = [];
        if (this.props.Services) {
            CustomerFeedSer = this.props.Services;
        }
        const image = require('../../assets/img/img_loginback.png');
        const WATER_IMAGE = require('../../assets/img/water.png')

        return (
            <View style={CustomerFeedstyles.container}>
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
                        <View style={CustomerFeedstyles.InnerContainer}>
                            <View style={[CustomerFeedstyles.ContainerMargin, CustomerFeedstyles.MarBtm20]}>
                                <View style={CustomerFeedstyles.InnerTitle}>
                                    <View style={CustomerFeedstyles.CustomerFeedLeft}>
                                        <Image source={require('../../assets/images/icon_calendar.png')} resizeMode="contain" style={CustomerFeedstyles.InnerTitleIcon} />
                                        <Text style={CustomerFeedstyles.InnerTitleText}>Upcoming Events</Text>
                                    </View>
                                    <Text style={CustomerFeedstyles.ResultText}>211 Result</Text>
                                </View>

                                <View style={CustomerFeedstyles.WhiteBox}>
                                    <Text style={CustomerFeedstyles.DateText}>Morning 09/11/2020</Text>
                                    <Text style={CustomerFeedstyles.EventTitle}>Class Muscles</Text>
                                    <Text style={CustomerFeedstyles.EventLocation}>Coordinator: Cristian Arriagada</Text>
                                    <View style={CustomerFeedstyles.RedButtonBox}>
                                        <TouchableOpacity style={CustomerFeedstyles.RedButton}>
                                            <Text style={CustomerFeedstyles.BtnText}>Detail</Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </View>

                            <View style={[CustomerFeedstyles.FullWidthTitleBack, CustomerFeedstyles.MarTop20]}>

                                <View style={[CustomerFeedstyles.InnerTitle, CustomerFeedstyles.MarTopzero]}>
                                    <View style={CustomerFeedstyles.CustomerFeedLeft}>
                                        <Image source={require('../../assets/images/icon_calendar.png')} resizeMode="contain" style={CustomerFeedstyles.InnerTitleIcon} />
                                        <Text style={CustomerFeedstyles.InnerTitleText}>Last Events</Text>
                                    </View>
                                    <Text style={CustomerFeedstyles.ResultText}>211 Result</Text>
                                </View>
                            </View>
                            <View style={CustomerFeedstyles.ContainerMargin}>
                                <View style={CustomerFeedstyles.WhiteBox}>
                                    <Text style={CustomerFeedstyles.LastEventText}>Yesterday, 18:00 06/11/2020{'\n'}
                                    Body building Class{'\n'}
                                        Arrive time : 18:14</Text>
                                    <View style={CustomerFeedstyles.RatingBox}>
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
                                    <Text style={CustomerFeedstyles.LastEventText}>Without Qualifications</Text>


                                </View>


                                <View style={CustomerFeedstyles.WhiteBox}>
                                    <Text style={CustomerFeedstyles.LastEventText}>Today, 09:30 06/11/2020{'\n'}
                                    Running Class{'\n'}
                                       Note Arrive</Text>
                                    <View style={CustomerFeedstyles.RatingBox}>
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
                                    <Text style={CustomerFeedstyles.LastEventText}>Without Qualifications</Text>


                                </View>
                            </View>

                        </View>
                    </ScrollView>
                </ImageBackground>
            </View >
        );
    }
}

export default CustomerFeedView;
