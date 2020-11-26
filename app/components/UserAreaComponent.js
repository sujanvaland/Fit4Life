import React, { Component } from 'react';
import { Text, View, Dimensions, Image, StyleSheet } from 'react-native';
// Use prebuilt version of RNVI in dist folder
const { width: viewportWidth, height: viewportHeight } = Dimensions.get('window');
import * as navigationActions from '../actions/navigationActions';
import Styles from '../config/styles';
const { color, Typography } = Styles;
import NavStyles from '../navigation/NavigationStyle';
import AsyncStorage from '@react-native-community/async-storage';




class UserAreaComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hideMenu: true,
            login_token: '',
            firstname: '',
            lastname: '',
            customerimage: ''

        };
        this.handleBackButtonClick = this.handleBackButtonClick.bind(this);
    }

    async componentDidMount() {
        let login_token = await this._retrieveData("login_token");
        let firstname = await this._retrieveData("firstname");
        let lastname = await this._retrieveData("lastname");
        let customerimage = await this._retrieveData("customerimage");
        
        this.setState({
            login_token: login_token,
            firstname: firstname,
            lastname: lastname,
            customerimage: customerimage
        });
    }

    async componentDidUpdate(){
        let login_token = await this._retrieveData("login_token");
        let firstname = await this._retrieveData("firstname");
        let lastname = await this._retrieveData("lastname");
        let customerimage = await this._retrieveData("customerimage");
        this.setState({
            login_token: login_token,
            firstname: firstname,
            lastname: lastname,
            customerimage: customerimage
        });
    }

    _storeData = async (key, value) => {
        try {
            await AsyncStorage.setItem(key, value);
            return value;
        } catch (error) {
            // Error saving data
            return null;
        }
    };

    _retrieveData = async (key) => {
        try {
            const value = await AsyncStorage.getItem(key);
            if (value !== null) {
                return value
            }
        } catch (error) {
        }
    };
    
    handleBackButtonClick() {
        this.props.navigation.goBack();
        return true;
    }

    render() {
        return (
            <View>
                {
                    (this.state.customerimage == '' || this.state.customerimage == undefined) &&
                    <View style={NavStyles.ProfilePic}>
                        <Image source={require('../assets/img/img_avtar.jpg')} resizeMode="contain" style={NavStyles.PrifileImage} />
                    </View>
                }

                {
                    (this.state.customerimage != '' && this.state.customerimage != undefined) &&
                    <View style={NavStyles.ProfilePic}>
                        <Image source={require('../assets/img/img_avtar.jpg')} resizeMode="contain" style={NavStyles.PrifileImage} />
                    </View>
                }
                <Text style={NavStyles.UserName}>{this.state.firstname} {this.state.lastname}</Text>
                {/* <Text style={NavStyles.Location}>San Francisco, CA</Text> */}
            </View>
        );
    }
}

export { UserAreaComponent }

//export default CustomDrawerComponent;
const NavigationStyles = StyleSheet.create({
    UserName: {
        marginTop: 30,
        paddingHorizontal: 20,
        paddingVertical: 10,
        marginBottom: 10,
        fontSize: viewportWidth * 0.034,
        // fontFamily: Typography.FONT_MEDIUM,
        //  borderBottomColor: color.COLOR_LIGHTGRAY,
        borderBottomWidth: 2,
    },

    MenuIcon: {
        width: viewportWidth * 0.06,
        height: viewportWidth * 0.06,
        borderWidth: 0,
        borderColor: 'black',
        margin: 0,
    },
});
