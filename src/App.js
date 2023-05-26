import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Image} from 'react-native';
import Welcome from './views/welcome';
import MemberSign from './views/membersign';
import HomeView from './views/home';
import ExerciseView from './views/exercise';
import MedicineView from './views/medicine';
import ProfileView from './views/profile';

import moment from 'moment';
import 'moment/locale/tr';

moment.locale('tr');

const Tab = createBottomTabNavigator();

//TabScreen düzenlemeleri
function TabScreen() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: '#B5EEE4',
          height: 56,
        },
      }}>
      <Tab.Screen
        name="Exercise"
        component={ExerciseView}
        options={{
          tabBarIcon: () => (
            <Image
              source={require('./images/bicycle-outline.png')}
              style={{width: 35, height: 30}}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Home"
        component={HomeView}
        options={{
          tabBarIcon: () => (
            <Image
              source={require('./images/home-outline.png')}
              style={{width: 35, height: 30}}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Medicine"
        component={MedicineView}
        options={{
          tabBarIcon: () => (
            <Image
              source={require('./images/medkit-outline.png')}
              style={{width: 35, height: 30}}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const GirisStack = createNativeStackNavigator();

function GirisScreen() {
  return (
    <GirisStack.Navigator screenOptions={{headerShown: false}}>
      <GirisStack.Screen name="WelcomeScreen" component={Welcome} />
      <GirisStack.Screen name="MemberSignScreen" component={MemberSign} />
      <GirisStack.Screen name="HomeScreen" component={HomeView} />
    </GirisStack.Navigator>
  );
}

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    //diğer stack screen ile üst üste gelmesin diye headerShown : false yaptık
    //farklı viewlerden alırken componentlere dikkat edelim
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="GirisScreen" component={GirisScreen} />
        <Stack.Screen
          name="ProfileScreen"
          component={ProfileView}
          options={{headerShown: true}}
        />
        <Stack.Screen name="TabScreen" component={TabScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
