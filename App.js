import React, { useState, useCallback } from 'react';
import {
  StyleSheet,
  StatusBar,
  RefreshControl,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import Constants from 'expo-constants';
import QuoteGenerator from './components/QuoteGenerator';
import Header from './components/Header';

// Setting the timeout functionality for the loading button
const wait = (timeout) => {
  return new Promise((resolve) => setTimeout(resolve, timeout));
};

export default function App() {
  const [refreshing, setRefreshing] = useState(false);
  // This state is for sending it to the quoteGenerator Component
  const [counter, setCounter] = useState(0);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    setCounter((c) => c + 1);
    wait(700).then(() => setRefreshing(false));
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <ScrollView
        contentContainerStyle={styles.scrollView}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }>
        <Header />
        <QuoteGenerator refresh={counter} />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#FDEFF4',
    padding: 8,
  },
  scrollView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
