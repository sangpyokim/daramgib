import React, { useEffect } from 'react';
import Main from './App/index';
//redux
import { store } from './store';
import { Provider } from 'react-redux';
//react query
//loading
import AppLoading from 'expo-app-loading';
import * as Font from 'expo-font'
import { Ionicons }  from '@expo/vector-icons'

import SplashScreen from 'react-native-splash-screen';



export default function App() {
  const [loaded] = Font.useFonts(Ionicons.font)

  useEffect(() => {
    setTimeout( () => {
      // 불러와야할 에셋, api들을 불러옴
      // loaded === true && 저장된 유저정보 === true, 유저정보 리덕스에 저장되면 메인페이지로 이동 그렇지않으면 로그인페이지
      SplashScreen.hide()
    }, 3000)
  },[])

  if ( !loaded ) {
    return <AppLoading />
  }


  return (
      <Provider store={store} >
          <Main />
      </Provider>
  );
}

