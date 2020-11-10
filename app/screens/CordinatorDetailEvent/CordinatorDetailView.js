import React, { Component } from 'react';
import { View, Text, StatusBar, ScrollView, ImageBackground, Image, TouchableOpacity } from 'react-native';

import CordinatorDetailstyles from './styles';
import { SliderBox } from "react-native-image-slider-box";
import { Avatar, Button, IconButton, Card, Title, Paragraph, List } from 'react-native-paper';
import globalStyles from '../../assets/css/globalStyles';
import Icon from 'react-native-ionicons';
import SplashScreen from 'react-native-splash-screen';
import * as navigationActions from '../../actions/navigationActions';
import { Rating, AirbnbRating } from 'react-native-ratings';



class CordinatorDetailView extends Component {
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

        let CordinatorDetailSer = [];
        if (this.props.Services) {
            CordinatorDetailSer = this.props.Services;
        }
        const image = require('../../assets/img/img_loginback.png');
        const WATER_IMAGE = require('../../assets/img/water.png')

        return (
            <View style={CordinatorDetailstyles.container}>
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
                                        <Text style={CordinatorDetailstyles.InnerTitleText}>Running</Text>
                                    </View>
                                    <Text style={CordinatorDetailstyles.ResultText}>14:30 06/04/2020</Text>
                                </View>

                                <View style={[CordinatorDetailstyles.InnerTitle, CordinatorDetailstyles.MarTopzero]}>
                                    <View style={CordinatorDetailstyles.CordinatorDetailLeft}>
                                        <Image source={require('../../assets/img/icon_link.png')} resizeMode="contain" style={CordinatorDetailstyles.InnerTitleIcon} />
                                        <View style={CordinatorDetailstyles.LinkViewBox}>
                                            <Text style={CordinatorDetailstyles.InnerTitleText}>Link</Text>
                                            <Text style={CordinatorDetailstyles.LinkTextBox}>http://meet.com/ht ...</Text>
                                        </View>
                                    </View>
                                    <TouchableOpacity style={CordinatorDetailstyles.BtnGo}>
                                        <Text style={CordinatorDetailstyles.BtnGotext}>Go</Text>
                                    </TouchableOpacity>
                                </View>
                                <View style={[CordinatorDetailstyles.InnerTitle, CordinatorDetailstyles.MarTopzero]}>
                                    <View style={CordinatorDetailstyles.CordinatorDetailLeft}>
                                        <Image source={require('../../assets/images/icon_calendar.png')} resizeMode="contain" style={CordinatorDetailstyles.InnerTitleIcon} />
                                        <Text style={CordinatorDetailstyles.InnerTitleText}>Assistants</Text>
                                    </View>
                                    <View style={CordinatorDetailstyles.countPlus}>
                                        <Text style={CordinatorDetailstyles.ResultText}>5/10</Text>
                                        <TouchableOpacity style={CordinatorDetailstyles.BtnPlus} onPress={() => this.navigateToAddHealthProfile()}>
                                            <Image source={require('../../assets/img/icon_plus.png')} resizeMode="contain" style={CordinatorDetailstyles.BtnPlusIcon} />
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </View>
                            <View style={CordinatorDetailstyles.ContainerMargin}>
                                <View style={CordinatorDetailstyles.WhiteBox}>
                                    <View style={CordinatorDetailstyles.GrayBox}>
                                        <View style={CordinatorDetailstyles.FlexGrayBox}>
                                            <Text style={CordinatorDetailstyles.FlexGrayBoxText1}>John Doe</Text>
                                        </View>
                                        <View style={CordinatorDetailstyles.TouchPinBox}>
                                            <TouchableOpacity style={CordinatorDetailstyles.ButtionMaron}>
                                                <Text style={CordinatorDetailstyles.ButtonMaronText}>Register</Text>
                                            </TouchableOpacity>
                                        </View>
                                    </View>
                                    <View style={CordinatorDetailstyles.GrayBox}>
                                        <View style={CordinatorDetailstyles.FlexGrayBox}>
                                            <Text style={CordinatorDetailstyles.FlexGrayBoxText1}>John Doe</Text>
                                            <Text style={CordinatorDetailstyles.TimerBox}>15:06</Text>
                                        </View>
                                        <View style={CordinatorDetailstyles.TouchPinBox}>
                                            <TouchableOpacity style={CordinatorDetailstyles.NewRoutineIcon}>
                                                <Image source={require('../../assets/img/icon_touchpin.png')} resizeMode='contain' style={CordinatorDetailstyles.TouchPin} />
                                            </TouchableOpacity>
                                            <Text style={CordinatorDetailstyles.NewRoutine}>New Routine</Text>
                                            <TouchableOpacity style={CordinatorDetailstyles.ButtionMaron}>
                                                <Text style={CordinatorDetailstyles.ButtonMaronText}>Register</Text>
                                            </TouchableOpacity>
                                        </View>
                                    </View>

                                    <View style={CordinatorDetailstyles.GrayBox}>
                                        <View style={CordinatorDetailstyles.FlexGrayBox}>
                                            <Text style={CordinatorDetailstyles.FlexGrayBoxText1}>Martin Doe</Text>
                                            <Text style={CordinatorDetailstyles.TimerBox}>15:06</Text>
                                        </View>
                                        <View style={CordinatorDetailstyles.TouchPinBox}>
                                            <TouchableOpacity style={CordinatorDetailstyles.NewRoutineIcon}>
                                                <Image source={require('../../assets/img/icon_touchpin.png')} resizeMode='contain' style={CordinatorDetailstyles.TouchPin} />
                                            </TouchableOpacity>

                                            <TouchableOpacity style={CordinatorDetailstyles.ButtionMaron}>
                                                <Text style={CordinatorDetailstyles.ButtonMaronText}>Cancel</Text>
                                            </TouchableOpacity>
                                        </View>

                                    </View>

                                    <View style={CordinatorDetailstyles.GrayBox}>
                                        <View style={CordinatorDetailstyles.FlexGrayBox}>
                                            <Text style={CordinatorDetailstyles.FlexGrayBoxText1}>Emily Doe</Text>
                                            <Text style={CordinatorDetailstyles.TimerBox}>15:06</Text>
                                        </View>
                                        <View style={CordinatorDetailstyles.TouchPinBox}>
                                            <TouchableOpacity style={CordinatorDetailstyles.NewRoutineIcon}>
                                                <Image source={require('../../assets/img/icon_touchpin.png')} resizeMode='contain' style={CordinatorDetailstyles.TouchPin} />
                                            </TouchableOpacity>

                                            <TouchableOpacity style={CordinatorDetailstyles.ButtionMaron}>
                                                <Text style={CordinatorDetailstyles.ButtonMaronText}>Cancel</Text>
                                            </TouchableOpacity>
                                        </View>

                                    </View>

                                    <View style={CordinatorDetailstyles.GrayBox}>
                                        <View style={CordinatorDetailstyles.FlexGrayBox}>
                                            <Text style={CordinatorDetailstyles.FlexGrayBoxText1}>Frank Doe

</Text>
                                            <Text style={CordinatorDetailstyles.TimerBox}>15:06</Text>
                                        </View>
                                        <View style={CordinatorDetailstyles.TouchPinBox}>
                                            <TouchableOpacity style={CordinatorDetailstyles.NewRoutineIcon}>
                                                <Image source={require('../../assets/img/icon_touchpin.png')} resizeMode='contain' style={CordinatorDetailstyles.TouchPin} />
                                            </TouchableOpacity>
                                            <Text style={CordinatorDetailstyles.NewRoutine}>New Routine</Text>
                                            <TouchableOpacity style={CordinatorDetailstyles.ButtionMaron}>
                                                <Text style={CordinatorDetailstyles.ButtonMaronText}>Register</Text>
                                            </TouchableOpacity>
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

export default CordinatorDetailView;
