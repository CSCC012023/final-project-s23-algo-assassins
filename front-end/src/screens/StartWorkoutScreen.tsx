import {
  StyleSheet,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import {
  Pressable,
  Text,
  Button,
  TextInput,
  Flex,
} from '@react-native-material/core';
import React, {useEffect, useState} from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../types/navigation';
import {styles} from './WorkoutScreen';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {Dictionary, Exercise, Set} from '../types/workout';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

type Props = NativeStackScreenProps<RootStackParamList, 'StartWorkout'>;

const ExerciseEntry = (props: any) => {
  const [input, setInput] = React.useState<string>(props.exercise.notes);

  const updateNoteInput = (text: string) => {
    props.navData[props.exercise.name].notes = text;
    setInput(text);
  };

  return (
    <View style={[styles.mg_v_16]}>
      <View style={[{height: 72}]}>
        <View
          style={[
            styles.mg_v_8,
            styles.flex,
            styles.flex_row,
            styles.flex_justify_between,
            styles.flex_align_center,
          ]}>
          <View
            style={[
              styles.flex,
              styles.flex_wrap,
              styles.flex_row,
              styles.flex_align_center,
            ]}>
            <View>
              <Image
                source={require('../assets/images/FitBook_logo3.png')}
                style={[styles.exercise_icon]}
              />
            </View>
            <View>
              <Text style={[styles.font_inter_sb_16]}>
                {props.exercise.name}
              </Text>
              <Text style={[styles.font_inter_16]}>
                {props.exercise.equipment == ''
                  ? 'No equipment'
                  : props.exercise.equipment}
              </Text>
            </View>
          </View>
          <Ionicons name={'ellipsis-vertical'} size={28} color={'#555'} />
        </View>
      </View>
      <TextInput
        label="Add notes here..."
        color="rgba(0, 0, 0, 0.3)"
        variant="standard"
        value={input}
        style={[styles.mg_v_8]}
        onChangeText={text => updateNoteInput(text)}></TextInput>
      <View style={[{height: 48}]}>
        <View
          style={[
            styles.mg_v_8,
            styles.flex,
            styles.flex_row,
            styles.flex_justify_between,
            styles.flex_align_center,
          ]}>
          <Text style={[styles.font_inter_16, {flex: 1}]}>Set</Text>
          {props.exercise.hasWeights ? (
            <Text style={[styles.font_inter_16, {flex: 1}]}>Lbs</Text>
          ) : undefined}
          <Text style={[styles.font_inter_16, {flex: 1}]}>Reps</Text>
          <Ionicons name={'checkmark-circle'} size={28} color={'#fff'} />
        </View>
      </View>
      {props.exercise.sets.map((set: Set) => {
        return (
          <ExerciseSets
            key={`${props.exercise._id}_${set.set}`}
            name={props.exercise.name}
            set={set}
            hasWeights={props.exercise.hasWeights}></ExerciseSets>
        );
      })}
      <View
        style={[
          styles.flex,
          styles.flex_wrap,
          styles.flex_row,
          styles.flex_justify_between,
          styles.flex_align_center,
        ]}>
        <View style={[styles.mg_v_8, styles.btn_container, {width: 140}]}>
          <Pressable
            pressEffectColor="#fff"
            style={[styles.btn, {backgroundColor: '#3761F880'}]}
            onPress={() => {
              props.pushFunc(props.exercise.name, props.exercise.sets.length);
            }}>
            <Text
              style={[
                styles.font_inter_sb_16,
                styles.text_center,
                {color: '#fff'},
              ]}>
              Add set
            </Text>
          </Pressable>
        </View>
        <View style={[styles.mg_v_8, styles.btn_container, {width: 140}]}>
          <Pressable
            pressEffectColor="#fff"
            style={[
              styles.btn,
              {
                backgroundColor:
                  props.exercise.sets.length - 1 ? '#FB8E4090' : '#d9d9d9',
              },
            ]}
            pressEffect={props.exercise.sets.length - 1 ? 'ripple' : 'none'}
            onPress={() => {
              props.popFunc(props.exercise.name);
            }}>
            <Text
              style={[
                styles.font_inter_sb_16,
                styles.text_center,
                {color: '#fff'},
              ]}>
              Remove set
            </Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

const ExerciseSets = (props: any) => {
  return (
    <View>
      <View style={[{height: 52}]}>
        <View
          style={[
            styles.mg_v_8,
            styles.flex,
            styles.flex_row,
            styles.flex_justify_between,
            styles.flex_align_center,
          ]}>
          <Text style={[styles.font_inter_16, {flex: 1}]}>
            {props.set.set ? props.set.set : 'Warm-up'}
          </Text>
          {props.hasWeights ? (
            <TextInput
              color="rgba(0, 0, 0, 0.3)"
              variant="standard"
              style={[styles.mg_v_8, {flex: 1}]}
              keyboardType="numeric"></TextInput>
          ) : undefined}
          <TextInput
            color="rgba(0, 0, 0, 0.3)"
            variant="standard"
            style={[styles.mg_v_8, {flex: 1}]}
            keyboardType="numeric"></TextInput>
          <Ionicons name={'checkmark-circle'} size={28} color={'#d9d9d9'} />
        </View>
      </View>
    </View>
  );
};

const StartWorkoutScreen = ({route, navigation: {navigate}}: Props) => {
  // Related to passing data between AddExercise and StartWorkoutScreen
  const navData: Dictionary<Exercise> =
    route.params?.navData != undefined ? route.params?.navData : {};
  const [exercise, setExercise] = useState<Dictionary<Exercise>>(navData);

  const PushSet = (name: string, count: number) => {
    navData[name].sets.push({
      set: count,
      lbs: 0,
      reps: 0,
    });

    setExercise({...navData});
  };

  const PopSet = (name: string) => {
    if (navData[name].sets.length - 1) {
      navData[name].sets.pop();

      setExercise({...navData});
    }
  };
  return (
    <SafeAreaView style={styles.bg_white}>
      <View
        style={[
          styles.mg_16,
          styles.pd_8,
          styles.flex_row,
          styles.flex_align_center,
        ]}>
        <TouchableOpacity
          onPress={() => {
            navigate('Workout');
          }}>
          <MaterialIcons name={'arrow-back-ios'} size={20} color={'#000000'} />
        </TouchableOpacity>
        <Text style={[styles.font_inter_20]}>Workout</Text>
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        style={[styles.mg_h_16, styles.mg_v_8]}>
        <View>
          {Object.keys(navData).length ? (
            Object.keys(navData).map((key: string) => {
              return (
                <ExerciseEntry
                  key={navData[key]._id}
                  exercise={navData[key]}
                  navData={navData}
                  pushFunc={PushSet}
                  popFunc={PopSet}></ExerciseEntry>
              );
            })
          ) : (
            <Text
              style={[
                styles.mg_t_16,
                styles.pd_h_4,
                styles.font_inter_20,
                styles.text_center,
              ]}>
              Get started by adding an exercise
            </Text>
          )}
          <View style={[styles.mg_v_8, styles.btn_container]}>
            <Pressable
              pressEffectColor="#fff"
              style={[styles.btn, {backgroundColor: '#3761F880'}]}
              onPress={() => navigate('AddExercise', {navData: navData})}>
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
          <View style={[styles.mg_v_8, styles.mg_b_64, styles.btn_container]}>
            <Pressable
              pressEffectColor="#fff"
              style={[styles.btn, {backgroundColor: '#d9d9d9'}]}>
              <Text style={[styles.font_inter_sb_16, styles.text_center]}>
                Options
              </Text>
            </Pressable>
          </View>
        </View>
      </ScrollView>
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
    </SafeAreaView>
  );
};

export default StartWorkoutScreen;
