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

  const exerciselist: any[] = [];

  for (var exercise in props.exercises) {
    exerciselist.push(
      <ExerciseItem
        name={props.exercises[exercise].name}
        musclegroup={props.exercises[exercise].muscle_group}
        equipment={props.exercises[exercise].equipment}></ExerciseItem>,
    );
  }

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
        {exerciselist}
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
        <Text style={[styles.font_inter_exercise]}>
          {props.name}
        </Text>
        <Text style={[styles.font_inter_exercise, {color: '#555'}]}>
          {props.musclegroup}
        </Text>
        <Text style={[styles.font_inter_exercise, {color: '#555'}]}>
          {props.equipment}
        </Text>
      </View>
    </Pressable>
  );
};

const AddExerciseScreen = () => {
  const exerciseData: any = {
    'Chest exercises': [
      {
        name: 'Example Exercise (with a lot of text)',
        muscle_group: 'Chest',
        equipment: 'Barbbells',
      },
      {
        name: 'Example Exercise (with a lot of text)',
        muscle_group: 'Chest',
        equipment: 'Barbbells',
      },
      {
        name: 'Example Exercise (with a lot of text)',
        muscle_group: 'Chest',
        equipment: 'Barbbells',
      },
      {
        name: 'Example Exercise (with a lot of text)',
        muscle_group: 'Chest',
        equipment: 'Barbbells',
      },
    ],
    'Back exercises': [
      {
        name: 'Example Exercise (with a lot of text)',
        muscle_group: 'Back',
        equipment: 'Barbbells',
      },
      {
        name: 'Example Exercise (with a lot of text)',
        muscle_group: 'Back',
        equipment: 'Barbbells',
      },
      {
        name: 'Example Exercise (with a lot of text)',
        muscle_group: 'Back',
        equipment: 'Barbbells',
      },
      {
        name: 'Example Exercise (with a lot of text)',
        muscle_group: 'Back',
        equipment: 'Barbbells',
      },
    ],
    'Leg exercises': [
      {
        name: 'Example Exercise (with a lot of text)',
        muscle_group: 'Leg',
        equipment: 'Barbbells',
      },
      {
        name: 'Example Exercise (with a lot of text)',
        muscle_group: 'Leg',
        equipment: 'Barbbells',
      },
      {
        name: 'Example Exercise (with a lot of text)',
        muscle_group: 'Leg',
        equipment: 'Barbbells',
      },
      {
        name: 'Example Exercise (with a lot of text)',
        muscle_group: 'Leg',
        equipment: 'Barbbells',
      },
    ],
    'Arm exercises': [
      {
        name: 'Example Exercise (with a lot of text)',
        muscle_group: 'Arm',
        equipment: 'Barbbells',
      },
      {
        name: 'Example Exercise (with a lot of text)',
        muscle_group: 'Arm',
        equipment: 'Barbbells',
      },
      {
        name: 'Example Exercise (with a lot of text)',
        muscle_group: 'Arm',
        equipment: 'Barbbells',
      },
      {
        name: 'Example Exercise (with a lot of text)',
        muscle_group: 'Arm',
        equipment: 'Barbbells',
      },
    ],
    Compounds: [
      {
        name: 'Example Exercise (with a lot of text)',
        muscle_group: 'Compounds',
        equipment: 'Barbbells',
      },
      {
        name: 'Example Exercise (with a lot of text)',
        muscle_group: 'Compounds',
        equipment: 'Barbbells',
      },
      {
        name: 'Example Exercise (with a lot of text)',
        muscle_group: 'Compounds',
        equipment: 'Barbbells',
      },
      {
        name: 'Example Exercise (with a lot of text)',
        muscle_group: 'Compounds',
        equipment: 'Barbbells',
      },
    ],
  };

  const dropdown: any[] = [];

  for (var key in exerciseData) {
    if (exerciseData.hasOwnProperty(key)) {
      dropdown.push(
        <ExerciseDropdown
          category={key}
          exercises={exerciseData[key]}></ExerciseDropdown>,
      );
    }
  }

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
          <View style={[styles.pd_b_100]}>{dropdown}</View>
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
