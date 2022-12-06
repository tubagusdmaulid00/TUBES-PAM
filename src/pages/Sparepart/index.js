import React, {useState} from 'react';
import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';
import {Oil} from '../../assets';
import {ViewOil, ViewSparepart, ViewAcc} from '../../components';
const Sparepart = () => {
  const [option, changeOption] = useState(1);
  return (
    <SafeAreaView style={styles.page}>
      <SafeAreaView style={styles.option}>
        <TouchableOpacity
          style={styles.boxoption}
          onPress={() => changeOption(1)}>
          <Image source={Oil} />
          <Text>Oil</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.boxoption}
          onPress={() => changeOption(2)}>
          <Image source={Oil} />
          <Text>Sparepart</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.boxoption}
          onPress={() => changeOption(3)}>
          <Image source={Oil} />
          <Text>Aksesoris</Text>
        </TouchableOpacity>
      </SafeAreaView>
      <SafeAreaView>
        {option == 1 && <ViewOil />}
        {option == 2 && <ViewSparepart />}
        {option == 3 && <ViewAcc />}
      </SafeAreaView>
    </SafeAreaView>
  );
};

export default Sparepart;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: 'white',
  },
  option: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginHorizontal: 20,
    marginTop: 5,
  },
  boxoption: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
