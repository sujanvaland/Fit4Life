import React, { Component } from 'react';
import UpdateProfileView from './UpdateProfileView';
import { connect } from 'react-redux';
import { BackHandler } from 'react-native';
import * as accountActions from 'app/actions/accountActions';
import * as navigationActions from 'app/actions/navigationActions';

class UpdateProfileContainer extends Component {
    constructor(props) {
        super(props);
    }

    async componentDidMount(){

        let currentRoute = this.props.navigation.state.routeName;
        let navigation = this.props.navigation;
        BackHandler.addEventListener('hardwareBackPress', function () {
            if (currentRoute == "Login") {
                BackHandler.exitApp();
                return true;
            }
            else {
                navigation.goBack();
                return true;
            }
        });
  
       
    } 

    render() {
        return <UpdateProfileView {...this.props} />;
    }
}

function mapStateToProps(state) {
    return {
      loading: state.loadingReducer,
      login_token:state.loginReducer.login_token,
      accountdetail : state.accountReducer.accountdetail,
      personalinformation : state.accountReducer.personalinformation,
    };
}
function mapDispatchToProps(dispatch) {
    return {
        UpdateProfile: (obj) => dispatch(accountActions.requestUpdateprofileRequest(obj)),
    };
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(UpdateProfileContainer);
