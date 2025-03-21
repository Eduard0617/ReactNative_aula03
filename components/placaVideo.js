import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function placaVideo() {
  return (
<View style={styles.container}>
      <Text style={styles.titulo}>Placa de Vídeo</Text>
      <Image style={styles.img} resizeMode='contain' source={require('../assets/placavideo.png')} />
      <StatusBar style="auto" />
    </View>
  );
}

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    titulo: {
      fontSize: 25,
      fontWeight: 800,
    },
    img: {
      width: 350,
    },
});
