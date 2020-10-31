import React, { Component } from 'react';
import PaymentsView from './PaymentsView';
import { connect } from 'react-redux';

class PaymentsContainer extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let DATA = [];
        return <PaymentsView {...this.props} Services={DATA} />;
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
)(PaymentsContainer);
