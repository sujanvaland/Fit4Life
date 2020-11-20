import React, { Component } from 'react';
import EventDetailView from './EventDetailView';
import { connect } from 'react-redux';
import { View,BackHandler } from 'react-native';
import * as eventActions from 'app/actions/eventActions';
import * as navigationActions from 'app/actions/navigationActions';
import AsyncStorage from '@react-native-community/async-storage';
//import messaging from '@react-native-firebase/messaging';

class EventDetailContainer extends Component {
    constructor(props) {
        super(props);
    }

    // define a separate function to get triggered on focus
    async onFocusFunction () {
      const { loadEventdetail } = this.props;
      const { params } = this.props.navigation.state;
      //const eventid = params ? params.eventid : null;
      const eventid = "1";
      loadEventdetail(eventid);
    }
  
      // and don't forget to remove the listener
      componentWillUnmount () {
        this.focusListener.remove()
      }
    
    async componentDidMount(){
        this.focusListener = this.props.navigation.addListener('didFocus', () => {
            this.onFocusFunction();
          })
    }

    render() {
        return <EventDetailView {...this.props} />;
    }
}

function mapStateToProps(state) {
    return {
        eventdetail: state.eventReducer.eventdetail,
        loading: state.loadingReducer,
        login_token:state.loginReducer.login_token,
    };
  }

function mapDispatchToProps(dispatch) {
    return {
      loadEventdetail:(eventid) => dispatch(eventActions.loadEventDetailRequest(eventid)),
    };
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(EventDetailContainer);
