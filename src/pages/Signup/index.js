import React, {useState} from 'react';
import {SafeAreaView, StyleSheet, Text, TouchableOpacity} from 'react-native';
import {Input} from '../../components';
import {useNavigation} from '@react-navigation/native';

const Signup = () => {
  const navigation = useNavigation();
  const [email, onChangeEmail] = useState('');
  const [password, onChangePassword] = useState('');
  const [nama, onChangeName] = useState('');
  const [handphone, onChangeHP] = useState('');
  const [validate, onChangeValidate] = useState('');
  return (
    <SafeAreaView style={styles.page}>
      <SafeAreaView style={styles.header}>
        <SafeAreaView
          style={{
            backgroundColor: '#FF7A00',
            height: '50%',
            position: 'absolute',
            width: '100%',
          }}
        />
        <SafeAreaView style={styles.title}>
          <SafeAreaView>
            <Text>Daftar</Text>
          </SafeAreaView>
          <Text>Masukkan Data Diri Anda</Text>
        </SafeAreaView>
      </SafeAreaView>
      <SafeAreaView style={styles.body}>
        <Input
          value={nama}
          onChangeText={onChangeName}
          placeholder={'Nama Lengkap'}
        />
        <Input
          value={handphone}
          onChangeText={onChangeHP}
          placeholder={'Nomor Handphone'}
        />
        <Input
          value={email}
          onChangeText={onChangeEmail}
          placeholder={'Email/No Handphone'}
        />
        <Input
          value={password}
          onChangeText={onChangePassword}
          placeholder={'Enter Password'}
          type={'password'}
        />
        <Input
          value={validate}
          onChangeText={onChangeValidate}
          placeholder={'Konfirmasi Password'}
          type={'password'}
        />
        <SafeAreaView style={styles.footer}>
          <Text>
            Saya Setuju Dengan{' '}
            <TouchableOpacity style={{justifyContent: 'flex-end'}}>
              <Text>Syarat Dan Ketentuan</Text>
            </TouchableOpacity>{' '}
            Yang Berlaku
          </Text>
        </SafeAreaView>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Konfirmasi')}>
          <Text style={{color: 'white'}}>LANJUT</Text>
        </TouchableOpacity>
      </SafeAreaView>
    </SafeAreaView>
  );
};

export default Signup;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  header: {
    flex: 0.25,
  },
  body: {
    flex: 0.75,
  },
  title: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  footer: {
    alignItems: 'center',
  },
  button: {
    alignItems: 'center',
    borderRadius: 20,
    backgroundColor: '#FF7A00',
    marginHorizontal: 30,
    paddingVertical: 15,
    marginTop: 10,
  },
});
