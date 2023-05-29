import * as React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const ProfileView = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}> </Text>
    </View>
  );
};

export default ProfileView;

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
  },
});
