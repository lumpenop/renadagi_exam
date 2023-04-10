/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  KeyboardAvoidingView, Platform,
  StyleSheet,
  useColorScheme
} from "react-native";
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';
import Empty from "./src/components/Empty";
import AddTodo from './src/components/AddTodo';
import DateHead from './src/components/DateHead';


const App = (): JSX.Element => {
  const isDarkMode = useColorScheme() === 'dark';


  const today = new Date()

  return (
    <SafeAreaProvider>
      <SafeAreaView edges={['bottom']} style={styles.block}>
        <KeyboardAvoidingView
          behavior={Platform.select({ios: 'padding'})}
          style={styles.avoid}>
          <DateHead date={today} />
          <Empty />
          <AddTodo />
        </KeyboardAvoidingView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  block: {
    flex: 1,
    backgroundColor: 'white',
  },
  avoid: {
    flex: 1,
  },
});

export default App;
