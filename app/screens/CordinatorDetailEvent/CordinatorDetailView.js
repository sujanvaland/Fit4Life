import React, { Component } from 'react';
import { View, Text, StatusBar, ScrollView, ImageBackground, Image, TouchableOpacity } from 'react-native';
import { get } from 'lodash';
import { TextBoxElement, OverlayActivityIndicatorElement } from "../../components";
import { ListItem, Radio } from "native-base";
import CordinatorDetailstyles from './styles';
import { SliderBox } from "react-native-image-slider-box";
import { Avatar, Button, IconButton, Card, Title, Paragraph, List } from 'react-native-paper';
import globalStyles from '../../assets/css/globalStyles';
import Icon from 'react-native-ionicons';
import SplashScreen from 'react-native-splash-screen';
import * as navigationActions from '../../actions/navigationActions';
import { Rating, AirbnbRating } from 'react-native-ratings';
import ApiConstants from '../../api/ApiConstants';
import AsyncStorage from '@react-native-community/async-storage';
import Resource_EN from '../../config/Resource_EN';
const { English,Spanish } = Resource_EN;
import Modal from "react-native-modal";
import Styles from '../../config/styles';
import Toast from 'react-native-simple-toast';
var RNFS = require('react-native-fs');
import ImagePicker from 'react-native-image-crop-picker';
const downloadManager = require("react-native-simple-download-manager");



