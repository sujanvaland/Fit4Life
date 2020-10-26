import React, { Component } from 'react';
import ContactView from './ContactView';
import { connect } from 'react-redux';

class ContactContainer extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <ContactView {...this.props} />;
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
)(ContactContainer);
