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
//flash message imports
import {showMessage} from 'react-native-flash-message';
//error codeları utils ile metinlere dönüştürdük
import authErrorMessagesParser from '../utils/authErrorMessagesParser';
//firebase import
import auth from '@react-native-firebase/auth';

//form value initialize ettik
const initialFormValues = {
  usermail: '',
  password: '',
  usermode: '',
  repassword: '',
};

function Admin({navigation}) {
  //veri gelene kadar buton loading state de kalması için oluşturduk
  const [loading, setLoading] = useState(false);

  //gecici handle
  function handleSubmit() {
    navigation.navigate('TabScreen');
  }
  function goToTabScrren() {
    navigation.navigate('TabScreen');
  }

  //form degerlerini submit etmeden kontrol etmek icin
  async function handleFormSubmit(formValues) {
    if (formValues.password !== formValues.repassword) {
      showMessage({
        message: 'Şifreler uyuşmuyor !',
        type: 'danger',
      });
      return;
    }

    //eğer başarılı bir giriş olur ise ya da hata verir ise
    try {
      await auth().createUserWithEmailAndPassword(
        formValues.usermail,
        formValues.password,
      );
      showMessage({
        message: 'Hasta kaydı oluşturuldu .',
        type: 'success',
      });

      //navigation.navigate('AdminControlScreen');
      setLoading(false);
    } catch (error) {
      setLoading(false);
      showMessage({
        message: authErrorMessagesParser(error.code),
        type: 'danger',
      });
    }
  }

  return (
    <ScrollView style={styles.container}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View>
          <View>
            <Text style={styles.info}>
              Hasta eklemek için aşağıdaki formları doldurun
            </Text>
          </View>
          {/* stateleri formik ile tutarız */}
          <Formik initialValues={initialFormValues} onSubmit={handleFormSubmit}>
            {({values, handleChange, handleSubmit}) => (
              <>
                <View style={styles.inputs}>
                  <Input
                    iconName={'account'}
                    placeholder="Hasta maili giriniz "
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
                  <Input
                    iconName={'lock'}
                    placeholder="Tekrar parola giriniz "
                    value={values.repassword}
                    onType={handleChange('repassword')}
                    isSecure
                  />
                </View>
                <View style={styles.buton}>
                  <Button
                    text="Hasta Olustur"
                    onPress={handleSubmit}
                    loading={loading}
                  />
                  <Button
                    text="Var Olan hastaya ekleme yap"
                    onPress={goToTabScrren}
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

export default Admin;
