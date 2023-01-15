import React from 'react';
import 'react-native-gesture-handler';
import {View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import Home from '../screens/Home';
import Foto from '../screens/Foto';
import Favorite from '../screens/Favorite';
import AboutUs from '../screens/AboutUs';
import Article from '../screens/Article';
import Shkence from '../screens/Shkence';

Icon.loadFont();

const BottomNav = createMaterialBottomTabNavigator();
const HomeStack = createStackNavigator();

const HomeStackScreen = () => {
  return (
    <HomeStack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <HomeStack.Screen name="Home" component={Home} />
      <HomeStack.Screen name="Article" component={Article} />
      <HomeStack.Screen name="Shkence" component={Shkence} />
    </HomeStack.Navigator>
  );
};

export default function AppNav() {
  return (
    <NavigationContainer>
      <BottomNav.Navigator>
        <BottomNav.Screen
          name="Ballina"
          component={HomeStackScreen}
          barStyle={{backgroundColor: '#d13560'}}
          options={{
            tabBarIcon: ({color}) => (
              <View>
                <Icon style={[{color: color}]} size={26} name={'ios-home'} />
              </View>
            ),
            tabBarColor: '#192765',
          }}
        />
        <BottomNav.Screen
          name="Foto"
          component={Foto}
          activeColor="#ffffff"
          inactiveColor="#ebaabd"
          barStyle={{backgroundColor: '#d13560'}}
          options={{
            tabBarIcon: ({color}) => (
              <View>
                <Icon style={[{color: color}]} size={26} name={'md-image'} />
              </View>
            ),
            tabBarColor: '#429efb',
          }}
        />
        <BottomNav.Screen
          name="Favorite"
          component={Favorite}
          options={{
            tabBarIcon: ({color}) => (
              <View>
                <Icon style={[{color: color}]} size={26} name={'md-heart'} />
              </View>
            ),
            tabBarColor: '#72d4a0',
          }}
        />
        <BottomNav.Screen
          name="Rreth Nesh"
          component={AboutUs}
          options={{
            tabBarIcon: ({color}) => (
              <View>
                <Icon
                  style={[{color: color}]}
                  size={26}
                  name={'ios-information-circle'}
                />
              </View>
            ),
            tabBarColor: '#ffc356',
          }}
        />
      </BottomNav.Navigator>
    </NavigationContainer>
  );
}
