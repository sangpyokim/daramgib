import React, { useEffect, useState } from 'react'
import { Alert, Dimensions, Text, TouchableOpacity } from 'react-native'
import styled from 'styled-components/native'
import { useDispatch, useSelector } from 'react-redux';
import { setIsLogggedInTrue } from '../features/IsLoggedIn/IsLoggedInSlice';
import { LogIn } from '../features/user/userSlice';
import axios from 'axios';


const Heights = Math.round(Dimensions.get('window').height);
const Widths = Math.round(Dimensions.get('window').width);

const Container = styled.View`
    flex: 1;
    align-items: center;
    justify-content: center;
    background-color: #ddd;
`
const LogoImage = styled.Image`
    flex: 1;
`
const VerifyContainer = styled.View`
    flex:1;
    align-items: center;
    justify-content: center;
`
const Email = styled.TextInput`
    background-color: #fff;
    width: ${Widths * 0.6}px;
    margin-bottom: 10px;
    height: 30px;
`
const Number = styled.TextInput`
    background-color: #fff; 
    width: 30%;
    margin-right: 10px;
    height: 30px;

`

const IsNotLoggedIn = ({ navigation }) => {
    const dispatch = useDispatch()
    const [ email, setEmail ] = useState()
    const [ password, setPassword] = useState();

    const user = useSelector( state => state.loginout.user)
    // 로그인 프로세스 
    // 로그인 성공 > 토큰 발급 > 토큰으로 유저정보 get && 얻은 정보를 디바이스에 저장 > isloggedin = true > 저장된 정보로 화면 표시 > 어플 껏다 켯을때 저장된 값을 불러와서 보여줌

    const onPressLogIn = async() => {
        axios({
            method:'post',
            url:'http://211.227.151.158:8080/api/login',
            data: {
                id: "skek",
                password: "1234"
            } // 로그인
            
        }).then( res => {
            console.log("성공")
            dispatch( LogIn( {
                token: res.data, // 1. 토큰, 이메일을 redux에 저장 혹시 몰라서 저장
                email: "skek"
            } ))
             // 2. 토큰으로 유저정보를 get
             // 3. 정보를 디바이스에 저장
             // 4. isloggedin = true > 메인페이지로 이동하게됨
             // 5. 저장된 유저정보를 꺼내서 사용함. or 꺼내고 나서 리덕스에 저장 후 리덕스에서 꺼내서 사용
        }).catch( e => Alert.alert("이메일 혹은 비밀번호가 틀렸습니다.","다시 입력해주세요."))

    }
  



    return(
        <Container>
            <LogoImage />
            <VerifyContainer>
                <Email onChangeText={ text => setEmail(text)} />
                <Email onChangeText={ text => setPassword(text)} secureTextEntry={true}  />
                <TouchableOpacity onPress={() => onPressLogIn()} ><Text>로그인</Text></TouchableOpacity>
                <TouchableOpacity title="회원가입" onPress={() => navigation.navigate('InformationInput')} >
                    <Text>
                        회원가입
                    </Text>
                </TouchableOpacity>
            </VerifyContainer>
        </Container>
    )
}

export default IsNotLoggedIn