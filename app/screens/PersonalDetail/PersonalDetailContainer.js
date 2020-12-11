import React, { Component } from 'react';
import PersonalDetailView from './PersonalDetailView';
import { connect } from 'react-redux';
import { BackHandler } from 'react-native';
import * as loginActions from 'app/actions/loginActions';
import * as accountActions from 'app/actions/accountActions';
import * as navigationActions from 'app/actions/navigationActions';

class PersonalDetailContainer extends Component {
    constructor(props) {
        super(props);
    }
    navigateToHome(){
      navigationActions.navigateToHome();
    }

    // define a separate function to get triggered on focus
    async onFocusFunction () {
      // do some stuff on every screen focus
      const { onAccount, getPersonalInformation, getUserPlan } = this.props;
      onAccount();
      getPersonalInformation();
      getUserPlan();
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
        return <PersonalDetailView {...this.props} Home={this.navigateToHome}/>;
    }
}

function mapStateToProps(state) {
  return {
      loading: state.loadingReducer,
      login_token:state.loginReducer.login_token,
      accountdetail : state.accountReducer.accountdetail,
      personalinformation : state.accountReducer.personalinformation,
      userplan : state.accountReducer.userplan
  };
}
function mapDispatchToProps(dispatch) {
    return {
      onAccount: () => dispatch(accountActions.getAccountDetail()),
      getPersonalInformation: () => dispatch(accountActions.getPersonalInformation()),
      getUserPlan: () => dispatch(accountActions.getUserPlan())
    };
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PersonalDetailContainer);
