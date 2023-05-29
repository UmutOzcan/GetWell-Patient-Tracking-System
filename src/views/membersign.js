import {React, useState} from 'react';
import {
  Alert,
  StyleSheet,
  View,
  Image,
  Text,
  TouchableWithoutFeedback,
  Keyboard,
  ScrollView,
  Dimensions,
} from 'react-native';

import Button from '../components/button/button';
import Input from '../components/Input';

function MemberSign({navigation}) {
  //gelişmiş yapılarda kullanılan state kullanımını azaltan yapılar mevcut fakat entegre edemedim
  //default değerlerini null yaptık
  const [username, setUserName] = useState(null);
  const [password, setPassword] = useState(null);

  function handleSubmit() {
    //bilgiler bossa alert döndür
    if (!username || !password) {
      Alert.alert('GetWell Hasta Takip Sistemi', 'Bilgiler boş bırakılamaz!');
      return;
    }

    //ECMA da aynı isimde oluştururken keyleri objeye atama kolaylığını kullandık
    const user = {
      username,
      password,
    };

    navigation.navigate('TabScreen');
  }

  return (
    <ScrollView style={styles.container}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View>
          <View>
            <View>
              <Image
                style={styles.image}
                source={require('../images/login.png')}
              />
            </View>
            <Text style={styles.info}>Giriş yapmak için kayıt olunuz</Text>
          </View>
          <View style={styles.inputs}>
            <Input
              iconName={'account'}
              placeholder="Kullanıcı adınızı giriniz "
              onChangeText={setUserName}
            />
            <Input
              iconName={'lock'}
              placeholder="Parolanızı giriniz "
              onChangeText={setPassword}
              isSecure
            />
          </View>
          <View style={styles.buton}>
            <Button text="Giriş Yap" onPress={handleSubmit} />
          </View>
        </View>
      </TouchableWithoutFeedback>
    </ScrollView>
  );
}

//style kodları

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
  },
  image: {
    marginTop: 30,
    width: Dimensions.get('window').width * 0.9,
    height: Dimensions.get('window').height * 0.3,
    resizeMode: 'contain',
    alignSelf: 'center',
  },
  info: {
    fontWeight: 'bold',
    color: 'black',
    fontSize: 20,
    textAlign: 'center',
    marginVertical: 40,
  },
  inputs: {
    marginBottom: 100,
  },
});

export default MemberSign;
