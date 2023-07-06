import {
  View,
  ScrollView,
  Image,
  LayoutAnimation,
  BackHandler,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import {TextInput, Text, Pressable} from '@react-native-material/core';
import React, {useEffect, useState} from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {styles} from './WorkoutScreen';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../types/navigation';
import {Dictionary, Exercise, MuscleGroup} from '../types/workout';

type Props = NativeStackScreenProps<RootStackParamList, 'AddExercise'>;

const ExerciseDropdown = (props: any) => {
  const [visible, setVisible] = React.useState<boolean>(props.expanded);

  const toggleDropdown = () => {
    setVisible(!visible);
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
  };

  return (
    <View>
      <Pressable
        style={[styles.exercise_item_container, styles.flex_justify_center]}
        pressEffectColor="#3761F880"
        onPress={() => {
          toggleDropdown();
        }}>
        <View style={[styles.pd_8]}>
          <Text style={[styles.font_inter_20]}>
            {props.muscle.muscle} Exercises
          </Text>
        </View>
      </Pressable>
      <View style={[visible ? undefined : styles.exercise_category_collapsed]}>
        {props.muscle.exercises.map((exercise: Exercise) => {
          return (
            <ExerciseItem
              key={exercise._id}
              exercise={exercise}
              function={props.function}
              navData={props.navData}></ExerciseItem>
          );
        })}
      </View>
    </View>
  );
};

const ExerciseItem = (props: any) => {
  const [selected, setSelected] = React.useState<boolean>(
    props.selected || props.navData[props.exercise.name] != undefined,
  );

  const toggleExercise = () => {
    setSelected(!selected);
  };

  return (
    <Pressable
      style={[
        styles.mg_l_16,
        styles.exercise_item_container,
        styles.flex_row,
        styles.flex_nowrap,
        styles.flex_align_center,
        selected ? styles.exercise_category_highlighted : undefined,
      ]}
      onPress={() => {
        props.function(props.exercise);
        toggleExercise();
      }}>
      <Image
        source={require('../assets/images/FitBook_logo3.png')}
        style={[styles.exercise_icon]}
      />
      <View style={[styles.pd_8, styles.flex_justify_between, {width: '90%'}]}>
        <Text style={[styles.font_inter_16]}>{props.exercise.name}</Text>
        <Text style={[styles.font_inter_16, {color: '#555'}]}>
          {props.exercise.equipment == ''
            ? 'No equipment'
            : props.exercise.equipment}
        </Text>
      </View>
    </Pressable>
  );
};

const AddExerciseScreen = ({route, navigation: {navigate}}: Props) => {
  // Related to passing data between AddExercise and StartWorkoutScreen
  const navData: Dictionary<Exercise> =
    route.params?.navData != undefined ? route.params?.navData : {};
  const [newData, setNewData] = React.useState<Dictionary<Exercise>>(
    JSON.parse(JSON.stringify(navData)),
  );
  const toggleExercise = (info: Exercise) => {
    if (newData[info.name] == undefined) {
      newData[info.name] = info;
      setNewData({...newData});
    } else {
      delete newData[info.name];
      setNewData({...newData});
    }
  };

  useEffect(() => {
    const backAction = () => {
      navigate('StartWorkout', {navData: navData});
      return true;
    };

    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction,
    );

    return () => backHandler.remove();
  }, []);

  // Get exercises from db
  const [exerciseData, setData] = React.useState<MuscleGroup[]>([]);
  const [filterableData, setFilter] = React.useState<MuscleGroup[]>([]);
  const [isReady, setReady] = useState(false);
  const url = 'http://localhost:3000/api/exercises/groupedExercises';

  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(json => {
        setData(json);
        setFilter(json);
      })
      .catch(error => console.error(error))
      .finally(() => setReady(true));
  }, []);

  // Related to search functionality
  const [input, setInput] = React.useState<string>('');
  const [isExpanded, setExpanded] = React.useState<boolean>(false);

  const filterExercises = (text: string) => {
    setExpanded(true);
    setReady(false);
    setFilter(
      JSON.parse(JSON.stringify(exerciseData)).filter((group: MuscleGroup) => {
        group.exercises = group.exercises.filter((exercise: Exercise) =>
          exercise.name.toLowerCase().includes(text.toLowerCase()),
        );
        return group.exercises.length > 0;
      }),
    );
    setInput(text);
    setReady(true);
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
            navigate('StartWorkout', {navData: navData});
          }}>
          <MaterialIcons name={'arrow-back-ios'} size={20} color={'#000000'} />
        </TouchableOpacity>
        <Text style={[styles.font_inter_20]}>Workout</Text>
      </View>
      <View style={[styles.mg_h_16, styles.mg_v_16]}>
        <TextInput
          label="Search Exercises"
          color="rgba(0, 0, 0, 0.3)"
          leading={props => (
            <MaterialIcons name={'search'} size={28} color={'#00000080'} />
          )}
          value={input}
          onChangeText={text => filterExercises(text)}
        />
        <View style={[styles.mg_v_8, styles.btn_container]}>
          <Pressable
            pressEffectColor="#fff"
            style={[
              styles.btn,
              {
                backgroundColor: Object.keys(newData).length
                  ? '#3761F880'
                  : '#d9d9d9',
              },
            ]}
            onPress={() =>
              Object.keys(newData).length
                ? navigate('StartWorkout', {navData: newData})
                : undefined
            }
            pressEffect={Object.keys(newData).length ? 'ripple' : 'none'}>
            <Text
              style={[
                styles.font_inter_sb_16,
                styles.text_center,
                {color: '#fff'},
              ]}>
              Add {Object.keys(newData).length} exercise
              {Object.keys(newData).length != 1 ? 's' : ''}
            </Text>
          </Pressable>
        </View>
        <ScrollView
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
          style={[styles.mg_v_8]}>
          <View style={[styles.mg_b_200]}>
            {isReady
              ? filterableData.map((muscle: any) => {
                  return (
                    <ExerciseDropdown
                      key={muscle.muscle}
                      muscle={muscle}
                      expanded={isExpanded}
                      function={toggleExercise}
                      navData={navData}></ExerciseDropdown>
                  );
                })
              : undefined}
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default AddExerciseScreen;
