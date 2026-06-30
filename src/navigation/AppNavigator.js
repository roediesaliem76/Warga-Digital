import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

// Screens
import LoginScreen from '../screens/LoginScreen';
import SignUpScreen from '../screens/SignUpScreen';
import DashboardWargaScreen from '../screens/DashboardWargaScreen';
import DashboardAdminScreen from '../screens/DashboardAdminScreen';
import FinanceScreen from '../screens/FinanceScreen';
import AdminFinanceScreen from '../screens/AdminFinanceScreen';
import InputFinanceScreen from '../screens/InputFinanceScreen';
import ReportScreen from '../screens/ReportScreen';
import InformationScreen from '../screens/InformationScreen';
import ValidationScreen from '../screens/ValidationScreen';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

// Admin Tab Navigator
function AdminTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'AdminHome') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'AdminFinances') {
            iconName = focused ? 'wallet' : 'wallet-outline';
          } else if (route.name === 'AdminReports') {
            iconName = focused ? 'document-text' : 'document-text-outline';
          } else if (route.name === 'Profile') {
            iconName = focused ? 'person' : 'person-outline';
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#0066CC',
        tabBarInactiveTintColor: 'gray',
        tabBarStyle: { paddingBottom: 5, paddingTop: 5, height: 60 }
      })}
    >
      <Tab.Screen name="AdminHome" component={DashboardAdminScreen} options={{ tabBarLabel: 'Dashboard' }} />
      <Tab.Screen name="AdminFinances" component={AdminFinanceScreen} options={{ tabBarLabel: 'Keuangan' }} />
      <Tab.Screen name="AdminReports" component={ReportScreen} options={{ tabBarLabel: 'Laporan' }} />
    </Tab.Navigator>
  );
}

// Warga Tab Navigator
function WargaTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'Finances') {
            iconName = focused ? 'card' : 'card-outline';
          } else if (route.name === 'Report') {
            iconName = focused ? 'megaphone' : 'megaphone-outline';
          } else if (route.name === 'Profile') {
            iconName = focused ? 'person' : 'person-outline';
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#0066CC',
        tabBarInactiveTintColor: 'gray',
        tabBarStyle: { paddingBottom: 5, paddingTop: 5, height: 60 }
      })}
    >
      <Tab.Screen name="Home" component={DashboardWargaScreen} options={{ tabBarLabel: 'Beranda' }} />
      <Tab.Screen name="Finances" component={FinanceScreen} options={{ tabBarLabel: 'Iuran' }} />
      <Tab.Screen name="Report" component={ReportScreen} options={{ tabBarLabel: 'Layanan' }} />
    </Tab.Navigator>
  );
}

export default function AppNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="Login">
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="SignUp" component={SignUpScreen} />

      {/* We are routing to AdminTabs here for demonstration purposes, to allow navigating to admin specific screens */}
      {/* In a real app, logic would determine whether to show WargaTabs or AdminTabs based on auth role */}
      <Stack.Screen name="MainTabs" component={AdminTabs} />

      {/* Admin specific screens hidden from tabs */}
      <Stack.Screen name="AdminValidations" component={ValidationScreen} />
      <Stack.Screen name="InputFinance" component={InputFinanceScreen} />
      <Stack.Screen name="Information" component={InformationScreen} />

      {/* Fallback to view Warga dashboard from somewhere */}
      <Stack.Screen name="WargaDashboard" component={WargaTabs} />
    </Stack.Navigator>
  );
}
