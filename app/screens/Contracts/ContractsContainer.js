import React, { Component } from 'react';
import ContractsView from './ContractsView';
import { connect } from 'react-redux';

class ContractsContainer extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let DATA = [];
        return <ContractsView {...this.props} Services={DATA} />;
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
)(ContractsContainer);
