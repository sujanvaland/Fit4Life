import React, { Component } from 'react';
import AboutusView from './AboutusView';
import { connect } from 'react-redux';

class AboutusContainer extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <AboutusView {...this.props} />;
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
)(AboutusContainer);
