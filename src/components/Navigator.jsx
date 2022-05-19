import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import FontAwesome, { SolidIcons, RegularIcons, BrandIcons } from 'react-native-fontawesome';

import {
  AirPay,
  Home,
  ATM,
  Beneficiaries,
  Transfer,
} from './../screens'

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: 'rgb(255, 45, 85)',
  },
};

export const Navigator = () => {

  const Tab = createMaterialBottomTabNavigator();


  return (
    <NavigationContainer theme={MyTheme}>
      <Tab.Navigator
        initialRouteName="Home"
        activeColor="#007236"
        inactiveColor="#000000"
        barStyle={{
          backgroundColor: '#ffffff',
          height: 80,
          padding: 10,
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
        }}
      >

        <Tab.Screen name='Home' component={Home} options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="cogs" color={color} size={26} />
          ),
        }} />

        <Tab.Screen name='Transfer' component={Transfer} options={{
          tabBarLabel: 'Transfer',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }} />

        <Tab.Screen name='Beneficiaries' component={Beneficiaries} options={{
          tabBarLabel: 'Beneficiaries',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="cog" color={color} size={26} />
          ),
        }} />

        <Tab.Screen name='ATM' component={ATM} options={{
          tabBarLabel: 'ATM',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }} />

        <Tab.Screen name='AirPay' component={AirPay} options={{
          tabBarLabel: 'AirPay',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }} />

      </Tab.Navigator>
    </NavigationContainer>
  );
}