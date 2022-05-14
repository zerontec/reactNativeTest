import React from 'react';
import {Text, View, Image} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const CharacterCard = ({image, name}) => {

    const navigation = useNavigation();


return (

<TouchableOpacity
style={styles.container }
onPress={() => navigation.naviagate('Detail')}

>
<Image styles={styles.image}
source={image} />

<Text styles={styles.font}>{name} </Text>




</TouchableOpacity>

)


}


export default CharacterCard

