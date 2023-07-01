import {
  Modal,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import ImageCropPicker from 'react-native-image-crop-picker';
import {Text, Pressable} from '@react-native-material/core';

type ImagePickerComponentProps = {
  handler: Function;
  circleOverlay: boolean;
  buttonStyle: any;
  containerStyle: any;
  contentStyle: any;
  label: string;
};

const ImagePicker: React.FunctionComponent<ImagePickerComponentProps> = ({
  handler,
  circleOverlay,
  buttonStyle,
  containerStyle,
  contentStyle,
  label,
}) => {
  const [toggle, setToggle] = React.useState(false);

  const openGallery = () => {
    ImageCropPicker.openPicker({
      width: 400,
      height: 400,
      cropperCircleOverlay: circleOverlay,
      cropping: true,
    })
      .then(res => {
        console.log('Did you make it here?');
        handler({...res});
      })
      .catch(e => {
        console.log('Error');
        console.log(e);
      })
      .finally(() => {
        setToggle(!toggle);
      });
  };

  const openCamera = () => {
    ImageCropPicker.openCamera({
      width: 400,
      height: 400,
      cropperCircleOverlay: circleOverlay,
      cropping: true,
    })
      .then(res => {
        handler({...res});
      })
      .catch(e => {
        console.log('Error');
        console.log(e);
      })
      .finally(() => {
        setToggle(!toggle);
      });
  };

  return (
    <View>
      <Modal
        animationType="fade"
        transparent={true}
        visible={toggle}
        onRequestClose={() => {
          setToggle(!toggle);
        }}>
        <View style={[styles.default_modal]}>
          <View style={[styles.default_modal_container]}>
            <View style={[styles.default_modal_btn]}>
              <Pressable
                pressEffectColor="#fff"
                style={[styles.default_modal_btn_container, styles.bg_option]}
                onPress={() => openCamera()}>
                <Text style={[styles.default_modal_btn_content]}>
                  Take Photo
                </Text>
              </Pressable>
            </View>
            <View style={[styles.default_modal_btn]}>
              <Pressable
                pressEffectColor="#fff"
                style={[styles.default_modal_btn_container, styles.bg_option]}
                onPress={() => openGallery()}>
                <Text style={[styles.default_modal_btn_content]}>
                  Choose from Library
                </Text>
              </Pressable>
            </View>
            <View style={[styles.default_modal_btn]}>
              <Pressable
                pressEffectColor="#fff"
                style={[styles.default_modal_btn_container, styles.bg_cancel]}
                onPress={() => setToggle(!toggle)}>
                <Text style={[styles.default_modal_btn_content]}>Cancel</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </Modal>
      <TouchableOpacity
        style={buttonStyle != undefined ? buttonStyle : [styles.default_btn]}
        onPress={() => setToggle(!toggle)}>
        <View
          style={
            containerStyle != undefined
              ? containerStyle
              : [styles.default_btn_container]
          }>
          <Text
            style={
              contentStyle != undefined
                ? contentStyle
                : [styles.default_btn_content]
            }>
            {label != undefined ? label : 'Select Image'}
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );      
};

export default ImagePicker;

const styles = StyleSheet.create({
  default_btn: {
    width: '100%',
    padding: 8,
  },
  default_btn_container: {
    width: '100%',
    height: 35,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(251, 142, 64, 0.15)',
  },
  default_btn_content: {
    fontSize: 12,
    fontFamily: 'Inter-Regular',
    fontWeight: '500',
    letterSpacing: 1,
    opacity: 0.8,
  },
  default_modal: {
    backgroundColor: 'rgba(0,0,0,0.5)',
    height: '100%',
  },
  default_modal_container: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'white',
    padding: 8,
    justifyContent: 'center',
    height: 240,
    borderRadius: 8,
  },
  default_modal_btn: {
    marginVertical: 8,
    borderWidth: 2,
    borderColor: 'transparent',
    borderRadius: 8,
    overflow: 'hidden',
  },
  default_modal_btn_container: {
    paddingHorizontal: 16,
    paddingVertical: 12,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 50,
  },
  default_modal_btn_content: {
    fontFamily: 'Inter-SemiBold',
    fontStyle: 'normal',
    fontWeight: '300',
    fontSize: 16,
    lineHeight: 22,
    textAlign: 'center',
    color: '#fff',
  },
  bg_option: {
    backgroundColor: '#9aaffb',
  },
  bg_cancel: {
    backgroundColor: 'salmon',
  },
});
