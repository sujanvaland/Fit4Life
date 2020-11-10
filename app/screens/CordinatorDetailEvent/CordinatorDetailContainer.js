import React, { Component } from 'react';
import CordinatorDetailView from './CordinatorDetailView';
import { connect } from 'react-redux';

class CordinatorDetailContainer extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let DATA = [];
        return <CordinatorDetailView {...this.props} Services={DATA} />;
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
)(CordinatorDetailContainer);
