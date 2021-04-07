import React, { Component } from 'react';
import UserHealthProfileView from './UserHealthProfileView';
import { connect } from 'react-redux';
import { BackHandler } from 'react-native';
import * as loginActions from 'app/actions/loginActions';
import * as accountActions from 'app/actions/accountActions';
import * as navigationActions from 'app/actions/navigationActions';

class UserHealthProfileContainer extends Component {
    constructor(props) {
        super(props);
    }
    navigateToHome(){
      navigationActions.navigateToHome();
    }

    // define a separate function to get triggered on focus
    async onFocusFunction () {
      // do some stuff on every screen focus
      const { getUserRolePersonalInformation, getUserCommentaries } = this.props;
      const { params } = this.props.navigation.state;
      const userId = params ? params.userId : null;
      //console.log(userId);
      getUserRolePersonalInformation(userId);
      getUserCommentaries(userId);
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
        return <UserHealthProfileView {...this.props} Home={this.navigateToHome}/>;
    }
}

function mapStateToProps(state) {
  return {
      loading: state.loadingReducer,
      login_token:state.loginReducer.login_token,
      userrolepersonalinformation : state.accountReducer.userrolepersonalinformation,
      usercommentaries : state.accountReducer.usercommentaries,
      userplan : state.accountReducer.userplan
  };
}
function mapDispatchToProps(dispatch) {
    return {
      getUserRolePersonalInformation:(userId) => dispatch(accountActions.getUserRolePersonalInformation(userId)),
      getUserCommentaries:(userId) => dispatch(accountActions.getUserCommentaries(userId)),
      sendComment: (commenttosend,userId) => dispatch(accountActions.sendComment(commenttosend,userId))
    };
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(UserHealthProfileContainer);
