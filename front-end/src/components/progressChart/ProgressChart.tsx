import {StyleSheet, View, Dimensions} from 'react-native';
import React from 'react';
import {BarChart} from 'react-native-gifted-charts';
import {Button, Text} from '@react-native-material/core';
import { useIsFocused } from '@react-navigation/native';

type WorkoutProgress = {
  createdAt: Date;
  duration: number;
  totalVolume: number;
  totalReps: number;
};

const GetBarChartData = (
  key: keyof WorkoutProgress,
  data: WorkoutProgress[],
) => {
  let curMonth = '';

  return data.map((d: WorkoutProgress) => {
    let label = new Date(d.createdAt).toLocaleString('default', {
      month: 'short',
    });

    if (label == curMonth) label = '';
    else curMonth = label;

    return {
      value: d[key],
      label: label,
      spacing: 2,
      labelWidth: 32,
      frontColor: '#3761f895',
    };
  });
};

const ProgressChart = () => {
  const [data, setData] = React.useState<any>([]);
  const [display, setDisplay] = React.useState<any>([]);
  const [isReady, setReady] = React.useState(false);
  const [displayIndex, setIndex] = React.useState<number>(2)
  const isFocused = useIsFocused();
  const url = 'http://localhost:3000/api/workouts/getProgress';

  React.useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(json => {
        setData([
          GetBarChartData('duration', json),
          GetBarChartData('totalReps', json),
          GetBarChartData('totalVolume', json)
        ]);

        setDisplay(GetBarChartData('totalVolume', json));
        setIndex(2);
      })
      .catch(error => console.error(error))
      .finally(() => setReady(true));
  }, [isFocused]);

  const SetDisplayData = (i: number) => {
    if (i == displayIndex)
      return;
    setDisplay([...data[i]]);
    setIndex(i);
  };
  
  return (
    <View>
      <View style={[styles.modal]}>
        <View style={[styles.content]}>
          {isReady && display.length ? (
            <BarChart
              data={display}
              width={Dimensions.get('window').width-80}
              barWidth={8}
              spacing={24}
              roundedTop
              roundedBottom
              hideRules
              xAxisThickness={0}
              yAxisThickness={0}
              noOfSections={3}
              maxValue={Math.max(...display.map((d: any) => d.value)) + 10}
              isAnimated
            />
          ) : isReady && !display.length ? (
            <Text style={[styles.noData]}>No data</Text>
          ) : undefined
        }
        </View>
      </View>
      <View style={[styles.modal]}>
        <Button
          title={'Volume'}
          style={[styles.btn]}
          color={displayIndex == 2 ? '#3761F850' : '#ffffff00'}
          disableElevation={true}
          uppercase={false}
          onPress={() => SetDisplayData(2)}></Button>
        <Button
          title={'Reps'}
          style={[styles.btn]}
          color={displayIndex == 1 ? '#3761F850' : '#ffffff00'}
          disableElevation={true}
          uppercase={false}
          onPress={() => SetDisplayData(1)}></Button>
        <Button
          title={'Duration'}
          style={[styles.btn]}
          color={displayIndex == 0 ? '#3761F850' : '#ffffff00'}
          disableElevation={true}
          uppercase={false}
          onPress={() => SetDisplayData(0)}></Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  modal: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: 8,
    paddingRight: 20,
  },
  content: {
    flex: 1,
    borderWidth: 2,
    borderRadius: 12,
    borderColor: '#aaa',
    paddingBottom: 40,
    height: 280,
  },
  btn: {
    marginRight: 8,
    flex: 1,
    width: 50,
    color: '#000'
  },
  noData: {
    marginTop: '33%',
    color: '#aaa',
    textAlign: 'center',
  }
});

export default ProgressChart;
