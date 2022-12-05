import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import {Splash} from '../../components';
import {Service24} from "../../assets"
const Splash2 = () => {
	return (
		<Splash
		logo={Service24}
		title="Bengkel"
		desc="Menyediakan Service di Bengkel Terbaik"
		nav="Splash3"
		/>
	)
}

export default Splash2

const styles = StyleSheet.create({})
