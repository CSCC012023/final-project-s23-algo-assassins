import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {SearchBar} from 'react-native-elements';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');

type SearchBarComponentProps = {
  value: string;
  onChange: (search: string) => void;
};

const SearchBarHeader: React.FunctionComponent<SearchBarComponentProps> = ({
  value,
  onChange,
}) => {
  return (
    <View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <View style={{width: width - 70, marginLeft: 10}}>
          <SearchBar
            placeholder="Search users, posts..."
            onChange={e => onChange(e.nativeEvent.text)}
            value={value}
            platform={'ios'}
            lightTheme={true}
            focusable={true}
          />
        </View>
        <View>
          <Ionicons
            name="ios-paper-plane-outline"
            size={30}
            color="black"
            style={{marginLeft: 10, marginRight: 20}}
          />
        </View>
      </View>
    </View>
  );
};

export default SearchBarHeader;

const styles = StyleSheet.create({});
