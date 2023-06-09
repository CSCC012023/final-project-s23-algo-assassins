import {StyleSheet, View, ScrollView} from 'react-native';
import {
  TextInput,
  Text,
  Button,
  Divider,
  Pressable,
} from '@react-native-material/core';
import React, {useState} from 'react';

const StartWorkoutScreen = () => {
  return (
    <View style={styles.bg_white}>
      <View style={[styles.mg_h_16, styles.mg_v_8]}>
        <Text
          style={[
            styles.mg_t_32,
            styles.pd_h_4,
            styles.font_inter_input,
            styles.text_center,
          ]}>
          Get started by adding an exercise
        </Text>
        <Button
          title="+ Add exercise"
          style={styles.mg_v_16}
          variant="contained"
          color="primary"
          uppercase={false}
        />
        <Button
          title="Options"
          style={styles.mg_v_16}
          variant="contained"
          color="secondary"
          uppercase={false}
        />
      </View>
      <View style={[styles.mg_h_16, styles.mg_b_64, styles.flex_row]}>
        <View style={[styles.mg_h_16, styles.mg_v_8, {width: '35%'}]}>
          <Text style={[styles.text_center]}>Duration</Text>
          <Text style={[styles.text_center]}>02:01:56</Text>
        </View>
        <View style={[styles.mg_h_16, styles.mg_v_8, {width: '35%'}]}>
          <Text style={[styles.text_center]}>Total Volume</Text>
          <Text style={[styles.text_center]}>3235 lbs</Text>
        </View>
      </View>
    </View>
  );
};

export default StartWorkoutScreen;

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
  pd_h_4: {
    paddingHorizontal: 4,
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
  flex_row: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    gap: 8,
  },
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
});
