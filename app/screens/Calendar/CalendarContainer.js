import React, { Component } from 'react';
import CalendarView from './CalendarView';
import { connect } from 'react-redux';
import { View,BackHandler } from 'react-native';
import * as eventActions from 'app/actions/eventActions';

class CalendarContainer extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
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
      }

    render() {
        return <CalendarView {...this.props}/>;
    }
}

function mapStateToProps(state) {
    return {
        scheduleevents:state.eventReducer.upcomingevents,
        loading: state.loadingReducer,
        login_token:state.loginReducer.login_token,
        monthevents:state.eventReducer.monthevents,
        dateevents:state.eventReducer.dateevents,
        userrole : state.accountReducer.userrole,
    };
}


function mapDispatchToProps(dispatch) {
    return {
      ongeteventsByMonth:(month,year) => dispatch(eventActions.ongeteventsByMonth(month,year)),
      ongeteventsByDate:(date) => dispatch(eventActions.ongeteventsByDate(date)),
      loadSubscribeNow : (EventId) => dispatch(eventActions.loadSubscribeNowRequest(EventId))
    };
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CalendarContainer);
