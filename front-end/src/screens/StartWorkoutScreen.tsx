import {StyleSheet, View} from 'react-native';
import {Pressable, Text, Button} from '@react-native-material/core';
import React from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../types/navigation';
import {styles} from './WorkoutScreen';

type Props = NativeStackScreenProps<RootStackParamList, 'StartWorkout'>;

const StartWorkoutScreen = ({navigation: {navigate}}: Props) => {
  return (
    <View style={styles.bg_white}>
      <View
        style={[styles.flex_row, styles.flex_wrap, styles.flex_align_center]}>
        <Text style={[styles.mg_16, styles.pd_8, styles.font_inter_20]}>
          Workout
        </Text>
      </View>
      <View
        style={[
          styles.mg_h_16,
          styles.mg_v_8,
          styles.flex,
          styles.flex_justify_between,
        ]}>
        <View>
          <Text
            style={[
              styles.mg_t_16,
              styles.pd_h_4,
              styles.font_inter_20,
              styles.text_center,
            ]}>
            Get started by adding an exercise
          </Text>
          <View style={[styles.mg_v_8, styles.btn_container]}>
            <Pressable
              pressEffectColor="#fff"
              style={[styles.btn, {backgroundColor: '#3761F880'}]}
              onPress={() => navigate('AddExercise')}>
              <Text
                style={[
                  styles.font_inter_sb_16,
                  styles.text_center,
                  {color: '#fff'},
                ]}>
                Add exercise
              </Text>
            </Pressable>
          </View>
          <View style={[styles.mg_v_8, styles.btn_container]}>
            <Pressable
              pressEffectColor="#fff"
              style={[styles.btn, {backgroundColor: '#d9d9d9'}]}>
              <Text style={[styles.font_inter_sb_16, styles.text_center]}>
                Options
              </Text>
            </Pressable>
          </View>
        </View>
      </View>
      <View
        style={[
          styles.mg_h_32,
          styles.mg_b_64,
          styles.flex_row,
          styles.flex_justify_between,
        ]}>
        <View style={[styles.mg_v_8]}>
          <Text style={[styles.text_center]}>Duration</Text>
          <Text style={[styles.text_center]}>00:00</Text>
        </View>
        <View style={[styles.mg_v_8]}>
          <Text style={[styles.text_center]}>Total Volume</Text>
          <Text style={[styles.text_center]}>0 lbs</Text>
        </View>
      </View>
    </View>
  );
};

export default StartWorkoutScreen;
