import React, { Component } from 'react';
import HealthProfileView from './HealthProfileView';
import { connect } from 'react-redux';
import { BackHandler } from 'react-native';
import * as loginActions from 'app/actions/loginActions';
import * as accountActions from 'app/actions/accountActions';
import * as navigationActions from 'app/actions/navigationActions';

class HealthProfileContainer extends Component {
    constructor(props) {
        super(props);
    }

    // define a separate function to get triggered on focus
    async onFocusFunction () {
        // do some stuff on every screen focus
        const { getHealthparameters } = this.props;
        getHealthparameters();
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
        return <HealthProfileView {...this.props}/>;
    }
}

function mapStateToProps(state) {
    return {
        loading: state.loadingReducer,
        login_token:state.loginReducer.login_token,
        healthparameters : state.accountReducer.healthparameters
    };
}

function mapDispatchToProps(dispatch) {
      return {
        getHealthparameters: () => dispatch(accountActions.getHealthparameters()),
      };
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(HealthProfileContainer);
