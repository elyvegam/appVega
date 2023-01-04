import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import { LinearGradient } from 'expo-linear-gradient';
import { StatusBar } from 'expo-status-bar';

const catGif = require('./assets/cute-cats.gif');

export default function App() {
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={['#52489c', '#EB69AC']}
        start={{ x: 0, y: 0.5 }}
        end={{ x: 1, y: 1 }}
        style={styles.gradient}
      >
        <View style={styles.box}>
          <Text style={styles.title}>Hola, Coder!</Text>
          <Text style={styles.text}>Esto es un subtítulo</Text>
          <Image source={catGif} style={styles.img} resizeMode='contain' />
        </View>
      </LinearGradient>
      <StatusBar style='auto' />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  gradient: {
    flex: 1,
  },
  box: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: '#fff',
    fontSize: 24,
  },
  text: {
    color: '#fff',
    fontSize: 16,
    paddingTop: 8,
  },
  img: {
    width: '80%',
  },
});
