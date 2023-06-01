import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

//calendar dan dönen deger eger success ise dot ekle
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
    height: 8,
    width: 8,
    borderRadius: 7,
    borderWidth: 0.5,
    backgroundColor: 'red',
  },
});
