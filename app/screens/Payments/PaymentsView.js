import React, { Component } from 'react';
import { View, Text, ScrollView, TouchableOpacity, ImageBackground, Image } from 'react-native';

import Paymentsstyles from './styles';
import { SliderBox } from "react-native-image-slider-box";
import { Avatar, Button, IconButton, Card, Title, Paragraph, List } from 'react-native-paper';
import globalStyles from '../../assets/css/globalStyles';
import Icon from 'react-native-ionicons';
import SplashScreen from 'react-native-splash-screen';
import * as navigationActions from '../../actions/navigationActions';



class PaymentsView extends Component {
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
        let PaymentsSer = [];
        if (this.props.Services) {
            PaymentsSer = this.props.Services;
        }

        return (
            <View style={Paymentsstyles.container}>
                <ImageBackground source={image} style={Paymentsstyles.ImageBack} resizeMode="cover">
                    <ScrollView>
                        <View style={Paymentsstyles.InnerContainer}>
                            <View style={[Paymentsstyles.ContainerMargin, Paymentsstyles.MarBtm20]}>
                                <View style={Paymentsstyles.InnerTitle}>
                                    <View style={Paymentsstyles.CustomerFeedLeft}>
                                        <Image source={require('../../assets/img/icon_payments.png')} resizeMode="contain" style={Paymentsstyles.InnerTitleIcon} />
                                        <Text style={Paymentsstyles.InnerTitleText}>Payments</Text>
                                    </View>
                                </View>

                                <View style={Paymentsstyles.RedBox}>
                                    <View style={Paymentsstyles.PaymentTitle}>
                                        <Text style={Paymentsstyles.PaymentTtlText}>Plan Gold</Text>
                                        <Text style={Paymentsstyles.PaymentPrice}>$29.000</Text>
                                    </View>
                                    <View style={Paymentsstyles.BanktransferDate}>
                                        <Text style={Paymentsstyles.Banktransfer}>Bank transfer </Text>
                                        <Text style={Paymentsstyles.DateToend}>01/05/2020  to  30/05/2020</Text>
                                    </View>
                                    <View style={Paymentsstyles.BottomDate}>
                                        <Text style={Paymentsstyles.BottomDateText}>06:00 08/04/2020</Text>
                                    </View>

                                </View>
                                <View style={Paymentsstyles.RedBox}>
                                    <View style={Paymentsstyles.PaymentTitle}>
                                        <Text style={Paymentsstyles.PaymentTtlText}>Plan Gold</Text>
                                        <Text style={Paymentsstyles.PaymentPrice}>$29.000</Text>
                                    </View>
                                    <View style={Paymentsstyles.BanktransferDate}>
                                        <Text style={Paymentsstyles.Banktransfer}>Bank transfer </Text>
                                        <Text style={Paymentsstyles.DateToend}>01/05/2020  to  30/05/2020</Text>
                                    </View>
                                    <View style={Paymentsstyles.BottomDate}>
                                        <Text style={Paymentsstyles.BottomDateText}>06:00 08/04/2020</Text>
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

export default PaymentsView;
