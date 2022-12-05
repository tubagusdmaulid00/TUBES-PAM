import {View, Text, Image, TextInput, StyleSheet} from 'react-native';
import React from 'react';

const Input = ({
  name,
  value,
  onChangeText,
  placeholder,
  icon,
  type,
  showtitle,
}) => {
  return (
    <View style={{marginTop: 20}}>
      {showtitle && (
        <Text style={{marginLeft: 30, fontWeight: 'bold'}}>{name}</Text>
      )}
      <View style={styles.textinput}>
        <TextInput
          value={value}
          onChangeText={onChangeText}
          placeholder={placeholder}
          secureTextEntry={type ? true : false}
          style={{marginLeft: 10, width: '100%'}}
          keyboardType={type ? type : 'default'}
        />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  textinput: {
    width: '85%',
    height: 60,
    borderWidth: 1,
    borderRadius: 20,
    alignSelf: 'center',
    marginTop: 5,
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default Input;
