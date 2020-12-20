import React, { Component } from 'react';
import { View, Text, ScrollView, ImageBackground, Image, StatusBar, TouchableOpacity, RefreshControl } from 'react-native';
import Contractsstyles from './styles';
import globalStyles from '../../assets/css/globalStyles';
import SplashScreen from 'react-native-splash-screen';
import * as navigationActions from '../../actions/navigationActions';



class ContractsView extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    componentDidMount() {
        SplashScreen.hide();

    }

    // ============ on page refresh============ //
    _refreshContracts = () => {
        // you must return Promise everytime
        const { getContracts } = this.props;
        return new Promise((resolve) => {
        setTimeout(() => {
            getContracts();
            resolve();
        }, 500)
        })
    }

    render() {
        const image = require('../../assets/img/img_loginback.png');
        const { contracts } = this.props;

        let contractsdata = [];
        if (contracts) {
            contractsdata = contracts;
        }

        return (
            <View style={Contractsstyles.container}>
                <StatusBar
                    barStyle="light-content"
                    // dark-content, light-content and default
                    hidden={false}
                    //To hide statusBar
                    backgroundColor="#a80f19"
                    //Background color of statusBar
                    translucent={false}
                    //allowing light, but not detailed shapes
                    networkActivityIndicatorVisible={true}
                />
                <ImageBackground source={image} style={globalStyles.ImageBack} resizeMode="cover">
                    <ScrollView refreshControl={
                        <RefreshControl onRefresh={() => { this._refreshContracts() }} />
                        }>
                        <View style={Contractsstyles.InnerContainer}>
                            <View style={[Contractsstyles.ContainerMargin, Contractsstyles.MarBtm20]}>
                                <View style={Contractsstyles.InnerTitle}>
                                    <View style={Contractsstyles.HomeLeft}>
                                        <Image source={require('../../assets/images/img_contracts.png')} resizeMode="contain" style={Contractsstyles.InnerTitleIcon} />
                                        <Text style={Contractsstyles.InnerTitleText}>Contracts</Text>
                                    </View>

                                </View>

                                {this.rendercontractslist()}
                            </View>

                        </View>
                    </ScrollView>
                </ImageBackground>
            </View >
        );
    }

    rendercontractslist = () => {
        let { login_token, contracts } = this.props;
        let contractsdata = []
        if (contracts) {
          contractsdata = contracts;
        }
        let items = [];
        contractsdata.forEach(item => {
          //console.log(item);
            items.push(
                <View key={item.id} style={Contractsstyles.WhiteBox}>
                    <Text style={[Contractsstyles.ContcatsTitle, globalStyles.FontLight]}>Covid 19 </Text>
                    <Text style={[Contractsstyles.EventDesc, globalStyles.FontRegular]}>Description of contract</Text>
                    <TouchableOpacity style={Contractsstyles.OutlineBtn}>
                        <Text style={Contractsstyles.BtnlinkText}>Detail</Text>
                    </TouchableOpacity>
                    <View style={Contractsstyles.FlexRow}>
                        <TouchableOpacity style={Contractsstyles.FillBtn}>
                            <Text style={Contractsstyles.FillBtnlinkText}>Signed</Text>
                        </TouchableOpacity>
                        <Text style={[Contractsstyles.EventDesc, globalStyles.FontRegular]}>06:00 08/04/2020</Text>
                    </View>
                </View>) //get data from AccordianElement components
        });
          
        return items;
    }
}

export default ContractsView;
