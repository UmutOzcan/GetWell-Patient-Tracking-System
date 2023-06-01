import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import Dot from '../dot';
import moment from 'moment/moment';

//statik tanımladık ama moment ile güncelledik
const week = [
  {
    title: 'Pzt',
    number: 2,
    status: 'none',
  },
  {
    title: 'Sal',
    number: 3,
    status: 'success',
  },
  {
    title: 'Çar',
    number: 4,
    status: 'success',
  },
  {
    title: 'Per',
    number: 5,
    status: 'none',
  },
  {
    title: 'Cum',
    number: 6,
    status: 'success',
  },
  {
    title: 'Cmt',
    number: 7,
    status: 'success',
  },
  {
    title: 'Paz',
    number: 8,
    status: 'none',
  },
];

const Calendar = () => {
  //gün ve hafta bilgierlini moment ile alıp format ile değiştirdik
  const today = moment().format('D');

  const week = getCurrentWeekDays().map(item => ({
    title: moment(item).format('ddd'),
    number: moment(item).format('D'),
  }));

  return (
    <View>
      <View style={styles.container}>
        {week.map((item, index) => (
          <View key={index} style={styles.day}>
            <Text style={styles.text}>{item.title}</Text>
            <Text style={styles.number}>{item.number}</Text>
            {item.number === today && <Dot />}
          </View>
        ))}
      </View>
      <Text style={styles.today}>{moment().format('D MMMM yyyy dddd')}</Text>
    </View>
  );
};

// moment libsinin uygulandığı fonk gün bilgierlini döndürür
const getCurrentWeekDays = () => {
  const weekStart = moment().startOf('week');

  const days = [];

  for (let i = 0; i <= 6; i++) {
    days.push(moment(weekStart).add(i, 'days'));
  }

  return days;
};

export default Calendar;

const styles = StyleSheet.create({
  container: {
    marginTop: 0,
    height: 80,
    flexDirection: 'row',
    marginHorizontal: 10,
  },
  day: {
    flex: 1,
    borderStartWidth: 4,
    borderEndWidth: 0.1,
    borderBottomWidth: 2,
    borderTopWidth: 1,
    borderRadius: 10,
    borderColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#B5EEE4',
    marginHorizontal: 1.5,
  },
  text: {
    fontWeight: 'bold',
    color: 'black',
  },
  number: {
    margin: 8,
  },

  today: {
    marginTop: 30,
    fontWeight: 'bold',
    color: 'black',
    fontSize: 20,
    textAlign: 'center',
    flexDirection: 'row',
  },
});
