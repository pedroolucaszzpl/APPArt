import React from 'react';
import { ScrollView, View, Text, StyleSheet, Pressable, Image } from 'react-native';

export default function Info1({ navigation }) {
    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Text style={styles.title}>Bansky</Text>
            <View style={styles.content}>
                <Text style={styles.paragraph}>Banksy é um enigmático artista de rua britânico conhecido por sua abordagem irreverente e crítica à sociedade. Sua identidade permanece um mistério, o que adiciona um elemento de intriga à sua obra. Banksy ganhou renome internacional por suas intervenções urbanas, murais e obras de arte que abordam temas como política, injustiça social e desigualdade. Sua arte muitas vezes apresenta humor ácido e sarcasmo, provocando reflexões profundas sobre o mundo contemporâneo em que vivemos.</Text>
                <Image
                    source={{
                        uri: 'https://i0.wp.com/www.marxismo.org.br/wp-content/uploads/2020/03/Foto-Bansky-Palestina.jpg?fit=696%2C434&ssl=1&w=640'
                    }}
                    style={styles.imagem}
                />
                <Text style={styles.paragraph}>A técnica de pintura de Banksy é notável por seu uso de stencils, que lhe permite criar imagens detalhadas de maneira rápida e eficiente. Esse método também se adequa ao ambiente urbano, onde ele frequentemente realiza suas intervenções. Os temas e imagens de Banksy são reconhecíveis por sua combinação única de arte visualmente atraente e mensagens sociais ou políticas impactantes, tornando-o uma figura influente e controversa no cenário da arte de rua.</Text>
            </View>
            <View style={styles.content}>
                <Pressable style={styles.botao} onPress={() => navigation.goBack()}>
                    <Text style={styles.textoBotao}> Voltar</Text>
                </Pressable>
                <Pressable onPress={() => navigation.navigate("Info2")} style={styles.botao}>
                    <Text style={styles.textoBotao}> Conheça Kobra</Text>
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
