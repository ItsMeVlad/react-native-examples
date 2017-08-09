import React from 'react';

import FirstTab from './FirstTab.js'
import SecondTab from './SecondTab.js'

import { TabNavigator, StackNavigator } from 'react-navigation';

export const TabTwo = StackNavigator({
  SecondTab: {
    screen: SecondTab,
  }
});

export const TabOne = StackNavigator({
  FirstTab: {
    screen: FirstTab,
  }
});

export const Root = TabNavigator({
  TabOne: {
    screen: TabOne,
  },
  TabTwo: {
    screen: TabTwo,
  }
});
