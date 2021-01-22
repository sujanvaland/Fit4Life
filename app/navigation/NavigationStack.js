import React, { Component } from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { Image, View, Text, StyleSheet, Dimensions, ImageBackground, TouchableOpacity, Alert, SafeAreaView } from 'react-native';
import { createDrawerNavigator, DrawerItems, DrawerActions } from 'react-navigation-drawer';
const { width: viewportWidth, height: viewportHeight } = Dimensions.get('window');
import NavStyles from './NavigationStyle';
import { HeaderComponent } from 'app/components';

import AuthLoadingScreen from 'app/screens/Login/AuthLoading';
import Login from 'app/screens/Login';
import Signup from 'app/screens/Signup';
import Forgotpassword from 'app/screens/Forgotpassword';
import Home from 'app/screens/Home';
import PersonalDetail from 'app/screens/PersonalDetail';
import Calendar from 'app/screens/Calendar';
import HealthProfile from 'app/screens/HealthProfile';
import Contracts from 'app/screens/Contracts';
import Payments from 'app/screens/Payments';
import ChangePassword from 'app/screens/ChangePassword';
import AddHealthProfile from 'app/screens/AddHealthProfile';
import CordinatorFeed from 'app/screens/CordinatorFeed';
import CustomerDetailEvent from 'app/screens/CustomerDetailEvent';
import CordinatorDetailEvent from 'app/screens/CordinatorDetailEvent';
import UpdateProfile from 'app/screens/UpdateProfile';
import EditProfileImage from '../screens/EditProfileImage';

const AuthStack = createStackNavigator({
    Login: {
        screen: Login,
        navigationOptions: ({ navigation }) => {
            return {
                headerShown: false,
                gestureEnabled: false,
            };
        },
    },
});

const RNApp = createStackNavigator(
    {
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

        Home: {
            screen: Home,
            navigationOptions: ({ navigation }) => {
                return {
                    header: () => (
                        <HeaderComponent navigation={navigation} user={false} menu={true} title="Fit4Life" pagetitle={true} />
                    ),
                    gestureEnabled: true,
                };
            },
        },

        CordinatorDetailEvent: {
            screen: CordinatorDetailEvent,
            navigationOptions: ({ navigation }) => {
                return {
                    header: () => (
                        <HeaderComponent navigation={navigation} backbutton={true} menu={false} pagetitle={true} title="Cordinator Event Detail" user={false} />
                    ),
                    gestureEnabled: true,
                };
            },
        },

        CustomerDetailEvent: {
            screen: CustomerDetailEvent,
            navigationOptions: ({ navigation }) => {
                return {
                    header: () => (
                        <HeaderComponent navigation={navigation} backbutton={true} menu={false} pagetitle={true} title="Customer Event Detail" user={false} />
                    ),
                    gestureEnabled: true,
                };
            },
        },

        MyProfile: {
            screen: PersonalDetail,
            navigationOptions: ({ navigation }) => {
                return {
                    header: () => (
                        <HeaderComponent navigation={navigation} user={false} menu={true} title="Fit4Life" pagetitle={true} />
                    ),
                    gestureEnabled: true,
                };
            },
        },
        ChangePassword: {
            screen: ChangePassword,
            navigationOptions: ({ navigation }) => {
                return {
                    header: () => <HeaderComponent pagetitle={true} user={false} navigation={navigation} menu={true} title="Change Password" />,
                    gestureEnabled: false
                }
            }
        },

        UpdateProfile: {
            screen: UpdateProfile,
            navigationOptions: ({ navigation }) => {
                return {
                    header: () => (
                        <HeaderComponent title="Update Profile" backbutton={true} menu={false} pagetitle={true} navigation={navigation} carticon={false} />
                    ),

                    gestureEnabled: true,
                };
            },
        },

        EditProfileImage: {
            screen: EditProfileImage,
            navigationOptions: ({ navigation }) => {
                return {
                    header: () => (
                        <HeaderComponent title="Profile Photo"
                            backbutton={true}
                            menu={false}
                            pagetitle={true}
                            navigation={navigation}
                            carticon={false} />
                    ),
                    gestureEnabled: false
                }
            }
        },

        Calendar: {
            screen: Calendar,
            navigationOptions: ({ navigation }) => {
                return {
                    header: () => (
                        <HeaderComponent navigation={navigation} menu={true} pagetitle={true} title="Fit4Life" user={false} />
                    ),
                    gestureEnabled: true,
                };
            },
        },

        HealthProfile: {
            screen: HealthProfile,
            navigationOptions: ({ navigation }) => {
                return {
                    header: () => (
                        <HeaderComponent navigation={navigation} menu={true} pagetitle={true} title="HealthProfile" user={false} />
                    ),
                    gestureEnabled: true,
                };
            },
        },

        AddHealthProfile: {
            screen: AddHealthProfile,
            navigationOptions: ({ navigation }) => {
                return {
                    header: () => (
                        <HeaderComponent navigation={navigation} backbutton={true} menu={false} pagetitle={true} title="Fit4Life" user={false} />
                    ),
                    gestureEnabled: true,
                };
            },
        },

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

        Payments: {
            screen: Payments,
            navigationOptions: ({ navigation }) => {
                return {
                    header: () => (
                        <HeaderComponent navigation={navigation} backbutton={false} menu={true} pagetitle={true} title="Fit4Life" user={false} />
                    ),
                    gestureEnabled: true,
                };
            },
        },

        CordinatorFeed: {
            screen: CordinatorFeed,
            navigationOptions: ({ navigation }) => {
                return {
                    header: () => (
                        <HeaderComponent navigation={navigation} backbutton={false} menu={true} pagetitle={true} title="Fit4Life" user={false} />
                    ),
                    gestureEnabled: true,
                };
            },
        },
    },
    {
        initialRouteName: 'Home'
    } 
);

//export default createAppContainer(RNApp);

export default createAppContainer(
    createSwitchNavigator(
      {
        AuthLoading: AuthLoadingScreen,
        App: RNApp,
        Auth: AuthStack,
      },
      {
        initialRouteName: 'AuthLoading',
      }
    )
);