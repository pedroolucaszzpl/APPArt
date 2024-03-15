import React from 'react';
import { ScrollView, View, Text, StyleSheet, Pressable, Image } from 'react-native';

export default function Info1({ navigation }) {
    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Text style={styles.title}>Os Gêmeos</Text>
            <View style={styles.content}>
                <Text style={styles.paragraph}>
Os Gêmeos são uma dupla de artistas brasileiros amplamente reconhecidos pelo seu talento excepcional no mundo do grafite. Sua técnica de pintura é marcada por um estilo único e altamente detalhado, combinando elementos surrealistas, personagens imaginativos e cores vibrantes. Os Gêmeos são conhecidos por suas obras que misturam realidade e fantasia, criando um universo visual rico em simbolismo e narrativa.</Text>
                <Image
                    source={{
                        uri: 'https://i.em.com.br/J32vfsIU5a4Dp0dnH1HZ2OaYmoQ=/1200x720/smart/imgsapp.em.com.br/app/noticia_127983242361/2023/02/23/1460743/os-gemeos-gustavo-e-otavio-pandolfo-olham-para-a-camera-atras-esta-um-boneco-criado-por-eles_1_69560.jpg'
                    }}
                    style={styles.imagem}
                />
                <Text style={styles.paragraph}>O grafite produzido por Os Gêmeos é caracterizado por sua complexidade e diversidade de temas, que vão desde retratos de pessoas comuns até imagens abstratas e surreais. Eles são mestres em explorar as possibilidades do espaço urbano, transformando paredes e fachadas em verdadeiras galerias de arte a céu aberto. Com sua habilidade técnica e criatividade inigualável, Os Gêmeos deixaram uma marca indelével no cenário do grafite brasileiro e internacional, inspirando uma geração de artistas e admiradores ao redor do mundo.</Text>
            </View>
            <View style={styles.content}>
                <Pressable style={styles.botao} onPress={() => navigation.goBack()}>
                    <Text style={styles.textoBotao}> Voltar</Text>
                </Pressable>
                <Pressable onPress={() => navigation.navigate("Info1")} style={styles.botao}>
                    <Text style={styles.textoBotao}> Conheça Bansky</Text>
                </Pressable>
                <Pressable onPress={() => navigation.navigate("Info2")} style={styles.botao}>
                    <Text style={styles.textoBotao}> Conheça Kobra</Text>
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
