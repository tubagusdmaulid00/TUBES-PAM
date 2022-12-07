import React, {useState} from 'react';
import {SafeAreaView, StyleSheet, Text, Button} from 'react-native';
import {Input} from '../../components';

const EditProfile = () => {
  const [name, onChangeName] = useState('');
  const [handphone, onChangeHandphone] = useState('');
  const [whatsapp, onChangeWhatsapp] = useState('');
  const [email, onChangeEmail] = useState('');
  const [ktp, onChangeKTP] = useState('');
  return (
    <SafeAreaView style={styles.page}>
      <Input
        value={name}
        onChangeText={onChangeName}
        placeholder={'Masukkan Nama'}
        showtitle={true}
        name={'Nama Lengkap'}
      />
      <Input
        value={handphone}
        onChangeText={onChangeHandphone}
        placeholder={'Masukkan Nomor Handphone'}
        showtitle={true}
        name={'Nomor Handphone'}
      />
      <Input
        value={whatsapp}
        onChangeText={onChangeWhatsapp}
        placeholder={'Masukkan Nomor Whatsapp'}
        showtitle={true}
        name={'Nomor Whatsapp'}
      />
      <Input
        value={email}
        onChangeText={onChangeEmail}
        placeholder={'Masukkan Email'}
        showtitle={true}
        name={'Email'}
      />
      <Input
        value={ktp}
        onChangeText={onChangeKTP}
        placeholder={'Masukkan No KTP'}
        showtitle={true}
        name={'Nomor KTP'}
      />
      <SafeAreaView style={styles.footer}>
        <Button
          style={styles.button}
          onPress={() => navigation.navigate('HomeTab')}
          title="Lanjut"
          color="#FF7A00"
        />
      </SafeAreaView>
    </SafeAreaView>
  );
};

export default EditProfile;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: 'white',
  },
  footer: {
    flex: 1,
    justifyContent: 'flex-end',
    marginBottom: 10,
  },
});
