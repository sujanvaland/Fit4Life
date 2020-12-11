import React, { Component } from 'react';
import EditProfileImageView from './EditProfileImageView';
import { connect } from 'react-redux';
import { BackHandler } from 'react-native';
import * as accountActions from 'app/actions/accountActions';
import * as navigationActions from 'app/actions/navigationActions';

class EditProfileImageContainer extends Component {
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

          const { loadProfileImage } = this.props;
          loadProfileImage();
      }
    
    render() {
        return <EditProfileImageView {...this.props}/>;
    }
}

function mapStateToProps(state) {
  return {
      personalinformation : state.accountReducer.personalinformation,
      loading: state.loadingReducer,
      login_token:state.loginReducer.login_token,
      customerguid:state.loginReducer.uuid,
      customerimage:state.loginReducer.customerimage,
  };
}
function mapDispatchToProps(dispatch) {
    return {
      loadProfileImage: () => dispatch(accountActions.loadProfileImageRequest())
    };
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(EditProfileImageContainer);
