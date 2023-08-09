import {StyleSheet, View} from 'react-native';
import React from 'react';
import {SearchBar} from 'react-native-elements';
import {Dimensions} from 'react-native';

const {width} = Dimensions.get('window');

type SearchBarComponentProps = {
  value: string;
  onChange: (search: string) => void;
};

const SearchProgram: React.FunctionComponent<SearchBarComponentProps> = ({
  value,
  onChange,
}) => {
  return (
    <View>
      <View style={styles.container}>
        <View style={styles.searchBarContainer}>
          <SearchBar
            placeholder="Search programs"
            onChange={e => onChange(e.nativeEvent.text)}
            value={value}
            platform={'ios'}
            lightTheme={true}
            focusable={true}
          />
        </View>
        {/* <View>
          <Ionicons
            name="ios-paper-plane-outline"
            size={30}
            color="black"
            style={styles.iconContainer}
          />
        </View> */}
      </View>
    </View>
  );
};

export default SearchProgram;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  searchBarContainer: {width: width - 30},
});
