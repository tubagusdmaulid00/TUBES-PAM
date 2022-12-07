import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const Activity = (data) => {
  return (
    <View>
      <Text>{data.title}</Text>
			<Text>{data.tanggal}</Text>
    </View>
  );
};

export default Activity;

const styles = StyleSheet.create({});
