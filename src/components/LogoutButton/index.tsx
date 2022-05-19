import React from 'react';
import {Image, StyleSheet} from 'react-native';
import {IconButton} from './style';

const image = require('../../assets/logout.png');

const logoutButton = ({onPress}) => {
  return (
    <IconButton onPress={onPress}>
      <Image source={image} style={styles.logoutIcon} />
    </IconButton>
  );
};

const styles = StyleSheet.create({
  logoutIcon: {
    width: 16,
    height: 16,
    alignSelf: 'center',
  },
});

export default logoutButton;
