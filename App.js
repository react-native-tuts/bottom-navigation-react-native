import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

import { createBottomTabNavigator } from 'react-navigation'
import Explore from './src/components/Explore'
import Saved from './src/components/Saved'
import Inbox from './src/components/Inbox'
import Trips from './src/components/Trips'


export default createBottomTabNavigator({
  Explore: {
    screen: Explore,
    navigationOptions: {
      tabBarLabel: 'EXPLORE'
      
    }
  },
  Saved: {
    screen: Saved,
    navigationOptions: {
      tabBarLabel: 'SAVED',
      
    }
  },
  Trips: {
    screen: Trips,
    navigationOptions: {
      tabBarLabel: 'TRIPS',
      tabBarIcon: ({ tintColor }) => (
        <Image source={require('./src/assets/airbnb.png')} style={{ height: 24, width: 24, tintColor: tintColor }} />
      )
    }
  },
  Inbox: {
    screen: Inbox,
    navigationOptions: {
      tabBarLabel: 'INBOX',
      
    }
  },
  Profile: {
    screen: Inbox,
    navigationOptions: {
      tabBarLabel: 'PROFILE',
    }
  }
},
 {
    tabBarOptions: {
      activeTintColor: 'black',
      inactiveTintColor: 'grey',
      style: {
        backgroundColor: 'white',
        borderTopWidth: 0,
        shadowOffset: { width: 5, height: 3 },
        shadowColor: 'black',
        shadowOpacity: 0.5,
        elevation: 5
      }
    }
  })

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
