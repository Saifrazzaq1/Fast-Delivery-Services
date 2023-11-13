import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Divider = ({ text } : any) => (
  <View style={styles.container}>
    <View style={styles.divider} />
    <Text style={styles.text}>{text}</Text>
    <View style={styles.divider} />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  divider: {
    flex: 1,
    height: 0.6,
    backgroundColor: 'black',
  },
  text: {
    marginHorizontal: 10,
    fontSize: 16,
    color: 'black',
    fontWeight:'500'
  },
});

export default Divider;
