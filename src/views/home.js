import * as React from 'react';
import {Text, View, SafeAreaView, StyleSheet} from 'react-native';
import Button from '../components/button/button';
import Calendar from '../components/calendar';

const HomeView = ({navigation}) => {
  //const {user} = route.params;

  function goToProfile() {
    navigation.navigate('ProfileScreen');
  }

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.label}>Bugün Yapılacaklar</Text>
      </View>
      <View>
        <Calendar />
      </View>
      <Button text="Profilini görmek için" onPress={goToProfile} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },

  label: {
    fontWeight: 'bold',
    fontSize: 20,
    textAlign: 'center',
    justifyContent: 'space-between',
    color: 'black',
    marginVertical: 30,
    marginHorizontal: 10,
    paddingBottom: 10,
    borderBottomWidth: 1,
  },
  message: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 30,
    textAlign: 'center',
    marginTop: 20,
  },
});

export default HomeView;
