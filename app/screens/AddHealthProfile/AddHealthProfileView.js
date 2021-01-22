import React, { Component } from 'react';
import { View, Text, ScrollView, ImageBackground, Image, TouchableOpacity } from 'react-native';
import { Picker, Item } from "native-base";
import AddHealthProfilestyles from './styles';
import globalStyles from '../../assets/css/globalStyles';
import Icon from 'react-native-ionicons';
import SplashScreen from 'react-native-splash-screen';
import * as navigationActions from '../../actions/navigationActions';
import { TextBoxElement } from '../../components';
import Toast from 'react-native-simple-toast';
import { get } from 'lodash';
import { OverlayActivityIndicatorElement } from "../../components";


class AddHealthProfileView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ispossibleValues:false,
            possibleValuesArray:[],
            isValidhealthparameter: true,
            isValidhealthparametervalue: true,
            postData: {
                healthparameter: '',
                healthparameterValue: ''
            }
        }
    }


    componentDidMount() {
        SplashScreen.hide();

    }

    addhealthparameterName = (itemValue) => {
        
        if(itemValue!='')
        {
            this.setState(prevState => ({
                postData: {                   // object that we want to update
                    ...prevState.postData, // keep all other key-value pairs
                    healthparameter: itemValue
                }
            }), function () {

                const { allhealthparameter } = this.props;

                let allhealthparameter_data = [];
                if (allhealthparameter) {
                    allhealthparameter_data = allhealthparameter;
                }
                
                allhealthparameter_data.map((item, i) => {
                    if (item.id == itemValue) {
                       if(item.inputType=="DDL")
                       {
                            let possibleValuesArray = item.possibleValues.split(item.splitChar);
                            this.setState({ possibleValuesArray: possibleValuesArray });
                            this.setState({ ispossibleValues: true });
                       }
                    }
                });
            });
        }
    }

    addhealthparameterValues = (itemValue) => {
            this.setState(prevState => ({
                postData: {                   // object that we want to update
                    ...prevState.postData, // keep all other key-value pairs
                    healthparameterValue: itemValue
                }
            }), function () {
            });
    }

    onValueChange = (fieldName, value) => {
        this.setState(prevState => ({
            postData: {                   // object that we want to update
                ...prevState.postData, // keep all other key-value pairs
                [fieldName]: value
            }
        }), function () {
        });
    }

    SubmitHealthParameter = () => {
        if (this.validateItem()) {
            const postData = this.state.postData;
            this.props.addToHealthParameter(postData);
        }
    };

    validateItem = () => {
        //====== title ======//
        
        let isValidhealthparameter;
        let isValidhealthparametervalue;


        let allInputsValidated;

        if (this.state.postData.healthparameter == '') {
            isValidhealthparameter = false;
        }
        else {
            isValidhealthparameter = true;
        }

        if (this.state.postData.healthparameterValue == '') {
            isValidhealthparametervalue = false;
        }
        else {
            isValidhealthparametervalue = true;
        }


        if (isValidhealthparameter && isValidhealthparametervalue ) {
            allInputsValidated = true;
        }
        else {
            Toast.show("Please check all required fields", Toast.SHORT);
        }

        this.setState({
            isValidhealthparameter: isValidhealthparameter,
            isValidhealthparametervalue: isValidhealthparametervalue
        });

        return allInputsValidated;
    }

    getYMDParsedDate(strDate) {//get date formate
        if (strDate != "") {
          var strSplitDate = String(strDate).split('T');
          var dateArray = strSplitDate[0].split('-');
          let date = dateArray[2] + "/" + dateArray[1] + "/" + dateArray[0];
          return date;
        }
        return "";
    }


    render() {
        const image = require('../../assets/img/img_loginback.png');
        const { loading, allhealthparameter } = this.props;
        let allhealthparameter_data = [];
        if (allhealthparameter) {
            allhealthparameter_data = allhealthparameter;
        }

        let todaydate = new Date(new Date().getTime());
        let isodate = todaydate.toISOString();
        let YMDtodaydate = this.getYMDParsedDate(isodate);

        return (
            <View style={AddHealthProfilestyles.container}>
                {
                    get(loading, 'isLoading') && <OverlayActivityIndicatorElement />
                }
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
                                        <Text style={[AddHealthProfilestyles.DateText, globalStyles.FontRegular]}>{YMDtodaydate}</Text>
                                        <View >
                                            <Item picker style={[this.state.isValidhealthparameter ? AddHealthProfilestyles.BorderGrey : AddHealthProfilestyles.BorderRed]}>
                                                <Picker
                                                    selectedValue={this.state.postData.healthparameter}
                                                    mode="dropdown"
                                                    iosIcon={<Icon name="ios-arrow-down" style={{fontSize:15, color:'#333333'}}/>}
                                                    placeholder="Select Health Parameter"
                                                    onValueChange={(itemValue) => this.addhealthparameterName(itemValue)}
                                                >
                                                    <Picker.Item value="" label="Select Health Parameter" />
                                                    {allhealthparameter_data.map((item, i) => {
                                                        return <Picker.Item key={i} value={item.id} label={item.name} />
                                                    })}
                                                </Picker>
                                            </Item>
                                        </View>
                                        <View style={[AddHealthProfilestyles.textBoxContent]}>
                                            {this.state.ispossibleValues == false &&
                                                <TextBoxElement placeholder="Value"
                                                style={[this.state.isValidhealthparametervalue ? AddHealthProfilestyles.BorderGrey : AddHealthProfilestyles.BorderRed]}
                                                value={this.state.postData.healthparameterValue}
                                                onChangeText={value => this.onValueChange("healthparameterValue", value)}
                                                keyboardType="phone-pad"
                                                maxLength={10}
                                                placeholderTextColor='#000'
                                                isvalidInput={this.state.isValidhealthparametervalue}
                                                autoCapitalize={'none'} />
                                            }

                                            {this.state.ispossibleValues &&
                                                <Item picker style={[this.state.isValidhealthparametervalue ? AddHealthProfilestyles.BorderGrey : AddHealthProfilestyles.BorderRed]}>
                                                    <Picker
                                                        selectedValue={this.state.postData.healthparameterValue}
                                                        mode="dropdown"
                                                        iosIcon={<Icon name="ios-arrow-down" style={{fontSize:15, color:'#333333'}}/>}
                                                        placeholder="Select Value"
                                                        onValueChange={(itemValue) => this.addhealthparameterValues(itemValue)}
                                                    >
                                                        <Picker.Item value="" label="Select Value" />
                                                        {this.state.possibleValuesArray.map((item, i) => {
                                                            return <Picker.Item key={i} value={item} label={item} />
                                                        })}
                                                    </Picker>
                                                </Item>
                                            }
                                            
                                        </View>
                                    </View>
                                    <View style={[AddHealthProfilestyles.flexBox, AddHealthProfilestyles.Mrtop20]}>
                                        <TouchableOpacity onPress={this.SubmitHealthParameter} style={[AddHealthProfilestyles.buttonStyle]}>
                                            <Text style={[AddHealthProfilestyles.buttonStyleText]}>Add</Text>
                                        </TouchableOpacity>
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
