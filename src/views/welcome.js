import React from 'react';
import {
  SafeAreaView,
  Text,
  View,
  StyleSheet,
  Image,
  ScrollView,
  Dimensions,
} from 'react-native';

import Button from '../components/button/button';

//Karsilama ekranı

function Welcome({navigation}) {
  //devam et e basılınca giriş sayfasına yönlendirir
  function goToMemberSign() {
    navigation.navigate('LogIn');
  }

  return (
    <ScrollView style={styles.container}>
      <SafeAreaView>
        <View>
          <Image
            style={styles.image}
            source={require('../images/doctor.png')}
          />
        </View>
        <Text style={styles.header}> Hoş Geldiniz </Text>
        <Text style={styles.maintext}>
          {' '}
          Uygulamamızda Hasta Takip ve Bilgilendirme servisleri bulunmaktadır.{' '}
        </Text>
        <Button text=" Devam Et " onPress={goToMemberSign} theme="primary" />
      </SafeAreaView>
    </ScrollView>
  );
}

//style tanımlamaları

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
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
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height * 0.3,
    resizeMode: 'contain',
    marginTop: 100,
  },
});

export default Welcome;
