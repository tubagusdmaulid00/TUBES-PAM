import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import {Splash} from '../../components';
import {Logo} from "../../assets"
const Splash1 = () => {
	return (
		<Splash
		logo={Logo}
		title="SERVICEAJA"
		desc="Aplikasi untuk memonitor perawatan motor"
		nav="Splash2"
		tinggi={120}
		lebar={120}
		/>
	)
}

export default Splash1

const styles = StyleSheet.create({})
