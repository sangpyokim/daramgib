import React from 'react'
import { Dimensions } from 'react-native'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Picture  from '../screen/mainscreen/Picture'
import Game from '../screen/mainscreen/Game'
import Sports from '../screen/mainscreen/Sports'
import Meal from '../screen/mainscreen/Meal'
import Study from '../screen/mainscreen/Study'
import Etc from '../screen/mainscreen/Etc'
import { MainColor } from '../color';
import Home from '../mainScreen/Home';

const Tab = createMaterialTopTabNavigator();

const Width = Dimensions.get('window').width * 0.3

const MainTopNavigation = () => {
    return (
        <Tab.Navigator 
        screenOptions={{
            tabBarLabelStyle: {fontSize: 16, letterSpacing: 0.15 },
            tabBarItemStyle: { width: Width, height: 50},
            tabBarScrollEnabled: true,
            tabBarBounces: false,
            tabBarIndicatorStyle: { backgroundColor: MainColor.Banana }
        }}        
        >
            <Tab.Screen name="AllBoard" component={Home} options={{title: '전체'}} />
            <Tab.Screen name="Picture" component={Picture} options={{title: '사진/영상'}}  />
            <Tab.Screen name="Game" component={Game} options={{title: '게임/오락'}}  />
            <Tab.Screen name="Sports" component={Sports} options={{title: '운동/스포츠'}}  />
            <Tab.Screen name="Study" component={Study} options={{title: '공부/스터디'}}  />
            <Tab.Screen name="Meal" component={Meal} options={{title: '식사/술'}}  />
            <Tab.Screen name="Etc" component={Etc} options={{title: '기타'}}  />
        </Tab.Navigator>
    )
}

export default MainTopNavigation
