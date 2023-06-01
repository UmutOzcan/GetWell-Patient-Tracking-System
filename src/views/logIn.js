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

//state yapılarını daha performanslı ve düzgün kontrol etmek için
import {Formik} from 'formik';

//hazırladığımız componentslerden buton ve input comps çektik
import Button from '../components/button/button';
import Input from '../components/Input';

//firebase auth library
import auth from '@react-native-firebase/auth';

//flash message imports
import {showMessage} from 'react-native-flash-message';

//error codeları utils ile metinlere dönüştürdük
import authErrorMessagesParser from '../utils/authErrorMessagesParser';

//form value initialize ettik
const initialFormValues = {
  usermail: '',
  password: '',
};

function LogIn({navigation}) {
  //veri gelene kadar buton loading state de kalması için oluşturduk
  const [loading, setLoading] = useState(false);

  //form değerlerini submit ettik async ve await kullandık bilgiler dönene kadar beklemesi için
  async function handleFormSubmit(formValues) {
    //bilgiler bossa alert döndür
    if (!formValues.usermail || !formValues.password) {
      Alert.alert('GetWell Hasta Takip Sistemi', 'Bilgiler boş bırakılamaz!');
      return;
    }

    try {
      setLoading(true);
      await auth().signInWithEmailAndPassword(
        formValues.usermail,
        formValues.password,
      );

      setLoading(false);
    } catch (error) {
      showMessage({
        message: authErrorMessagesParser(error.code),
        type: 'danger',
      });
      setLoading(false);
    }
  }

  /* react tek children istediği için fragment <> </> ekledikr */
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
            <Text style={styles.info}>
              Size verilen bilgiler ile giriş yapınız
            </Text>
          </View>
          {/* stateleri formik ile tutarız */}
          <Formik initialValues={initialFormValues} onSubmit={handleFormSubmit}>
            {({values, handleChange, handleSubmit}) => (
              <>
                <View style={styles.inputs}>
                  <Input
                    iconName={'account'}
                    placeholder="Mailinizi giriniz "
                    value={values.usermail}
                    onType={handleChange('usermail')}
                  />
                  <Input
                    iconName={'lock'}
                    placeholder="Parolanızı giriniz "
                    value={values.password}
                    onType={handleChange('password')}
                    isSecure
                  />
                </View>
                <View>
                  <Button
                    text="Giriş Yap"
                    onPress={handleSubmit}
                    loading={loading}
                  />
                </View>
              </>
            )}
          </Formik>
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
    marginTop: 50,
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

export default LogIn;
