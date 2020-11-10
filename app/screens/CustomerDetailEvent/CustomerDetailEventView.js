import React, { Component } from 'react';
import { View, Text, StatusBar, ScrollView, ImageBackground, Image, TouchableOpacity } from 'react-native';

import CustomerDetailEventstyles from './styles';
import { SliderBox } from "react-native-image-slider-box";
import { Avatar, Button, IconButton, Card, Title, Paragraph, List } from 'react-native-paper';
import globalStyles from '../../assets/css/globalStyles';
import Icon from 'react-native-ionicons';
import SplashScreen from 'react-native-splash-screen';
import * as navigationActions from '../../actions/navigationActions';
import { Rating, AirbnbRating } from 'react-native-ratings';



class CustomerDetailEventView extends Component {
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

        let CustomerDetailEventSer = [];
        if (this.props.Services) {
            CustomerDetailEventSer = this.props.Services;
        }
        const image = require('../../assets/img/img_loginback.png');
        const WATER_IMAGE = require('../../assets/img/water.png')

        return (
            <View style={CustomerDetailEventstyles.container}>
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
                                        <Text style={CustomerDetailEventstyles.InnerTitleText}>Running</Text>
                                    </View>
                                    <Text style={CustomerDetailEventstyles.ResultText}>14:30 06/04/2020</Text>
                                </View>

                                <View style={[CustomerDetailEventstyles.InnerTitle, CustomerDetailEventstyles.MarTopzero]}>
                                    <View style={CustomerDetailEventstyles.CustomerDetailEventLeft}>
                                        <Image source={require('../../assets/img/icon_link.png')} resizeMode="contain" style={CustomerDetailEventstyles.InnerTitleIcon} />
                                        <View style={CustomerDetailEventstyles.LinkViewBox}>
                                            <Text style={CustomerDetailEventstyles.InnerTitleText}>Link</Text>
                                            <Text style={CustomerDetailEventstyles.LinkTextBox}>http://meet.com/ht ...</Text>
                                        </View>
                                    </View>
                                    <TouchableOpacity style={CustomerDetailEventstyles.BtnGo}>
                                        <Text style={CustomerDetailEventstyles.BtnGotext}>Go</Text>
                                    </TouchableOpacity>
                                </View>
                                <View style={[CustomerDetailEventstyles.InnerTitle, CustomerDetailEventstyles.MarTopzero]}>
                                    <View style={CustomerDetailEventstyles.CustomerDetailEventLeft}>
                                        <Image source={require('../../assets/images/icon_calendar.png')} resizeMode="contain" style={CustomerDetailEventstyles.InnerTitleIcon} />
                                        <Text style={CustomerDetailEventstyles.InnerTitleText}>Assistants</Text>
                                    </View>
                                    <View style={CustomerDetailEventstyles.countPlus}>
                                        <Text style={CustomerDetailEventstyles.ResultText}>5/10</Text>
                                        <TouchableOpacity style={CustomerDetailEventstyles.BtnPlus} onPress={() => this.navigateToAddHealthProfile()}>
                                            <Image source={require('../../assets/img/icon_plus.png')} resizeMode="contain" style={CustomerDetailEventstyles.BtnPlusIcon} />
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </View>
                            <View style={CustomerDetailEventstyles.ContainerMargin}>
                                <View style={CustomerDetailEventstyles.WhiteBox}>
                                    <View style={CustomerDetailEventstyles.GrayBox}>
                                        <View style={CustomerDetailEventstyles.FlexGrayBox}>
                                            <Text style={CustomerDetailEventstyles.FlexGrayBoxText1}>John Doe</Text>
                                        </View>
                                    </View>
                                    <View style={CustomerDetailEventstyles.GrayBox}>
                                        <View style={CustomerDetailEventstyles.FlexGrayBox}>
                                            <Text style={CustomerDetailEventstyles.FlexGrayBoxText1}>John Doe</Text>
                                            <Text style={CustomerDetailEventstyles.TimerBox}>15:06</Text>
                                        </View>
                                        <View style={CustomerDetailEventstyles.TouchPinBox}>
                                            <TouchableOpacity style={CustomerDetailEventstyles.NewRoutineIcon}>
                                                <Image source={require('../../assets/img/icon_touchpin.png')} resizeMode='contain' style={CustomerDetailEventstyles.TouchPin} />
                                            </TouchableOpacity>
                                            <Text style={CustomerDetailEventstyles.NewRoutine}>New Routine</Text>
                                        </View>
                                    </View>

                                    <View style={CustomerDetailEventstyles.GrayBox}>
                                        <View style={CustomerDetailEventstyles.FlexGrayBox}>
                                            <Text style={CustomerDetailEventstyles.FlexGrayBoxText1}>Martin Doe</Text>
                                            <Text style={CustomerDetailEventstyles.TimerBox}>15:06</Text>
                                        </View>

                                    </View>

                                    <View style={CustomerDetailEventstyles.GrayBox}>
                                        <View style={CustomerDetailEventstyles.FlexGrayBox}>
                                            <Text style={CustomerDetailEventstyles.FlexGrayBoxText1}>Emily Doe

</Text>
                                            <Text style={CustomerDetailEventstyles.TimerBox}>15:06</Text>
                                        </View>

                                    </View>

                                    <View style={CustomerDetailEventstyles.GrayBox}>
                                        <View style={CustomerDetailEventstyles.FlexGrayBox}>
                                            <Text style={CustomerDetailEventstyles.FlexGrayBoxText1}>Frank Doe

</Text>
                                            <Text style={CustomerDetailEventstyles.TimerBox}>15:06</Text>
                                        </View>

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

export default CustomerDetailEventView;
