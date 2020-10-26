import React, { Component } from 'react';
import { View, Text, ScrollView, Image } from 'react-native';
import Aboutstyles from './styles';
import { Avatar, Button, IconButton, Card, Title, Paragraph, List } from 'react-native-paper';
import globalStyles from '../../assets/css/globalStyles';
import Icon from 'react-native-ionicons'


class AboutusView extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={Aboutstyles.container}>
                <ScrollView>
                    <View>
                        <Card>
                            <Card.Content>
                                <Title style={globalStyles.PageTitle}>Welcome to FILTECH SOLUTIONS</Title>
                                <Paragraph style={globalStyles.ParaText}>We are Fil Tech a reputed name in offering various validation services which includes Air Velocity Measurement, PAO / HEPA Filter Integrity LeakTest, Non-Viable ParticleCountTest, RoomPressurizationTest, AirflowVisualizationTest and Recovery Test. </Paragraph>
                                <Paragraph style={globalStyles.ParaText}>We are ISO 9001:2015 Certified and make sure to deliver best services in industry with high quality. </Paragraph>
                                <Paragraph style={globalStyles.ParaText}>We have worked across sectors to deliver professional calibration & validation services to comply Pharmaceutical, biotechnology, healthcare, food & beverages, research & development regulations..</Paragraph>
                                <Paragraph style={globalStyles.ParaText}>FILTECH SOLUTIONS offers quality Services of validation, calibration and comprehensive knowledge consulting of current regulatory standards of various countries across the world. We specialize in the calibration, qualification, validation of equipment, facilities and utilities, in the field of Pharmaceuticals, API factory, Clinical-Research, R&D, Quality Control Laboratories, Hospitals etc… and work to meet the requirements of the US (FDA) Schedule M (National Regulatory Body), WHO Geneva, UNICEF, USFDA, TGA (Australia), European (EMEA), MHRA (European Countries), PICs (Germany), MCC (South Africa). In knowledge consulting we offer training, concept sharing and QA consulting services. For these services FILTECH SOLUTIONS has dedicated and talented team of doctorates Masters with immense knowledge and experience in training, assisting with defining the QA strategy and developing a QA plan and executing the same. We are committed to the success of our client applications and take care that all testing processes are performed to the highest standards. Our engagement model incorporates the best industry practices and ensures a high degree of confidence that your applications and systems meet the most stringent requirements. Our approach is to work closely with our clients to ensure their requirements are clearly understood and the objectives achieved in a cost effective and timely manner.</Paragraph>


                            </Card.Content>
                        </Card>

                        <Card>
                            <Card.Content>
                                <Title style={globalStyles.PageTitle}>Certificates</Title>
                                <View style={Aboutstyles.CertiImagBox} >
                                    <Image source={{ uri: 'https://www.filtechsolutions.co.in/images/Certificate.png' }} resizeMode='contain' style={Aboutstyles.CertiImag} />
                                </View>

                            </Card.Content>
                        </Card>
                    </View>
                </ScrollView>
            </View>
        );
    }
}

export default AboutusView;
