import React, {useState} from 'react';
import {SafeAreaView, StyleSheet, Text, Button} from 'react-native';
import RadioGroup from 'react-native-radio-buttons-group';
import {useNavigation} from '@react-navigation/native';

const radioButtonsData = [
  {
    id: '1', // acts as primary key, should be unique and non-empty string
    label: 'SMS',
    value: 'sms',
    color: '#FF7A00',
  },
  {
    id: '2',
    label: 'Email',
    value: 'email',
    color: '#FF7A00',
  },
];
const ForgetPassword = () => {
  const navigation = useNavigation();
  const [radioButtons, setRadioButtons] = useState(radioButtonsData);
  const onPressRadioButton = radioButtonsArray => {
    setRadioButtons(radioButtonsArray);
  };
  return (
    <SafeAreaView style={{flex: 1,backgroundColor:'white'}}>
      <Text>Pilih pengiriman kode konfirmasi</Text>
      <SafeAreaView style={{alignItems: 'flex-start'}}>
        <RadioGroup radioButtons={radioButtons} onPress={onPressRadioButton} />
      </SafeAreaView>
      <SafeAreaView
        style={{flex: 1, justifyContent: 'flex-end', marginBottom: 20}}>
        <Button
          style={styles.button}
          onPress={() => navigation.navigate('ForgetPasswordv2')}
          title="Lanjut"
          color="#FF7A00"
          accessibilityLabel="Learn more about this purple button"
        />
      </SafeAreaView>
    </SafeAreaView>
  );
};

export default ForgetPassword;

const styles = StyleSheet.create({});
