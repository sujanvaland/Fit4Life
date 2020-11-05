import React, { Component } from 'react';
import { View, Text, ScrollView, ImageBackground, Image, StatusBar, TouchableOpacity } from 'react-native';

import Contractsstyles from './styles';
import { SliderBox } from "react-native-image-slider-box";
import { Avatar, Button, IconButton, Card, Title, Paragraph, List } from 'react-native-paper';
import globalStyles from '../../assets/css/globalStyles';
import Icon from 'react-native-ionicons';
import SplashScreen from 'react-native-splash-screen';
import * as navigationActions from '../../actions/navigationActions';



class ContractsView extends Component {
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
        let ContractsSer = [];
        if (this.props.Services) {
            ContractsSer = this.props.Services;
        }

        return (
            <View style={Contractsstyles.container}>
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
                        <View style={Contractsstyles.InnerContainer}>
                            <View style={[Contractsstyles.ContainerMargin, Contractsstyles.MarBtm20]}>
                                <View style={Contractsstyles.InnerTitle}>
                                    <View style={Contractsstyles.HomeLeft}>
                                        <Image source={require('../../assets/images/img_contracts.png')} resizeMode="contain" style={Contractsstyles.InnerTitleIcon} />
                                        <Text style={Contractsstyles.InnerTitleText}>Contracts</Text>
                                    </View>

                                </View>

                                <View style={Contractsstyles.WhiteBox}>
                                    <Text style={[Contractsstyles.ContcatsTitle, globalStyles.FontLight]}>Health Conditions</Text>
                                    <Text style={[Contractsstyles.EventDesc, globalStyles.FontRegular]}>Description of contract</Text>

                                </View>
                            </View>

                        </View>
                    </ScrollView>
                </ImageBackground>
            </View >
        );
    }
}

export default ContractsView;
