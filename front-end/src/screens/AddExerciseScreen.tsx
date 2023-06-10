import {StyleSheet, View, ScrollView, FlatList, Image, LayoutAnimation} from 'react-native';
import {
  TextInput,
  Text,
  Button,
  Divider,
  Pressable,
} from '@react-native-material/core';
import React, {useState} from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const ExerciseDropdown = (props: any) => {
  const [visible, setVisible] = React.useState(false);

  const toggleDropdown = () => {
    setVisible(!visible);
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
  };

  return (
    <View>
      <Pressable
        style={
          visible
            ? [
                styles.exercise_item_container,
                styles.flex_row,
                styles.flex_align_center,
                styles.exercise_category_highlighted,
              ]
            : [
                styles.exercise_item_container,
                styles.flex_row,
                styles.flex_align_center,
              ]
        }
        pressEffectColor="#FB8E40"
        onPress={() => {
          toggleDropdown()
        }}>
        <Image
          source={require('../assets/images/google_logo.png')}
          style={styles.exercise_icon}
        />
        <View style={[styles.pd_8, styles.flex_justify_between]}>
          <Text style={[styles.font_inter_category]}>{props.category}</Text>
        </View>
      </Pressable>
      <View style = {[visible ? undefined : styles.exercise_category_collapsed]}>
        <ExerciseItem
          name="Exercise #1"
          bodygroup="Compunds"
          equipment="Barbell"></ExerciseItem>
        <ExerciseItem
          name="Exercise #1"
          bodygroup="Compunds"
          equipment="Barbell"></ExerciseItem>
        <ExerciseItem
          name="Exercise #1"
          bodygroup="Compunds"
          equipment="Barbell"></ExerciseItem>
        <ExerciseItem
          name="Exercise #1"
          bodygroup="Compunds"
          equipment="Barbell"></ExerciseItem>
      </View>
    </View>
  );
};

const ExerciseItem = (props: any) => {
  return (
    <Pressable
      style={[styles.mg_l_16, styles.exercise_item_container, styles.flex_row]}>
      <Image
        source={require('../assets/images/google_logo.png')}
        style={styles.exercise_icon}
      />
      <View style={[styles.pd_8, styles.flex_justify_between]}>
        <Text style={[styles.font_inter_exercise]}>{props.name}</Text>
        <Text style={[styles.font_inter_exercise, {color: '#555'}]}>
          {props.bodygroup}
        </Text>
        <Text style={[styles.font_inter_exercise, {color: '#555'}]}>
          {props.equipment}
        </Text>
      </View>
    </Pressable>
  );
};

const AddExerciseScreen = () => {
  return (
    <View style={styles.bg_white}>
      <View style={[styles.mg_h_16, styles.mg_v_16]}>
        <TextInput
          label="Search Programs"
          color="rgba(0, 0, 0, 0.3)"
          leading={props => (
            <MaterialIcons name={'search'} size={28} color={'#00000080'} />
          )}
        />
        <ScrollView style={[styles.mg_v_8]}>
          <View style={[styles.pd_b_100]}>
            <ExerciseDropdown category="Chest exercises"></ExerciseDropdown>
            <ExerciseDropdown category="Back exercises"></ExerciseDropdown>
            <ExerciseDropdown category="Leg exercises"></ExerciseDropdown>
            <ExerciseDropdown category="Arm exercises"></ExerciseDropdown>
            <ExerciseDropdown category="Compunds"></ExerciseDropdown>
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

export default AddExerciseScreen;

const styles = StyleSheet.create({
  mg_h_16: {
    marginHorizontal: 16,
  },
  mg_v_8: {
    marginVertical: 8,
  },
  mg_v_16: {
    marginVertical: 16,
  },
  mg_v_32: {
    marginVertical: 32,
  },
  mg_t_8: {
    marginTop: 8,
  },
  mg_t_16: {
    marginTop: 16,
  },
  mg_t_32: {
    marginTop: 32,
  },
  mg_b_64: {
    marginBottom: 64,
  },
  mg_l_16: {
    marginLeft: 16,
  },
  pd_8: {
    padding: 8,
  },
  pd_h_4: {
    paddingHorizontal: 4,
  },
  pd_b_100: {
    paddingBottom: 100,
  },
  bg_white: {
    backgroundColor: 'white',
    flex: 1,
    justifyContent: 'space-between',
  },
  text_input: {
    color: 'rgba(0, 0, 0, 0.3)',
  },
  text_center: {
    textAlign: 'center',
  },
  font_inter_exercise: {
    fontFamily: 'Inter-Regular',
    fontStyle: 'normal',
    fontWeight: '300',
    fontSize: 16,
    lineHeight: 22,
  },
  font_inter_category: {
    fontFamily: 'Inter-Regular',
    fontStyle: 'normal',
    fontWeight: '300',
    fontSize: 20,
    lineHeight: 22,
  },
  flex_row: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  flex_justify_between: {
    justifyContent: 'space-between',
  },
  flex_align_center: {
    alignItems: 'center',
  },
  exercise_category_highlighted: {
    backgroundColor: '#FB8E4030',
  },
  exercise_category_collapsed: {
    height: 0,
    overflow: 'hidden',
  },
  exercise_item_container: {
    height: 100,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  exercise_icon: {
    margin: 14,
    padding: 14,
    height: 72,
    width: 72,
    borderRadius: 36,
    borderWidth: 1,
    borderColor: '#000',
    resizeMode: 'contain',
  },
});
