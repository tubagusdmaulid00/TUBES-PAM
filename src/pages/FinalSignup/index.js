import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Splash} from '../../components';
import {Authentication} from '../../assets';
const FinalSignup = () => {
  return (
    <Splash
      logo={Authentication}
      title="Akun berhasil dibuat"
      desc="Silakan lanjut ke halaman selanjutnya"
			nav="Login"
    />
  );
};

export default FinalSignup;

const styles = StyleSheet.create({});
