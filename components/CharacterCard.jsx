import React from 'react';
import {Text, View, Image} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const CharacterCard = ({ image, name }) => {
    
    
    const navigation = useNavigation();

    return (

        <TouchableOpacity onPress={() => navigation.navigate('Detail')}>
        <Image source={image} />
        <Text>{name}</Text>
        </TouchableOpacity>

    )


}


export default CharacterCard