class CordinatorDetailView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isModalVisible: false,
            showcheckuserForm: false,
            captureOptionModal: false,
            isValidEmail: true,
            errorMessagesEmail: false,
            postCheckUserEmail: {
                eventID: '',
                email: ''
            },
            uploadPer: 0,
            uploading: false,
            tempLoading: false,
            lang:{},
        }
    }


    async componentDidMount() {
        SplashScreen.hide();
        const language = await AsyncStorage.getItem('language');
        //console.log(language);
        if(language == "sp"){
          this.setState({lang:Spanish})
        }else{
          this.setState({lang:English})
        }
    }

    DownloadFile = (downloadurl) =>{
        console.log(downloadurl);
        downloadManager.download(downloadurl)
        .then(response => {
          alert("Download success!");
        })
        .catch(err => {
          alert("Download failed!");
        });
    }

    toggleModal(fieldName,eventID) {
        console.log(eventID);
        this.setState({ isModalVisible: !this.state.isModalVisible });
        this.setState({ eventID: eventID });
        if (fieldName == 'Checkuseremail') {
            this.setState({ showcheckuserForm: true });
            this.setState(prevState => ({
                postCheckUserEmail: {                   // object that we want to update
                ...prevState.postCheckUserEmail, // keep all other key-value pairs
                eventID: eventID
                }
            }), function () {
            });
        }
        else {
        this.setState({ showcheckuserForm: false });
        }
    }

    toggleModal_new(fieldName,eventAttendanceId) {
        //console.log(eventAttendanceId);
        this.setState({ isModalVisible: !this.state.isModalVisible });
        this.setState({ eventAttendanceId: eventAttendanceId });
        if (fieldName == 'captureOption') {
          this.setState({ captureOptionModal: true });
        } else {
          this.setState({ captureOptionModal: false });
        }
    }
    
    closeModal = () => {
        this.setState({ isModalVisible: false });
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

    navigateToUserHealthProfileDetail = (obj) => {
        navigationActions.navigateToUserHealthProfileDetail(obj);
    };

    sendArrivalConfirmation = (eventAttendanceID) => {
        this.props.sendArrivalConfirmation(eventAttendanceID);
    };

    cancelArrivalConfirmation = (eventAttendanceID) => {
        this.props.cancelArrivalConfirmation(eventAttendanceID);
    };

    // Check User Email Code Start

    onEmailValueChange = (fieldName, value) => {
        this.setState(prevState => ({
        postCheckUserEmail: {                   // object that we want to update
            ...prevState.postCheckUserEmail, // keep all other key-value pairs
            [fieldName]: value
        }
        }), function () {
        });
    }

    _onResetCheckUserEmailForm = () => {
        this.setState({
        postCheckUserEmail: {
            email: ''
        }
        });
    };

    _onCancelCheckUserEmailForm = () => {
        this.setState({
        postCheckUserEmail: {
            email: ''
        }
        });
        this.closeModal();
    };

    _onCheckUserEmail = () => {
        console.log(this.state.postCheckUserEmail);
        if (this.validateCheckUserEmail()) {
            //console.log(this.state.postCheckUserEmail);
            this.props.checkUserByEmail(this.state.postCheckUserEmail);
            this.setState({
            postCheckUserEmail: {
                email: ''
            }
            });
            this.closeModal();
        }
    };

    validateCheckUserEmail = () => {
        //====== title ======//
        let isValidEmail;
        let allCheckUserEmailInputsValidated;

        
        if (this.state.postCheckUserEmail.email == '') {
            isValidEmail = false;
        }
        else {
            if (this.validateEmail(this.state.postCheckUserEmail.email)) {
                isValidEmail = true;
              }
              else {
                Toast.show("Invalid Email", Toast.SHORT);
                isValidEmail = false;
              } 
        }

        if (isValidEmail) {
        allCheckUserEmailInputsValidated = true;
        }
        else {
        Toast.show("Please check all fields", Toast.SHORT);
        }

        this.setState({
        isValidEmail: isValidEmail,
        errorMessagesEmail: !isValidEmail
        });

        return allCheckUserEmailInputsValidated;
    }

    validateInputs = (fieldName) => {

        if (fieldName == "email") {
            if (this.state.postCheckUserEmail.email == "") {
              this.setState({ isValidEmail: false });
            }
            else {
              if (this.validateEmail(this.state.postCheckUserEmail.email)) {
                this.setState({ isValidEmail: true });
              }
              else {
                Toast.show("Invalid Email", Toast.SHORT);
                this.setState({ isValidEmail: false });
              }
            }
          }
    };

    validateEmail = (value) => {
        if (/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/g.test(value)) {
          return true;
        }
        return false;
      }
    

    // Capture Code Start
      static getDerivedStateFromProps(Props, state) {
        let { loading } = Props;
    
        let loadingflag = true;
        if (!get(loading, 'isLoading')) {
          loadingflag = false;
        }
    
        return {
          tempLoading: loadingflag
        }
      }
    
      _onPresscaptureOption = (optionvalue) => {
    
        this.setState({ isModalVisible: false });
    
        if (optionvalue == 'takephoto') {
          ImagePicker.openCamera({
            width: 400,
            height: 400,
            cropping: true,
          }).then(image => {
            //console.log(image);
            this._setCapturePhotoDetails(image);
          }).catch((error) => {
            console.log(error);
            Toast.show("User cancelled document picker", Toast.LONG);
          });
        }
    
        if (optionvalue == 'chooseImage') {
          ImagePicker.openPicker({
            width: 400,
            height: 400,
            cropping: true
          }).then(image => {
            //console.log(image);
            this._setCapturePhotoDetails(image);
          }).catch((error) => {
            Toast.show("User cancelled document picker", Toast.LONG);
          });
        }
    
        // if(optionvalue=='chooseFile')
        // {
        //   this.SelectFile();
        // }
      };
    
      _setCapturePhotoDetails = (image) => {
        if (image.mime == "image/png" || image.mime == "image/jpeg"
          || image.mime == "image/gif"
          || image.mime == "image/jpeg"
          || image.mime == "image/pjpeg"
        ) {
          if ((image.size / 1000000) > 10) {
            Toast.show("Photo should be of maximum 10 MB", Toast.SHORT);
            this.setState({
              fileDetail: false,
              fileName: '',
              fileType: '',
              fileSize: 0
            })
          }
          else {
    
            const splitdata = image.path.split('Pictures/');
            let getfileName = splitdata[1];
            this.setState({
              fileDetail: true,
              fileName: getfileName,
              fileUrl: image.path,
              fileType: image.mime,
              fileSize: image.size,
              selectedFile: getfileName
            });
    
            this.TryUploadFile();
          }
        }
        else {
          Toast.show("Invalid Photo Type", Toast.LONG);
        }
      }
    
      TryUploadFile = async () => {
    
        const { login_token, coordinatorEventDetail } = this.props;
        
        let coordinatoreventdata = {};
        if (coordinatorEventDetail) {
            coordinatoreventdata = coordinatorEventDetail.length > 0 ? coordinatorEventDetail[0] : {};
        }
        
        let eventAttendanceId = this.state.eventAttendanceId;
        let filtoupload = this.state.fileUrl;
    
        const imagePath = `${RNFS.DocumentDirectoryPath}/${new Date().toISOString()}.jpg`.replace(/:/g, '-');
    
        if (Platform.OS === 'ios') {
          RNFS.copyAssetsFileIOS(filtoupload, imagePath, 0, 0)
            .then(res => { })
            .catch(err => {
              console.log('ERROR: image file write failed!!!');
              console.log(err.message, err.code);
            });
        } else if (Platform.OS === 'android') {
          RNFS.copyFile(filtoupload, imagePath)
            .then(res => { })
            .catch(err => {
              console.log('ERROR: image file write failed!!!');
              console.log(err.message, err.code);
            });
        }
    
        const split = this.state.fileName.split('.');
        let FileNameextention = split[1];
        const URL = ApiConstants.BASE_URL;
        var uploadUrl = URL + "/" + ApiConstants.APPENDROUTINE;
        var files = [
          {
            name: 'routineFile',
            filename: this.state.fileName,
            filepath: imagePath,
            filetype: this.state.fileType
          }
        ];
    
        var uploadBegin = (response) => {
          this.setState({
            uploading: true,
            tempLoading: false,
          })
        };
    
        var uploadProgress = (response) => {
          var percentage = Math.floor((response.totalBytesSent / response.totalBytesExpectedToSend) * 100);
          this.setState({ uploadPer: percentage });//Progress percentage
        };
    
      
        //console.log(eventAttendanceId);
        //upload files
        RNFS.uploadFiles({
          toUrl: uploadUrl,
          files: files,
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Authorization': 'Bearer '+login_token,
          },
          fields: {
            'eventAttendanceId':eventAttendanceId.toString()
          },
          begin: uploadBegin,
          progress: uploadProgress
        }).promise.then((response) => {
          let res = JSON.parse(response.body);
          this.setState({
            uploading: false,
            tempLoading: true
          });
          console.log("upload response");
          console.log(res);
          if (res?.status != "400") {
            Toast.show("Append Routine successfully.", Toast.LONG);
            this.setState({
              uploadPer: 0,
              uploading: false,
              tempLoading: true
            });
            this.deleteFile();
            this.props.loadCoordinatorEventDetail(coordinatoreventdata.id);
            this.props.loadEventAttendances(coordinatoreventdata.id);
            navigationActions.navigateToCordinatorDetailEvent({ eventid: coordinatoreventdata.id});
          }
          else {
            Toast.show(res.Message, Toast.LONG);
            this.deleteFile();
          }
        })
          .catch((err) => {
            console.log("123");
            console.log(err);
            Toast.show("Failed uploading file", Toast.SHORT);
            this.deleteFile();
          });
      }
    
      deleteFile = () => {
        this.setState({
          fileDetail: false,
          fileUrl: '',
          fileName: '',
          fileSize: 0
        })
        this.setState({ uploading: false, tempLoading: true })
      }
    
    render() {
        const { lang, uploading } = this.state;
        let { loading, coordinatorEventDetail,eventAttendancesList } = this.props;
        let coordinatoreventdata = {};
        
        if (coordinatorEventDetail) {
            coordinatoreventdata = coordinatorEventDetail.length > 0 ? coordinatorEventDetail[0] : {};
        }

        //console.log(coordinatoreventdata);

        let eventAttendancesListArr = [];
        if(eventAttendancesList && eventAttendancesList != undefined && eventAttendancesList.length > 0){
            eventAttendancesList.map((item) =>{
                eventAttendancesListArr.push(
                    <View key={item.id} style={CordinatorDetailstyles.GrayBox}>
                        <View style={CordinatorDetailstyles.FlexGrayBox}>
                            <TouchableOpacity onPress={() => this.navigateToUserHealthProfileDetail({ userId: item.user.id})}>
                                <Text style={CordinatorDetailstyles.FlexGrayBoxText1}>{item.user.firstName} {item.user.lastName}</Text>
                            </TouchableOpacity>
                            { item.customerArrivalTime &&
                                <Text style={CordinatorDetailstyles.TimerBox}>{this.getParsedTime(item.customerArrivalTime)}</Text>
                            }
                        </View>
                        <View style={CordinatorDetailstyles.TouchPinBox}>
                            
                            <View>
                                {
                                    item.fileUrl ==null &&
                                    <TouchableOpacity style={CordinatorDetailstyles.NewRoutineIcon} onPress={() => this.toggleModal_new("captureOption",item.id)}>
                                        <Image source={require('../../assets/img/icon_touchpin.png')} resizeMode='contain' style={CordinatorDetailstyles.TouchPin} />
                                    </TouchableOpacity>
                                }
                                {
                                    item.fileUrl !=null &&
                                    <TouchableOpacity onPress={() => this.DownloadFile(item.fileUrl)}>
                                        <Text style={CordinatorDetailstyles.NewRoutine}>{lang.NewRoutine}</Text>
                                    </TouchableOpacity>
                                }
                            </View>

                            { !item.customerArrivalTime &&
                                <TouchableOpacity style={CordinatorDetailstyles.ButtionMaron} onPress={() => this.sendArrivalConfirmation(item.id)}>
                                    <Text style={CordinatorDetailstyles.ButtonMaronText}>Register</Text>
                                </TouchableOpacity>
                            }

                            { item.customerArrivalTime &&
                                <TouchableOpacity style={CordinatorDetailstyles.ButtionMaron} onPress={() => this.cancelArrivalConfirmation(item.id)}>
                                    <Text style={CordinatorDetailstyles.ButtonMaronText}>Cancel</Text>
                                </TouchableOpacity>
                            }
                        </View>
                    </View>
                )
            });
        }

        const image = require('../../assets/img/img_loginback.png');
        const WATER_IMAGE = require('../../assets/img/water.png')

        return (
            <View style={CordinatorDetailstyles.container}>
                {
                    (get(loading, 'isLoading') || uploading) && <OverlayActivityIndicatorElement />
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

                    <ScrollView>
                        <View style={CordinatorDetailstyles.InnerContainer}>

                            <View style={[CordinatorDetailstyles.FullWidthTitleBack, CordinatorDetailstyles.MarTop20]}>

                                <View style={[CordinatorDetailstyles.InnerTitle, CordinatorDetailstyles.MarTopzero]}>
                                    <View style={CordinatorDetailstyles.CordinatorDetailLeft}>
                                        <Image source={require('../../assets/images/icon_calendar.png')} resizeMode="contain" style={CordinatorDetailstyles.InnerTitleIcon} />
                                        {
                                            coordinatoreventdata.name &&
                                            <Text style={CordinatorDetailstyles.InnerTitleText}>{coordinatoreventdata.name}</Text>
                                        }
                                    </View>
                                    <Text style={CordinatorDetailstyles.ResultText}>{this.getParsedTime(coordinatoreventdata.startTime)} {this.getParsedDate(coordinatoreventdata.startTime)}</Text>
                                </View>
                                
                                {
                                    coordinatoreventdata.linkUrl &&
                                    <View style={[CordinatorDetailstyles.InnerTitle, CordinatorDetailstyles.MarTopzero]}>
                                        <View style={CordinatorDetailstyles.CordinatorDetailLeft}>
                                            <Image source={require('../../assets/img/icon_link.png')} resizeMode="contain" style={CordinatorDetailstyles.InnerTitleIcon} />
                                            <View style={CordinatorDetailstyles.LinkViewBox}>
                                                <Text style={CordinatorDetailstyles.InnerTitleText}>{lang.Link}</Text>
                                                <Text style={CordinatorDetailstyles.LinkTextBox}>{coordinatoreventdata.linkUrl}</Text>
                                            </View>
                                        </View>
                                        <TouchableOpacity style={CordinatorDetailstyles.BtnGo} onPress={ ()=> Linking.openURL(coordinatoreventdata.linkUrl) }>
                                            <Text style={CordinatorDetailstyles.BtnGotext}>{lang.Go}</Text>
                                        </TouchableOpacity>
                                    </View>
                                }

                                <View style={[CordinatorDetailstyles.InnerTitle, CordinatorDetailstyles.MarTopzero]}>
                                    <View style={CordinatorDetailstyles.CordinatorDetailLeft}>
                                        <Image source={require('../../assets/images/icon_calendar.png')} resizeMode="contain" style={CordinatorDetailstyles.InnerTitleIcon} />
                                        <Text style={CordinatorDetailstyles.InnerTitleText}>{lang.Assistants}</Text>
                                    </View>
                                    <View style={CordinatorDetailstyles.countPlus}>
                                        <Text style={CordinatorDetailstyles.ResultText}>{eventAttendancesListArr.length}/{coordinatoreventdata.capacity}</Text>
                                        <TouchableOpacity style={CordinatorDetailstyles.BtnPlus} onPress={() => this.toggleModal("Checkuseremail", coordinatoreventdata.id)}>
                                            <Image source={require('../../assets/img/icon_plus.png')} resizeMode="contain" style={CordinatorDetailstyles.BtnPlusIcon} />
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </View>
                            {
                                eventAttendancesListArr.length > 0 &&
                                <View style={CordinatorDetailstyles.ContainerMargin}>
                                    <View style={CordinatorDetailstyles.flexBox}>
                                        {
                                            this.state.uploading &&
                                            <Text style={CordinatorDetailstyles.selectText}>{this.state.uploadPer}%</Text>
                                        }
                                    </View>
                                    <View style={CordinatorDetailstyles.WhiteBox}>
                                        {
                                            eventAttendancesListArr
                                        }
                                    </View>
                                </View>
                            }

                        </View>
                    </ScrollView>
                </ImageBackground>
                <Modal onBackdropPress={() => this.closeModal()}
                    isVisible={this.state.isModalVisible}
                    onBackButtonPress={() => this.closeModal()}>
                    <View style={[CordinatorDetailstyles.modalDocument]}>
                        <ScrollView>
                        {
                            this.state.showcheckuserForm &&
                            <View>
                            <ScrollView>
                                <View style={CordinatorDetailstyles.formSpace}>
                                <View style={CordinatorDetailstyles.formInput}>
                                    <TextBoxElement
                                        placeholder={lang.Email}
                                        value={this.state.postCheckUserEmail.email}
                                        autoCapitalize={'none'}
                                        onChangeText={value => this.onEmailValueChange("email", value)}
                                        isvalidInput={this.state.isValidEmail}
                                        onEndEditing={() => this.validateInputs("email")}
                                        maxLength={200}
                                        caretHidden
                                        autoCorrect={false}
                                        keyboardType='email-address'
                                        autoCompleteType='email'
                                    />
                                </View>
                                </View>
                                <View style={[Styles.buttonBox, Styles.flexContent, Styles.contactBtn, CordinatorDetailstyles.pad15]}>
                                <TouchableOpacity activeOpacity={0.7} style={CordinatorDetailstyles.button}
                                    onPress={() => this._onCheckUserEmail()}>
                                    <Text style={Styles.textBtn}>{lang.CheckEmail}</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={[Styles.btnWidthOne, Styles.borderLeft, CordinatorDetailstyles.ButtonMain]}
                                    onPress={() => this._onResetCheckUserEmailForm()}>
                                    <Text style={CordinatorDetailstyles.resetText}>{lang.Reset}</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={[Styles.btnWidthOne, Styles.borderLeft, CordinatorDetailstyles.ButtonMainBlack]}
                                    onPress={() => this._onCancelCheckUserEmailForm()}>
                                    <Text style={[Styles.textBtn, CordinatorDetailstyles.resetText]}>{lang.Cancel}</Text>
                                </TouchableOpacity>
                                </View>
                            </ScrollView>
                            </View>
                        }
                        {
                            this.state.captureOptionModal == true &&
                            <View style={CordinatorDetailstyles.listRadio}>
                                <ListItem key='1' style={[CordinatorDetailstyles.radioList,
                                CordinatorDetailstyles.radioListStyle]}
                                onPress={() => { this._onPresscaptureOption('takephoto') }}>
                                <Radio style={CordinatorDetailstyles.radioListButton} />
                                <Text style={[CordinatorDetailstyles.radioListText,
                                CordinatorDetailstyles.radioTextWidth, CordinatorDetailstyles.radioListCenter]}>{lang.TakePhoto}</Text>
                                </ListItem>
                                <ListItem key='2' style={[CordinatorDetailstyles.radioList,
                                CordinatorDetailstyles.radioListBorder,
                                CordinatorDetailstyles.radioListStyle]}
                                onPress={() => { this._onPresscaptureOption('chooseImage') }}>
                                <Radio style={CordinatorDetailstyles.radioListButton} />
                                <Text style={[CordinatorDetailstyles.radioListText,
                                CordinatorDetailstyles.radioTextWidth, CordinatorDetailstyles.radioListCenter]}>{lang.ChooseImage}</Text>
                                </ListItem>
                            </View>
                            }
                        </ScrollView>
                    </View>
                </Modal>
            </View >
        );
    }
}

export default CordinatorDetailView;
