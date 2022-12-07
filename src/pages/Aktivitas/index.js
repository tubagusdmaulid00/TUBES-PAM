import React, {useEffect} from 'react';
import {
  View,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableHighlight,
  Platform,
  UIManager,
} from 'react-native';
import {ExpandableView} from '@pietile-native-kit/expandable-view';
import {AccordionList} from 'react-native-accordion-list-view';
const Aktivitas = () => {
  const data = [
    {
      id: 0,
      title: 'Bengkel Arif',
      tanggal: '20 Oktober 2022',
      body: 'Perawatan : - Ganti Oli      - Ganti Busi    - Ganti Aki',
    },
    {
      id: 1,
      title: 'Bengkel Arif',
      tanggal: '20 Oktober 2022',
      body: 'Perawatan : - Ganti Oli      - Ganti Busi    - Ganti Aki',
    },
  ];
  useEffect(() => {
    if (Platform.OS === 'android') {
      if (UIManager.setLayoutAnimationEnabledExperimental) {
        UIManager.setLayoutAnimationEnabledExperimental(true);
      }
    }
  }, []);
  return (
    <SafeAreaView style={styles.page}>
      <View style={styles.container}>
        <AccordionList
          data={data}
          customTitle={item => (
            <View style={{borderBottomWidth: 1}}>
              <Text style={{color: 'black', fontFamily: 'Poppins-Bold'}}>
                {item.title}
              </Text>
              <Text style={{color: 'black', fontFamily: 'Poppins-Regular'}}>
                {item.tanggal}
              </Text>
            </View>
          )}
          customBody={item => (
            <View style={{width: 80}}>
              <Text>{item.body}</Text>
            </View>
          )}
          animationDuration={400}
        />
      </View>
    </SafeAreaView>
  );
};

export default Aktivitas;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: 'white',
  },
  container: {
    paddingVertical: '2%',
    paddingHorizontal: '3%',
    height: '100%',
    // backgroundColor: '#e7e7e7',
  },
});
