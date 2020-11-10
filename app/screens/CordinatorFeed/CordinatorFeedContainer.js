import React, { Component } from 'react';
import CordinatorFeedView from './CordinatorFeedView';
import { connect } from 'react-redux';

class CordinatorFeedContainer extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let DATA = [];
        return <CordinatorFeedView {...this.props} Services={DATA} />;
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
)(CordinatorFeedContainer);
