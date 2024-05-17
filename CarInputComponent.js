import React, { useContext, useState } from 'react'
import {View, TextInput,Button,StyleSheet} from 'react-native'
import { CarContext } from './CarContext'

export default function CarInputComponent() {
    const {setCarros} = useContext(CarContext)
    const[marca,setMarca] = useState('')
    const[modelo, setModelo] =useState('')
    const[alert,setAlert] = useState(false);

    const addCarro = () => {
        if(marca && carro){
            setCarros (prevCarros => [...prevCarros,{marca,modelo}])
            setMarca('')
            setModelo('')
        }
    }

    return (
        <View>
            <TextInput value={marca} oneChangeText={setMarca} placeholder='Marca do carro'/>
            <TextInput value={modelo} oneChangeText={setModelo} placeholder='Modelo do carro'/>
            <Button title='Adicionar' onPress={addCarro} />
            {
                alert &&
                <Text>Precisa digitar alguma</Text>
            }
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1
    }
})