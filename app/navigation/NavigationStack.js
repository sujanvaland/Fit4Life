import React, { Component } from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { Image, View, Text, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import { createDrawerNavigator, DrawerItems } from 'react-navigation-drawer';
import NavStyles from './NavigationStyle';
import Styles from '../config/styles';
const { width: viewportWidth, height: viewportHeight } = Dimensions.get('window');
const { color, Typography } = Styles;

import { HeaderComponent } from 'app/components';

import * as navigationActions from '../actions/navigationActions';

import AuthLoadingScreen from 'app/screens/Login/AuthLoading';
import Login from 'app/screens/Login';
import Signup from 'app/screens/Signup';
import Forgotpassword from 'app/screens/Forgotpassword';
import CustomerFeed from 'app/screens/CustomerFeed';
import Home from 'app/screens/Home';
import MyProfile from 'app/screens/PersonalDetail';
import Calendar from 'app/screens/Calendar';
import HealthProfile from 'app/screens/HealthProfile';
import Contracts from 'app/screens/Contracts';
import Payments from 'app/screens/Payments';
import ChangePassword from 'app/screens/ChangePassword';
import Logout from 'app/screens/Home';



const customDrawer = (props) => {
    <View>
        <View style={NavStyles.UserArea}>
            <View style={NavStyles.ProfilePic}>
                <Image source={require('../assets/img/img_avtar.jpg')} resizeMode="contain" style={NavStyles.PrifileImage} />
            </View>
            <Text style={NavStyles.UserName}>John Smith</Text>
        </View>

        <View>
            <DrawerItems {...props} />
            {/* 
            <View style={NavStyles.MyaccountBox}>
                <TouchableOpacity onPress={() => this.navigateToMyProfile()} style={NavStyles.MyAccountlinks}>
                    <Image source={require('../assets/images/icon_myprofile.png')} resizeMode="contain" style={NavStyles.LinkMenuIcon} />
                    <Text style={NavStyles.AccountTextLink}>My Profile</Text>
                </TouchableOpacity>

            </View> */}
        </View>
    </View>
}



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
                //  header: () => <HeaderComponent iname={"ios-arrow-back"}
                //   title={"Forgot Password"}
                // back={true} navigation={navigation} />,
                headerShown: false,
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
                    <HeaderComponent navigation={navigation} user={true} menu={true} title="Fit4Life" pagetitle={true} />
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
                    <HeaderComponent pagetitle={true} user={true} navigation={navigation} menu={true} title="Profile" />
                ),
                gestureEnabled: true,
            };
        },
    },
});

const CustomerFeedApp = createStackNavigator({
    CustomerFeed: {
        screen: CustomerFeed,
        navigationOptions: ({ navigation }) => {
            return {
                header: () => (
                    <HeaderComponent pagetitle={true} user={true} navigation={navigation} menu={true} title="Fit4Life" />
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
                drawerIcon: () => (
                    <Image source={require('../assets/img/icon_home_menu.png')} style={NavigationStyles.MenuIcon} />
                ),
            },
        },
        MyProfile: {
            screen: MyProfileApp,
            navigationOptions: {
                drawerIcon: () => (
                    <Image source={require('../assets/img/icon_myprofile_menu.png')} style={NavigationStyles.MenuIcon} />
                ),
            },
        },
        CustomerFeed: {
            screen: CustomerFeedApp,
            navigationOptions: {
                drawerLabel: 'Feed',
                drawerIcon: () => (
                    <Image source={require('../assets/img/icon_myprofile_menu.png')} style={NavigationStyles.MenuIcon} />
                ),
            },
        },
        Calendar: {
            screen: CalendarApp,
            navigationOptions: {
                drawerIcon: () => (
                    <Image source={require('../assets/img/icon_calendar_menu.png')} style={NavigationStyles.MenuIcon} />
                ),
            },
        },
        HealthProfile: {
            screen: HealthProfileApp,
            navigationOptions: {
                drawerIcon: () => (
                    <Image source={require('../assets/img/icon_healthprofile_menu.png')} style={NavigationStyles.MenuIcon} />
                ),
            },
        },
        Contracts: {
            screen: ContractsApp,
            navigationOptions: {
                drawerIcon: () => (
                    <Image source={require('../assets/img/icon_contracts_menu.png')} style={NavigationStyles.MenuIcon} />
                ),
            },
        },
        Payments: {
            screen: PaymentsApp,
            navigationOptions: {
                drawerIcon: () => (
                    <Image source={require('../assets/img/icon_peyments_menu.png')} style={NavigationStyles.MenuIcon} />
                ),
            },
        },
        ChangePassword: {
            screen: ChangePasswordApp,
            navigationOptions: {
                drawerIcon: () => (
                    <Image source={require('../assets/img/icon_changepass.png')} style={NavigationStyles.MenuIcon} />
                ),
            },
        },
        Logout: {
            screen: LogoutApp,
            navigationOptions: {
                drawerIcon: () => (
                    <Image source={require('../assets/img/icon_logoutmenu.png')} style={NavigationStyles.MenuIcon} />
                ),
            },
        }
    },

    {
        initialRouteName: 'Home',
        //  contentComponent: customDrawer,
        draweOpenRoute: 'DrawerOpen',
        drawerCloseRoute: 'DrawerClose',
        drawerToggleRoute: 'DrawerToggle',
        drawerBackgroundColor: "#a80f19",
        contentOptions: {
            labelStyle: {
                color: 'white',
                fontFamily: 'OpenSans-Light',

            },
            TintColor: '#c8242f',
            activeTintColor: '#c8242f',
            activeBackgroundColor: '#c8242f',

        },
    });


//export default createAppContainer(RNApp);

export default createAppContainer(
    createSwitchNavigator(
        {
            AuthLoading: AuthLoadingScreen,
            App: RNApp,
            Auth: LoginApp,
            // contentComponent: customDrawer,
        },
        {
            initialRouteName: 'AuthLoading',
            // contentComponent: customDrawer,
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
        fontFamily: Typography.FONT_MEDIUM,
        // borderBottomColor: color.COLOR_LIGHTGRAY,
        borderBottomWidth: 2,
    },
    MenuIcon: {
        width: viewportWidth * 0.06,
        height: viewportWidth * 0.06,
    },


});

