import {
  StyleSheet,
  View,
  ScrollView,
  FlatList,
  Image,
  LayoutAnimation,
} from 'react-native';
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
          toggleDropdown();
        }}>
        <Image
          source={require('../assets/images/google_logo.png')}
          style={[styles.exercise_icon]}
        />
        <View style={[styles.pd_8, styles.flex_justify_between]}>
          <Text style={[styles.font_inter_category]}>{props.category}</Text>
        </View>
      </Pressable>
      <View style={[visible ? undefined : styles.exercise_category_collapsed]}>
        {props.exercises.map((exercise: any) => {
          return (
            <ExerciseItem
              key={exercise.exerciseid}
              name={exercise.name}
              muscleGroup={exercise.muscleGroup}
              equipment={exercise.equipment}></ExerciseItem>
          );
        })}
      </View>
    </View>
  );
};

const ExerciseItem = (props: any) => {
  return (
    <Pressable
      style={[
        styles.mg_l_16,
        styles.exercise_item_container,
        styles.flex_row_nowrap,
        styles.flex_align_center,
      ]}>
      <Image
        source={require('../assets/images/google_logo.png')}
        style={[styles.exercise_icon]}
      />
      <View style={[styles.pd_8, styles.flex_justify_between, {width: '90%'}]}>
        <Text style={[styles.font_inter_exercise]}>{props.name}</Text>
        <Text style={[styles.font_inter_exercise, {color: '#555'}]}>
          {props.muscleGroup}
        </Text>
        <Text style={[styles.font_inter_exercise, {color: '#555'}]}>
          {props.equipment}
        </Text>
      </View>
    </Pressable>
  );
};

const AddExerciseScreen = () => {
  const exerciseData: any = [
    {
      muscleGroup: 'Chest exercises',
      exercises: [
        {
          exerciseid: '1',
          name: 'Example Exercise (with a lot of text)',
          muscleGroup: 'Chest',
          equipment: 'Barbbells',
        },
        {
          exerciseid: '2',
          name: 'Example Exercise (with a lot of text)',
          muscleGroup: 'Chest',
          equipment: 'Barbbells',
        },
        {
          exerciseid: '3',
          name: 'Example Exercise (with a lot of text)',
          muscleGroup: 'Chest',
          equipment: 'Barbbells',
        },
        {
          exerciseid: '4',
          name: 'Example Exercise (with a lot of text)',
          muscleGroup: 'Chest',
          equipment: 'Barbbells',
        },
      ],
    },
    {
      muscleGroup: 'Back exercises',
      exercises: [
        {
          exerciseid: '5',
          name: 'Example Exercise (with a lot of text)',
          muscleGroup: 'Back',
          equipment: 'Barbbells',
        },
        {
          exerciseid: '6',
          name: 'Example Exercise (with a lot of text)',
          muscleGroup: 'Back',
          equipment: 'Barbbells',
        },
        {
          exerciseid: '7',
          name: 'Example Exercise (with a lot of text)',
          muscleGroup: 'Back',
          equipment: 'Barbbells',
        },
        {
          exerciseid: '8',
          name: 'Example Exercise (with a lot of text)',
          muscleGroup: 'Back',
          equipment: 'Barbbells',
        },
      ],
    },
    {
      muscleGroup: 'Leg exercises',
      exercises: [
        {
          exerciseid: '9',
          name: 'Example Exercise (with a lot of text)',
          muscleGroup: 'Leg',
          equipment: 'Barbbells',
        },
        {
          exerciseid: '10',
          name: 'Example Exercise (with a lot of text)',
          muscleGroup: 'Leg',
          equipment: 'Barbbells',
        },
        {
          exerciseid: '11',
          name: 'Example Exercise (with a lot of text)',
          muscleGroup: 'Leg',
          equipment: 'Barbbells',
        },
        {
          exerciseid: '12',
          name: 'Example Exercise (with a lot of text)',
          muscleGroup: 'Leg',
          equipment: 'Barbbells',
        },
      ],
    },
    {
      muscleGroup: 'Arm exercises',
      exercises: [
        {
          exerciseid: '13',
          name: 'Example Exercise (with a lot of text)',
          muscleGroup: 'Arm',
          equipment: 'Barbbells',
        },
        {
          exerciseid: '14',
          name: 'Example Exercise (with a lot of text)',
          muscleGroup: 'Arm',
          equipment: 'Barbbells',
        },
        {
          exerciseid: '15',
          name: 'Example Exercise (with a lot of text)',
          muscleGroup: 'Arm',
          equipment: 'Barbbells',
        },
        {
          exerciseid: '16',
          name: 'Example Exercise (with a lot of text)',
          muscleGroup: 'Arm',
          equipment: 'Barbbells',
        },
      ],
    },
    {
      muscleGroup: 'Compunds',
      exercises: [
        {
          exerciseid: '17',
          name: 'Example Exercise (with a lot of text)',
          muscleGroup: 'Compounds',
          equipment: 'Barbbells',
        },
        {
          exerciseid: '18',
          name: 'Example Exercise (with a lot of text)',
          muscleGroup: 'Compounds',
          equipment: 'Barbbells',
        },
        {
          exerciseid: '19',
          name: 'Example Exercise (with a lot of text)',
          muscleGroup: 'Compounds',
          equipment: 'Barbbells',
        },
        {
          exerciseid: '20',
          name: 'Example Exercise (with a lot of text)',
          muscleGroup: 'Compounds',
          equipment: 'Barbbells',
        },
      ],
    },
  ];

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
            {exerciseData.map((muscleGroup: any) => {
              return (
                <ExerciseDropdown
                  key={muscleGroup.muscleGroup}
                  category={muscleGroup.muscleGroup}
                  exercises={muscleGroup.exercises}></ExerciseDropdown>
              );
            })}
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
  flex_row_nowrap: {
    flexDirection: 'row',
    flexWrap: 'nowrap',
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
    marginVertical: 22,
    marginLeft: 8,
    height: 56,
    width: 56,
    borderRadius: 28,
    borderWidth: 1,
    borderColor: '#000',
    resizeMode: 'contain',
  },
});
