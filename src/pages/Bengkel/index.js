import React from 'react';
import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {scooter, star} from '../../assets';
const Bengkel = () => {
  return (
    <SafeAreaView style={styles.page}>
      <SafeAreaView style={styles.box}>
        <SafeAreaView style={styles.image}>
          <Image source={scooter} />
        </SafeAreaView>
        <SafeAreaView style={styles.rightbox}>
          <Text style={styles.texttitle}>Bengkel Motor Selamet</Text>
          <SafeAreaView style={styles.star}>
            <TouchableOpacity>
              <Image source={star} />
            </TouchableOpacity>
            <TouchableOpacity>
              <Image source={star} />
            </TouchableOpacity>
            <TouchableOpacity>
              <Image source={star} />
            </TouchableOpacity>
            <TouchableOpacity>
              <Image source={star} />
            </TouchableOpacity>
            <TouchableOpacity>
              <Image source={star} />
            </TouchableOpacity>
          </SafeAreaView>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.textbutton}>Lihat Lokasi</Text>
          </TouchableOpacity>
        </SafeAreaView>
      </SafeAreaView>
    </SafeAreaView>
  );
};

export default Bengkel;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: 'white',
  },
  box: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#E1E1E1',
    marginHorizontal: 30,
    borderRadius: 20,
    marginTop: 20,
    padding: 20,
  },
  image: {
    justifyContent: 'center',
  },
  rightbox: {
    // alignItems: 'center',
    padding: 20,
  },
  star: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  texttitle: {
    color: '#000000',
    fontFamily: 'Poppins-Medium',
  },
  button: {
    backgroundColor: '#FF7A00',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
  },
  textbutton: {
    color: 'white',
    fontFamily: 'Poppins-SemiBold',
  },
});
