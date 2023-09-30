import { StatusBar } from 'expo-status-bar';
import { Pressable, StyleSheet, Text, View } from 'react-native';

import { useState } from 'react';

import Caixa from './Caixa';

export default function App() {

  const [jogador, setJogador] = useState(1);
  const [tabuleiro, setTabuleiro] = useState([0,0,0, 0,0,0, 0,0,0])
  const [vencedor, setVencedor] = useState(null);

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

  function turno()
  {
    //let vteste = [0,0,0, 0,0,0, 0,0,0];

    if (tabuleiro[0] != 0 && tabuleiro[0] == tabuleiro[1] &&  tabuleiro[1] == tabuleiro[2]) {
      console.log("o vencedor é: " + tabuleiro[1])
      setVencedor(tabuleiro[1]);
    }
    
    if (tabuleiro[3] != 0 && tabuleiro[3] == tabuleiro[4] &&  tabuleiro[4] == tabuleiro[5]) {
      console.log("o vencedor é: " + tabuleiro[3])
      setVencedor(tabuleiro[3]);
    }

    if (tabuleiro[6] != 0 && tabuleiro[6] == tabuleiro[7] &&  tabuleiro[7] == tabuleiro[8]) {
      console.log("o vencedor é: " + tabuleiro[6])
      setVencedor(tabuleiro[6]);
    }

    if (tabuleiro[0] != 0 && tabuleiro[0] == tabuleiro[3] &&  tabuleiro[3] == tabuleiro[6]) {
      console.log("o vencedor é: " + tabuleiro[0])
      setVencedor(tabuleiro[0]);
    }

    if (tabuleiro[1] != 0 && tabuleiro[1] == tabuleiro[4] &&  tabuleiro[4] == tabuleiro[7]) {
      console.log("o vencedor é: " + tabuleiro[1])
      setVencedor(tabuleiro[1]);
    }

    if (tabuleiro[2] != 0 && tabuleiro[2] == tabuleiro[5] &&  tabuleiro[5] == tabuleiro[8]) {
      console.log("o vencedor é: " + tabuleiro[2])
      setVencedor(tabuleiro[2]);
    }
    if (tabuleiro[0] != 0 && tabuleiro[0] == tabuleiro[4] &&  tabuleiro[4] == tabuleiro[8]) {
      console.log("o vencedor é: " + tabuleiro[0])
      setVencedor(tabuleiro[0]);
    }
    if (tabuleiro[2] != 0 && tabuleiro[2] == tabuleiro[4] &&  tabuleiro[4] == tabuleiro[6]) {
      console.log("o vencedor é: " + tabuleiro[2])
      setVencedor(tabuleiro[2]);
    }

  }

  return (
    <View style={styles.container}>
      
      { (vencedor != null)
        ? <Text style={styles.infJogador}>O vencedor é o jogador {jogador} </Text> 
        : <Text style={styles.infJogador}>Agora é a vez do jogador {jogador} </Text>
      }

      <Pressable onPress={()=> {
        setTabuleiro([0,0,0, 0,0,0, 0,0,0]);
        setJogador(1);
        setVencedor(null);
      } }>
        <Text>Novo Jogo</Text>
      </Pressable>
      
    <View style={styles.tabuleiro}>    
      <View style={styles.linha} >
        <Caixa 
          posicao={1}
          rodaTurno={turno}
          alteraTabuleiro={setTabuleiro}
          tabuleiro={ tabuleiro }
          jogador={jogador} 
          trocaJogador={setJogador} />
        <Caixa 
          posicao={2}
          rodaTurno={turno}
          alteraTabuleiro={setTabuleiro}
          tabuleiro={ tabuleiro }
          jogador={jogador} 
          trocaJogador={setJogador} />
        <Caixa 
          posicao={3}
          rodaTurno={turno}
          alteraTabuleiro={setTabuleiro}
          tabuleiro={ tabuleiro }
          jogador={jogador} 
          trocaJogador={setJogador} />
      </View>
      
      <View style={styles.linha}>
      <Caixa 
          posicao={4}
          rodaTurno={turno}
          alteraTabuleiro={setTabuleiro}
          tabuleiro={ tabuleiro }
          jogador={jogador} 
          trocaJogador={setJogador} />
        <Caixa 
          posicao={5}
          rodaTurno={turno}
          tabuleiro={ tabuleiro }
          jogador={jogador} 
          alteraTabuleiro={setTabuleiro}
          trocaJogador={setJogador} />
        <Caixa 
          posicao={6}
          rodaTurno={turno}
          tabuleiro={ tabuleiro }
          alteraTabuleiro={setTabuleiro}
          jogador={jogador} 
          trocaJogador={setJogador} />
      </View>

      <View style={styles.linha}>
        <Caixa 
          posicao={7}
          rodaTurno={turno}
          tabuleiro={ tabuleiro }
          alteraTabuleiro={setTabuleiro}
          jogador={jogador} 
          trocaJogador={setJogador} />
        <Caixa 
          posicao={8}
          rodaTurno={turno}
          tabuleiro={ tabuleiro }
          alteraTabuleiro={setTabuleiro}
          jogador={jogador} 
          trocaJogador={setJogador} />
        <Caixa 
          posicao={9}
          rodaTurno={turno}
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
    justifyContent: 'space-evenly',
  },

  tabuleiro: {
    
  },

  linha: {
    flexDirection: "row"
  },

  infJogador: {
    fontSize: 22
  }

});
