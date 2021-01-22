import React, { Component } from 'react';
import CustomerFeedView from './CustomerFeedView';
import { connect } from 'react-redux';

class CustomerFeedContainer extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let DATA = [];
        return <CustomerFeedView {...this.props} Services={DATA} />;
    }
}

function mapStateToProps(state) {
    return {
       loading: state.loadingReducer,
       login_token:state.loginReducer.login_token,
    };
}
function mapDispatchToProps() {
    return {};
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CustomerFeedContainer);
