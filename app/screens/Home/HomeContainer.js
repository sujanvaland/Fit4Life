import React, { Component } from 'react';
import HomeView from './HomeView';
import { connect } from 'react-redux';
import { View,BackHandler } from 'react-native';
import * as eventActions from 'app/actions/eventActions';
import * as navigationActions from 'app/actions/navigationActions';
import AsyncStorage from '@react-native-community/async-storage';
//import messaging from '@react-native-firebase/messaging';

class HomeContainer extends Component {
    constructor(props) {
        super(props);
    }

    // define a separate function to get triggered on focus
    async onFocusFunction () {
        // messaging().getToken().then((token) => {
        //   this._onChangeToken(token)
        // });
  
        // messaging().onTokenRefresh((token) => {
        //     this._onChangeToken(token)
        // });
        
        let userId=this.props.accountdetail.id;
        const { getUpcomingEvents, getPastEvents } = this.props;
        if(userId > 0)
        {
          getUpcomingEvents(userId);
          getPastEvents(userId);
        }
        
      }
  
      // and don't forget to remove the listener
      componentWillUnmount () {
        this.focusListener.remove()
      }
    
    async componentDidMount(){
        let currentRoute = this.props.navigation.state.routeName;
        let navigation = this.props.navigation;
        BackHandler.addEventListener ('hardwareBackPress', function(){
          if (currentRoute == "Login") {
            BackHandler.exitApp();
            return true;
          }
          else{
            navigation.goBack();
            return true;
          }
        });
  
        this.focusListener = this.props.navigation.addListener('didFocus', () => {
            this.onFocusFunction();
          })
    } 

    // static getDerivedStateFromProps(props, state){
    //   let userId=props.accountdetail.id;
    //   const { getUpcomingEvents, getPastEvents } = props;
    //   if(userId > 0)
    //   {
    //     getUpcomingEvents(userId);
    //     getPastEvents(userId);
    //   }
    // }
  
    // _onChangeToken = async (token) => {
    //   await AsyncStorage.setItem("DEVICE_TOKEN", token);
    //   const { onUpdateDeviceToken } = this.props;
    //   //console.log(token);
    //   onUpdateDeviceToken(token);
    // }

    render() {
        return <HomeView {...this.props}/>;
    }
}

function mapStateToProps(state) {
    return {
        accountdetail : state.accountReducer.accountdetail,
        upcomingevents:state.eventReducer.upcomingevents,
        pastevents:state.eventReducer.pastevents,
        loading: state.loadingReducer,
        login_token:state.loginReducer.login_token,
        userrole : state.loginReducer.userrole,
    };
  }

function mapDispatchToProps(dispatch) {
    return {
        getUpcomingEvents: (userId,userrole) => dispatch(eventActions.getUpcomingEvents(userId,userrole)),
        getPastEvents: (userId,userrole) => dispatch(eventActions.getPastEvents(userId,userrole)),
        sendFeedback: (feedbacktosend,eventAttendanceID) => dispatch(eventActions.sendFeedback(feedbacktosend,eventAttendanceID))
    };
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(HomeContainer);
