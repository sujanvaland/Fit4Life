import React, { Component } from 'react';
import CalendarView from './CalendarView';
import { connect } from 'react-redux';

class CalendarContainer extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let DATA = [];
        return <CalendarView {...this.props} Services={DATA} />;
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
)(CalendarContainer);
