import React from 'react';
import { ScrollView, View, Text, StyleSheet, Pressable, Image } from 'react-native';

export default function Info1({ navigation }) {
    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Text style={styles.title}>Eduardo Kobra</Text>
            <View style={styles.content}>
                <Text style={styles.paragraph}>
                    Eduardo Kobra é um renomado artista brasileiro conhecido por suas obras de arte urbana coloridas e impactantes. Sua técnica de pintura se destaca pelo uso de grandes murais e o emprego de cores vibrantes e contrastantes. Kobra é reconhecido por sua habilidade em transformar espaços urbanos com sua arte, criando imagens monumentais que capturam a atenção do público e transmitem mensagens poderosas.</Text>
                <Image
                    source={{
                        uri: 'https://classic.exame.com/wp-content/uploads/2017/10/kobras.jpg?quality=70&strip=info&w=680'
                    }}
                    style={styles.imagem}
                />
                <Text style={styles.paragraph}>O estilo característico de Kobra inclui o uso de stencils e projeções, combinados com uma paleta de cores ousada e expressiva. Ele é famoso por suas representações de figuras históricas e ícones culturais, muitas vezes reinterpretando fotografias famosas em uma estética única e contemporânea. A precisão técnica e o impacto visual de suas obras fazem de Eduardo Kobra um dos artistas mais reconhecidos e respeitados no cenário da arte de rua internacional.</Text>
            </View>
            <View style={styles.content}>
                <Pressable style={styles.botao} onPress={() => navigation.goBack()}>
                    <Text style={styles.textoBotao}> Voltar</Text>
                </Pressable>
                <Pressable onPress={() => navigation.navigate("Info1")} style={styles.botao}>
                    <Text style={styles.textoBotao}> Conheça Bansky</Text>
                </Pressable>
                <Pressable onPress={() => navigation.navigate("Info3")} style={styles.botao}>
                    <Text style={styles.textoBotao}> Conheça Os Gêmeos</Text>
                </Pressable>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        justifyContent: 'center',
        paddingHorizontal: 20,
    },
    title: {
        fontSize: 32,
        fontWeight: 'bold',
        color: '#46295a',
        marginBottom: 30,
        textAlign: 'center',
    },
    content: {
        alignItems: 'center',
    },
    paragraph: {
        fontSize: 16,
        lineHeight: 24,
        marginBottom: 10,
        textAlign: 'justify',
    },
    imagem: {
        marginVertical: 40,
        width: 300,
        height: 250,
    },
    botao: {
        width: 200,
        height: 50,
        backgroundColor: '#9400d3',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        marginVertical: 10,
    },
    textoBotao: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 18,
    }
});
