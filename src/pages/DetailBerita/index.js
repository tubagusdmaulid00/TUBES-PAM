import React from 'react';
import {Image, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import {Berita} from '../../assets';

const DetailBerita = () => {
  return (
    <SafeAreaView style={styles.page}>
      <SafeAreaView style={styles.header}>
        <Text style={styles.textheader}>
          5 Cara Ampuh Merawat Motor Matic Agar Awet
        </Text>
      </SafeAreaView>
      <SafeAreaView style={styles.headerbody}>
        <Text style={styles.text}>
          Publikasi: 4 tahun 6 bulan 21 hari 19 jam 54 menit yang lalu
        </Text>
        <Image source={Berita} />
      </SafeAreaView>
      <SafeAreaView style={styles.boxbody}>
        <Text style={styles.title}>
          Rutin panaskan mesin motor di pagi hari
        </Text>
        <Text style={styles.text}>
          Memanaskan motor adalah sebuah cara merawat dengan memanaskan mesin
          agar oli dalam mesin siap melumasi mesin sehingga perfoma dari mesin
          itu lebih maksimal. Cara memanaskan motor matic yang baik adalah
          panaskan motor kurang lebih 5 menit sampai 10 menit dan sebaiknya
          menggunakan kick stater saja jika menggunakan stater elektrik tentunya
          akan lebih banyak mengurangi bateray dari motor tersebut.
        </Text>
      </SafeAreaView>
    </SafeAreaView>
  );
};

export default DetailBerita;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: 'white',
    paddingHorizontal: 20,
  },
  header: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 30,
    paddingVertical: 30,
  },
  textheader: {
    color: '000000',
    fontFamily: 'Poppins-Medium',
    textAlign: 'center',
    fontSize: 18,
  },
  headerbody: {},
  text: {
    color: '#82828',
    fontFamily: 'Poppins-Regular',
    fontSize: 12,
    textAlign: 'justify',
  },
  title: {
    color: '#000000',
    fontFamily: 'Poppins-Regular',
    textAlign: 'justify',
  },
});
