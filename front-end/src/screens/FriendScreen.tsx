import React from 'react';
import {
  StyleSheet,
  View,
  SafeAreaView,
  Text,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign'; // Import AntDesign icon

const {width, height} = Dimensions.get('window'); // Get screen dimensions

const FriendScreen = ({navigation}) => {
  return (
    <SafeAreaView style={styles.bg_white}>
      <View style={styles.headerContainer}>
        <View style={styles.headerContent}>
          <TouchableOpacity
            style={{marginTop: 0.05 * height}}
            onPress={() => navigation.navigate('Home')}>
            <AntDesign name="left" size={30} color="grey" />
          </TouchableOpacity>
          <Text style={styles.backButtonText}>Friends</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default FriendScreen;

const styles = StyleSheet.create({
  bg_white: {
    backgroundColor: 'white',
    flex: 1,
  },
  headerContainer: {
    paddingVertical: 16,
    paddingHorizontal: 24,
  },
  headerContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  backButtonText: {
    fontSize: 22,
    color: 'grey',
    marginLeft: 10,
    marginTop: 30,
  },
});
