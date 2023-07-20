import {
  View,
  ScrollView,
  Image,
  LayoutAnimation,
  BackHandler,
  TouchableOpacity,
  SafeAreaView,
  Alert,
} from 'react-native';
import {TextInput, Text, Pressable} from '@react-native-material/core';
import React, {useEffect, useState} from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {styles} from './WorkoutScreen';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../types/navigation';
import {Dictionary, Exercise, Routine} from '../types/workout';
import SearchBarHeader from '../components/searchBar/SearchBar';

type Props = NativeStackScreenProps<RootStackParamList, 'SavedRoutines'>;

const RoutineItem = (props: {routine: Routine, navigate: Function}) => {
  return (
    <Pressable
      style={[
        styles.mg_l_16,
        styles.exercise_item_container,
        styles.flex_row,
        styles.flex_nowrap,
        styles.flex_align_center,
      ]}
      onPress={() => {
        props.navigate(props.routine.exercises[0]);
      }}>
      <View style={[styles.pd_8, styles.flex_justify_between, {width: '90%'}]}>
        <Text style={[styles.font_inter_16]}>{props.routine.name}</Text>
        {/* <Text style={[styles.font_inter_16, {color: '#555'}]}>
          {props.routine.description}
        </Text> */}
      </View>
    </Pressable>
  );
};

const SavedRoutinesScreen = ({navigation: {navigate, goBack}}: Props) => {
  const [search, setSearch] = useState('');
  const [routines, setRoutines] = React.useState<Routine[]>([]);
  const [filteredRoutines, setFilter] = React.useState<Routine[]>([]);
  const [isReady, setReady] = useState(false);
  const url = 'http://localhost:3000/api/routines/get';

  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(json => {
        setRoutines(json);
        setFilter(json);
      })
      .catch(error => console.error(error))
      .finally(() => setReady(true));
  }, []);

  const filterRoutines = (text: string) => {
    setReady(false);
    setFilter(
      JSON.parse(JSON.stringify(routines)).filter((routine: Routine) => {
        return routine.name.toLowerCase().includes(text.toLowerCase())
      }),
    );
    setSearch(text);
    setReady(true);
  };

  const navigateHelper = (exercises: string) => {
    // Needs to be parsed twice because exercices may be over-stringified
    const parsed = JSON.parse(JSON.parse(JSON.stringify(exercises)));
    navigate('StartWorkout', {navData: parsed});
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
            goBack();
          }}>
          <MaterialIcons name={'arrow-back-ios'} size={20} color={'#000000'} />
        </TouchableOpacity>
        <Text style={[styles.font_inter_20]}>Saved Routines</Text>
      </View>
      <View style={[styles.mg_h_16, styles.mg_v_8]}>
        <TextInput
          label="Search Exercises"
          color="rgba(0, 0, 0, 0.3)"
          leading={props => (
            <MaterialIcons name={'search'} size={28} color={'#00000080'} />
          )}
          value={search}
          onChangeText={text => filterRoutines(text)}
        />
        <ScrollView
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
          style={[styles.mg_v_8]}>
          <View style={[styles.mg_b_200]}>
            {isReady
              ? filteredRoutines.map((routineItem: Routine) => {
                  return (
                    <RoutineItem
                      key={routineItem._id}
                      routine={routineItem}
                      navigate={navigateHelper}></RoutineItem>
                  );
                })
              : undefined}
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default SavedRoutinesScreen;
