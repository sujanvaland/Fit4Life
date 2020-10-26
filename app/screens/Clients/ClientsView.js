import React, { Component } from 'react';
import { View, Text, ScrollView, Image } from 'react-native';
import Clientstyles from './styles';
import { Avatar, Button, IconButton, Card, Title, Paragraph, List } from 'react-native-paper';
import globalStyles from '../../assets/css/globalStyles';
import * as navigationActions from '../../actions/navigationActions';
import Icon from 'react-native-ionicons';

class ClientsView extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let clientData = [];
        if (this.props.clientslist) {
            clientData = this.props.clientslist;
            console.log();
        }

        return (
            <View style={Clientstyles.Container}>
                <ScrollView>
                    <View>
                        <View style={Clientstyles.ClientImageMain}>
                            {
                                clientData.map((item, index) => {
                                    return (
                                        <View style={Clientstyles.ClientBox} key={index}>
                                            <Image source={item.image} resizeMode="contain" style={Clientstyles.ClientImage} />

                                        </View>

                                    )
                                })
                            }

                        </View>
                    </View>
                </ScrollView>
            </View>
        );
    }
}

export default ClientsView;
