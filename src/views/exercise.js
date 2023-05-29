import * as React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const ExerciseView = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}> Egzersiz ve Beslenme </Text>
    </View>
  );
};

export default ExerciseView;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },

  label: {
    fontWeight: 'bold',
    fontSize: 20,
    textAlign: 'center',
    color: 'black',
    marginVertical: 30,
    marginHorizontal: 10,
    paddingBottom: 10,
    borderBottomWidth: 1,
  },
});
