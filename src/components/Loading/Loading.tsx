import React from 'react';
import {View, ActivityIndicator} from 'react-native';

const Loading = () => {
  return (
    <View
      style={{
        width: 100,
        height: 100,
        marginTop: 150,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        zIndex: 999,
      }}>
      <ActivityIndicator size="large" color="#666" />
    </View>
  );
};

export default Loading;
