import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import { useState } from 'react';

import Caixa from './Caixa';

export default function App() {

  const [jogador, setJogador] = useState(1);

  return (
    <View style={styles.container}>
      <Text>Olá galera</Text>

    <View style={styles.tabuleiro}>    
      <View style={styles.linha} >
        <Caixa jogador={jogador} trocaJogador={setJogador} />
        <Caixa jogador={jogador} trocaJogador={setJogador} />
        <Caixa jogador={jogador} trocaJogador={setJogador} />
      </View>
      
      <View style={styles.linha}>
        <Caixa jogador={jogador} trocaJogador={setJogador} />
        <Caixa jogador={jogador} trocaJogador={setJogador} />
        <Caixa jogador={jogador} trocaJogador={setJogador} />
      </View>

      <View style={styles.linha}>
        <Caixa jogador={jogador} trocaJogador={setJogador} />
        <Caixa jogador={jogador} trocaJogador={setJogador} />
        <Caixa jogador={jogador} trocaJogador={setJogador} />
      </View>
      
    </View>

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

  tabuleiro: {
    
  },

  linha: {
    flexDirection: "row"
  }

});
