import React from 'react'

import { NavigationContainer, useNavigation, DrawerActions } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { View } from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';
import Langchange from '../src/Componets/Langchange';
import Mainmap from '../src/Componets/Mainmap';
import Zonelist from '../src/Componets/Zonelist';
import Zonesdetails from '../src/Componets/Zonesdetails';

const Stack = createNativeStackNavigator();
function ZonesStack() {
    const navigation = useNavigation();
    return (

        <Stack.Navigator initialRouteName="Amenities"
            screenOptions={{
                statusBarHidden: true,
                headerTransparent: true,
                headerTitle: '',
                headerTintColor: '#fff',
                headerTitleAlign: 'center',
                headerRight: () => {
                    return (
                        <View style={{ flexDirection: 'row', }}>

                            <Icon name="menu"
                                onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
                                size={34} color="#01595A" />
                        </View>
                    )
                },
                headerLeft: () => {
                    return (
                        <View >
                        <Langchange color={'#01595A'} size={34} />

                        </View>
                    )
                }
            }}
        >
            <Stack.Screen name="Zonelist" component={Zonelist} />
            <Stack.Screen name="Zonesdetails" component={Zonesdetails} />
            <Stack.Screen name="Mainmap" component={Mainmap} />

        </Stack.Navigator>

    );
}

export default ZonesStack;
