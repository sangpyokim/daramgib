import React from 'react'
import { Alert, Button, View } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { LogOut } from '../features/user/userSlice';
import { useDispatch } from 'react-redux';
import { setIsLogggedInFalse } from '../features/IsLoggedIn/IsLoggedInSlice';

const Mypage = () => {
    const dispatch = useDispatch()

    const onPressLogOut = async () => {
        try {
            await AsyncStorage.clear() // 모든 저장데이터 삭제
            dispatch(LogOut()) // 리덕스의 저장데이터 삭제
            dispatch(setIsLogggedInFalse()) // 로그인페이지로 이동
        } catch(e) {
            Alert.alert("Error") // 디바이스에 저장데이터가 없어도 에러뜸
        }
    }

    const onPress = async() => {
        try {
            await AsyncStorage.setItem('key', "value")
          } catch(e) {
            Alert.alert('저장에러')
          }
        
    }

    return (
        <View>
            <Button title="데이터 저장" onPress={onPress} />
            <Button title="데이터 삭제" onPress={onPressLogOut} />
        </View>
    )
}

export default Mypage
