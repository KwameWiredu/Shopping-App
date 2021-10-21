import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>#OgbeeGotYou</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#C89D7C',
    margin: 20,
    
    
  },
  text:{
    fontSize: 30,
    fontWeight:'bold',
    fontStyle: "italic"
  }
});
