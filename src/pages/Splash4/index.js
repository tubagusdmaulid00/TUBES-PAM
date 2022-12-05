import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Splash} from '../../components';
import {Search} from '../../assets';
const Splash4 = () => {
  return (
    <Splash
      logo={Search}
      title="Berita"
      desc="Menampilkan tips perawatan motor"
      nav="Splash1"
    />
  );
};

export default Splash4;

const styles = StyleSheet.create({});
