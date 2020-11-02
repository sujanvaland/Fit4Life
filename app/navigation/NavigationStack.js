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
import Signup from 'app/screens/Signup';
import Forgotpassword from 'app/screens/Forgotpassword';
import Home from 'app/screens/Home';
//import MyProfile from 'app/screens/PersonalDetail';
import MyProfile from 'app/screens/Home';
import Calendar from 'app/screens/Calendar';
import HealthProfile from 'app/screens/HealthProfile';
import Contracts from 'app/screens/Contracts';
import Payments from 'app/screens/Payments';
import ChangePassword from 'app/screens/ChangePassword';
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

const SignupApp = createStackNavigator({
    Signup: {
        screen: Signup,
        navigationOptions: ({ navigation }) => {
            return {
                // header: () => <HeaderComponent iname={"ios-arrow-back"}
                headerShown: false,
                //  back={true} navigation={navigation} />,
                gestureEnabled: false
            }
        }
    },
});

const ForgotpasswordApp = createStackNavigator({
    Forgotpassword: {
        screen: Forgotpassword,
        navigationOptions: ({ navigation }) => {
            return {
                header: () => <HeaderComponent iname={"ios-arrow-back"}
                    title={"Forgot Password"}
                    back={true} navigation={navigation} />,
                gestureEnabled: false
            }
        }
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

const ChangePasswordApp = createStackNavigator({
    ChangePassword: {
        screen: ChangePassword,
        navigationOptions: ({ navigation }) => {
            return {
                header: () => <HeaderComponent iname={"chevron-back"}
                    title={"Change Password"}
                    back={true} navigation={navigation} />,
                gestureEnabled: false
            }
        }
    },
});

const LogoutApp = createStackNavigator({
    Logout: {
        screen: Logout,
        navigationOptions: ({ navigation }) => {
            return {
                headerShown: false,
                gestureEnabled: true,
            };
        },
    },
});

const RNApp = createDrawerNavigator(
    {
        Login: {
            screen: LoginApp,
            navigationOptions: {
                drawerLabel: () => null
            },
        },
        Signup: {
            screen: SignupApp,
            navigationOptions: {
                drawerLabel: () => null
            },
        },
        Forgotpassword: {
            screen: ForgotpasswordApp,
            navigationOptions: {
                drawerLabel: () => null
            },
        },
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
        ChangePassword: {
            screen: ChangePasswordApp,
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
        drawerBackgroundColor: "#000000",
        contentOptions: {
            labelStyle: {
                color: 'white',
            },
            TintColor: '#a80f19',
            activeTintColor: '#a80f19',
            activeBackgroundColor: '#a80f19',
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

