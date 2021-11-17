import React, { useState } from 'react'
import { Dimensions, View } from 'react-native';
import styled from 'styled-components';

const Width = Dimensions.get('window').width

const Wrapper = styled.ScrollView`
    width: ${Width}px;
    background-color: #f4f4f4;
`
const Container = styled.View`
    margin-top: 8px;
    background-color:white;
    width:100%;
    padding:8px 16px 0px 16px;

`
const Header = styled.Text`
    font-weight: 500;
    font-size: 12px;
    line-height: 20px;
    letter-spacing: 0.15px;
    color: #4D4D4D;
    margin-bottom:5px;
`
const Contents = styled.View`
    width: 100%;
    height:180px;
    margin-top:10px;
    border-bottom-width: 0.91px;
    border-bottom-color: rgba(33,33,33, 0.08);
`

const Screen = () => {
    const [ contents, setContents ] = useState()
    // contents 를 map으로 보여줌 개수보다 하나더 생성
    // 모임 수 적어주기
    return (
        <Wrapper>
            <Container>
            <Header>2개 모임 진행 중</Header>
                <Contents>
                    <View style={{ width: '33%', backgroundColor: 'wheat', height: 160 }} ></View>
                </Contents>
                <Contents>
                    <View style={{ width: '33%', backgroundColor: 'wheat', height: 160 }} ></View>
                </Contents>
                <Contents>
                    <View style={{ width: '33%', backgroundColor: 'wheat', height: 160 }} ></View>
                </Contents>
                <Contents>
                    <View style={{ width: '33%', backgroundColor: 'wheat', height: 160 }} ></View>
                </Contents>
                <Contents>
                    <View style={{ width: '33%', backgroundColor: 'wheat', height: 160 }} ></View>
                </Contents>
                <Contents>
                </Contents>
            </Container>
        </Wrapper>
    )
}

export default Screen
