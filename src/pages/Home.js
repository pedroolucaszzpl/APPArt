import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

export default function Home() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Arte de Rua</Text>
            <Text style={styles.descricao}>
            A arte de rua, também conhecida como arte urbana ou street art, é uma forma de expressão cultural que se manifesta em espaços públicos, como paredes de prédios, calçadas, viadutos e até mesmo em objetos urbanos, como postes e lixeiras. Ela engloba uma variedade de técnicas e estilos artísticos, como grafite, murais, stencils, instalações e intervenções urbanas.
            </Text>
            <Image
                source={{
                    uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/OlindaGraffiti.jpg/800px-OlindaGraffiti.jpg'
                }}
                style={styles.imagem}
            />
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title:{
        fontSize: 32,
        fontWeight: 'bold',
        color: '#46295a',
        marginBottom: 30,
    },
    descricao:{
        fontSize: 18,
        marginHorizontal: 40,
        textAlign: 'justify',
    },
    imagem:{
        marginVertical: 40,
        width: 300,
        height: 300,
    }
});