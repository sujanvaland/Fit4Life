import React, { Component } from 'react';
import { View, Text, ScrollView, ImageBackground, Image, TouchableOpacity } from 'react-native';

import AddHealthProfilestyles from './styles';
import { SliderBox } from "react-native-image-slider-box";
import { Avatar, Button, IconButton, Card, Title, Paragraph, List } from 'react-native-paper';
import globalStyles from '../../assets/css/globalStyles';
import Icon from 'react-native-ionicons';
import SplashScreen from 'react-native-splash-screen';
import * as navigationActions from '../../actions/navigationActions';


import { TextBoxElement } from '../../components';



class AddHealthProfileView extends Component {
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
        let AddHealthProfileSer = [];
        if (this.props.Services) {
            AddHealthProfileSer = this.props.Services;
        }

        return (
            <View style={AddHealthProfilestyles.container}>
                <ImageBackground source={image} style={AddHealthProfilestyles.ImageBack} resizeMode="cover">
                    <ScrollView>
                        <View style={AddHealthProfilestyles.InnerContainer}>
                            <View style={[AddHealthProfilestyles.ContainerMargin, AddHealthProfilestyles.MarBtm20]}>
                                <View style={AddHealthProfilestyles.InnerTitle}>
                                    <View style={AddHealthProfilestyles.CustomerFeedLeft}>
                                        <Image source={require('../../assets/img/icon_healthttl.png')} resizeMode="contain" style={AddHealthProfilestyles.InnerTitleIcon} />
                                        <Text style={AddHealthProfilestyles.InnerTitleText}>Add Health Profile</Text>
                                    </View>
                                </View>

                                <View style={[AddHealthProfilestyles.WhiteBox, AddHealthProfilestyles.PadTopZero]}>
                                    <View style={AddHealthProfilestyles.HealthDetail}>
                                        <Text style={[AddHealthProfilestyles.DateText, globalStyles.FontRegular]}>01-04-2020</Text>
                                        <View>

                                        </View>
                                        <View style={AddHealthProfilestyles.textBoxContent}>
                                            <TextBoxElement
                                                placeholder={"Value"}
                                                value=''
                                                autoCapitalize={'none'}
                                                //onChangeText={value => this.updateState("username", value)}
                                                // isvalidInput={userDetails.isvalidusername}
                                                // onEndEditing={() => this.validateInputs("username")}
                                                maxLength={200}
                                            />
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

export default AddHealthProfileView;
