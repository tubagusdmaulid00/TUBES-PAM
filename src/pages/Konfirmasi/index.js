import React from 'react';
import {Image, SafeAreaView, StyleSheet, Text, Button} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {EnterOTP} from '../../assets';
const Konfirmasi = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.page}>
      <SafeAreaView style={styles.header}>
        <Text>Konfirmasi</Text>
      </SafeAreaView>
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
          onPress={() => navigation.navigate('FinalSignup')}
          title="Lanjut"
          color="#FF7A00"
          accessibilityLabel="Learn more about this purple button"
        />
      </SafeAreaView>
    </SafeAreaView>
  );
};

export default Konfirmasi;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  header: {
    flex: 0.15,
    alignItems: 'center',
    backgroundColor: '#FF7A00',
    justifyContent: 'center',
  },
  body: {
    flex: 0.8,
  },
  footer: {
    flex: 0.05,
    marginBottom: 10,
  },
});
