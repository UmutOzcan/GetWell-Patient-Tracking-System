import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

//eger success ise dot ekle
const Dot = () => {
  return (
    <View style={styles.container}>
      <Text></Text>
    </View>
  );
};

export default Dot;

const styles = StyleSheet.create({
  container: {
    height: 7,
    width: 7,
    borderRadius: 7,
    backgroundColor: 'red',
  },
});
