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

function mapStateToProps() {
    return {};
}
function mapDispatchToProps() {
    return {};
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CustomerFeedContainer);
