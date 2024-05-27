import React from 'react'

import { NavigationContainer, useNavigation, DrawerActions } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { View } from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';
import Langchange from '../src/Componets/Langchange';
import Mainmap from '../src/Componets/Mainmap';

const Stack = createNativeStackNavigator();
function Mainmapstack() {
    const navigation = useNavigation();
    return (

        <Stack.Navigator initialRouteName="Mainmap"
            screenOptions={{
                statusBarHidden: true,
                headerTransparent: true,
                headerTitle: '',
                headerTintColor: '#fff',
                headerTitleAlign: 'center',
                headerRight: () => {
                    return (
                        <View>

                            <Icon name="menu"
                                onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
                                size={34} color="#01595A" />
                        </View>
                    )
                },
                // headerLeft: () => {
                //     return (
                //         <View >
                //             <Langchange />

                //         </View>
                //     )
                // }
            }}
        >
            <Stack.Screen name="Mainmap" component={Mainmap} />

        </Stack.Navigator>

    );
}

export default Mainmapstack;
