import React, { Component } from 'react';
import AirVelocityView from './AirVelocityView';
import { connect } from 'react-redux';

class AirVelocityContainer extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let DATA = [
            {
                id: 1,
                title: 'Air Velocity Measurement',
                image: require('../../assets/images/services_air_velocity.jpg'),

            },
            {
                id: 2,
                title: 'PAO / HEPA Filter Integrity LeakTest',
                image: require('../../assets/images/services_paohepa.jpg'),

            },
            {
                id: 3,
                title: 'Non-Viable Particle Count Test',
                image: require('../../assets/images/services_non-viable.jpg'),

            },
            {
                id: 4,
                title: 'Room Pressurization Test',
                image: require('../../assets/images/servies_room_pressurization.jpg'),

            },
            {
                id: 5,
                title: 'Airflow VisualizationTest',
                image: require('../../assets/images/services_airflow_visualization.jpg'),

            },
            {
                id: 6,
                title: 'Recovery Test',
                image: require('../../assets/images/services_recovary.jpg'),

            }

        ]
        return <AirVelocityView {...this.props} serviceslistdata={this.props.navigation.state.params} />;
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
)(AirVelocityContainer);
