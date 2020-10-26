import React, { Component } from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { Image, View, Text, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import { createDrawerNavigator, DrawerItems } from 'react-navigation-drawer';
const { width: viewportWidth, height: viewportHeight } = Dimensions.get('window');

import { HeaderComponent } from 'app/components';

import * as navigationActions from '../actions/navigationActions';

import AuthLoadingScreen from 'app/screens/Login/AuthLoading';
import Login from 'app/screens/Login';
import Home from 'app/screens/Home';
import MyProfile from 'app/screens/Home';
import Calendar from 'app/screens/Home';
import HealthProfile from 'app/screens/Home';
import Contracts from 'app/screens/Home';
import Payments from 'app/screens/Home';
import Logout from 'app/screens/Home';


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

const MyProfileApp = createStackNavigator({
    MyProfile: {
        screen: MyProfile,
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

const CalendarApp = createStackNavigator({
    Calendar: {
        screen: Calendar,
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

const HealthProfileApp = createStackNavigator({
    HealthProfile: {
        screen: HealthProfile,
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

const ContractsApp = createStackNavigator({
    Contracts: {
        screen: Contracts,
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

const PaymentsApp = createStackNavigator({
    Payments: {
        screen: Payments,
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

const LogoutApp = createStackNavigator({
    Logout: {
        screen: Logout,
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

const RNApp = createDrawerNavigator(
    {
        Home: {
            screen: HomeApp,
            navigationOptions: {

            },
        },
        MyProfile: {
            screen: MyProfileApp,
            navigationOptions: {

            },
        },
        Calendar: {
            screen: CalendarApp,
            navigationOptions: {

            },
        },
        HealthProfile: {
            screen: HealthProfileApp,
            navigationOptions: {

            },
        },
        Contracts: {
            screen: ContractsApp,
            navigationOptions: {

            },
        },
        Payments: {
            screen: PaymentsApp,
            navigationOptions: {

            },
        },
        Logout: {
            screen: LogoutApp,
            navigationOptions: {

            },
        }
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


//export default createAppContainer(RNApp);

export default createAppContainer(
    createSwitchNavigator(
      {
        AuthLoading: AuthLoadingScreen,
        App: RNApp,
        Auth: LoginApp,
      },
      {
        initialRouteName: 'AuthLoading',
      }
    )
  );


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

