import React, { Component } from 'react';
import SignUpView from './SignUpView';
import { connect } from 'react-redux';
import { BackHandler } from 'react-native';
import * as signupActions from 'app/actions/signupActions';

class SignUpContainer extends Component {
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
          else if (currentRoute == "Dashboard") {
            return true;
          }
          else{
            navigation.goBack();
            return true;
          }
        });
    }
    
    render() {
        return <SignUpView {...this.props} />;
    }
}


function mapStateToProps(state) {
    return {
        singupresponse: state.signupReducer,
        loading: state.loadingReducer
    };
}
function mapDispatchToProps(dispatch) {
    return {
        onSignUp: (obj) => dispatch(signupActions.requestSignUp(obj))
    };
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SignUpContainer);
