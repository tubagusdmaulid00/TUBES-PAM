import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  Button,
  TouchableOpacity,
} from 'react-native';
import {Input} from '../../components';
import DatePicker from 'react-native-date-picker';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const EditProfile = () => {
  const [name, onChangeName] = useState('');
  const [handphone, onChangeHandphone] = useState('');
  const [whatsapp, onChangeWhatsapp] = useState('');
  const [email, onChangeEmail] = useState('');
  const [ktp, onChangeKTP] = useState('');
  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);
  const [viewdate, setViewDate] = useState('Pilih Tanggal Lahir');

  const gantiviewtanggal = data => {
    setDate(data);
    setViewDate(
      data.getDate() + '/' + data.getMonth() + '/' + data.getFullYear(),
    );
  };
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
        <Text style={{fontWeight: 'bold', color: 'gray'}}>Tanggal Lahir</Text>
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
