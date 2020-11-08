import React, { Component } from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';

import Homestyles from './styles';
import { SliderBox } from "react-native-image-slider-box";
import { Avatar, Button, IconButton, Card, Title, Paragraph, List } from 'react-native-paper';
import globalStyles from '../../assets/css/globalStyles';
import Icon from 'react-native-ionicons';
import SplashScreen from 'react-native-splash-screen';
import * as navigationActions from '../../actions/navigationActions';



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


    render() {

        let HomeSer = [];
        if (this.props.Services) {
            // Homestyles = this.props.Services;
        }

        return (
            <View style={Homestyles.container}>

                <ScrollView>
                    <View>
                        <Text>Home</Text>



                    </View>
                </ScrollView>
            </View >
        );
    }
}

export default HomeView;
