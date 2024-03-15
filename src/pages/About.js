import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';

export default function About() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Sobre a Arte de Rua</Text>
      <Image
        source={{
          uri: 'https://static.todamateria.com.br/upload/hi/st/historiadaarteurbana-cke.jpg?auto_optimize=low',
        }}
        style={styles.image}
      />
      <Text style={styles.paragraph}>
        A arte de rua, também conhecida como arte urbana ou street art, teve origens diversas ao redor do mundo. Ela surgiu como uma forma de expressão cultural e social em ambientes urbanos, muitas vezes associada à rebeldia, crítica social e autenticidade.
      </Text>
      <Text style={styles.paragraph}>
        No Brasil, a arte de rua ganhou destaque especialmente a partir das décadas de 1970 e 1980, influenciada por movimentos artísticos internacionais e pela efervescência cultural do país na época. Artistas como Os Gêmeos, Eduardo Kobra e Banksy, entre outros, contribuíram significativamente para a popularização e reconhecimento da street art no cenário brasileiro e mundial.
      </Text>
      <Text style={styles.paragraph}>
        A street art no Brasil não se limita apenas ao grafite, mas também inclui intervenções urbanas, murais, instalações e outras formas de expressão artística que dialogam diretamente com o contexto social, político e cultural do país.
      </Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 20,
  },
  image: {
    width: 300,
    height: 200,
    resizeMode: 'cover',
    borderRadius: 10,
    marginBottom: 10,
  },
  paragraph: {
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 10,
    textAlign: 'justify',
  },
});
