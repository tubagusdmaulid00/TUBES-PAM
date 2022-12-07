import React from 'react';
import {SafeAreaView, StyleSheet, Text, TextInput, Button} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const UbahPasswordv2 = () => {
	const navigation = useNavigation();
  const [email, onChangeEmail] = React.useState(null);
  return (
    <SafeAreaView style={styles.page}>
      <Text>Masukkan E-mail Kamu</Text>
      <Text>E-Mail</Text>
      <TextInput
        style={styles.input}
        onChangeText={onChangeEmail}
        value={email}
        placeholder="Masukkan Email"
      />
      <SafeAreaView
        style={{flex: 1, justifyContent: 'flex-end', marginBottom: 20}}>
        <Button
          style={styles.button}
          onPress={() => navigation.navigate('KonfirmasiUbahPassword')}
          title="Lanjut"
          color="#FF7A00"
          accessibilityLabel="Learn more about this purple button"
        />
      </SafeAreaView>
    </SafeAreaView>
  );
};

export default UbahPasswordv2;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: 'white',
  },
  input: {
    height: 40,
    margin: 12,
    borderBottomWidth: 1,
    padding: 10,
  },
});
