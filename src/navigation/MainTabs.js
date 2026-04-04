import React from 'react';
import { View, StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Ionicons } from '@expo/vector-icons';

import HomePage from '../screens/HomePage';
import AddLanguageScreen from '../screens/AddLanguageScreen';
import FlashcardReviewScreen from '../screens/FlashcardReviewScreen';
import OverviewScreen from '../screens/OverviewScreen';
import SettingsScreen from '../screens/SettingsScreen';

const Tab = createBottomTabNavigator();
const HomeStackNav = createNativeStackNavigator();

function HomeStack() {
  return (
    <HomeStackNav.Navigator screenOptions={{ headerShown: false }}>
      <HomeStackNav.Screen name="HomeMain" component={HomePage} />
      <HomeStackNav.Screen name="AddLanguage" component={AddLanguageScreen} />
      <HomeStackNav.Screen name="FlashcardReview" component={FlashcardReviewScreen} />
    </HomeStackNav.Navigator>
  );
}

function TabIcon({ focused, icon, name }) {
  if (focused) {
    return (
      <View style={styles.activeTabIconWrap}>
        <Ionicons name={icon} size={22} color="#6B4226" />
      </View>
    );
  }

  return <Ionicons name={name} size={22} color="#8A7A6A" />;
}

export default function MainTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: styles.tabBar,
        tabBarIcon: ({ focused }) => {
          if (route.name === 'Home') {
            return <TabIcon focused={focused} icon="home" name="home-outline" />;
          }
          if (route.name === 'Overview') {
            return <TabIcon focused={focused} icon="book" name="book-outline" />;
          }
          if (route.name === 'Flashcards') {
            return <TabIcon focused={focused} icon="search" name="search-outline" />;
          }
          return <TabIcon focused={focused} icon="person" name="person-outline" />;
        },
      })}
    >
      <Tab.Screen name="Home" component={HomeStack} />
      <Tab.Screen name="Overview" component={OverviewScreen} />
      <Tab.Screen name="Flashcards" component={FlashcardReviewScreen} initialParams={{ language: 'English' }} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: '#F2EDE4',
    borderTopWidth: 0.5,
    borderTopColor: '#DDD3C4',
    elevation: 0,
    shadowOpacity: 0,
    height: 76,
    paddingBottom: 10,
    paddingTop: 8,
  },
  activeTabIconWrap: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: '#F5C49A',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
