import React from 'react';
import {View, TextInput, Image} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import styles from './input.style';

function input({onChangeText, placeholder, iconName, isSecure}) {
  return (
    <View style={styles.container}>
      <View
        style={{
          marginTop: 8,
        }}>
        <Icon size={45} name={iconName} color="black" />
      </View>
      <View style={styles.input_container}>
        <TextInput
          placeholder={placeholder}
          onChangeText={onChangeText}
          secureTextEntry={isSecure}
        />
      </View>
    </View>
  );
}

export default input;
