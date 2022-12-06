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
            <TouchableOpacity style={styles.kotak}>
              <Image source={wrench} />
              <Text style={styles.titleicon}>Service</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.kotak}>
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
});
