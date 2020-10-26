import React, { Component } from 'react';
import { View, Text, ScrollView, Image } from 'react-native';
import Servicesstyles from './styles';
import { Avatar, Button, IconButton, Card, Title, Paragraph, List } from 'react-native-paper';
import globalStyles from '../../assets/css/globalStyles';
import Icon from 'react-native-ionicons';
import * as navigationActions from '../../actions/navigationActions';

class ServicesView extends Component {
    constructor(props) {
        super(props);
    }

    navigateToAirVelocity = (id) => {
        console.log(id);
        navigationActions.navigateToAirVelocity(id);
    };



    render() {

        let Servicesmain = [];
        if (this.props.Services) {
            Servicesmain = this.props.Services;
            //console.log(Servicesmain);
        }


        return (
            <View style={Servicesstyles.Container}>
                <ScrollView>
                    <View>
                        {
                            Servicesmain.map((item, index) => {
                                return (
                                    // <TouchableOpacity key={index}>
                                    //     <Card.Title style={Homestyles.ServicesTitle}
                                    //         title={item.title}
                                    //         subtitle={item.subtitle}
                                    //     />
                                    // </TouchableOpacity>

                                    <Card style={Servicesstyles.Cardbox} key={index} onPress={() => this.navigateToAirVelocity(item)}>
                                        <Card.Content>
                                            <Image source={item.image} />
                                            <Title style={Servicesstyles.ServicesTitle}>{item.title}</Title>
                                        </Card.Content>
                                    </Card>


                                )
                            })
                        }





                    </View>
                </ScrollView>
            </View>
        );
    }
}

export default ServicesView;
