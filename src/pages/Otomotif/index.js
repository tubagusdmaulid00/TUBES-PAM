import React from 'react';
import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {Berita} from '../../assets';
import {useNavigation} from '@react-navigation/native';
const Otomotif = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.page}>
      <TouchableOpacity
        style={styles.box}
        onPress={() => navigation.navigate('DetailBerita')}>
        <Image source={Berita} />
        <Text>Cara Merawat Motor Matic Yang Benar Agar Selalu Awet</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Otomotif;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: '#fff',
  },
  box: {
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 2,
    borderRightWidth: 1,
    borderLeftWidth: 1,
    borderColor: 'gray',
    marginHorizontal: 10,
    padding: 10,
    borderRadius: 20,
    marginTop: 10,
  },
});
