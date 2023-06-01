import React from 'react';
import {View, TextInput, Image} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import styles from './input.style';

// inputları ortak bir componentte tanımladık propslarını seçtik
function input({onType, placeholder, iconName, isSecure, value}) {
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
          autoCapitalize="none"
          placeholder={placeholder}
          onChangeText={onType}
          value={value}
          secureTextEntry={isSecure}
        />
      </View>
    </View>
  );
}

export default input;
