import {
  View,
  ScrollView,
  Image,
  LayoutAnimation,
  BackHandler,
} from 'react-native';
import {TextInput, Text, Pressable} from '@react-native-material/core';
import React, {useEffect, useState} from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {styles} from './WorkoutScreen';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../types/navigation';

type Props = NativeStackScreenProps<RootStackParamList, 'AddExercise'>;

const ExerciseDropdown = (props: any) => {
  const [visible, setVisible] = React.useState(props.expanded);

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
        {props.muscle.exercises.map((exercise: any) => {
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
  const [selected, setSelected] = React.useState(
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

interface exercise {
  img: any;
  _id: any;
  name: any;
  description: any;
  muscle: any;
  equipment: any;
  difficulty: any;
  __v: any;
}
const AddExerciseScreen = ({route, navigation: {navigate}}: Props) => {
  // Related to passing data between AddExercise and StartWorkoutScreen
  const navData =
    route.params?.navData != undefined ? route.params?.navData : {};
  const oldData = {...navData};
  const [count, setCount] = React.useState(Object.keys(navData).length);
  const toggleExercise = (info: exercise) => {
    if (navData[info.name] == undefined) {
      navData[info.name] = info;
      setCount(count + 1);
    } else {
      delete navData[info.name];
      setCount(count - 1);
    }
  };

  useEffect(() => {
    const backAction = () => {
      navigate('StartWorkout', {navData: oldData});
      return true;
    };

    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction,
    );

    return () => backHandler.remove();
  }, []);

  // Get exercises from db
  const [exerciseData, setData] = React.useState([]);
  const [filterableData, setFilter] = React.useState([]);
  const [isReady, setReady] = useState(false);
  const url = 'http://10.0.0.13:3000/api/exercises/groupedExercises';

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
  const [isExpanded, setExpanded] = React.useState(false);

  const filterExercises = (e: any) => {
    setExpanded(true);
    setReady(false);
    setFilter(
      exerciseData.filter((group: any) => {
        return (
          group.exercises.filter((exercise: any) =>
            exercise.name.toLowerCase().includes(e.toLowerCase()),
          ).length > 0
        );
      }),
    );
    setReady(true);
  };
  return (
    <View style={styles.bg_white}>
      <View style={[styles.flex_row, styles.flex_align_center]}>
        <Text style={[styles.mg_16, styles.pd_8, styles.font_inter_20]}>
          Workout
        </Text>
      </View>
      <View style={[styles.mg_h_16, styles.mg_v_16]}>
        <TextInput
          label="Search Exercises"
          color="rgba(0, 0, 0, 0.3)"
          leading={props => (
            <MaterialIcons name={'search'} size={28} color={'#00000080'} />
          )}
          onChangeText={text => filterExercises(text)}
        />
        <View style={[styles.mg_v_8, styles.btn_container]}>
          <Pressable
            pressEffectColor="#fff"
            style={[
              styles.btn,
              {backgroundColor: count ? '#3761F880' : '#d9d9d9'},
            ]}
            onPress={() =>
              count ? navigate('StartWorkout', {navData: navData}) : undefined
            }
            pressEffect={count ? 'ripple' : 'none'}>
            <Text
              style={[
                styles.font_inter_sb_16,
                styles.text_center,
                {color: '#fff'},
              ]}>
              Add {count} exercise{count != 1 ? 's' : ''}
            </Text>
          </Pressable>
        </View>
        <ScrollView style={[styles.mg_v_8]}>
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
    </View>
  );
};

export default AddExerciseScreen;
