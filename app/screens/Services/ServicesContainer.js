import React, { Component } from 'react';
import ServicesView from './ServicesView';
import { connect } from 'react-redux';

class ServicesContainer extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let DATA = [
            {
                id: 1,
                title: 'Air Velocity Measurement',
                image: require('../../assets/images/services_air_velocity.jpg'),
                content: 'Air Velocity Measurement / tests to determine the average filter face velocity and uniformity, and the average room airflow velocity and uniformity within a clean room. The average airflow velocity is calculated by dividing the total of the airflow grid velocities by the number of readings taken.'

            },
            {
                id: 2,
                title: 'PAO / HEPA Filter Integrity LeakTest',
                image: require('../../assets/images/services_paohepa.jpg'),
                content: 'We conduct complete HEPA/ULPA filter integrity testing services. These are offered for Pharmaceutical, Hospitals and Laboratories industries. All filter integrity tests performed by us are executed in accordance with EU Cgmp& ISO 14644. We are equipped to perform HEPA Filter Integrity Test with Poly Alpha Olefin (PAO) . Testing and evaluating filters minimum once annually and potentiality twice annually is required for optimum performance. Proper documentation and certification is provided Fil Tech Solutions.'

            },
            {
                id: 3,
                title: 'Non-Viable Particle Count Test',
                image: require('../../assets/images/services_non-viable.jpg'),
                content: 'We are Fil Tech a reputed name in offering clean room validation services. Our Particle Count Test provides complete airborne particle count cleanliness classification. The test is performed to determine the actual particle count level within the facility at the time of the test. The test identifies particle count on basis of As-Built, At-Rest, or Operational as per ISO 14644 , EU GMP . The particle size(s) of interest, the room occupancy state and the room classification shall be known prior to the beginning of the tests and shall be as specified in the URS documents.'

            },
            {
                id: 4,
                title: 'Room Pressurization Test',
                image: require('../../assets/images/servies_room_pressurization.jpg'),
                content: 'We conduct Room Pressurization Test for industrial clean rooms. As a part of the validation process, this test verifies that a pressure differential meet the specified requirements.'

            },
            {
                id: 5,
                title: 'Airflow VisualizationTest',
                image: require('../../assets/images/services_airflow_visualization.jpg'),
                content: 'We offer Airflow Visualization Test as a part of the validation process. Visualization is carried out by using water Base fogger and taking Video. The purpose of the airflow visualization test is to show the actual airflow pattern throughout the unidirectional clean room. The test can also be used to demonstrate the effects on airflow caused by equipment. It is best to perform this test after all airflow velocity and uniformity tests and room pressurization tests have been performed. The test determining the airflow patterns within a room using ISO 14644 guides. This visual monitoring service is important in: Clean Room laminar flow Units'

            },
            {
                id: 6,
                title: 'Recovery Test',
                image: require('../../assets/images/services_recovary.jpg'),
                content: 'We execute recovery tests for clients across Industries. These tests demonstrate the ability of the clean room to remove particulate by purging the area with filtered air. It also testifies if the room can change from a "dirty" to "clean" state within the specified time. The test is conducted by Bestexperienced technicians from Our team. Our technicians have enriching experience and provide clients with high quality service. We ensure that clients clean room facility is performing properly and accurately.'

            }

        ]
        return <ServicesView {...this.props} Services={DATA} />;
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
)(ServicesContainer);
