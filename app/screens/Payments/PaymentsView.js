import React, { Component } from 'react';
import { View, Text, ScrollView, TouchableOpacity, ImageBackground, Image, RefreshControl } from 'react-native';
import Paymentsstyles from './styles';
import SplashScreen from 'react-native-splash-screen';
import { get } from 'lodash';
import { OverlayActivityIndicatorElement } from "../../components";



class PaymentsView extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }


    componentDidMount() {
        SplashScreen.hide();

    }

    getParsedDate(strDate) {//get date formate
        if (strDate != "") {
          var dateArray = strDate.split('-');
          let date = dateArray[2] + "/" + dateArray[1] + "/" + dateArray[0];
          return date;
        }
        return "";
      }

    getTeansactionDate(strDate) {//get date formate
        if (strDate != "") {
          var strSplitDate = String(strDate).split('T');
          var dateArray = strSplitDate[0].split('-');
          let date = dateArray[2] + "/" + dateArray[1] + "/" + dateArray[0];
          return date;
        }
        return "";
      }

      getTeansactionTime(strDate) {//get date formate
        if (strDate != "") {
            var strSplitTime = String(strDate).split('T');
            var TimeArray = strSplitTime[1];
            var newstrSplitTime = String(TimeArray).split('Z');
            var newtimeArray = newstrSplitTime[0];
            return newtimeArray;
          }
          return "";
      }

    // ============ on page refresh============ //
    _refreshPayments = () => {
        // you must return Promise everytime
        const { getPayments } = this.props;
        return new Promise((resolve) => {
        setTimeout(() => {
            getPayments();
            resolve();
        }, 500)
        })
    }


    render() {
        const image = require('../../assets/img/img_loginback.png');
        const { loading, payments } = this.props;

        let paymentsdata = [];
        if (payments) {
            paymentsdata = payments;
        }

        return (
            <View style={Paymentsstyles.container}>
                {
                    get(loading, 'isLoading') && <OverlayActivityIndicatorElement />
                }
                <ImageBackground source={image} style={Paymentsstyles.ImageBack} resizeMode="cover">
                    <ScrollView refreshControl={
                        <RefreshControl onRefresh={() => { this._refreshPayments() }} />
                        }>
                        <View style={Paymentsstyles.InnerContainer}>
                            <View style={[Paymentsstyles.ContainerMargin, Paymentsstyles.MarBtm20]}>
                                <View style={Paymentsstyles.InnerTitle}>
                                    <View style={Paymentsstyles.CustomerFeedLeft}>
                                        <Image source={require('../../assets/img/icon_payments.png')} resizeMode="contain" style={Paymentsstyles.InnerTitleIcon} />
                                        <Text style={Paymentsstyles.InnerTitleText}>Payments</Text>
                                    </View>
                                </View>

                                {this.renderpaymentslist()}
                            </View>
                        </View>
                    </ScrollView>
                </ImageBackground>
            </View >
        );
    }

    renderpaymentslist = () => {
        let { login_token, payments } = this.props;
        let paymentsdata = []
        if (payments) {
          paymentsdata = payments;
        }
        let items = [];
        paymentsdata.forEach(item => {
          //console.log(item);
          if(item.userPlan)
          {
            items.push(
                <View key={item.id} style={Paymentsstyles.RedBox}>
                    <View style={Paymentsstyles.PaymentTitle}>
                        <Text style={Paymentsstyles.PaymentTtlText}>{item.userPlan.plan.name}</Text>
                        <Text style={Paymentsstyles.PaymentPrice}>${item.amount}</Text>
                    </View>
                    <View style={Paymentsstyles.BanktransferDate}>
                        <Text style={Paymentsstyles.Banktransfer}>{item.paymentMethod} </Text>
                        <Text style={Paymentsstyles.DateToend}>{this.getParsedDate(item.userPlan.startDate)} to {this.getParsedDate(item.userPlan.expirationDate)}</Text>
                    </View>
                    <View style={Paymentsstyles.BottomDate}>
                        <Text style={Paymentsstyles.BottomDateText}>{this.getTeansactionTime(item.transactionDate)} {this.getTeansactionDate(item.transactionDate)}</Text>
                    </View>
    
                </View>) //get data from AccordianElement components
          }
        });
          
        return items;
    }
}

export default PaymentsView;
