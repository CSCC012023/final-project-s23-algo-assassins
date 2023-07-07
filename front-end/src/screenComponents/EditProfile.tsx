import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  TextInput,
  StyleSheet,
} from 'react-native';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Toast from 'react-native-toast-message';
import {useState} from 'react';
import ImagePicker from '../components/imagePicker/ImagePicker';
import {ImageOrVideo} from 'react-native-image-crop-picker';

interface EditProfileProps {
  route: any;
  navigation: any;
}

const EditProfile: React.FC<EditProfileProps> = ({route, navigation}) => {
  const {name, accountName, profileImage} = route.params;

  const showToastMessage = () => {
    Toast.show({text1: 'Edit Sucess!'});
  };

  const [isToggled, setIsToggled] = useState(false);

  const handleToggle = () => {
    setIsToggled(!isToggled);
  };

  const [image, setImage] = React.useState<ImageOrVideo>();

  const imageHandler = (res: ImageOrVideo) => {
    console.log('Image Handler Called!');
    setImage(res);
  };

  React.useEffect(() => {
    console.log('Success');
    console.log(image);
  }, [image]);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="close-outline" style={styles.closeIcon} />
        </TouchableOpacity>
        <Text style={styles.title}>Edit Profile</Text>
        <TouchableOpacity
          onPress={() => {
            showToastMessage();
            navigation.goBack();
          }}>
          <Ionicons name="checkmark" style={styles.checkmarkIcon} />
        </TouchableOpacity>
      </View>
      <View style={styles.profileSection}>
        <Image
          style={styles.profileImage}
          source={
            image != undefined
              ? {
                  uri: image.path,
                  height: image.height,
                  width: image.width,
                  mime: image.mime,
                }
              : profileImage
          }
        />
        {/* <Text style={styles.changePhotoText}>Change profile photo</Text> */}
        <ImagePicker
          handler={imageHandler}
          circleOverlay={true}
          buttonStyle={[]}
          containerStyle={[]}
          contentStyle={[styles.changePhotoText]}
          label={'Change profile photo'}></ImagePicker>
      </View>
      <View style={styles.inputSection}>
        <View>
          <Text style={styles.label}>Name</Text>
          <TextInput
            placeholder="name"
            defaultValue={name}
            style={styles.input}
          />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Username</Text>
          <TextInput
            placeholder="account name"
            defaultValue={accountName}
            style={styles.input}
          />
        </View>
        {/* <View style={styles.inputContainer}>
          <TextInput placeholder="Website" style={styles.input} />
        </View> */}
        <View style={styles.inputContainer}>
          <TextInput placeholder="Bio" style={styles.input} />
        </View>
      </View>
      <View style={styles.settingsContainer}>
        <Text style={styles.settingsOption}>Show badge on profile</Text>
        <TouchableOpacity onPress={handleToggle} style={styles.toggleButton}>
          <Fontisto
            name={isToggled ? 'toggle-on' : 'toggle-off'}
            size={30}
            color={isToggled ? '#3761F8CC' : 'gray'}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
    paddingTop: 50,
  },
  closeIcon: {
    fontSize: 35,
  },
  title: {
    fontSize: 16,
    fontWeight: '500',
    fontFamily: 'Inter-Regular',
  },
  checkmarkIcon: {
    fontSize: 35,
    color: '#3761F8CC',
    paddingRight: 8,
  },
  profileSection: {
    padding: 10,
    alignItems: 'center',
  },
  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 100,
  },
  changePhotoText: {
    color: '#3761F8CC',
    // paddingTop: 15,
    fontSize: 12,
    fontFamily: 'Inter-Regular',
    fontWeight: '500',
    letterSpacing: 1,
    opacity: 0.8,
  },
  inputSection: {
    padding: 10,
  },
  inputContainer: {
    paddingVertical: 10,
  },
  label: {
    opacity: 0.5,
    fontSize: 14,
    paddingBottom: 5,
  },
  input: {
    fontSize: 16,
    fontFamily: 'Inter-Regular',
    fontWeight: '400',
    borderBottomWidth: 1,
    borderColor: '#CDCDCD',
    padding: 10,
  },
  settingsContainer: {
    alignItems: 'center',
    paddingTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  settingsOption: {
    marginVertical: 10,
    padding: 10,
    color: 'black',
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: '#EFEFEF',
  },
  toggleButton: {
    marginRight: 10,
  },
});

export default EditProfile;
