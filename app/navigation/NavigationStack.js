import React, { Component } from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { Image, View, Text, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import { createDrawerNavigator, DrawerItems } from 'react-navigation-drawer';
const { width: viewportWidth, height: viewportHeight } = Dimensions.get('window');

import { HeaderComponent } from 'app/components';

import * as navigationActions from '../actions/navigationActions';

import Login from 'app/screens/Login';
import Home from 'app/screens/Home';
import Aboutus from 'app/screens/Aboutus';
import Services from 'app/screens/Services';
import Clients from 'app/screens/Clients';
import AirVelocity from 'app/screens/AirVelocity';
import Contact from 'app/screens/Contact';
import Instruments from 'app/screens/Instruments';

// const RNApp = createStackNavigator(
//     {
//         Login: {
//             screen: Login,
//             navigationOptions: ({ navigation }) => {
//                 return {
//                     headerShown: false,
//                     gestureEnabled: true,
//                 };
//             },

//         },
//         Home: {
//             screen: Home,
//             navigationOptions: ({ navigation }) => {
//                 return {
//                     headerShown: false,
//                     gestureEnabled: true,
//                 };
//             },
//         }
//     },
//     // {
//     //     initialRouteName: 'Login'
//     // }
// );


const LoginApp = createStackNavigator({
    Login: {
        screen: Login,
        navigationOptions: ({ navigation }) => {
            return {
                headerShown: false,
                gestureEnabled: true,
            };
        },
    },
});

const HomeApp = createStackNavigator({
    Home: {
        screen: Home,
        navigationOptions: ({ navigation }) => {
            return {
                header: () => (
                    <HeaderComponent navigation={navigation} menu={true} />
                ),


                gestureEnabled: true,
            };
        },
    },
});

const ServicesApp = createStackNavigator({
    Services: {
        screen: Services,
        navigationOptions: ({ navigation }) => {
            return {
                header: () => (
                    <HeaderComponent title="Services" navigation={navigation} menu={true} pagetitle={true} />
                ),


                gestureEnabled: true,
            };
        },
    },

    AirVelocity: {
        screen: AirVelocity,
        navigationOptions: ({ navigation }) => {
            return {
                header: () => (
                    <HeaderComponent title="Services Detail" navigation={navigation} menu={false} pagetitle={true} backbutton={true} />
                ),


                gestureEnabled: true,
            };
        },
    },

});

const AboutusApp = createStackNavigator({
    Aboutus: {
        screen: Aboutus,
        navigationOptions: ({ navigation }) => {
            return {
                header: () => (
                    <HeaderComponent title="Aboutus" navigation={navigation} menu={true} pagetitle={true} />
                ),


                gestureEnabled: true,
            };
        },
    },
});

const InstrumentsApp = createStackNavigator({
    Instruments: {
        screen: Instruments,
        navigationOptions: ({ navigation }) => {
            return {
                header: () => (
                    <HeaderComponent title="Instruments" navigation={navigation} menu={true} pagetitle={true} />
                ),


                gestureEnabled: true,
            };
        },
    },
});

const ClientsApp = createStackNavigator({
    Clients: {
        screen: Clients,
        navigationOptions: ({ navigation }) => {
            return {
                header: () => (
                    <HeaderComponent title="Clients" navigation={navigation} menu={true} pagetitle={true} />
                ),


                gestureEnabled: true,
            };
        },
    },
});

const ContactApp = createStackNavigator({
    Contact: {
        screen: Contact,
        navigationOptions: ({ navigation }) => {
            return {
                header: () => (
                    <HeaderComponent title="Contact" navigation={navigation} menu={true} pagetitle={true} />
                ),


                gestureEnabled: true,
            };
        },
    },
});

const RNApp = createDrawerNavigator(
    {
        Home: {
            screen: HomeApp,
            navigationOptions: {

            },
        },
        Services: {
            screen: ServicesApp,
            navigationOptions: {

            },
        },
        Aboutus: {
            screen: AboutusApp,
            navigationOptions: {

            },
        },

        Instruments: {
            screen: InstrumentsApp,
            navigationOptions: {

            },
        },

        Clients: {
            screen: ClientsApp,
            navigationOptions: {

            },
        },

        Contact: {
            screen: ContactApp,
            navigationOptions: {

            },
        },





    },

    {
        initialRouteName: 'Home',
        draweOpenRoute: 'DrawerOpen',
        drawerCloseRoute: 'DrawerClose',
        drawerToggleRoute: 'DrawerToggle',
        contentOptions: {
            TintColor: '#000000',
            activeTintColor: '#ED3237',
            activeBackgroundColor: '#f5f5f5',
            //  fontFamily: Styles.Typography.FONT_LIGHT
        },
    });


export default createAppContainer(RNApp);


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
    },


});

