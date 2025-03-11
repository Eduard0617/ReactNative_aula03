import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function Home(props) {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.principal}>
                <Text style={styles.titulo}> Partes do Computador </Text>
                <Text style={styles.subTitulo}> As partes mais importantes do PC </Text>
            </View>

                <TouchableOpacity style={styles.button} onPress={() => {props.navigation.navigate('placaMae')}}>
                    <Text style={styles.textButton}> Placa-Mãe </Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.button} onPress={() => {props.navigation.navigate('placaVideo')}}>
                    <Text style={styles.textButton}> Placa de Vídeo </Text>
                </TouchableOpacity>

            <StatusBar style="auto" />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f4f4f4',
        alignItems: 'center',
        justifyContent: 'center',
    },
    titulo: {
        fontSize:30
    },

    subTitulo: {
        fontSize: 15
    },

    button: {
        margin: 10,
        padding: 5,
        backgroundColor: '#add8e6',
        borderRadius: 5,
        alignItems: 'center',
    },

    textButton: {
        fontSize: 20
    },

    principal: {
        alignItems: 'center',
        marginBottom: 50,
        borderWidth: 2,
        padding: 10,
        backgroundColor: '#4f5a'
    }
});
