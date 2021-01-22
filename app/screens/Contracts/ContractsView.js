import React, { Component } from 'react';
import { View, Text, ScrollView, ImageBackground, Image, StatusBar, TouchableOpacity, RefreshControl } from 'react-native';
import Contractsstyles from './styles';
import globalStyles from '../../assets/css/globalStyles';
import SplashScreen from 'react-native-splash-screen';
import * as navigationActions from '../../actions/navigationActions';
import Modal from "react-native-modal";
import { get } from 'lodash';
import { OverlayActivityIndicatorElement } from "../../components";



class ContractsView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isModalVisible: false,
            contractDetails:null
        }
    }

    componentDidMount() {
        SplashScreen.hide();
    }

    toggleModal(contractDetails) {
        this.setState({ isModalVisible: !this.state.isModalVisible });
        this.setState({ contractDetails: contractDetails });
      }
    
    closeModal = () => {
        this.setState({ isModalVisible: false });
    }

    signContract(contractID) {
        if(contractID > 0)
        {
            this.props.signContract(contractID);
        }
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

    getParsedDate(strDate) {
        //get date formate
        if (strDate != "") {
          let month_names = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
          var strSplitDate = String(strDate).split('T');
          var dateArray = strSplitDate[0].split('-');
          let monthint = parseInt(dateArray[1]);
          let date = month_names[monthint - 1] + " " + dateArray[2] + ", " + dateArray[0];
          return date;
        }
        return "";
    }

    getParsedTime(strDate) {//get date formate
        if (strDate != "") {
          var strSplitTime = String(strDate).split('T');
          var TimeArray = strSplitTime[1];
          var newstrSplitTime = String(TimeArray).split('Z');
          var newtimeArray = newstrSplitTime[0];
          return newtimeArray;
        }
        return "";
      }

    render() {
        const image = require('../../assets/img/img_loginback.png');
        const { loading, contracts } = this.props;

        let contractsdata = [];
        if (contracts) {
            contractsdata = contracts;
        }

        return (
            <View style={Contractsstyles.container}>
                {
                    get(loading, 'isLoading') && <OverlayActivityIndicatorElement />
                }
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
                <Modal onBackdropPress={() => this.closeModal()}
                    isVisible={this.state.isModalVisible}
                    onBackButtonPress={() => this.closeModal()}>
                    <View style={[Contractsstyles.modalDocument]}>
                        {
                            this.state.contractDetails &&
                            <ScrollView>
                                <View style={Contractsstyles.formSpace}>
                                    <Text>{this.state.contractDetails.contract.description}</Text>
                                </View>
                            </ScrollView>
                        }
                    </View>
                </Modal>
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
                    <Text style={[Contractsstyles.ContcatsTitle, globalStyles.FontLight]}>{item.contract.name} </Text>
                    <Text style={[Contractsstyles.EventDesc, globalStyles.FontRegular]}>{item.contract.smallDescription}</Text>
                    <TouchableOpacity style={Contractsstyles.OutlineBtn} onPress={() => this.toggleModal(item)}>
                        <Text style={Contractsstyles.BtnlinkText}>Detail</Text>
                    </TouchableOpacity>
                    <View style={Contractsstyles.FlexRow}>
                        { !item.signDate &&
                            <TouchableOpacity style={Contractsstyles.FillBtn} onPress={() => this.signContract(item.contract.id)}>
                                <Text style={Contractsstyles.FillBtnlinkText}>Sign Contract</Text>
                            </TouchableOpacity>
                        }
                        { item.signDate &&
                            <Text style={[Contractsstyles.EventDesc, globalStyles.FontRegular]}>{this.getParsedTime(item.signDate)} {this.getParsedDate(item.signDate)}</Text>
                        }
                    </View>
                </View>) //get data from AccordianElement components
        });
          
        return items;
    }
}

export default ContractsView;
