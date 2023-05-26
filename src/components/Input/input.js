import React from 'react';
import {View, TextInput, Image} from 'react-native';

import styles from './input.style';

function input({image, onChangeText, placeholder}) {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={image} />
      <View style={styles.input_container}>
        <TextInput placeholder={placeholder} onChangeText={onChangeText} />
      </View>
    </View>
  );
}

export default input;
