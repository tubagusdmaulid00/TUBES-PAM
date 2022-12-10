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

const TambahMotor = () => {
  const navigation = useNavigation();
  const [tahun, onChangeTahun] = useState('');
  const [seri, onChangeSeri] = useState('');
  const [tipe, onChangeTipe] = useState('');
  const [nopol, onChangeNopol] = useState('');
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
          Tanggal Terakhir Service
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
