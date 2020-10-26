import React, { Component } from 'react';
import ClientsView from './ClientsView';
import { connect } from 'react-redux';

class ClientsContainer extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let DATA = [
            {
                id: 1,
                image: require('../../assets/images/logo1.png')
            },
            {
                id: 2,
                image: require('../../assets/images/logo2.png')
            },
            {
                id: 3,
                image: require('../../assets/images/logo3.png')
            },
            {
                id: 4,
                image: require('../../assets/images/logo4.png')
            },
            {
                id: 5,
                image: require('../../assets/images/logo5.png')
            },
            {
                id: 6,
                image: require('../../assets/images/logo6.png')
            },
            {
                id: 7,
                image: require('../../assets/images/logo7.png')
            },
            {
                id: 8,
                image: require('../../assets/images/logo8.png')
            },
            {
                id: 9,
                image: require('../../assets/images/logo9.png')
            },
            {
                id: 10,
                image: require('../../assets/images/logo10.png')
            },
            {
                id: 11,
                image: require('../../assets/images/logo11.png')
            },
            {
                id: 12,
                image: require('../../assets/images/logo12.png')
            },
            {
                id: 13,
                image: require('../../assets/images/logo13.png')
            },
            {
                id: 14,
                image: require('../../assets/images/logo14.png')
            },
            {
                id: 15,
                image: require('../../assets/images/logo15.png')
            },
            {
                id: 16,
                image: require('../../assets/images/logo16.png')
            },
            {
                id: 17,
                image: require('../../assets/images/logo17.png')
            },
            {
                id: 18,
                image: require('../../assets/images/logo18.png')
            },
            {
                id: 19,
                image: require('../../assets/images/logo19.png')
            },
            {
                id: 20,
                image: require('../../assets/images/logo20.png')
            },
            {
                id: 21,
                image: require('../../assets/images/logo21.png')
            },
            {
                id: 22,
                image: require('../../assets/images/logo22.png')
            },
            {
                id: 23,
                image: require('../../assets/images/logo23.png')
            },
            {
                id: 24,
                image: require('../../assets/images/logo24.png')
            },
            {
                id: 25,
                image: require('../../assets/images/logo25.png')
            },
            {
                id: 26,
                image: require('../../assets/images/logo26.png')
            },
            {
                id: 27,
                image: require('../../assets/images/logo27.png')
            },
        ]
        return <ClientsView {...this.props} clientslist={DATA} />;
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
)(ClientsContainer);
