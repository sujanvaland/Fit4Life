import React, { Component } from 'react';
import { View, Text, ScrollView, ImageBackground, Image, TouchableOpacity, RefreshControl } from 'react-native';

import HealthProfilestyles from './styles';
import { SliderBox } from "react-native-image-slider-box";
import { Avatar, Button, IconButton, Card, Title, Paragraph, List } from 'react-native-paper';
import globalStyles from '../../assets/css/globalStyles';
import Icon from 'react-native-ionicons';
import SplashScreen from 'react-native-splash-screen';
import * as navigationActions from '../../actions/navigationActions';
import { get } from 'lodash';
import { OverlayActivityIndicatorElement } from "../../components";



class HealthProfileView extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }


    componentDidMount() {
        SplashScreen.hide();

    }

    navigateToAddHealthProfile = () => {
        navigationActions.navigateToAddHealthProfile();
    }

    getParsedDate(strDate) {//get date formate
        if (strDate != "") {
          var dateArray = strDate.split('-');
          let date = dateArray[2] + "/" + dateArray[1] + "/" + dateArray[0];
          return date;
        }
        return "";
    }

    // ============ on page refresh============ //
    _refreshHealthparameters = () => {
        // you must return Promise everytime
        const { getHealthparameters } = this.props;
        return new Promise((resolve) => {
        setTimeout(() => {
            getHealthparameters();
            resolve();
        }, 500)
        })
    }



    render() {
        const { loading } = this.props;
        const image = require('../../assets/img/img_loginback.png');
        return (
            <View style={HealthProfilestyles.container}>
                {
                    get(loading, 'isLoading') && <OverlayActivityIndicatorElement />
                }
                <ImageBackground source={image} style={HealthProfilestyles.ImageBack} resizeMode="cover">
                    <ScrollView refreshControl={
                        <RefreshControl onRefresh={() => { this._refreshHealthparameters() }} />
                        }>
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
                                    {this.renderhealthparameterslist()}
                                </View>
                            </View>
                        </View>
                    </ScrollView>
                </ImageBackground>
            </View >
        );
    }

    renderhealthparameterslist = () => {
        let { login_token, healthparameters } = this.props;
        let healthparametersdata = []
        if (healthparameters) {
          healthparametersdata = healthparameters;
        }
        let items = [];
        healthparametersdata.sort((a,b)=> (a.creationDate > b.creationDate ? 1 : -1));
        let selecteddate="";
        healthparametersdata.forEach(item => {
            //console.log(item);
            items.push(
                <View key={item.id} >
                    { selecteddate!=item.creationDate &&
                        <Text style={[HealthProfilestyles.DateText, globalStyles.FontRegular]}>{this.getParsedDate(item.creationDate)}</Text>
                    }
                    <View style={HealthProfilestyles.LevelBox}>
                        <Text style={[globalStyles.FontRegular, HealthProfilestyles.LevelBoxText]}>{item.healthParameter.name} </Text>
                        <Text style={[globalStyles.FontRegular, HealthProfilestyles.LevelBoxText]}>{item.value} {item.healthParameter.measurementUnit}</Text>
                    </View>
                </View>); //get data from AccordianElement components

            selecteddate=item.creationDate;
        });
          
        return items;
      }
}

export default HealthProfileView;
