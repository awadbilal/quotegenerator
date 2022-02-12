import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const Header = () => {
  return (
    <>
      <View>
        <Text style={headerStyles.title}>
          Random <Text>Quote</Text> Generator
        </Text>
      </View>
    </>
  );
};

const headerStyles = StyleSheet.create({
  title: {
    fontFamily: 'Montserrat',
    fontSize: 24,
    fontWeight: '700',
    textAlign: 'center',
    marginBottom: 32,
    color: '#0F2C67',
  },
});

export default Header;
