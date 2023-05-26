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
    <SafeAreaView style={{flex: 1}}>
      <Text style={styles.label}>Bugün Yapılacaklar</Text>
      <View>
        <Calendar />
      </View>
      <Button text="Profilini görmek için" onPress={goToProfile} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  label: {
    fontWeight: 'bold',
    fontSize: 20,
    textAlign: 'center',
    marginVertical: 20,
    color: 'black',
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
