import React from 'react';
import { View, Text, StyleSheet, Pressable, Image } from 'react-native';

export default function Blog({ navigation }) {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Legado na Rua</Text>
            <Text style={styles.descricao}>
            
A arte de rua tem um impacto profundo, transformando paisagens urbanas e dando voz a questões sociais. Seu legado é marcado pela quebra de barreiras artísticas, revitalização de espaços negligenciados e inspiração para novas formas de expressão, deixando uma marca duradoura na cultura contemporânea.
            </Text>
            <Image
                source={{
                    uri: 'https://ogimg.infoglobo.com.br/in/24503876-87f-15c/FT1086A/88587998_RI-Rio-de-Janeiro-RJ24-06-2020-Grafitti-no-Bairro-da-Penha-Zona-Norte-do-Rio-de-Janeiro.jpg'
                }}
                style={styles.imagem}
            />
             <Pressable onPress={()=> navigation.navigate("Info1")} style={styles.botao}>
                <Text style={styles.textoBotao}> Conheça Bansky</Text>
            </Pressable>
            <Pressable onPress={()=> navigation.navigate("Info2")} style={styles.botao}>
                <Text style={styles.textoBotao}> Conheça Kobra</Text>
            </Pressable>
            <Pressable onPress={()=> navigation.navigate("Info3")} style={styles.botao}>
                <Text style={styles.textoBotao}> Conheça Os Gêmeos</Text>
            </Pressable>
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
        height: 250,
    },
    botao: {
        width: 200,
        height: 50,
        marginVertical: 10,
        backgroundColor: '#9400d3',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
    },
    textoBotao: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 18,
    }
});
