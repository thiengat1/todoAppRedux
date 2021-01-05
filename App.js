/*
 * @Description: 
 * @Author: Lewis
 * @Date: 2021-01-03 22:03:26
 * @LastEditTime: 2021-01-04 01:36:08
 * @LastEditors: Lewis
 */
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import TodoApp from './src/TodoApp'
import store from './src/store'
import {Provider} from 'react-redux'

export default function App() {
  return (
    <Provider store={store}>
      <TodoApp/>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
