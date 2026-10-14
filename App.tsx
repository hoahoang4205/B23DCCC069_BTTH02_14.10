import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ContactScreen } from './src/screens/ContactScreen';
import { HomeScreen } from './src/screens/HomeScreen';
import { LoginScreen } from './src/screens/LoginScreen';
import { NotificationScreen } from './src/screens/NotificationScreen';
import { SettingScreen } from './src/screens/SettingScreen';
import { ChatScreen } from './src/screens/ChatScreen';
import { fontFamily } from './src/theme';

export type RootStackParamList = {
  Login: undefined;
  Main: undefined;
  Chat: { contactId: string };
};

export type TabParamList = {
  Home: undefined;
  Contact: undefined;
  Notification: undefined;
  Setting: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();
const Tab = createBottomTabNavigator<TabParamList>();

const styles = StyleSheet.create({
  tabBar: { height: 68, paddingTop: 7, paddingBottom: 8, borderTopColor: '#e8eaf1', backgroundColor: '#fff' },
  tabLabel: { fontFamily, fontSize: 11, fontWeight: '600' },
  tabIcon: { fontSize: 18 },
});

function ChatTabIcon() {
  return <Text style={styles.tabIcon}>💬</Text>;
}

function ContactTabIcon() {
  return <Text style={styles.tabIcon}>👥</Text>;
}

function NotificationTabIcon() {
  return <Text style={styles.tabIcon}>🔔</Text>;
}

function SettingTabIcon() {
  return <Text style={styles.tabIcon}>⚙️</Text>;
}

function MainTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#4f46e5',
        tabBarInactiveTintColor: '#8992a3',
        tabBarStyle: styles.tabBar,
        tabBarLabelStyle: styles.tabLabel,
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{ title: 'Tin nhắn', tabBarIcon: ChatTabIcon }}
      />
      <Tab.Screen
        name="Contact"
        component={ContactScreen}
        options={{ title: 'Danh bạ', tabBarIcon: ContactTabIcon }}
      />
      <Tab.Screen
        name="Notification"
        component={NotificationScreen}
        options={{ title: 'Thông báo', tabBarIcon: NotificationTabIcon }}
      />
      <Tab.Screen
        name="Setting"
        component={SettingScreen}
        options={{ title: 'Cài đặt', tabBarIcon: SettingTabIcon }}
      />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Main" component={MainTabs} />
        <Stack.Screen name="Chat" component={ChatScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
