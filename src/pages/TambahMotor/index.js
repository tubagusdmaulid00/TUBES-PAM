import React, {useState} from 'react';
import {SafeAreaView, StyleSheet, Text, Button} from 'react-native';
import {Input} from '../../components';
import {useNavigation} from '@react-navigation/native';

const TambahMotor = () => {
  const navigation = useNavigation();
  const [tahun, onChangeTahun] = useState('');
  const [seri, onChangeSeri] = useState('');
  const [tipe, onChangeTipe] = useState('');
  const [nopol, onChangeNopol] = useState('');

  return (
    <SafeAreaView style={styles.page}>
      <SafeAreaView style={styles.boxtext}>
        <Text style={styles.textbox}>
          Mohon isi keterangan kendaraan Kamu dibawah ini
        </Text>
      </SafeAreaView>
      <Input
        value={tahun}
        onChangeText={onChangeTahun}
        placeholder={'Tahun Kendaraan'}
        showtitle={true}
        name={'Tahun'}
      />
      <Input
        value={seri}
        onChangeText={onChangeSeri}
        placeholder={'Seri Kendaraan'}
        showtitle={true}
        name={'Seri'}
      />
      <Input
        value={tipe}
        onChangeText={onChangeTipe}
        placeholder={'Tipe Motor'}
        showtitle={true}
        name={'Tipe Motor'}
      />
      <Input
        value={nopol}
        onChangeText={onChangeNopol}
        placeholder={'Nomor Polisi'}
        showtitle={true}
        name={'Nomor Polisi (Opsional)'}
      />
      <SafeAreaView style={styles.footer}>
        <Button
          style={styles.button}
          onPress={() => navigation.navigate('HomeTab')}
          title="Selesai"
          color="#FF7A00"
        />
      </SafeAreaView>
    </SafeAreaView>
  );
};

export default TambahMotor;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: 'white',
  },
  boxtext: {
    borderBottomWidth: 1,
    paddingVertical: 20,
    marginHorizontal: 30,
    borderColor: 'Gray',
  },
  textbox: {
    color: '#000000',
    width: 220,
  },
  footer: {
    flex: 1,
    justifyContent: 'flex-end',
    marginBottom: 10,
  },
});
