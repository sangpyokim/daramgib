import React, { useEffect, useState } from 'react'
import { Dimensions  } from 'react-native';
import styled from 'styled-components';
import { MainColor } from '../color';
import { AntDesign } from '@expo/vector-icons';
import { useAsyncStorage } from '@react-native-async-storage/async-storage';
import { useDispatch, useSelector } from 'react-redux';


const Width = Dimensions.get('window').width

const Wrapper = styled.ScrollView`
    width: ${Width}px;
    background-color: #f4f4f4;
`
const BurningContainer = styled.View`
    height: 250px;
    width: 100%;
    background-color: white;
    padding: 16px;
    margin-top: 8px;
    margin-bottom: 8px;
`
const BurningHeader = styled.View`
    margin-top: 5px;
    margin-bottom: 15px;
`
const SmallHeader = styled.Text`
    color: ${MainColor.Banana};
    font-size:12px;
    font-weight:500;
    letter-spacing: 0.15px;
    line-height: 24px;
`
const BigHeader = styled.Text`
    font-size:20px;
    font-weight:400;
    letter-spacing: 0.15px;
    line-height: 24px;
`
const BurningContent = styled.View`
    margin-bottom: 25px;
`
const ContentText = styled.Text`
    font-size:14px;
    font-weight:400;
    letter-spacing: 0.15px;
    line-height: 20px;
`
const BurningButtonBox = styled.TouchableOpacity`
    width:100%;
    height: 50px;
    background-color: ${MainColor.Banana};
    box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.2);
    border-radius: 2px;
    flex-direction: row;
    justify-content: space-between;
    align-items:center;
    padding: 0px 16px;
    text-align: center;
`
const BurningButtonText = styled.Text`
    font-size:16px;
    font-weight:500;
    letter-spacing: 0.15px;
    line-height: 24px;
`
const BurningButtonuUnderText = styled.Text`
    font-size:14px;
    font-weight:400;
    letter-spacing: 0.15px;
    line-height: 24px;
    text-align:right;
    opacity: 0.4;
`
const CurrentContainer = styled.View`
    width: 100%;
    height: 180px;
    background-color: white;
    padding: 16px;
`
const CurrentHeader = styled.Text`
    font-weight: bold;
    font-size: 16px;
    line-height: 24px; 
    letter-spacing: 0.15px;
    margin-bottom: 10px;
    color: ${MainColor.fontColor};
`
const CurrentContents = styled.ScrollView`

`
// ImageBackground 로 변경해야함
const CurrentContent = styled.View`
    width: 120px;
    height:110px;
    background-color:wheat;
    margin-right: 8px;
`
const GroupContainer = styled.View`
    width: 100%;
    height: 400px;
    margin-top: 8px;
    background-color: white;    
`
const GroupHeader = styled.View`
    width: 100%;
    height: 55px;
    padding: 16px 16px 0 16px;
    flex-direction: row;
    justify-content: space-between;
    border-bottom-width: 0.91px;
    border-bottom-color: rgba(33,33,33, 0.08);
`
const HeaderText = styled.Text`
    font-size: 16px;
    line-height: 24px; 
    font-weight: 400;
    letter-spacing: 0.15px;
    margin-bottom: 10px;
    color: ${MainColor.fontColor};
`
const HeaderOption = styled.TouchableOpacity`
    flex-direction: row;
    justify-content: space-between;
    background-color: #f2f3f5;
    height:35px;
    width: 95px;
    padding: 5px 5px 0 10px;
    position: relative;
    top: -5px;
`
const HeaderOptionText = styled.Text`
    font-size: 14px;
    line-height: 24px; 
    font-weight: 400;
    letter-spacing: 0.15px;
    margin-bottom: 10px;
    color: ${MainColor.fontColor};
    margin-right: 5px;
    text-align: center;
`
const HeaderContents = styled.View`

`
const Home = ({navigation}) => {
    const dispatch = useDispatch()

    return (
        <Wrapper  >
            <BurningContainer>
                <BurningHeader>
                    <SmallHeader>HOT BURNING</SmallHeader>
                    <BigHeader>중간고사 같이</BigHeader>
                    <BigHeader>준비할 사람 모여람!</BigHeader>
                </BurningHeader>

                <BurningContent>
                    <ContentText>벛꽃의 꽃말은 중간고사라G...</ContentText>
                    <ContentText>도서관에서 같이 공부할 사람?</ContentText>
                </BurningContent>

                <BurningButtonBox>
                        <BurningButtonText>
                            함께하기
                        </BurningButtonText>
                        <AntDesign name="swapright" size={24} color="black" />
                </BurningButtonBox>
                <BurningButtonuUnderText>총 기말 모임 8개</BurningButtonuUnderText>
                

            </BurningContainer>

            <CurrentContainer>
                <CurrentHeader>219명이 현재 모임에 참여중이G~</CurrentHeader>
                <CurrentContents horizontal={true} bounces={false} showsHorizontalScrollIndicator={false} >
                    <CurrentContent></CurrentContent>
                    <CurrentContent></CurrentContent>
                    <CurrentContent></CurrentContent>
                    <CurrentContent></CurrentContent>
                    <CurrentContent></CurrentContent>
                    <CurrentContent></CurrentContent>
                </CurrentContents>
            </CurrentContainer>

            <GroupContainer>
                <GroupHeader>
                    <HeaderText>전체모임</HeaderText>
                    <HeaderOption>
                        <HeaderOptionText>최신순</HeaderOptionText>
                        <AntDesign name="down" size={22} color={MainColor.fontColor} />
                    </HeaderOption>
                    <HeaderContents></HeaderContents>
                </GroupHeader>                                                                                  
            </GroupContainer>
        </Wrapper>
    );
  
}

export default Home;