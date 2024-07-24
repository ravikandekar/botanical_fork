
import React from 'react';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import HomeStackNavigation from './HomeStackNavigation';
import AboutStack from './AboutStack';
import Aminitiesstack from './Aminitiesstack';
import Treesstack from './Treesstack';

import Chargesstack from './Chargesstack';
import Gardenmapstacks from './Gardenmapstacks';
import Icon from 'react-native-vector-icons/Ionicons';
import Icon1 from 'react-native-vector-icons/Entypo';
import Foundation from 'react-native-vector-icons/Foundation';
import Gallerystack from './Gallerystack';
import Contactstack from './Contactstack';
import { View, Image, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import AminetiesMapstack from './AminetiesMapstack';
import { MyProvider } from '../context/Mycontext';
import Mainmapstack from './Mainmapstack';
import AddEntityStack from './AddEntityStack';
import Flowersstack from './Flowersstack';
import Logout from '../src/Componets/Logout';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const Drawer = createDrawerNavigator();

function CustomDrawerContent(props) {
  const insets = useSafeAreaInsets();
 
  return (
    <View style={{ flex: 1 }}>
      <DrawerContentScrollView {...props}>

        <View style={styles.drawerHeader}>
          <Image
            source={require('../src/Assets/logo.png')} // Replace with your image source
            style={styles.drawerImage}
          />
        </View>

        <DrawerItemList {...props} />
        <TouchableOpacity style={styles.info} onPress={() => Alert.alert("Rules and Regulations")}>
          <Icon1 name="info-with-circle" size={25} color="#ffff" /></TouchableOpacity>
      </DrawerContentScrollView>
      <View style={[styles.footer, { paddingBottom: insets.bottom }]}>
        <Logout />
      </View>
    </View>

  );
}

function DrawerNavigator() {
  return (

    <Drawer.Navigator initialRouteName="HomeStack"
      screenOptions={{
        statusBarHidden: true,
        headerShown: false,
        drawerActiveBackgroundColor: '#01595A', // Customizing drawer's active background color
        drawerActiveTintColor: '#fff', // Customizing drawer's active text color
        drawerPosition: 'right', // Setting the drawer to slide from the right side
        drawerLabelStyle: { fontSize: 18, fontWeight: 'bold', },
        drawerItemStyle: { marginBottom: -5 },
      }}
      drawerContent={(props) => <CustomDrawerContent {...props} />}
    >
      <Drawer.Screen
        name="HomeStack"
        component={HomeStackNavigation}
        options={{
          title: 'Home',
          drawerIcon: ({ focused, size }) => (
            <Icon name="home" size={25} color={focused ? '#fff' : '#ccc'} />
          ),
        }}
      />
      <Drawer.Screen
        name="AboutStack"
        component={AboutStack}
        options={{
          title: 'About Us',
          drawerIcon: ({ focused, size }) => (
            <Icon name="information-circle" size={25} color={focused ? '#fff' : '#ccc'} />
          ),
        }}
      />
      <Drawer.Screen
        name="Mainmapstack"
        component={Mainmapstack}
        options={{
          title: 'Garden Map',
          drawerIcon: ({ focused, size }) => (
            <Icon name="map" size={25} color={focused ? '#fff' : '#ccc'} /> // Adjusted icon for Contact Us
          ),
        }}
      />
      <Drawer.Screen
        name="Treesstack"
        component={Treesstack}
        options={{
          title: 'Trees',
          drawerIcon: ({ focused, size }) => (
            <Foundation name="trees" size={25} color={focused ? '#fff' : '#ccc'} />
          ),
        }}
      />
      <Drawer.Screen
        name="Flowersstack"
        component={Flowersstack}
        options={{
          title: 'Plants',
          drawerIcon: ({ focused, size }) => (
            <Icon name="leaf" size={25} color={focused ? '#fff' : '#ccc'} />
          ),
        }}
      />
      <Drawer.Screen
        name="Aminitiesstack"
        component={Aminitiesstack}
        options={{
          title: 'Amenities',
          drawerIcon: ({ focused, size }) => (
            <Icon name="leaf" size={25} color={focused ? '#fff' : '#ccc'} />
          ),
        }}
      />


      <Drawer.Screen
        name="Chargesstack"
        component={Chargesstack}
        options={{
          title: 'Ticket Details',
          drawerIcon: ({ focused, size }) => (
            <Icon name="cash" size={25} color={focused ? '#fff' : '#ccc'} /> // Adjusted icon for Charges
          ),
        }}
      />

      <Drawer.Screen
        name="Gallerystack"
        component={Gallerystack}
        options={{
          title: 'Gallery',
          drawerIcon: ({ focused, size }) => (
            <Icon name="images" size={25} color={focused ? '#fff' : '#ccc'} /> // Adjusted icon for Gallery
          ),
        }}
      />
      <Drawer.Screen
        name="Contactstack"
        component={Contactstack}
        options={{
          title: 'Contact Us',
          drawerIcon: ({ focused, size }) => (
            <Icon name="call" size={25} color={focused ? '#fff' : '#ccc'} /> // Adjusted icon for Contact Us
          ),
        }}
      />


      <Drawer.Screen
        name="AddEntityStack"
        component={AddEntityStack}
        options={{
          title: 'Add Entities',
          drawerIcon: ({ focused, size }) => (
            <Icon name="map" size={25} color={focused ? '#fff' : '#ccc'} /> // Adjusted icon for Contact Us
          ),
        }}
      />


    </Drawer.Navigator>

  );
}

export default DrawerNavigator;


const styles = StyleSheet.create({
  drawerHeader: {
    padding: 15,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#01595A',
    bottom: 10,
    paddingVertical: 25,

  },
  drawerImage: {
    width: '100%',
    height: 170,
    resizeMode: 'contain'

  },
  footer: {
    padding: 5,
    backgroundColor: '#f6f6f6',
    borderTopWidth: 1,
    borderColor: '#ccc',
    alignItems: 'center',

  },
  info: {
    position: 'absolute',
    alignSelf: 'flex-end',
    padding: 15
  }

});





// <Drawer.Screen
// name="Gardenmapstacks"
// component={Gardenmapstacks}
// options={{
//   title: 'Garden Map',
//   drawerIcon: ({ focused, size }) => (
//     <Icon name="map" size={25} color={focused ? '#fff' : '#ccc'} /> // Adjusted icon for Garden Map
//   ),
// }}
// />

// <Drawer.Screen
//         name="AminetiesMapstack"
//         component={AminetiesMapstack}
//         options={{
//           title: 'Amenities Map',
//           drawerIcon: ({ focused, size }) => (
//             <Icon name="map" size={25} color={focused ? '#fff' : '#ccc'} /> // Adjusted icon for Contact Us
//           ),
//         }}
//       />