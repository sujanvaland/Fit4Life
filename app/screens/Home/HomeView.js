import React, { Component } from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';

import Homestyles from './styles';
import { SliderBox } from "react-native-image-slider-box";
import { Avatar, Button, IconButton, Card, Title, Paragraph, List } from 'react-native-paper';
import globalStyles from '../../assets/css/globalStyles';
import Icon from 'react-native-ionicons';
import SplashScreen from 'react-native-splash-screen';
import * as navigationActions from '../../actions/navigationActions';



class HomeView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            images: [
                require('../../assets/images/img_slide1.jpg'),
                require('../../assets/images/img_slide2.jpg'),
                require('../../assets/images/img_slide3.jpg'),
            ]
        }
    }


    componentDidMount() {
        SplashScreen.hide();

    }

    navigateToAirVelocity = (id) => {
        // console.log(id);
        navigationActions.navigateToAirVelocity(id);
    };

    navigateToAboutus = () => {
        navigationActions.navigateToAboutus();
    }


    render() {

        let HomeSer = [];
        if (this.props.Services) {
            HomeSer = this.props.Services;
        }

        return (
            <View style={Homestyles.container}>

                <ScrollView>
                    <View>
                        <View style={Homestyles.Homebanner}>
                            <SliderBox images={this.state.images}
                                autoplay
                                circleLoop
                                resizeMethod={'resize'}
                                resizeMode={'cover'}
                                sliderBoxHeight={'100%'}
                                inactiveDotColor="#ffffff"
                                paginationBoxStyle={{
                                    position: "absolute",
                                    bottom: 15,
                                    padding: 0,
                                    alignItems: "center",
                                    alignSelf: "center",
                                    justifyContent: "center",
                                    paddingVertical: 0
                                }}
                                dotStyle={{
                                    width: 10,
                                    height: 10,
                                    borderRadius: 5,
                                    borderWidth: 1,
                                    borderColor: 'white',
                                    marginHorizontal: 0,
                                    padding: 0,
                                    margin: 0,
                                    backgroundColor: "rgba(255,255,255,0.5)"
                                }}
                                ImageComponentStyle={{ borderRadius: 0, width: '100%', marginTop: 0, }}
                                imageLoadingColor="#00c6f0"
                            />
                        </View>


                        <Card>
                            <Card.Content>
                                <Title style={globalStyles.PageTitle}>Welcome to FILTECH SOLUTIONS</Title>
                                <Text style={[Homestyles.SubTitle, Homestyles.MarginBottom10]}>An ISO 9001:2015 Certified company</Text>
                                <Paragraph style={globalStyles.ParaText}>We are Fil Tech a reputed name in offering various validation services which includes Air Velocity Measurement, PAO / HEPA Filter Integrity LeakTest, Non-Viable ParticleCountTest, RoomPressurizationTest, AirflowVisualizationTest and Recovery Test. </Paragraph>
                                <TouchableOpacity onPress={() => this.navigateToAboutus()}>
                                    <Text style={Homestyles.LinkButton}>Read More</Text>
                                </TouchableOpacity>
                            </Card.Content>
                        </Card>
                        <Card style={Homestyles.MarTop10}>
                            <Card.Content>
                                <Title style={globalStyles.PageTitle}>Services</Title>
                                <View style={Homestyles.ServicesBoxList}>
                                    {
                                        HomeSer.map((item, index) => {
                                            return (

                                                <View key={index}>
                                                    <TouchableOpacity style={Homestyles.ServicesBox} onPress={() => this.navigateToAirVelocity(item)}>
                                                        <Text style={Homestyles.ServicesTitle}>{item.title}</Text>
                                                        <Text style={Homestyles.SubTitle}>{item.subtitle}</Text>
                                                    </TouchableOpacity>
                                                </View>

                                            )
                                        })
                                    }
                                </View>



                            </Card.Content>
                        </Card>
                    </View>
                </ScrollView>
            </View >
        );
    }
}

export default HomeView;
