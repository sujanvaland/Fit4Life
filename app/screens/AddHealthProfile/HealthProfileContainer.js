import React, { Component } from 'react';
import HealthProfileView from './HealthProfileView';
import { connect } from 'react-redux';

class HealthProfileContainer extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let DATA = [];
        return <HealthProfileView {...this.props} Services={DATA} />;
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
)(HealthProfileContainer);
