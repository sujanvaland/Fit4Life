import React, { Component } from 'react';
import { get } from 'lodash';
import { View, Text, Image, TouchableOpacity} from 'react-native';
import { ListItem, Radio } from "native-base";
import { OverlayActivityIndicatorElement } from "../../components";
import EditProfileImageStyles from './EditProfileImageStyles';
import globalStyles from '../../assets/css/globalStyles';
import PropTypes from 'prop-types';
import Resource_EN from '../../config/Resource_EN';
import { TextInput ,ScrollView} from 'react-native-gesture-handler';
import ApiConstants from '../../api/ApiConstants';
import Modal from "react-native-modal";
var RNFS = require('react-native-fs');
import ImagePicker from 'react-native-image-crop-picker';
import * as navigationActions from 'app/actions/navigationActions';
import AsyncStorage from '@react-native-community/async-storage';
import Toast from 'react-native-simple-toast';


class EditProfileImageView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      enableScroll:false,
      isvalidvone: false,
      isModalVisible: false,
      captureOptionModal: false,
      uploadPer: 0,
      uploading: false,
      tempLoading: false
    }
  }

  navigateToMyAccount = () => {
    // const { loadProfileImage } = this.props;
    // loadProfileImage();
    navigationActions.navigateToMyAccount();
  }

  toggleModal(fieldName) {
    this.setState({ isModalVisible: !this.state.isModalVisible });
    if (fieldName == 'captureOption') {
      this.setState({ captureOptionModal: true });
    } else {
      this.setState({ captureOptionModal: false });
    }
  }

  closeModal = () => {
    this.setState({ isModalVisible: false });
  }

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

    this.setState({ isModalVisible: !this.state.isModalVisible });

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

    const { login_token,customerguid } = this.props;
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
    var uploadUrl = URL + "/" + ApiConstants.UPDATEPROFILEIMAGE;
    var files = [
      {
        name: 'profilePictureUrl',
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

  

    //upload files
    RNFS.uploadFiles({
      toUrl: uploadUrl,
      files: files,
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Authorization': 'Bearer '+login_token,
        'customerguid': customerguid,
      },
      fields: {
        'userguid': customerguid
      },
      begin: uploadBegin,
      progress: uploadProgress
    }).promise.then((response) => {
      let res = JSON.parse(response.body);
      this.setState({
        uploading: false,
        tempLoading: true
      });
      //console.log(res);
      if (res.Status === "1") {
        Toast.show("Profile Image updated successfully.", Toast.LONG);
        this._storeData("customerimage",res.customerimage);
        this.setState({
          uploadPer: 0,
          uploading: false,
          tempLoading: true
        });
        this.deleteFile();
        //this.navigateToMyAccount();
      }
      else {
        Toast.show(res.Message, Toast.LONG);
        this.deleteFile();
      }
    })
      .catch((err) => {
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

  _storeData = async (key,value) => {
    try {
      await AsyncStorage.setItem(key, value);
      return value;
    } catch (error) {
      // Error saving data
      return null;
    }
  };


  render() {

    let { loading, personalinformation, customerimage } = this.props;
    const {button} =Resource_EN;
    const { uploading } = this.state;

    let personalinformationdata = {};
    if (personalinformation) {
      personalinformationdata = personalinformation.length > 0 ? personalinformation[0] : {};
    }
    
    
    let profileImgPath = personalinformationdata.profilepictureurl;
    console.log(profileImgPath);
    return (
        <View style={globalStyles.innerContainer}>
          {
            (get(loading, 'isLoading') || uploading) && <OverlayActivityIndicatorElement />
          }
          
          <ScrollView showsVerticalScrollIndicator={false} scrollEnabled={this.state.enableScroll}>
            <View style={EditProfileImageStyles.editprofileimageInner}>
              <View style={EditProfileImageStyles.ImgContainer}>
                {
                  (personalinformationdata.profilepictureurl != '' && personalinformationdata.profilepictureurl != undefined) &&
                  <Image source={{ uri: profileImgPath }} resizeMode="contain" style={EditProfileImageStyles.profileImg} />
                }

                {
                  (personalinformationdata.profilepictureurl == '' || personalinformationdata.profilepictureurl == undefined) &&
                  <Image source={require('../../assets/img/img_avtar.jpg')} resizeMode="contain" style={EditProfileImageStyles.profileImg}/>
                }
                
              </View>
              <View style={EditProfileImageStyles.flexBox}>
                  {
                    this.state.uploading &&
                    <Text style={EditProfileImageStyles.selectText}>{this.state.uploadPer}%</Text>
                  }
              </View>
              <TouchableOpacity disabled={this.submitted} style={EditProfileImageStyles.btnGreen} 
                onPress={() => this.toggleModal("captureOption")}>
                <Text style={EditProfileImageStyles.btnText}>Edit</Text>
              </TouchableOpacity>
            </View>
          </ScrollView>

          <Modal onBackdropPress={() => this.closeModal()}
            isVisible={this.state.isModalVisible}
            onBackButtonPress={() => this.closeModal()}>
            <View style={[EditProfileImageStyles.modalDocument]}>
              <ScrollView>
                {
                  this.state.captureOptionModal == true &&
                  <View style={EditProfileImageStyles.listRadio}>
                    <ListItem key='1' style={[EditProfileImageStyles.radioList,
                    EditProfileImageStyles.radioListStyle]}
                      onPress={() => { this._onPresscaptureOption('takephoto') }}>
                      <Radio style={EditProfileImageStyles.radioListButton} />
                      <Text style={[EditProfileImageStyles.radioListText,
                      EditProfileImageStyles.radioTextWidth, EditProfileImageStyles.radioListCenter]}>Take Photo..</Text>
                    </ListItem>
                    <ListItem key='2' style={[EditProfileImageStyles.radioList,
                    EditProfileImageStyles.radioListBorder,
                    EditProfileImageStyles.radioListStyle]}
                      onPress={() => { this._onPresscaptureOption('chooseImage') }}>
                      <Radio style={EditProfileImageStyles.radioListButton} />
                      <Text style={[EditProfileImageStyles.radioListText,
                      EditProfileImageStyles.radioTextWidth, EditProfileImageStyles.radioListCenter]}>Choose Image from Library..</Text>
                    </ListItem>
                  </View>
                }
              </ScrollView>
            </View>
          </Modal>
        </View>
      
    );
  }
}

EditProfileImageView.propTypes = {
  onLogin: PropTypes.func
};

export default EditProfileImageView;
