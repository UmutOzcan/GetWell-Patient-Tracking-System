//admin hasta oluştura bastıktan snra buraya gelecek ve real time database i yönetebilecek sonra

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
//firebase db lib
import database from '@react-native-firebase/database';
//flash message imports
import {showMessage} from 'react-native-flash-message';
//error codeları utils ile metinlere dönüştürdük
import authErrorMessagesParser from '../utils/authErrorMessagesParser';

const initialFormValues = {
  usermail: '',
  exercise: '',
  pill: '',
};

function AdminControlScreen({navigation}) {
  //veri gelene kadar buton loading state de kalması için oluşturduk
  const [loading, setLoading] = useState(false);

  //form değerlerini submit ettik async ve await kullandık bilgiler dönene kadar beklemesi için
  async function sendContent(formValues) {
    if (!formValues.usermail || !formValues.exercise || !formValues.pill) {
      Alert.alert('GetWell Hasta Takip Sistemi', 'Bilgiler boş bırakılamaz!');
      return;
    }

    //BURAYA GİRİLEN HASTA BİLGİLERİNİ YANSITIP İÇERİK BİLGİLERİNİ TUTACAK
    setLoading(true);
    const contentObject = {
      username: formValues.usermail.split('@')[0],
      date: new Date().toISOString().split('T')[0],
      exercise: formValues.exercise,
      pill: formValues.pill,
    };

    database().ref('userinfos/').push(contentObject);
    setLoading(false);

    navigation.navigate('AdminScreen');
  }

  /* react tek children istediği için fragment <> </> ekledikr */
  return (
    <ScrollView style={styles.container}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View>
          <View>
            <Text style={styles.info}>
              Düzenlemek istediğiniz kullanıcı bilgilerini giriniz
            </Text>
          </View>
          {/* stateleri formik ile tutarız */}
          <Formik initialValues={initialFormValues} onSubmit={sendContent}>
            {({values, handleChange, handleSubmit}) => (
              <>
                <View style={styles.inputs}>
                  <Input
                    iconName={'account'}
                    placeholder="Kullanıcı ismi"
                    value={values.usermail}
                    onType={handleChange('usermail')}
                  />
                  <Input
                    iconName={'run'}
                    placeholder="Egzersiz ve Beslenme "
                    value={values.exercise}
                    onType={handleChange('exercise')}
                  />
                  <Input
                    iconName={'pill'}
                    placeholder="İlaç ve Tavsiye "
                    value={values.pill}
                    onType={handleChange('pill')}
                  />
                </View>
                <View>
                  <Button
                    text="Ekle"
                    onPress={handleSubmit}
                    theme="secondary"
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

export default AdminControlScreen;
