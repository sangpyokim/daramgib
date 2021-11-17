import React, { useEffect } from 'react'
import { Text, View, BackHandler,Alert, TouchableOpacity } from 'react-native'

import { useDispatch } from 'react-redux';
import { setIsLogggedInTrue } from '../features/IsLoggedIn/IsLoggedInSlice';

const InformationInput = ({ navigation }) => {
    const dispatch = useDispatch()

    const backAction = () => true
    
    useEffect( () => {

        const backHandler = BackHandler.addEventListener("hardwareBackPress", backAction);
        
        return () => backHandler.remove();
    }, [])

    const onPress = () => {
        //회원가입 정보 보낸 후 isloggedin true로 변경 후 홈으로

       dispatch(setIsLogggedInTrue())
    }

    return(
        <View style={{ flex:1, alignItems: 'center', justifyContent: 'center'}}>
            <TouchableOpacity onPress={onPress}>
                <Text>
                    회원가입
                </Text>  
            </TouchableOpacity>
        </View>
    )
}

export default InformationInput