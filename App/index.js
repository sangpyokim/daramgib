import React, { useState, useEffect } from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native';
import { MainColor } from '../color';
import { BackHandler, TouchableOpacity, View, Alert } from 'react-native';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons'; 

//navigation
import TabBar from './components/TabBar';
import MainTopNavigation from './MainTopNavigation';
import MaintainNavigation from './MaintainNavigation';

//screens
import IsNotLoggedIn from '../isnotloggedin/SignIn';
import InformationInput from '../isnotloggedin/SignUp'
import HotGroup from '../mainScreen/HotGroup';
import Fake from '../mainScreen/Fake'
import Mypage from '../mainScreen/Mypage';
import Writing from '../mainScreen/Writing';

//redux
import { useSelector } from 'react-redux';


const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

//fake 스크린은 껍데기 스크린 
const MainBottomNav = () => {

    return(
        <Tab.Navigator  
            screenOptions={{
                headerRight: () => (<View style={{ flexDirection: 'row', alignItems: 'center' }} >
                <TouchableOpacity 
                    style={{ marginRight: 20, }} 
                    onPress={null}//새로 고침 
                    >
                    <MaterialCommunityIcons name="magnify" size={26} color="black" />
                </TouchableOpacity>
                <TouchableOpacity 
                style={{ marginRight: 10, }} 
                onPress={null}//새로 고침 
                >
                <Ionicons name="alarm" size={24} color="black" />
            </TouchableOpacity>
                </View>),
                title: '다람집',
                headerTitleAlign: 'center',
                headerTitleStyle: { 
                    color: MainColor.Banana, 
                    fontSize: 22, 
                    fontWeight: '800' 
                }  }} tabBar={ props => <TabBar {...props} />} 
                >
            <Tab.Screen name="모임찾기" component={MainTopNavigation}  />
            <Tab.Screen name="모집임박" component={HotGroup} />
            <Tab.Screen name="Fake" component={Fake} />
            <Tab.Screen name="내모임관리" component={MaintainNavigation} />
            <Tab.Screen name="마이페이지" component={Mypage} />
        </Tab.Navigator>
    )
} 

const Main = () => {

    const logging = useSelector(state => state.loggedin.value) //useSelector(state => state.loggedin.value)
    const backAction = () => {
        Alert.alert("종료하기", "앱을 종료하시겠습니까?", [
          {
            text: "취소",
            onPress: () => null,
          },
          { text: "확인", onPress: () => BackHandler.exitApp() }
        ]);
        return true;
      };
    
    useEffect( () => {

        const backHandler = BackHandler.addEventListener("hardwareBackPress", backAction);
        
        return () => backHandler.remove();
    }, [])
    
    return(
        <NavigationContainer>
            {logging 
              ?
                <Stack.Navigator screenOptions={{ headerShown: false, gestureEnabled: true }} >
                    <Stack.Screen name="mainBottomNav" component={MainBottomNav}/>
                    <Stack.Screen 
                        name="Writing" 
                        component={Writing} 
                        options={({navigation, route}) => ({
                            headerShown: true, 
                            headerTintColor: 'black',
                            headerTitle: '모임 만들기',
                            presentation: 'card',
                            headerTransparent: false,
                            headerBackTitleVisible: false,                           
                            headerTitleAlign: 'center'
                        })}/>
                </Stack.Navigator>
              :
                
                <Stack.Navigator >
                    <Stack.Screen name="IsNotLoggedIn" component={IsNotLoggedIn} />
                    <Stack.Screen name="InformationInput" component={InformationInput} />
            </Stack.Navigator>
        }
        </NavigationContainer>
    )
}

export default Main