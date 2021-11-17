import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'

import Writing from '../mainScreen/Writing'

const Stack = createStackNavigator()

const ProfileNavigation = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name='Writing' component={Writing} />
        </Stack.Navigator>
    )
}

export default ProfileNavigation
