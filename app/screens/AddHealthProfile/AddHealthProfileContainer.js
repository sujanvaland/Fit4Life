import React, { Component } from 'react';
import AddHealthProfileView from './AddHealthProfileView';
import { connect } from 'react-redux';

class AddHealthProfileContainer extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let DATA = [];
        return <AddHealthProfileView {...this.props} Services={DATA} />;
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
)(AddHealthProfileContainer);
