import React, { Component } from 'react';
import { View, Text, ScrollView, ImageBackground, Image, TouchableOpacity } from 'react-native';
import { Picker, Item } from "native-base";
import AddHealthProfilestyles from './styles';
import globalStyles from '../../assets/css/globalStyles';
import Icon from 'react-native-ionicons';
import SplashScreen from 'react-native-splash-screen';
import * as navigationActions from '../../actions/navigationActions';
import { TextBoxElement } from '../../components';


class AddHealthProfileView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            postData: {
                healthparameter: ''
            }
        }
    }


    componentDidMount() {
        SplashScreen.hide();

    }

    addhealthparameterValues = (itemValue) => {
        this.setState(prevState => ({
            postData: {                   // object that we want to update
                ...prevState.postData, // keep all other key-value pairs
                healthparameter: itemValue
            }
        }), function () {
        });
    }

    render() {
        const image = require('../../assets/img/img_loginback.png');
        const { allhealthparameter } = this.props;
        let allhealthparameter_data = [];
        if (allhealthparameter) {
            allhealthparameter_data = allhealthparameter;
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
                                        <View style={AddHealthProfilestyles.TimePickerbtn}>
                                            <Item picker style={AddHealthProfilestyles.TimePicker}>
                                                <Picker
                                                    selectedValue={this.state.postData.healthparameter}
                                                    style={AddHealthProfilestyles.PickerDropdownFloor}
                                                    mode="dropdown"
                                                    iosIcon={<Icon name="ios-arrow-down" style={{fontSize:15, color:'#333333'}}/>}
                                                    placeholder="Select Health Parameter"
                                                    onValueChange={(itemValue) => this.addhealthparameterValues(itemValue)}
                                                >
                                                    <Picker.Item value="" label="Select Health Parameter" />
                                                    {allhealthparameter_data.map((item, i) => {
                                                        return <Picker.Item key={i} value={item.name} label={item.name} />
                                                    })}
                                                </Picker>
                                            </Item>
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
