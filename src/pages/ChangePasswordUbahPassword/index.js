import React, {useState} from 'react';
import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  Pressable,
  Button,
} from 'react-native';
import {Eyes} from '../../assets';
import {useNavigation} from '@react-navigation/native';

const ChangePasswordUbahPassword = () => {
  const navigation = useNavigation();
  const [password, onChangePassword] = useState(null);
  const [password2, onChangePassword2] = useState(null);
  const [visiblePassword, onChangeVisiblePassword] = useState(true);
  const [visiblePassword2, onChangeVisiblePassword2] = useState(true);
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
      <SafeAreaView style={{flex:0.9}}>
        <Text>Masukkan Password Baru Kamu</Text>
        <SafeAreaView style={{borderBottomWidth: 1}}>
          <Text>Password Baru</Text>
          <SafeAreaView style={{flexDirection: 'row'}}>
            <TextInput
              style={styles.input}
              onChangeText={onChangePassword}
              value={password}
              placeholder="Masukkan Password"
              secureTextEntry={visiblePassword}
            />
            <Pressable
              style={{
                alignItems: 'flex-end',
                flex: 1,
                justifyContent: 'center',
                marginRight: 15,
              }}
              onPress={() => onChangeVisiblePassword(!visiblePassword)}>
              <Image source={Eyes} />
            </Pressable>
          </SafeAreaView>
        </SafeAreaView>
        <SafeAreaView style={{borderBottomWidth: 1}}>
          <Text>Password Baru</Text>
          <SafeAreaView style={{flexDirection: 'row'}}>
            <TextInput
              style={styles.input}
              onChangeText={onChangePassword2}
              value={password2}
              placeholder="Masukkan Password"
              secureTextEntry={visiblePassword2}
            />
            <Pressable
              style={{
                alignItems: 'flex-end',
                flex: 1,
                justifyContent: 'center',
                marginRight: 15,
              }}
              onPress={() => onChangeVisiblePassword2(!visiblePassword2)}>
              <Image source={Eyes} />
            </Pressable>
          </SafeAreaView>
        </SafeAreaView>
      </SafeAreaView>
      <SafeAreaView style={styles.footer}>
        <Button
          onPress={() => navigation.navigate('FinalUbahPassword')}
          title="Lanjut"
          color="#FF7A00"
          accessibilityLabel="Learn more about this purple button"
        />
      </SafeAreaView>
    </SafeAreaView>
  );
};

export default ChangePasswordUbahPassword;

const styles = StyleSheet.create({
  footer: {
    flex: 0.1,
    marginBottom: 10,
  },
});
