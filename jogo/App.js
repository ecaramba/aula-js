import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import { useState } from 'react';

import Caixa from './Caixa';

export default function App() {

  const [jogador, setJogador] = useState(1);
  const [tabuleiro, setTabuleiro] = useState([0,0,0, 0,0,0, 0,0,0])

  /* posições ganhadoras

    1 = 2 = 3
    4 = 5 = 6
    7 = 9 = 9

    1 = 4 = 7
    2 = 5 = 8
    3 = 6 = 9

    1 = 5 = 9
    3 = 5 = 7


  */

  return (
    <View style={styles.container}>
      <Text>Olá galera</Text>

    <View style={styles.tabuleiro}>    
      <View style={styles.linha} >
        <Caixa 
          posicao={1}
          alteraTabuleiro={setTabuleiro}
          tabuleiro={ tabuleiro }
          jogador={jogador} 
          trocaJogador={setJogador} />
        <Caixa 
          posicao={2}
          alteraTabuleiro={setTabuleiro}
          tabuleiro={ tabuleiro }
          jogador={jogador} 
          trocaJogador={setJogador} />
        <Caixa 
          posicao={3}
          alteraTabuleiro={setTabuleiro}
          tabuleiro={ tabuleiro }
          jogador={jogador} 
          trocaJogador={setJogador} />
      </View>
      
      <View style={styles.linha}>
      <Caixa 
          posicao={4}
          alteraTabuleiro={setTabuleiro}
          tabuleiro={ tabuleiro }
          jogador={jogador} 
          trocaJogador={setJogador} />
        <Caixa 
          posicao={5}
          tabuleiro={ tabuleiro }
          jogador={jogador} 
          alteraTabuleiro={setTabuleiro}
          trocaJogador={setJogador} />
        <Caixa 
          posicao={6}
          tabuleiro={ tabuleiro }
          alteraTabuleiro={setTabuleiro}
          jogador={jogador} 
          trocaJogador={setJogador} />
      </View>

      <View style={styles.linha}>
        <Caixa 
          posicao={7}
          tabuleiro={ tabuleiro }
          alteraTabuleiro={setTabuleiro}
          jogador={jogador} 
          trocaJogador={setJogador} />
        <Caixa 
          posicao={8}
          tabuleiro={ tabuleiro }
          alteraTabuleiro={setTabuleiro}
          jogador={jogador} 
          trocaJogador={setJogador} />
        <Caixa 
          posicao={9}
          tabuleiro={ tabuleiro }
          alteraTabuleiro={setTabuleiro}
          jogador={jogador} 
          trocaJogador={setJogador} />
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
