import React, {useState} from 'react';
import {View, Text, StyleSheet, Image, Modal} from 'react-native';
import {IconButton} from './style';

const filterIcon = require('../../assets/filter.png');

const Filter = props => {
  return (
    <View>
      <IconButton onPress={() => props.setModalVisible(true)}>
        <Image source={filterIcon} style={styles.filterIcon} />
      </IconButton>
    </View>
  );
};

const styles = StyleSheet.create({
  filterIcon: {
    width: 20,
    height: 16.34,
    alignSelf: 'center',
  },
});

export default Filter;
