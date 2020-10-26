import React, { Component } from 'react';
import { View, Text, ScrollView, Image } from 'react-native';
import Instrumentstyles from './styles';
import { Avatar, Button, IconButton, Card, Title, Paragraph, List } from 'react-native-paper';
import globalStyles from '../../assets/css/globalStyles';
import * as navigationActions from '../../actions/navigationActions';
import Icon from 'react-native-ionicons';

class InstrumentsView extends Component {
    constructor(props) {
        super(props);
    }

    render() {

        let Instruments = [];
        if (this.props.intrumentdata) {
            Instruments = this.props.intrumentdata;
            //console.log(Instruments);
        }

        return (
            <View style={Instrumentstyles.Container}>
                <ScrollView>
                    <View>
                        {
                            Instruments.map((item, index) => {
                                return (
                                    <View style={Instrumentstyles.ContentBox} key={index}>
                                        <Title style={Instrumentstyles.InstrumentTitle}>{item.title}</Title>
                                        <View style={Instrumentstyles.ContentBoxDetail}>
                                            <View style={Instrumentstyles.InsCntBox}>
                                                <Text style={Instrumentstyles.LabelText}>Make/Mode</Text>
                                                <Text style={Instrumentstyles.ValueText}>{item.makemode}</Text>
                                            </View>
                                            <View style={Instrumentstyles.InsCntBox}>
                                                <Text style={[Instrumentstyles.LabelText, Instrumentstyles.AlignRight]}>Range</Text>
                                                <Text style={[Instrumentstyles.ValueText, Instrumentstyles.AlignRight]}>{item.range}</Text>
                                            </View>
                                        </View>

                                        <View style={Instrumentstyles.ContentBoxDetail}>
                                            <View style={Instrumentstyles.InsCntBox}>
                                                <Text style={[Instrumentstyles.LabelText]}>Accuracy</Text>
                                                <Text style={[Instrumentstyles.ValueText]}>{item.accuracy}</Text>
                                            </View>
                                            <View style={Instrumentstyles.InsCntBox}>
                                                <Text style={[Instrumentstyles.LabelText, Instrumentstyles.AlignRight]}>Qty</Text>
                                                <Text style={[Instrumentstyles.ValueText, Instrumentstyles.AlignRight]}>{item.qty}</Text>
                                            </View>
                                        </View>

                                    </View>
                                )

                            })
                        }

                    </View>
                </ScrollView>

            </View>
        );
    }
}

export default InstrumentsView;
