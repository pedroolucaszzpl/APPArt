import React from 'react';
import { View, Text, StyleSheet, Image, FlatList } from 'react-native';

export default function Feed() {
    // Dados de exemplo para as imagens de arte de rua
    const data = [
        { id: 1, imageUrl: 'https://www.guiadasemana.com.br/contentFiles/image/opt_w1180h738/2018/09/FEA/57958_kobra.jpg', description: 'Kobra - Brasil' },
        { id: 2, imageUrl: 'https://www.guiadasemana.com.br/contentFiles/image/opt_w1180h738/2018/09/FEA/57958_os-gemeos.jpg', description: 'Os Gêmeos - Brasil' },
        { id: 3, imageUrl: 'https://www.guiadasemana.com.br/contentFiles/image/opt_w1180h738/2018/09/FEA/57958_banksy.jpg', description: 'Banksy - Inglaterra' },
        { id: 4, imageUrl: 'https://www.guiadasemana.com.br/contentFiles/image/opt_w1180h738/2018/09/FEA/57958_edgar-mueller.jpg', description: 'Edgar Mueller - Alemanha' },
        { id: 5, imageUrl: 'https://www.guiadasemana.com.br/contentFiles/image/opt_w1180h738/2018/09/FEA/57958_julien-malland.jpg', description: 'Julien Malland - França' },
        { id: 6, imageUrl: 'https://www.guiadasemana.com.br/contentFiles/image/opt_w1180h738/2018/09/FEA/57958_ernest-zacharevic.jpg', description: 'Ernest Zacharevic- Malásia'},
        { id: 7, imageUrl: 'https://www.guiadasemana.com.br/contentFiles/image/opt_w1180h738/2018/09/FEA/57958_lapiztolas.jpg', description: 'Lapiztola - México'},
        { id: 8, imageUrl: 'https://www.guiadasemana.com.br/contentFiles/image/opt_w1180h738/2018/09/FEA/57958_zag-e-sia.jpg', description: 'Zag e Sia - França'},
        // Adicione mais objetos conforme necessário
    ];

    // Função para renderizar cada item da lista
    const renderItem = ({ item }) => (
        <View style={styles.itemContainer}>
            <Image source={{ uri: item.imageUrl }} style={styles.image} />
            <Text style={styles.description}>{item.description}</Text>
        </View>
    );

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Artistas e Obras</Text>
            <FlatList
                data={data}
                numColumns={2} // 2 imagens por linha
                renderItem={renderItem}
                keyExtractor={(item) => item.id.toString()}
                contentContainerStyle={styles.flatListContent}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 20,
    },
    title: {
        fontSize: 32,
        fontWeight: 'bold',
        color: '#46295a',
        marginVertical: 30,
    },
    flatListContent: {
        alignItems: 'center',
    },
    itemContainer: {
        margin: 10,
        alignItems: 'center',
    },
    image: {
        width: 150,
        height: 150,
        resizeMode: 'cover',
        borderRadius: 10,
    },
    description: {
        marginTop: 5,
        fontSize: 16,
        textAlign: 'center',
    },
});
