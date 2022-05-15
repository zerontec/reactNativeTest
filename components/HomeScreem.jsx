import 'react-native-gesture-handler'
import React from 'react';
import { View, Button, Text } from 'react-native';
import CharacterCard from './CharacterCard';
import axios from 'axios';
import { useEffect, useState } from 'react';
import apiParams from '../config';
import { FlatList } from 'react-native-gesture-handler';
import { ActivityIndicator } from 'react-native-web';





const HomeScreem = () => {

    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);
    const {ts, apikey, hash, baseUrl}= apiParams

useEffect(() => {

    axios.get(`${baseUrl}/v1/public/characters`, {

        params:{
             ts,
            apikey,
            hash
        }


        })
        .then(response => setData(response.data.data.results))
        .catch(error => console.log(error))
        .finally(() => setLoading(false))

}, []);

    return(

        <View>
       
{isLoading ? <ActivityIndicator size="large" color="#00ff00" />
:(  

    <FlatList
    data={data}
    keyExtractor={({id}) => id.toString() }
    renderItem={({item})=>(

        <CharacterCard
        image={`${item?.thumbnail?.path}.${item?.tumbnail.extension}`}
        name={item.name}/>


)}
    
    
    
    />


)



}



        </View>

    )





}



export default HomeScreem;