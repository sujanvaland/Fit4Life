import React, { Component } from 'react';
import { View, Text, ScrollView, Image } from 'react-native';
import AirVelocitystyles from './styles';
import { Avatar, Button, IconButton, Card, Title, Paragraph, List } from 'react-native-paper';
import globalStyles from '../../assets/css/globalStyles';
import * as navigationActions from '../../actions/navigationActions';
import Icon from 'react-native-ionicons';

class AirVelocityView extends Component {
    constructor(props) {
        super(props);
    }

    render() {

        let servicesdetailmain = [];
        if (this.props.Services) {
            servicesdetailmain = this.props.Services;
            console.log(servicesdetailmain);
        }
        let ServicesData = this.props.serviceslistdata;

        return (
            <View style={AirVelocitystyles.Container}>
                <ScrollView>
                    <View>
                        <Card style={AirVelocitystyles.Cardbox} >
                            <Card.Content>
                                <Image source={ServicesData.image} />
                                <Title style={AirVelocitystyles.ServicesTitle}>{ServicesData.title}</Title>
                                <Paragraph style={globalStyles.ParaText}>{ServicesData.content}</Paragraph>
                            </Card.Content>
                        </Card>
                    </View>
                </ScrollView>
            </View>
        );
    }
}

export default AirVelocityView;
