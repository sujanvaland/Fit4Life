import React, { Component } from 'react';
import { View, Text, ScrollView, TouchableOpacity, ImageBackground, Image } from 'react-native';
import { get } from 'lodash';
import { OverlayActivityIndicatorElement } from "../../components";
import CordinatorFeedstyles from './styles';
import { SliderBox } from "react-native-image-slider-box";
import { Avatar, Button, IconButton, Card, Title, Paragraph, List } from 'react-native-paper';
import globalStyles from '../../assets/css/globalStyles';
import Icon from 'react-native-ionicons';
import SplashScreen from 'react-native-splash-screen';
import * as navigationActions from '../../actions/navigationActions';



class CordinatorFeedView extends Component {
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
        const { loading } = this.props;
        // let CordinatorFeedSer = [];
        // if (this.props.Services) {
        //     CordinatorFeedSer = this.props.Services;
        // }

        return (
            <View style={CordinatorFeedstyles.container}>
                {
                    get(loading, 'isLoading') && <OverlayActivityIndicatorElement />
                }
                <ImageBackground source={image} style={globalStyles.ImageBack} resizeMode="cover">
                    <ScrollView>
                        <View style={CordinatorFeedstyles.InnerContainer}>
                            <View style={[CordinatorFeedstyles.ContainerMargin, CordinatorFeedstyles.MarBtm20]}>
                                <View style={CordinatorFeedstyles.InnerTitle}>
                                    <View style={CordinatorFeedstyles.CustomerFeedLeft}>
                                        <Image source={require('../../assets/images/icon_calendar.png')} resizeMode="contain" style={CordinatorFeedstyles.InnerTitleIcon} />
                                        <Text style={CordinatorFeedstyles.InnerTitleText}>Upcoming Events</Text>
                                    </View>
                                    <Text style={CordinatorFeedstyles.ResultText}>1 Result</Text>
                                </View>

                                <View style={CordinatorFeedstyles.WhiteBox}>
                                    <Text style={CordinatorFeedstyles.DateText}>Today,15:00 09/11/2020</Text>
                                    <Text style={CordinatorFeedstyles.EventTitle}>Muscles Class</Text>
                                    <Text style={CordinatorFeedstyles.EventLocation}>Coordinator: Cristian Arriagada</Text>
                                    <View style={CordinatorFeedstyles.RedButtonBox}>
                                        <TouchableOpacity style={CordinatorFeedstyles.RedButton}>
                                            <Text style={CordinatorFeedstyles.BtnText}>Detail</Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>

                                <View style={CordinatorFeedstyles.WhiteBox}>
                                    <Text style={CordinatorFeedstyles.DateText}>Tomorrow,15:00 09/11/2020</Text>
                                    <Text style={CordinatorFeedstyles.EventTitle}>Spinning Class</Text>
                                    <Text style={CordinatorFeedstyles.EventLocation}>Coordinator: Cristian Arriagada</Text>
                                    <View style={CordinatorFeedstyles.RedButtonBox}>
                                        <TouchableOpacity style={CordinatorFeedstyles.RedButton}>
                                            <Text style={CordinatorFeedstyles.BtnText}>Detail</Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </View>

                            <View style={[CordinatorFeedstyles.FullWidthTitleBack, CordinatorFeedstyles.MarTop20]}>

                                <View style={[CordinatorFeedstyles.InnerTitle, CordinatorFeedstyles.MarTopzero]}>
                                    <View style={CordinatorFeedstyles.CustomerFeedLeft}>
                                        <Image source={require('../../assets/images/icon_calendar.png')} resizeMode="contain" style={CordinatorFeedstyles.InnerTitleIcon} />
                                        <Text style={CordinatorFeedstyles.InnerTitleText}>Last Events</Text>
                                    </View>
                                    <Text style={CordinatorFeedstyles.ResultText}>3 Results </Text>
                                </View>
                            </View>
                            <View style={CordinatorFeedstyles.ContainerMargin}>
                                <View style={[CordinatorFeedstyles.WhiteBox, CordinatorFeedstyles.MarTop10]}>
                                    <View style={CordinatorFeedstyles.LastEventTop}>
                                        <Text style={CordinatorFeedstyles.LastEventText}>Last Week, 15:30 06/11/2020
                                    </Text>
                                        <View style={CordinatorFeedstyles.CountUser}>
                                            <Text style={CordinatorFeedstyles.CountBox}>5/10</Text>
                                            <Image source={require('../../assets/img/icon_eventdetail.png')} resizeMode="contain" style={CordinatorFeedstyles.EventUser} />
                                        </View>
                                    </View>
                                    <Text style={[CordinatorFeedstyles.EventTitle, CordinatorFeedstyles.MarTop5]}>Spinning Class</Text>
                                </View>
                                <View style={[CordinatorFeedstyles.WhiteBox, CordinatorFeedstyles.MarTop10]}>
                                    <View style={CordinatorFeedstyles.LastEventTop}>
                                        <Text style={CordinatorFeedstyles.LastEventText}>Yesterday, 15:30 06/11/2020
                                    </Text>
                                        <View style={CordinatorFeedstyles.CountUser}>
                                            <Text style={CordinatorFeedstyles.CountBox}>5/10</Text>
                                            <Image source={require('../../assets/img/icon_eventdetail.png')} resizeMode="contain" style={CordinatorFeedstyles.EventUser} />
                                        </View>
                                    </View>
                                    <Text style={[CordinatorFeedstyles.EventTitle, CordinatorFeedstyles.MarTop5]}>Lactics Class</Text>
                                </View>
                                <View style={[CordinatorFeedstyles.WhiteBox, CordinatorFeedstyles.MarTop10]}>
                                    <View style={CordinatorFeedstyles.LastEventTop}>
                                        <Text style={CordinatorFeedstyles.LastEventText}>Last Month, 15:30 06/11/2020
                                    </Text>
                                        <View style={CordinatorFeedstyles.CountUser}>
                                            <Text style={CordinatorFeedstyles.CountBox}>5/10</Text>
                                            <Image source={require('../../assets/img/icon_eventdetail.png')} resizeMode="contain" style={CordinatorFeedstyles.EventUser} />
                                        </View>
                                    </View>
                                    <Text style={[CordinatorFeedstyles.EventTitle, CordinatorFeedstyles.MarTop5]}>Nutritional Control</Text>
                                </View>

                            </View>

                        </View>
                    </ScrollView>
                </ImageBackground>
            </View >
        );
    }
}

export default CordinatorFeedView;
