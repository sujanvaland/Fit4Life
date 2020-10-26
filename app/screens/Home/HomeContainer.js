import React, { Component } from 'react';
import HomeView from './HomeView';
import { connect } from 'react-redux';

class HomeContainer extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let DATA = [];
        return <HomeView {...this.props} Services={DATA} />;
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
)(HomeContainer);
