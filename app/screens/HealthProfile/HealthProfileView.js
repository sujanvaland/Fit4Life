import React, { Component } from 'react';
import { View, Text, ScrollView, ImageBackground, Image, TouchableOpacity } from 'react-native';

import HealthProfilestyles from './styles';
import { SliderBox } from "react-native-image-slider-box";
import { Avatar, Button, IconButton, Card, Title, Paragraph, List } from 'react-native-paper';
import globalStyles from '../../assets/css/globalStyles';
import Icon from 'react-native-ionicons';
import SplashScreen from 'react-native-splash-screen';
import * as navigationActions from '../../actions/navigationActions';



class HealthProfileView extends Component {
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

    navigateToAddHealthProfile = () => {
        navigationActions.navigateToAddHealthProfile();
    }


    render() {
        const image = require('../../assets/img/img_loginback.png');
        let HealthProfileSer = [];
        if (this.props.Services) {
            HealthProfileSer = this.props.Services;
        }

        return (
            <View style={HealthProfilestyles.container}>
                <ImageBackground source={image} style={HealthProfilestyles.ImageBack} resizeMode="cover">
                    <ScrollView>
                        <View style={HealthProfilestyles.InnerContainer}>
                            <View style={[HealthProfilestyles.ContainerMargin, HealthProfilestyles.MarBtm20]}>
                                <View style={HealthProfilestyles.InnerTitle}>
                                    <View style={HealthProfilestyles.CustomerFeedLeft}>
                                        <Image source={require('../../assets/img/icon_healthttl.png')} resizeMode="contain" style={HealthProfilestyles.InnerTitleIcon} />
                                        <Text style={HealthProfilestyles.InnerTitleText}>Health Profile</Text>
                                    </View>
                                    <TouchableOpacity style={HealthProfilestyles.BtnPlus} onPress={() => this.navigateToAddHealthProfile()}>
                                        <Image source={require('../../assets/img/icon_plus.png')} resizeMode="contain" style={HealthProfilestyles.BtnPlusIcon} />
                                    </TouchableOpacity>
                                </View>

                                <View style={[HealthProfilestyles.WhiteBox, HealthProfilestyles.PadTopZero]}>
                                    <View style={HealthProfilestyles.HealthDetail}>
                                        <Text style={[HealthProfilestyles.DateText, globalStyles.FontRegular]}>01-04-2020</Text>
                                        <View style={HealthProfilestyles.LevelBox}>
                                            <Text style={[globalStyles.FontRegular, HealthProfilestyles.LevelBoxText]}>Oxigen levels </Text>
                                            <Text style={[globalStyles.FontRegular, HealthProfilestyles.LevelBoxText]}>85%</Text>
                                        </View>
                                        <View style={HealthProfilestyles.LevelBox}>
                                            <Text style={[globalStyles.FontRegular, HealthProfilestyles.LevelBoxText]}>Weight </Text>
                                            <Text style={[globalStyles.FontRegular, HealthProfilestyles.LevelBoxText]}>68kg</Text>
                                        </View>
                                    </View>
                                    <View style={HealthProfilestyles.HealthDetail}>
                                        <Text style={[HealthProfilestyles.DateText, globalStyles.FontRegular]}>28-04-2020</Text>
                                        <View style={HealthProfilestyles.LevelBox}>
                                            <Text style={[globalStyles.FontRegular, HealthProfilestyles.LevelBoxText]}>Oxigen levels </Text>
                                            <Text style={[globalStyles.FontRegular, HealthProfilestyles.LevelBoxText]}>85%</Text>
                                        </View>
                                        <View style={HealthProfilestyles.LevelBox}>
                                            <Text style={[globalStyles.FontRegular, HealthProfilestyles.LevelBoxText]}>Weight </Text>
                                            <Text style={[globalStyles.FontRegular, HealthProfilestyles.LevelBoxText]}>50kg</Text>
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

export default HealthProfileView;
