import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  Button,
  TouchableOpacity,
} from 'react-native';
import {Input} from '../../components';
import {useNavigation} from '@react-navigation/native';
import DatePicker from 'react-native-date-picker';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const DetailService = () => {
  const navigation = useNavigation();
  const [lokasi, onChangeLokasi] = useState('');
  const [keluhan, onChangeKeluhan] = useState('');
  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);
  const [viewdate, setViewDate] = useState('Pilih Jadwal');

  const gantiviewtanggal = data => {
    setDate(data);
    setViewDate(
      data.getDate() + '/' + data.getMonth() + '/' + data.getFullYear(),
    );
  };

  return (
    <SafeAreaView style={styles.page}>
      <Input
        value={lokasi}
        onChangeText={onChangeLokasi}
        placeholder={'Lokasi Service'}
        showtitle={true}
        name={'Lokasi Service'}
      />
      <DatePicker
        modal
        open={open}
        date={date}
        mode={'date'}
        onConfirm={date => {
          setOpen(false);
          gantiviewtanggal(date);
        }}
        onCancel={() => {
          setOpen(false);
        }}
      />
      <SafeAreaView style={styles.boxcalendar}>
        <Text style={{fontWeight: 'bold', color: 'gray'}}>
          Jadwal Service
        </Text>
        <SafeAreaView style={styles.calendar}>
          <Text
            style={{
              color: 'black',
              fontFamily: 'Poppins-Medium',
            }}>
            {viewdate}
          </Text>
          <TouchableOpacity onPress={() => setOpen(true)}>
            <MaterialCommunityIcons
              name="calendar-blank-outline"
              color={'#000000'}
              size={24}
            />
          </TouchableOpacity>
        </SafeAreaView>
      </SafeAreaView>
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
  calendar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  boxcalendar: {
    marginHorizontal: 30,
    borderBottomWidth: 1,
    paddingBottom: 5,
    marginTop: 20,
  },
});
