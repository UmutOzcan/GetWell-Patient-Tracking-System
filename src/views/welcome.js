import React from 'react';
import {
  SafeAreaView,
  Text,
  View,
  StyleSheet,
  Image,
  ScrollView,
} from 'react-native';

import Button from '../components/button/button';

function Welcome({navigation}) {
  function goToMemberSign() {
    navigation.navigate('MemberSignScreen');
  }

  return (
    <ScrollView style={styles.container}>
      <SafeAreaView>
        <View>
          <Image
            style={styles.image}
            source={require('../images/doctor.jpg')}
          />
        </View>
        <Text style={styles.header}> Hoş Geldiniz </Text>
        <Text style={styles.maintext}>
          {' '}
          Uygulamamızda Hasta Takip ve Bilgilendirme servisleri bulunmaktadır.{' '}
        </Text>
        <Button text="Giriş Yap" onPress={goToMemberSign} />
      </SafeAreaView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#DEF1ED',
  },
  header: {
    color: 'black',
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
    margin: 25,
    marginBottom: 50,
  },
  maintext: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 150,
  },
  image: {
    position: 'relative',
    alignSelf: 'center',
    marginTop: 100,
  },
});

export default Welcome;
