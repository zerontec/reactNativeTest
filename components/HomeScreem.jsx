import 'react-native-gesture-handler'

import React from 'react';

import {View,Button, Text} from 'react-native';
import CharacterCard from './CharacterCard';



const HomeScreem = ({navigation}) => {

    return(

        <View>

<CharacterCard image={require('../assets/favicon.png')} name='IronMan' />
<CharacterCard image={require('../assets/favicon.png')} name='Capitan America' />         
           
            </View>

    )





}



export default HomeScreem;