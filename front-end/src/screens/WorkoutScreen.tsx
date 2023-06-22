import {SafeAreaView, StyleSheet, View} from 'react-native';
import {TextInput, Text, Pressable} from '@react-native-material/core';
import React from 'react';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Octicons from 'react-native-vector-icons/Octicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../types/navigation';

type Props = NativeStackScreenProps<RootStackParamList, 'Workout'>;

const ProgramButton = (props: any) => {
  return (
    <View style={[styles.btn_program_container]}>
      <Pressable pressEffectColor="#FB8E40" style={[styles.btn_program_body]}>
        <Octicons name={props.icon} size={40} color={'#000000B3'} />
        <Text style={[styles.mg_t_8, styles.font_inter_20, styles.text_center]}>
          {props.text}
        </Text>
      </Pressable>
    </View>
  );
};

const WorkoutScreen = ({navigation: {navigate}}: Props) => {
  return (
    <SafeAreaView style={styles.bg_white}>
      <View
        style={[styles.flex_row, styles.flex_wrap, styles.flex_align_center]}>
        <Text style={[styles.mg_16, styles.pd_8, styles.font_inter_20]}>
          Workout
        </Text>
      </View>
      <View style={[styles.mg_h_16, styles.mg_v_8]}>
        <View style={[styles.btn_new_workout]}>
          <Pressable
            pressEffectColor="#FB8E40"
            onPress={() => navigate('StartWorkout', {navData: {}})}
            style={[styles.pd_h_4]}>
            <Text style={[styles.mg_v_16, styles.font_inter_20]}>
              <Fontisto name={'plus-a'} size={20} color={'#0561F880'} /> Start
              New Workout
            </Text>
          </Pressable>
        </View>

        <Text style={[styles.mg_v_16, styles.font_inter_sb_20]}>Programs:</Text>

        <View
          style={[
            styles.mg_v_16,
            styles.flex_row,
            styles.flex_justify_between,
          ]}>
          <ProgramButton icon="sun" text="New Routine"></ProgramButton>
          <ProgramButton icon="file" text="Saved Routine"></ProgramButton>
        </View>

        <TextInput
          label="Search Programs"
          color="rgba(0, 0, 0, 0.3)"
          leading={props => (
            <MaterialIcons name={'search'} size={28} color={'#00000080'} />
          )}
        />
      </View>
    </SafeAreaView>
  );
};

export default WorkoutScreen;

const styles = StyleSheet.create({
  // Margins
  mg_8: {
    margin: 8,
  },
  mg_16: {
    margin: 16,
  },
  mg_h_8: {
    marginHorizontal: 8,
  },
  mg_h_16: {
    marginHorizontal: 16,
  },
  mg_h_32: {
    marginHorizontal: 32,
  },
  mg_v_8: {
    marginVertical: 8,
  },
  mg_v_16: {
    marginVertical: 16,
  },
  mg_t_8: {
    marginTop: 8,
  },
  mg_t_16: {
    marginTop: 16,
  },
  mg_b_64: {
    marginBottom: 64,
  },
  mg_b_200: {
    marginBottom: 200,
  },
  mg_l_16: {
    marginLeft: 16,
  },
  mg_r_8: {
    marginRight: 8,
  },
  // Padding
  pd_4: {
    padding: 4,
  },
  pd_8: {
    padding: 8,
  },
  pd_h_4: {
    paddingHorizontal: 4,
  },
  pd_v_4: {
    paddingVertical: 4,
  },
  pd_b_100: {
    paddingBottom: 100,
  },
  // Background
  bg_white: {
    backgroundColor: 'white',
    flex: 1,
  },
  // Text
  text_input: {
    color: 'rgba(0, 0, 0, 0.3)',
  },
  text_center: {
    textAlign: 'center',
  },
  font_inter_16: {
    fontFamily: 'Inter-Regular',
    fontStyle: 'normal',
    fontWeight: '300',
    fontSize: 16,
    lineHeight: 22,
  },
  font_inter_sb_16: {
    fontFamily: 'Inter-SemiBold',
    fontStyle: 'normal',
    fontWeight: '300',
    fontSize: 16,
    lineHeight: 22,
  },
  font_inter_20: {
    fontFamily: 'Inter-Regular',
    fontStyle: 'normal',
    fontWeight: '300',
    fontSize: 20,
    lineHeight: 22,
  },
  font_inter_sb_20: {
    fontFamily: 'Inter-SemiBold',
    fontStyle: 'normal',
    fontWeight: '300',
    fontSize: 20,
    lineHeight: 22,
  },
  // flex
  flex: {
    display: 'flex',
    flex: 1,
    gap: 8,
  },
  flex_row: {
    flexDirection: 'row',
  },
  flex_wrap: {
    flexWrap: 'wrap',
  },
  flex_nowrap: {
    flexWrap: 'nowrap',
  },
  flex_justify_between: {
    justifyContent: 'space-between',
  },
  flex_justify_center: {
    justifyContent: 'center',
  },
  flex_align_center: {
    alignItems: 'center',
  },
  // WorkoutScreen Related
  btn_program_container: {
    width: 151,
    borderWidth: 2,
    borderColor: '#ddd',
    borderRadius: 8,
    overflow: 'hidden',
  },
  btn_program_body: {
    paddingHorizontal: 16,
    paddingVertical: 12,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  btn_new_workout: {
    borderWidth: 2,
    borderColor: 'transparent',
    borderRadius: 8,
    overflow: 'hidden',
  },
  // StartWorkoutScreen Related
  btn_container: {
    borderWidth: 2,
    borderColor: 'transparent',
    borderRadius: 8,
    overflow: 'hidden',
  },
  btn: {
    paddingHorizontal: 16,
    paddingVertical: 12,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  // AddExerciseScreen Related
  exercise_category_highlighted: {
    backgroundColor: '#3761F850',
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
    marginLeft: 8,
    height: 56,
    width: 56,
    borderRadius: 28,
    borderWidth: 1,
    borderColor: '#000',
    resizeMode: 'contain',
  },
});

export {styles};
