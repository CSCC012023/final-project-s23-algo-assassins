import {StyleSheet, View, Pressable,} from 'react-native';
import {
  TextInput,
  Text,
  Button,
  Divider,
} from '@react-native-material/core';
import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import FontAwesome5, {FA5Style} from 'react-native-vector-icons/FontAwesome5';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Octicons from 'react-native-vector-icons/Octicons';

const ProgramButton = (props: any) => {
  return (
    <View style={[styles.btn_program_container]}>
      <Pressable style={[styles.btn_program_body]}>
        <Octicons name={props.icon} size={40} color={'#000000B3'} />
        <Text
          style={[styles.mg_t_8, styles.font_inter_input, styles.text_center]}>
          {props.text}
        </Text>
      </Pressable>
    </View>
  );
};

const WorkoutScreen = () => {
  return (
    <View style={styles.bg_white}>
      <View style={[styles.mg_h_16, styles.mg_v_8]}>
        <View>
          <Pressable
            style={({ pressed }: {pressed: any}) => [
              {
                backgroundColor: pressed
                  ? 'rgb(210, 230, 255)'
                  : 'white'
              },
              styles.wrapperCustom
            ]}>
            <Text style={[styles.mg_v_16, styles.font_inter_input]}>
              <Fontisto name={'plus-a'} size={20} color={'#0561F880'} /> Start
              New Workout
            </Text>
          </Pressable>
        </View>

        <Text style={[styles.mg_v_16, styles.font_inter_semi_bold]}>
          Programs:
        </Text>
        <View style={[styles.mg_v_16, styles.flex_row]}>
          <ProgramButton icon="sun" text="New Routine"></ProgramButton>
          <ProgramButton icon="file" text="Saved Routine"></ProgramButton>
        </View>
        <TextInput
          label="Search Programs"
          style={[styles.mg_v_8]}
          color="rgba(0, 0, 0, 0.3)"
          leading={props => (
            <Octicons name={'search'} size={24} color={'#00000080'} />
          )}
        />
      </View>
    </View>
  );
};

export default WorkoutScreen;

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
  mg_t_8: {
    marginTop: 8,
  },
  mg_t_16: {
    marginTop: 16,
  },
  bg_white: {
    backgroundColor: 'white',
    flex: 1,
  },
  text_input: {
    color: 'rgba(0, 0, 0, 0.3)',
  },
  font_inter_input: {
    fontFamily: 'Inter-Regular',
    fontStyle: 'normal',
    fontWeight: '300',
    fontSize: 20,
    lineHeight: 22,
  },
  font_inter_forgot: {
    fontFamily: 'Inter-Regular',
    fontStyle: 'normal',
    fontWeight: '300',
    fontSize: 15,
    lineHeight: 20,
    color: '#FB8E40',
  },
  font_inter_semi_bold: {
    fontFamily: 'Inter-SemiBold',
    fontStyle: 'normal',
    fontWeight: '300',
    fontSize: 20,
    lineHeight: 22,
  },
  text_center: {
    textAlign: 'center',
  },
  flex_row: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-evenly',
    gap: 8,
  },
  btn_program_container: {
    width: 151,
    borderWidth: 2,
    borderColor: '#bbb',
    borderRadius: 8,
  },
  btn_program_body: {
    paddingHorizontal: 16,
    paddingVertical: 12,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  wrapperCustom: {
    borderRadius: 8,
    padding: 6
  },
});
