import React, { Component } from 'react';
import CordinatorDetailView from './CordinatorDetailView';
import * as eventActions from 'app/actions/eventActions';
import { BackHandler } from 'react-native';
import { connect } from 'react-redux';

class CordinatorDetailContainer extends Component {
    constructor(props) {
        super(props);
    }

     // define a separate function to get triggered on focus
     async onFocusFunction () {
        const { loadCoordinatorEventDetail, loadEventAttendances } = this.props;
        const { params } = this.props.navigation.state;
        //console.log(params);
        const eventid = params ? params.eventid : null;
        //const eventid = 6;
        loadCoordinatorEventDetail(eventid);
        loadEventAttendances(eventid);
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

    render() {
        return <CordinatorDetailView {...this.props}/>;
    }
}


function mapStateToProps(state) {
    return {
        coordinatorEventDetail : state.eventReducer.coordinatoreventdetail,
        eventAttendancesList : state.eventReducer.eventattendances,
        loading: state.loadingReducer,
        login_token:state.loginReducer.login_token
    };
  }

function mapDispatchToProps(dispatch) {
    return {
        loadCoordinatorEventDetail:(eventid) => dispatch(eventActions.loadCoordinatorEventDetailRequest(eventid)),
        loadEventAttendances:(eventid) => dispatch(eventActions.loadEventAttendancesRequest(eventid))
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CordinatorDetailContainer);
