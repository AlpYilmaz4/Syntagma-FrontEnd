import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function FlashcardReviewScreen({ route }) {
  const language = route.params?.language || 'Language';

  return (
    <SafeAreaView style={styles.screen}>
      <Text style={styles.title}>Flashcard Review</Text>
      <Text style={styles.text}>Now reviewing: {language}</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#F2EDE4',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 24,
  },
  title: {
    color: '#6B4226',
    fontSize: 28,
    marginBottom: 8,
    fontFamily: 'PlayfairDisplay_700Bold',
  },
  text: {
    color: '#8A7A6A',
    fontSize: 15,
    textAlign: 'center',
    fontFamily: 'DMSans_400Regular',
  },
});
