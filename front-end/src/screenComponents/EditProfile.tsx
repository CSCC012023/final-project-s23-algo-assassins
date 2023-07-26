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
import {useCallback} from 'react';

interface EditProfileProps {
  route: any;
  navigation: any;
}

const EditProfile: React.FC<EditProfileProps> = ({route, navigation}) => {
  const {
    name: initialName,
    accountName: initialAccountName,
    biography: initialBiography,
    profileImage: initialProfileImage,
  } = route.params;

  const handleGoBackDelayed = useCallback(() => {
    setTimeout(() => {
      navigation.goBack();
    }, 2000);
  }, [navigation]);

  const [name, setName] = useState(initialName);
  const [accountName, setAccountName] = useState(initialAccountName);
  const [biography, setBiography] = useState(initialBiography);
  const [profileImage, setProfileImage] =
    React.useState<ImageOrVideo>(initialProfileImage);

  const showToastMessage = () => {
    Toast.show({text1: 'Edit Sucess!'});
  };

  const [saveStatus, setSaveStatus] = React.useState(false);
  const formData = new FormData();
  formData.append('img', profileImage);

  const [isToggled, setIsToggled] = useState(false);

  const handleToggle = () => {
    setIsToggled(!isToggled);
  };

  // const [image, setImage] = React.useState<ImageOrVideo>();

  const imageHandler = (res: ImageOrVideo) => {
    console.log('Image Handler Called!');
    setProfileImage(res);
  };

  const handleSave = async () => {
    const userEmail = 'selina99tran@gmail.com';
    const image = require('../assets/images/levi_pfp.png');

    // Updating name
    try {
      const response = await fetch(
        'http://localhost:3000/api/users/update/name?',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            // email: userEmail,
            name: name,
          }),
        },
      );
      const data = await response.json();
      if (response.ok) {
        setSaveStatus(true);
        console.log('response good');
      } else {
        setSaveStatus(false);
        console.log('name error');
        const errorMessage = data.message || 'Failed to save name';
        Toast.show({
          type: 'error',
          text1: 'Saving name error',
          text2: errorMessage,
          position: 'bottom',
          // visibilityTime: 4000, // Adjust the duration as needed
          // autoHide: true,
        });
      }
    } catch (error) {
      console.log('error name');
      if (error instanceof Error) {
        Toast.show({
          type: 'error',
          text1: 'Saving error',
          text2: error.message,
          position: 'bottom',
        });
      }
    }
    // Updating username
    try {
      const response = await fetch(
        'http://localhost:3000/api/users/update/username?',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            // email: userEmail,
            username: accountName,
          }),
        },
      );
      const data = await response.json();
      if (response.ok) {
        setSaveStatus(true);
        console.log('response good');
      } else {
        setSaveStatus(false);
        const errorMessage = data.message || 'Failed to save account name';
        Toast.show({
          type: 'error',
          text1: 'Saving account name error',
          text2: errorMessage,
          position: 'bottom',
          // visibilityTime: 4000, // Adjust the duration as needed
          autoHide: true,
        });
      }
    } catch (error) {
      if (error instanceof Error) {
        console.log('error user');
        Toast.show({
          type: 'error',
          text1: 'Saving error',
          text2: error.message,
          position: 'bottom',
        });
      }
    }
    // Update biography
    try {
      const response = await fetch(
        'http://localhost:3000/api/users/update/biography?',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            // email: userEmail,
            biography: biography,
          }),
        },
      );
      const data = await response.json();
      if (response.ok) {
        setSaveStatus(true);
        console.log('response good');
      } else {
        setSaveStatus(false);
        const errorMessage = data.message || 'Failed to save biography';
        Toast.show({
          type: 'error',
          text1: 'Saving biography error',
          text2: errorMessage,
          position: 'bottom',
          // visibilityTime: 4000, // Adjust the duration as needed
          // autoHide: true,
        });
      }
    } catch (error) {
      if (error instanceof Error) {
        console.log('error bio');
        Toast.show({
          type: 'error',
          text1: 'Saving error',
          text2: error.message,
          position: 'bottom',
        });
      }
    }
    // Update profile picture
    try {
      const response = await fetch(
        'http://localhost:3000/api/users/update/picture?',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: formData,
        },
      );
      console.log(response);
    } catch (error) {
      if (error instanceof Error) {
        Toast.show({
          type: 'error',
          text1: 'Saving error',
          text2: error.message,
          position: 'bottom',
        });
      }
    }
    // Pass back the variables to Profile Screen
    // if (saveStatus) {
    //   navigation.navigate('ProfileScreen', {
    //     name,
    //     accountName,
    //     biography,
    //     profileImage,
    //   });
    //   showToastMessage();
    // }
  };

  React.useEffect(() => {
    console.log('Success');
    console.log(profileImage);
  }, [profileImage]);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="close-outline" style={styles.closeIcon} />
        </TouchableOpacity>
        <Text style={styles.title}>Edit Profile</Text>
        <TouchableOpacity
          onPress={() => {
            handleSave();
            handleGoBackDelayed();
          }}>
          <Ionicons name="checkmark" style={styles.checkmarkIcon} />
        </TouchableOpacity>
      </View>
      <View style={styles.profileSection}>
        <Image
          style={styles.profileImage}
          source={
            profileImage !== undefined
              ? {
                  uri: profileImage.path,
                  height: profileImage.height,
                  width: profileImage.width,
                  mime: profileImage.mime,
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
          label={'Change profile photo'}
        />
      </View>
      <View style={styles.inputSection}>
        <View>
          <Text style={styles.label}>Name</Text>
          <TextInput
            // value={name}
            placeholder="name"
            defaultValue={name}
            autoCorrect={false}
            onChangeText={text => setName(text)}
            style={styles.input}
          />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Username</Text>
          <TextInput
            // value={accountName}
            placeholder="account name"
            defaultValue={accountName}
            autoCorrect={false}
            autoCapitalize="none"
            onChangeText={text => setAccountName(text)}
            style={styles.input}
          />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Bio</Text>
          <TextInput
            // value={biography}
            placeholder="biography"
            defaultValue={biography}
            autoCorrect={false}
            autoCapitalize="none"
            onChangeText={text => setBiography(text)}
            style={styles.input}
          />
        </View>
        {/* <View style={styles.inputContainer}>
          <TextInput placeholder="Website" style={styles.input} />
        </View> */}
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
