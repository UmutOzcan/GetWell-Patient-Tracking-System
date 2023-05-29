import * as React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const MedicineView = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}> İlaçlar ve Tavsiyeler </Text>
    </View>
  );
};

export default MedicineView;

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
