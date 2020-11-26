import React, { Component } from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { Image, View, Text, StyleSheet, Dimensions, ImageBackground, TouchableOpacity, Alert, SafeAreaView } from 'react-native';
import { createDrawerNavigator, DrawerItems, DrawerActions } from 'react-navigation-drawer';
const { width: viewportWidth, height: viewportHeight } = Dimensions.get('window');
import AsyncStorage from '@react-native-community/async-storage';
import NavStyles from './NavigationStyle';
import { HeaderComponent } from 'app/components';
import { UserAreaComponent } from 'app/components';
import { CustomDrawerComponent } from 'app/components';



import * as navigationActions from '../actions/navigationActions';

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

const customDrawer = (props) => (
    <View style={NavStyles.LeftMenuarea}>
        <SafeAreaView forceInset={{ top: 'always', horizontal: 'never' }} style={NavStyles.SafeAeaMenu}>
            <View style={NavStyles.UserArea}>
               <UserAreaComponent />
            </View>
            <View>
                <DrawerItems {...props} />
                <CustomDrawerComponent />
            </View>
        </SafeAreaView>
    </View>
);


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
    }
});

const MyProfileApp = createStackNavigator({
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
                header: () => <HeaderComponent pagetitle={true} user={true} navigation={navigation} menu={true} title="Change Password" />,
                gestureEnabled: false
            }
        }
    }
});

const CalendarApp = createStackNavigator({
    Calendar: {
        screen: Calendar,
        navigationOptions: ({ navigation }) => {
            return {
                header: () => (
                    <HeaderComponent navigation={navigation} menu={true} pagetitle={true} title="Fit4Life" user={true} />
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
                    <HeaderComponent navigation={navigation} menu={true} pagetitle={true} title="Fit4Life" user={true} />
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
                    <HeaderComponent navigation={navigation} backbutton={true} menu={false} pagetitle={true} title="Fit4Life" user={true} />
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
                    <HeaderComponent navigation={navigation} backbutton={false} menu={true} pagetitle={true} title="Fit4Life" user={true} />
                ),
                gestureEnabled: true,
            };
        },
    },
});


const CordinatorFeedApp = createStackNavigator({
    CordinatorFeed: {
        screen: CordinatorFeed,
        navigationOptions: ({ navigation }) => {
            return {
                header: () => (
                    <HeaderComponent navigation={navigation} backbutton={false} menu={true} pagetitle={true} title="Fit4Life" user={true} />
                ),
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
                    <Image source={require('../assets/img/icon_home_menu.png')} resizeMode="contain" style={NavigationStyles.MenuIcon} />
                ),
            },
        },
        MyProfile: {
            screen: MyProfileApp,
            navigationOptions: {
                drawerLabel: () => null,
            },
        },
        Calendar: {
            screen: CalendarApp,
            navigationOptions: {
                drawerIcon: () => (
                    <Image source={require('../assets/img/icon_calendar_menu.png')} resizeMode="contain" style={NavigationStyles.MenuIcon} />
                ),
            },
        },
        HealthProfile: {
            screen: HealthProfileApp,
            navigationOptions: {
                drawerLabel: () => null,
            },
        },

        CordinatorFeed: {
            screen: CordinatorFeedApp,
            navigationOptions: {
                drawerLabel: () => null,
            },
        },
        Contracts: {
            screen: ContractsApp,
            navigationOptions: {
                drawerLabel: () => null,
            },
        },
        Payments: {
            screen: PaymentsApp,
            navigationOptions: {
                drawerLabel: () => null,
            },
        },
        // ChangePassword: {
        //     screen: ChangePasswordApp,
        //     navigationOptions: {
        //         drawerLabel: 'Change Password',
        //         drawerIcon: () => (
        //             <Image source={require('../assets/img/icon_changepass.png')} resizeMode="contain" style={NavigationStyles.MenuIcon} />
        //         ),
        //     },
        // }
    },

    {
        initialRouteName: 'Home',
        contentComponent: customDrawer,
        draweOpenRoute: 'DrawerOpen',
        drawerCloseRoute: 'DrawerClose',
        drawerToggleRoute: 'DrawerToggle',
        drawerBackgroundColor: "#a80f19",
        contentOptions: {
            labelStyle: {
                color: 'white',
                paddingHorizontal: 0,

            },
            TintColor: '#9d0913',
            activeTintColor: '#9d0913',
            activeBackgroundColor: '#9d0913',
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
        borderWidth: 0,
        borderColor: 'black',
        margin: 0,
    },
});

