import React, {useState} from 'react';
import {SafeAreaView, StyleSheet, Text, Button} from 'react-native';
import {Input} from '../../components';
import {useNavigation} from '@react-navigation/native';

const DetailService = () => {
  const navigation = useNavigation();
  const [lokasi, onChangeLokasi] = useState('');
  const [keluhan, onChangeKeluhan] = useState('');
  return (
    <SafeAreaView style={styles.page}>
      <Input
        value={lokasi}
        onChangeText={onChangeLokasi}
        placeholder={'Lokasi Service'}
        showtitle={true}
        name={'Lokasi Service'}
      />
      <Input
        value={keluhan}
        onChangeText={onChangeKeluhan}
        placeholder={'Isi Keluhan (opsional)'}
        showtitle={true}
        name={'Keluhan'}
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

export default DetailService;

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
