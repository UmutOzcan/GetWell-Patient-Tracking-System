import React, {useState, useEffect} from 'react';
import {Text, View, SafeAreaView, StyleSheet, FlatList} from 'react-native';
import Button from '../components/button/button';
import Calendar from '../components/calendar';
import database from '@react-native-firebase/database';

import parseContentData from '../utils/parseContentData';
import Card from '../components/card/card';

import auth from '@react-native-firebase/auth';

const HomeView = ({navigation}) => {
  const [contentList, setContentList] = useState([]);

  //adminse control paneline yönlendir
  if (auth().currentUser.email === 'umut@gmail.com') {
    navigation.navigate('AdminScreen');
  }

  useEffect(() => {
    //dbden çekilen bilgiler bölümü
    database()
      .ref('/userinfos')
      .on('value', snapshot => {
        const contentData = snapshot.val();

        //gelen datayı kontrol edip parse ettik
        const parsedData = parseContentData(contentData || {});
        const arr = [];

        //db ve auth karşılaştırması yaparak eşleşmeyenleri çıkardık
        for (let i = 0; i < parsedData.length; i++) {
          if (
            parsedData[i].username == auth().currentUser.email.split('@')[0]
          ) {
            arr.push(parsedData[i]);
          }
        }
        setContentList(arr);
      });
  }, []);

  //çıkış yapma işlemi
  function goToExit() {
    auth().signOut();
  }

  //flatlist için render edilecek değişken
  const renderContent = ({item}) => <Card card={item} />;

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.label}>Bugün Yapılacaklar</Text>
      </View>
      <View>
        <Calendar />
      </View>
      <FlatList data={contentList} renderItem={renderContent} />
      <Button text="Çıkış Yap" onPress={goToExit} />
    </SafeAreaView>
  );
};

//styles kodları eklendi
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
