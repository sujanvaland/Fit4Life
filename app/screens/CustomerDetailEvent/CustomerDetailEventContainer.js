import React, { Component } from 'react';
import CustomerDetailEventView from './CustomerDetailEventView';
import { connect } from 'react-redux';

class CustomerDetailEventContainer extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let DATA = [];
        return <CustomerDetailEventView {...this.props} Services={DATA} />;
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
)(CustomerDetailEventContainer);
