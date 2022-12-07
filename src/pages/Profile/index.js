import React from 'react';
import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {
  user,
  padlock,
  token,
  iconmotorcycle,
  lock,
  edit,
  iconwrench,
  notes,
  logout,
} from '../../assets';
const Profile = () => {
  return (
    <SafeAreaView style={styles.page}>
      <SafeAreaView style={styles.header}>
        <Image source={user} />
        <Text style={styles.name}>Tubagus D. Maulid</Text>
      </SafeAreaView>
      <SafeAreaView style={styles.body}>
        <SafeAreaView style={styles.box}>
          <SafeAreaView style={styles.isi}>
            <Image source={padlock} />
            <Text>Starter</Text>
          </SafeAreaView>
          <SafeAreaView style={styles.isi}>
            <Image source={token} />
            <Text>10 poin</Text>
          </SafeAreaView>
        </SafeAreaView>
        <SafeAreaView style={styles.profile}>
          <TouchableOpacity style={styles.optionbutton}>
            <SafeAreaView style={styles.boxtitle}>
              <Image source={iconmotorcycle} />
              <Text style={styles.textoption}>Motor Saya</Text>
            </SafeAreaView>
            <MaterialIcons
              name="keyboard-arrow-right"
              color={'black'}
              size={24}
              style={{alignItems: 'flex-end'}}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.optionbutton}>
            <SafeAreaView style={styles.boxtitle}>
              <Image source={lock} />
              <Text style={styles.textoption}>Ubah Password</Text>
            </SafeAreaView>
            <MaterialIcons
              name="keyboard-arrow-right"
              color={'black'}
              size={24}
              style={{alignItems: 'flex-end'}}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.optionbutton}>
            <SafeAreaView style={styles.boxtitle}>
              <Image source={edit} />
              <Text style={styles.textoption}>Edit Profile</Text>
            </SafeAreaView>
            <MaterialIcons
              name="keyboard-arrow-right"
              color={'black'}
              size={24}
              style={{alignItems: 'flex-end'}}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.optionbutton}>
            <SafeAreaView style={styles.boxtitle}>
              <Image source={iconwrench} />
              <Text style={styles.textoption}>Bengkel</Text>
            </SafeAreaView>
            <MaterialIcons
              name="keyboard-arrow-right"
              color={'black'}
              size={24}
              style={{alignItems: 'flex-end'}}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.optionbutton}>
            <SafeAreaView style={styles.boxtitle}>
              <Image source={notes} />
              <Text style={styles.textoption}>Aktivitas</Text>
            </SafeAreaView>
            <MaterialIcons
              name="keyboard-arrow-right"
              color={'black'}
              size={24}
              style={{alignItems: 'flex-end'}}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.optionbutton}>
            <SafeAreaView style={styles.boxtitle}>
              <Image source={logout} />
              <Text style={styles.textoption}>Logout</Text>
            </SafeAreaView>
            <MaterialIcons
              name="keyboard-arrow-right"
              color={'black'}
              size={24}
              style={{alignItems: 'flex-end'}}
            />
          </TouchableOpacity>
        </SafeAreaView>
      </SafeAreaView>
    </SafeAreaView>
  );
};

export default Profile;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  header: {
    backgroundColor: '#FF7A00',
    flex: 0.4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  body: {
    flex: 0.6,
  },
  name: {
    color: '#FFFFFF',
    fontFamily: 'Poppins-SemiBold',
    fontSize: 20,
    marginTop: 17,
  },
  box: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 40,
    borderBottomWidth: 3,
    borderRightWidth: 2,
    borderLeftWidth: 2,
    borderTopWidth: 1,
    borderColor: 'gray',
    paddingHorizontal: 20,
    paddingVertical: 15,
    borderRadius: 20,
    marginTop: -35,
    backgroundColor: '#FFFFFF',
  },
  isi: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  optionbutton: {
    flexDirection: 'row',
    marginHorizontal: 20,
    borderBottomWidth: 1,
    justifyContent: 'space-between',
    borderColor: 'gray',
    marginTop: 20,
  },
  boxtitle: {
    flexDirection: 'row',
  },
  textoption: {
    color: '#000000',
    marginLeft: 10,
  },
});
