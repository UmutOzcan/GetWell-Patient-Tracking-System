import React from 'react';
import {TouchableOpacity, Text, ActivityIndicator} from 'react-native';

import styles from './button.style';

//buttonun modeli ve aşağıdaki özellikleri componenetten dinamik olarak aktarılabilir theme yazılmazsa primary initialize edilir
//on press basıldığında ne olucak
//loading bir yönlendirmede gecikme varsa bekletir
const button = ({text, loading, onPress, theme = 'primary'}) => {
  return (
    <TouchableOpacity
      style={styles[theme].container}
      onPress={onPress}
      disabled={loading}>
      {loading ? (
        <ActivityIndicator color={'white'} />
      ) : (
        <Text style={styles[theme].text}>{text}</Text>
      )}
    </TouchableOpacity>
  );
};

export default button;
