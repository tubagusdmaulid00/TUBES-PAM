import React, {useState} from 'react';
import {
  Button,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {Logo} from '../../assets';
import {Input} from '../../components';
import {useNavigation} from '@react-navigation/native';

const Login = () => {
  const navigation = useNavigation();
  const [email, onChangeEmail] = useState('');
  const [password, onChangePassword] = useState('');
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
        <SafeAreaView style={styles.image}>
          <Image source={Logo} style={styles.logo} />
        </SafeAreaView>
      </SafeAreaView>
      <SafeAreaView style={styles.body}>
        <Text style={styles.text}>
          Masukkan nomor Handphone atau alamat Email kamu untuk login
        </Text>
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
        <TouchableOpacity onPress={() => navigation.navigate('ForgetPassword')}>
          <Text style={styles.forget}>Lupa Password?</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={{color: 'white'}}>Masuk</Text>
        </TouchableOpacity>
        <SafeAreaView
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            marginTop: 15,
          }}>
          <Text>Belum memiliki akun?</Text>
          <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
            <Text style={{color: '#FF7A00'}}>Daftar</Text>
          </TouchableOpacity>
        </SafeAreaView>
      </SafeAreaView>
    </SafeAreaView>
  );
};

export default Login;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  header: {
    flex: 0.25,
  },
  image: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 120,
    height: 120,
  },
  body: {
    flex: 0.75,
  },
  text: {
    paddingHorizontal: 50,
    textAlign: 'center',
    color: '#000000',
    fontFamily: 'Poppins-Light',
    lineHeight: 18,
    fontSize: 16,
  },
  forget: {
    alignSelf: 'flex-end',
    color: '#FF7A00',
    marginRight: 20,
    marginTop: 15,
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
