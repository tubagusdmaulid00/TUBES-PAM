import React, {useState} from 'react';
import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import {OilImage} from '../../assets';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
const ViewOil = () => {
  const [search, onChangeSearch] = useState('');
  return (
    <SafeAreaView style={styles.page}>
      <SafeAreaView style={styles.searchbox}>
        <TextInput
          value={search}
          onChangeText={onChangeSearch}
          placeholder="Cari Oil Pilihanmu"
          style={{marginLeft: 10, width: '85%'}}
        />
        <MaterialIcons name="search" color={'#000000'} size={30} />
      </SafeAreaView>
      <SafeAreaView style={styles.boxproduct}>
        <SafeAreaView style={styles.boxtext}>
          <Text style={styles.textheader}>SPX1L</Text>
          <Text style={styles.textnumber}>0823454</Text>
          <Text style={styles.textprice}>Rp 67.500</Text>
        </SafeAreaView>
        <SafeAreaView style={styles.boximage}>
          <Image source={OilImage} />
        </SafeAreaView>
      </SafeAreaView>
    </SafeAreaView>
  );
};

export default ViewOil;

const styles = StyleSheet.create({
  page: {
    backgroundColor: 'white',
  },
  searchbox: {
    borderBottomWidth: 2,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    marginTop: 10,
    marginHorizontal: 10,
    borderRadius: 20,
    borderColor: 'gray',
    flexDirection: 'row',
    alignItems: 'center',
  },
  boxproduct: {
    flexDirection: 'row',
    borderBottomWidth: 2,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderColor: 'gray',
    padding: 10,
    marginHorizontal: 20,
    marginTop: 10,
    borderRadius: 20,
    justifyContent: 'space-between',
  },
  textheader: {
    color: 'black',
    fontFamily: 'Poppins-SemiBold',
  },
  textnumber: {
    color: '#949494',
    fontFamily: 'Poppins-Medium',
  },
	textprice:{
		color: '#FF7A00',
    fontFamily: 'Poppins-Medium',
	}
});
