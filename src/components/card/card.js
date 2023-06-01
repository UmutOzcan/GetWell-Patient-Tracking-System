import React from 'react';

import {View, Text} from 'react-native';

import styles from './card.style';

//card propsundan gelen detayları ayırıp döndürür
const Card = ({card}) => {
  return (
    <View style={styles.container}>
      <View style={styles.inner_container}>
        <Text style={styles.user}>{card.username}</Text>
        <Text style={styles.date}>{card.date}</Text>
      </View>
      <View style={styles.outer_container}>
        <Text style={styles.exercise}> Egzersiz : {card.exercise}</Text>
        <Text style={styles.pill}> İlaç : {card.pill}</Text>
      </View>
    </View>
  );
};

export default Card;
