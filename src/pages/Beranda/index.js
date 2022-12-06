import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
} from 'react-native';
import {
  Logo,
  wrench,
  Sparepart,
  newspaper,
  location,
  scooter,
  Motor,
} from '../../assets';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {useNavigation} from '@react-navigation/native';

const Beranda = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.page}>
      <SafeAreaView style={styles.header}>
        <SafeAreaView
          style={{
            backgroundColor: '#FF7A00',
            height: '50%',
            position: 'absolute',
            width: '100%',
          }}>
          <Text style={{color: 'white'}}>Hai, Nama </Text>
        </SafeAreaView>
        <SafeAreaView style={styles.image}>
          <Image source={Logo} style={styles.logo} />
          <SafeAreaView style={{flexDirection: 'row'}}>
            <TouchableOpacity
              style={styles.kotak}
              onPress={() => navigation.navigate('Service')}>
              <Image source={wrench} />
              <Text style={styles.titleicon}>Service</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.kotak}
              onPress={() => navigation.navigate('Sparepart')}>
              <Image source={Sparepart} />
              <Text style={styles.titleicon}>Sparepart</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.kotak}>
              <Image source={newspaper} />
              <Text style={styles.titleicon}>Berita</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.kotak}>
              <Image source={location} />
              <Text style={styles.titleicon}>Bengkel</Text>
            </TouchableOpacity>
          </SafeAreaView>
        </SafeAreaView>
      </SafeAreaView>
      <SafeAreaView style={styles.body}>
        <SafeAreaView style={{flexDirection: 'row'}}>
          <Text style={styles.titlebody}>Motor </Text>
          <Text style={styles.titlebody2}>Saya</Text>
        </SafeAreaView>
        <SafeAreaView style={styles.box}>
          <SafeAreaView style={{marginRight: 10}}>
            <Image source={scooter} />
          </SafeAreaView>
          <SafeAreaView>
            <Text style={styles.textbox}>
              Silahkan Tambah Motor Terlebih Dahulu
            </Text>
            <TouchableOpacity
              style={styles.buttontambah}
              onPress={() => navigation.navigate('TambahMotor')}>
              <Text style={styles.textbutton}>Tambah Motor</Text>
            </TouchableOpacity>
          </SafeAreaView>
        </SafeAreaView>
        <TouchableOpacity style={styles.boxmotor}>
          <SafeAreaView>
            <Text>Vario 160 ABS</Text>
            <Text>Blaster</Text>
            <Text>BE 2411 AGS</Text>
            <Text>Terakhir Servis</Text>
            <SafeAreaView style={{flexDirection: 'row'}}>
              <MaterialCommunityIcons
                name="calendar-blank-outline"
                color={'#000000'}
                size={24}
              />
              <Text>17 Nov 2022</Text>
            </SafeAreaView>
            <Text>Servis selanjutnya</Text>
            <SafeAreaView style={{flexDirection: 'row'}}>
              <MaterialCommunityIcons
                name="calendar-blank-outline"
                color={'#000000'}
                size={24}
              />
              <Text>17 Nov 2023</Text>
            </SafeAreaView>
          </SafeAreaView>
          <SafeAreaView style={{marginLeft: 20, justifyContent: 'center'}}>
            <Image source={Motor} />
          </SafeAreaView>
        </TouchableOpacity>
      </SafeAreaView>
    </SafeAreaView>
  );
};

export default Beranda;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  header: {
    flex: 0.4,
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
    flex: 0.6,
    paddingHorizontal: 10,
  },
  kotak: {
    marginHorizontal: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleicon: {
    alignSelf: 'center',
    color: '#828282',
    fontFamily: 'Poppins-Medium',
    textAlign: 'center',
    fontSize: 15,
    lineHeight: 18,
  },
  titlebody: {
    fontFamily: 'Poppins-Bold',
    color: '#FF7A00',
    fontSize: 20,
  },
  titlebody2: {
    fontFamily: 'Poppins-Bold',
    color: '#000000',
    fontSize: 20,
  },
  box: {
    flexDirection: 'row',
    backgroundColor: '#E1E1E1',
    padding: 20,
    borderRadius: 25,
  },
  textbox: {
    width: 230,
    fontSize: 12,
    color: '#000000',
    fontFamily: 'Poppins-Light',
  },
  buttontambah: {
    backgroundColor: '#FF7A00',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
    marginRight: 20,
  },
  textbutton: {
    color: 'white',
    fontFamily: 'Poppins-SemiBold',
  },
  boxmotor: {
    flexDirection: 'row',
    padding: 20,
    borderBottomWidth: 2,
    borderRightWidth: 1,
    borderLeftWidth: 1,
    borderColor: 'gray',
    borderRadius: 20,
    justifyContent: 'center',
    marginTop: 20,
  },
});
