import React, {useEffect, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Provider} from 'react-redux';

//redux-toolkit de kullanılabilirdi bunu initilaze etmek daha kolay geldi önermedikleri için üzeri çizili
import {createStore} from 'redux';
import reducers from './reducers';

const AuthProvider = ({children}) => {
  const [user, setUser] = useState(null);
  const [isAuthLoading, setAuthLoading] = useState(false);

  //useEffect(()=>{
  //    AsyncStorage.getItem()
  // }
  // )

  const store = createStore(reducers, {});
  return <Provider>{children}</Provider>;
};
