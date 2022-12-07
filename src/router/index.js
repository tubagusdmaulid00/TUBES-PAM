/* eslint-disable prettier/prettier */
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {
  Splash1,
  Splash2,
  Splash3,
  Splash4,
  Homepage,
  Login,
  Signup,
  Konfirmasi,
  FinalSignup,
  ForgetPassword,
  ForgetPasswordv2,
  KonfirmasiForgetPassword,
  ChangePasswordForgetPassword,
  FinalChangePassword,
  Beranda,
  Bengkel,
  Aktivitas,
  Profile,
  TambahMotor,
  Service,
  DetailService,
  Sparepart,
  Newspaper,
  Otomotif,
  Servicepaper,
  DetailBerita,
  EditProfile,
  UbahPassword,
  UbahPasswordv2,
  KonfirmasiUbahPassword,
  ChangePasswordUbahPassword,
  FinalUbahPassword,
} from '../pages';

const Stack = createNativeStackNavigator();

const Tab = createBottomTabNavigator();
const TopTab = createMaterialTopTabNavigator();
function Berita() {
  return (
    <TopTab.Navigator
      screenOptions={{
        tabBarStyle: {backgroundColor: '#FF7A00'},
        tabBarInactiveTintColor: '#fff',
        tabBarActiveTintColor: '#fff',
      }}>
      <TopTab.Screen name="Newspaper" component={Newspaper} />
      <TopTab.Screen name="Otomotif" component={Otomotif} />
      <TopTab.Screen name="Servicepaper" component={Servicepaper} />
    </TopTab.Navigator>
  );
}
function HomeTab() {
  return (
    <Tab.Navigator
      initialRouteName="Beranda"
      screenOptions={{
        tabBarActiveTintColor: '#e91e63',
        headerShown: false,
      }}>
      <Tab.Screen
        name="Beranda"
        component={Beranda}
        options={{
          tabBarLabel: 'Beranda',
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Aktivitas"
        component={Aktivitas}
        options={{
          tabBarLabel: 'Aktivitas',
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons
              name="notebook-edit-outline"
              color={color}
              size={size}
            />
          ),
          title: 'Aktivitas',
          headerShown: true,
          headerStyle: {backgroundColor: '#FF7A00'},
          headerTintColor: '#fff',
        }}
      />
      <Tab.Screen
        name="Bengkel"
        component={Bengkel}
        options={{
          tabBarLabel: 'Bengkel',
          tabBarIcon: ({color, size}) => (
            <SimpleLineIcons name="location-pin" color={color} size={size} />
          ),
          title: 'Bengkel',
          headerShown: true,
          headerStyle: {backgroundColor: '#FF7A00'},
          headerTintColor: '#fff',
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons
              name="account-circle-outline"
              color={color}
              size={size}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const Router = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{headerShown: false}}
        initialRouteName="HomeTab">
        <Stack.Screen name="Splash1" component={Splash1} />
        <Stack.Screen name="Splash2" component={Splash2} />
        <Stack.Screen name="Splash3" component={Splash3} />
        <Stack.Screen name="Splash4" component={Splash4} />
        <Stack.Screen name="Homepage" component={Homepage} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="Konfirmasi" component={Konfirmasi} />
        <Stack.Screen name="FinalSignup" component={FinalSignup} />
        <Stack.Screen name="HomeTab" component={HomeTab} />
        <Stack.Screen
          name="ForgetPassword"
          component={ForgetPassword}
          options={{
            title: 'Lupa Password',
            headerShown: true,
            headerStyle: {backgroundColor: '#FF7A00'},
            headerTintColor: '#fff',
          }}
        />
        <Stack.Screen
          name="ForgetPasswordv2"
          component={ForgetPasswordv2}
          options={{
            title: 'Lupa Password',
            headerShown: true,
            headerStyle: {backgroundColor: '#FF7A00'},
            headerTintColor: '#fff',
          }}
        />
        <Stack.Screen
          name="KonfirmasiForgetPassword"
          component={KonfirmasiForgetPassword}
          options={{
            title: 'Konfirmasi',
            headerShown: true,
            headerStyle: {backgroundColor: '#FF7A00'},
            headerTintColor: '#fff',
          }}
        />
        <Stack.Screen
          name="ChangePasswordForgetPassword"
          component={ChangePasswordForgetPassword}
          options={{
            title: 'Password Baru',
            headerShown: true,
            headerStyle: {backgroundColor: '#FF7A00'},
            headerTintColor: '#fff',
          }}
        />
        <Stack.Screen
          name="FinalChangePassword"
          component={FinalChangePassword}
        />
        <Stack.Screen
          name="TambahMotor"
          component={TambahMotor}
          options={{
            title: 'Tambah Motor',
            headerShown: true,
            headerStyle: {backgroundColor: '#FF7A00'},
            headerTintColor: '#fff',
          }}
        />
        <Stack.Screen
          name="Service"
          component={Service}
          options={{
            title: 'Motor',
            headerShown: true,
            headerStyle: {backgroundColor: '#FF7A00'},
            headerTintColor: '#fff',
          }}
        />
        <Stack.Screen
          name="DetailService"
          component={DetailService}
          options={{
            title: 'Detail Service',
            headerShown: true,
            headerStyle: {backgroundColor: '#FF7A00'},
            headerTintColor: '#fff',
          }}
        />
        <Stack.Screen
          name="Sparepart"
          component={Sparepart}
          options={{
            title: 'Sparepart',
            headerShown: true,
            headerStyle: {backgroundColor: '#FF7A00'},
            headerTintColor: '#fff',
          }}
        />
        <Stack.Screen
          name="Berita"
          component={Berita}
          options={{
            title: 'Berita',
            headerShown: true,
            headerStyle: {backgroundColor: '#FF7A00'},
            headerTintColor: '#fff',
          }}
        />
        <Stack.Screen
          name="DetailBerita"
          component={DetailBerita}
          options={{
            title: 'Berita',
            headerShown: true,
            headerStyle: {backgroundColor: '#FF7A00'},
            headerTintColor: '#fff',
          }}
        />
        <Stack.Screen
          name="EditProfile"
          component={EditProfile}
          options={{
            title: 'Profile',
            headerShown: true,
            headerStyle: {backgroundColor: '#FF7A00'},
            headerTintColor: '#fff',
          }}
        />
				<Stack.Screen
          name="UbahPassword"
          component={UbahPassword}
          options={{
            title: 'Ubah Password',
            headerShown: true,
            headerStyle: {backgroundColor: '#FF7A00'},
            headerTintColor: '#fff',
          }}
        />
        <Stack.Screen
          name="UbahPasswordv2"
          component={UbahPasswordv2}
          options={{
            title: 'Ubah Password',
            headerShown: true,
            headerStyle: {backgroundColor: '#FF7A00'},
            headerTintColor: '#fff',
          }}
        />
        <Stack.Screen
          name="KonfirmasiUbahPassword"
          component={KonfirmasiUbahPassword}
          options={{
            title: 'Konfirmasi',
            headerShown: true,
            headerStyle: {backgroundColor: '#FF7A00'},
            headerTintColor: '#fff',
          }}
        />
        <Stack.Screen
          name="ChangePasswordUbahPassword"
          component={ChangePasswordUbahPassword}
          options={{
            title: 'Password Baru',
            headerShown: true,
            headerStyle: {backgroundColor: '#FF7A00'},
            headerTintColor: '#fff',
          }}
        />
        <Stack.Screen
          name="FinalUbahPassword"
          component={FinalUbahPassword}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default Router;
