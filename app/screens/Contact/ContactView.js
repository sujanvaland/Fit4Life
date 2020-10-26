import React, { Component } from 'react';
import { View, Text, ScrollView, Image } from 'react-native';
import Contactstyles from './styles';
import { Avatar, Button, IconButton, Card, Title, Paragraph, List } from 'react-native-paper';
import globalStyles from '../../assets/css/globalStyles';
import * as navigationActions from '../../actions/navigationActions';
import Icon from 'react-native-ionicons';


class ContactView extends Component {
    constructor(props) {
        super(props);

    }




    render() {
        return (
            <View style={Contactstyles.Container}>
                <ScrollView>
                    <View style={Contactstyles.ContactMainBox}>
                        <View style={Contactstyles.ContactBox}>
                            <Text style={Contactstyles.ContactTitle}>FILTECH SOLUTIONS</Text>
                            <Text style={Contactstyles.ContactPara}>301, 3RD FLOOR BUSINESS POINT{'\n'}
                                    NEAR HEENA ARCADE{'\n'}

                                    GIDC CHAR RASTA, VAPI.396191</Text>
                            <Text style={Contactstyles.ContactPara}>

                                CONTACT NO : +91-9974733869
                            </Text>
                            <Text style={Contactstyles.ContactPara}>

                                EMAIL : INFO@FILTECHSOLUTIONS.CO.IN</Text>
                        </View>

                        <View>

                        </View>
                    </View>
                </ScrollView>
            </View>
        );
    }
}

export default ContactView;
