import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Splash} from '../../components';
import {Authentication} from '../../assets';

const FinalChangePassword = () => {
  return (
    <Splash
      logo={Authentication}
      title="Password Berhasil dirubah	"
      desc="Silakan lanjut ke halaman selanjutnya"
      nav="Login"
    />
  );
};

export default FinalChangePassword;

const styles = StyleSheet.create({});
