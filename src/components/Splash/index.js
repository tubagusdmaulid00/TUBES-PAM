import React, {useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  SafeAreaView,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const Splash = ({logo, title, desc, nav, tinggi=200, lebar=200}) => {
  const navigation = useNavigation();
  const style1 = {width: lebar, height: tinggi};
  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.body}>
        <Image
          style={{
            width: lebar,
            height: tinggi,
            borderRadius: 10,
            marginBottom: 80,
          }}
          source={logo}
        />
        <Text style={styles.text}>{title}</Text>
        <Text style={styles.text2}>{desc}</Text>
      </SafeAreaView>
      <SafeAreaView style={styles.footer}>
        <Button
          style={styles.button}
          onPress={() => navigation.navigate(nav)}
          title="Lanjut"
          color="#FF7A00"
          accessibilityLabel="Learn more about this purple button"
        />
      </SafeAreaView>
    </View>
  );
};

export default Splash;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    padding: 20,
  },
  body: {
    flex: 0.8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  footer: {
    flex: 0.2,
    justifyContent: 'flex-end',
  },
  text: {
    color: '#000000',
    fontSize: 16,
    lineHeight: 18,
    marginBottom: 15,
    fontFamily: 'Poppins-Medium',
  },
  text2: {
    color: '#B1AEAE',
    fontSize: 16,
    lineHeight: 18,
    fontFamily: 'Poppins-Regular',
  },
  logos: {},
  button: {
    alignContent: 'flex-end',
  },
});
