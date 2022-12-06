import React from 'react';
import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {Iconmotor} from '../../assets';
import {useNavigation} from '@react-navigation/native';
const Service = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.page}>
      <TouchableOpacity
        style={styles.box}
        onPress={() => navigation.navigate('DetailService')}>
        <SafeAreaView style={styles.boximage}>
          <Image source={Iconmotor} />
        </SafeAreaView>
        <SafeAreaView>
          <Text style={styles.title}>Vario CSS ISS</Text>
          <Text style={styles.nopol}>BE 1234 PO</Text>
        </SafeAreaView>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Service;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: 'white',
    paddingHorizontal: 10,
  },
  box: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
  },
  boximage: {
    marginRight: 20,
  },
  title: {
    color: '#000000',
    fontFamily: 'Poppins-Bold',
  },
  nopol: {
    color: '#000000',
    fontFamily: 'Poppins-Regular',
  },
});
