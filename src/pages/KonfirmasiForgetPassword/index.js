import React from 'react';
import {Image, SafeAreaView, StyleSheet, Text, Button} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {EnterOTP} from '../../assets';
const KonfirmasiForgetPassword = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.page}>
      <SafeAreaView style={styles.body}>
        <Text>Konfirmasi akun kamu</Text>
        <Text>(1/3)</Text>
        <SafeAreaView style={{alignItems: 'center'}}>
          <Image source={EnterOTP} />
          <Text style={{textAlign: 'center'}}>
            Silakan masukkan kode konfirmasi yang telah dikirmkan via SMS ke
            087812341234
          </Text>
          <Text>Kirim Ulang SMS</Text>
        </SafeAreaView>
      </SafeAreaView>
      <SafeAreaView style={styles.footer}>
        <Button
          onPress={() => navigation.navigate('ChangePasswordForgetPassword')}
          title="Lanjut"
          color="#FF7A00"
          accessibilityLabel="Learn more about this purple button"
        />
      </SafeAreaView>
    </SafeAreaView>
  );
};

export default KonfirmasiForgetPassword;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  body: {
    flex: 0.95,
  },
  footer: {
    flex: 0.05,
    marginBottom: 10,
  },
});
