import React, {useEffect} from 'react';
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
import {
  NavigationProp,
  useIsFocused,
  useNavigation,
} from '@react-navigation/native';
import {RootStackParamList} from '../types/navigation';
import {
  getUser,
  updateBiography,
  updateName,
  updateUsername,
} from '../utils/user';

const EditProfileScreen = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  const [user, setUser] = useState({});
  const isFocused = useIsFocused();

  const queryUser = async () => {
    console.log('fetching user');
    const user_: User | undefined = await getUser();
    if (user_ !== undefined) {
      console.log('user found');
      setUser(user_);
      setName(user_.name);
      setUsername(user_.username);
      setProfileImage(user_.img);
      setBiography(user_.biography ? user_.biography : '');
    }
  };

  useEffect(() => {
    if (isFocused) {
      console.log('called');
      queryUser().catch(error => {
        console.error('Error fetching user data:', error);
      });
    }
  }, [isFocused]);

  const handleGoBackDelayed = useCallback(() => {
    setTimeout(() => {
      navigation.goBack();
    }, 2000);
  }, [navigation]);

  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [biography, setBiography] = useState('');
  const [profileImage, setProfileImage] = React.useState<ImageOrVideo>(
    undefined as any,
  );

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
    //
    await updateBiography(biography);
    await updateName(name);
    await updateUsername(username);
  };

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
            value={name}
            placeholder="name"
            autoCorrect={false}
            onChangeText={text => setName(text)}
            style={styles.input}
          />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Username</Text>
          <TextInput
            placeholder="account name"
            value={username}
            autoCorrect={false}
            autoCapitalize="none"
            style={styles.input}
            onChangeText={text => setUsername(text)}
          />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Bio</Text>
          <TextInput
            value={biography}
            placeholder="biography"
            autoCorrect={false}
            autoCapitalize="none"
            style={styles.input}
            onChangeText={text => setBiography(text)}
          />
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

export default EditProfileScreen;
