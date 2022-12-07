import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Splash} from '../../components';
import {Authentication} from '../../assets';

const FinalUbahPassword = () => {
  return (
    <Splash
      logo={Authentication}
      title="Password Berhasil dirubah	"
      desc="Silakan lanjut ke halaman selanjutnya"
      nav="Profile"
    />
  );
};

export default FinalUbahPassword;

const styles = StyleSheet.create({});
