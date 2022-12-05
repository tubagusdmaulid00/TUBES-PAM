import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Splash} from '../../components';
import {Parking} from '../../assets';
const Splash3 = () => {
  return (
    <Splash
      logo={Parking}
      title="Sparepart"
      desc="Memberikan informasi  price list sparepart"
      nav="Splash4"
    />
  );
};

export default Splash3;

const styles = StyleSheet.create({});
