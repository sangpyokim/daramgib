import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'


// 탭 네비게이션을 위한 껍데기 컴포넌트
const Writing = () => {

    return(
        <View style={{ flex: 1, backgroundColor: "#ddd", justifyContent:'center', alignItems: 'center' }} >
            <TouchableOpacity>
                <Text>
                    여기화면은 보여지면 안됨!
                </Text>
            </TouchableOpacity>
        </View>
    )
}

export default Writing;