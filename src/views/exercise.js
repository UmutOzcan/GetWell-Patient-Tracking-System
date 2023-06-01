import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';

import parseContentData from '../utils/parseContentData';

import auth from '@react-native-firebase/auth';
import database from '@react-native-firebase/database';

const ExerciseView = () => {
  const [contentList, setContentList] = useState([]);

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

  //flatlist için render edilecek değişken
  const renderContent = ({item}) => (
    <View style={styles.list}>
      <Text style={styles.exercise}>{item.exercise}</Text>
      <Text style={styles.date}>{item.date}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.label}> Egzersiz ve Beslenme </Text>
      <FlatList data={contentList} renderItem={renderContent} />
    </View>
  );
};

export default ExerciseView;

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
    marginHorizontal: 10,
    paddingBottom: 10,
    borderBottomWidth: 1,
  },

  list: {
    margin: 10,
    borderWidth: 3,
    borderColor: 'black',
    padding: 20,
    justifyContent: 'space-between',
    flexDirection: 'row',
  },

  exercise: {
    color: 'black',
  },

  date: {
    fontWeight: 'bold',
    color: 'black',
  },
});
