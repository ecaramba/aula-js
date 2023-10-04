import { StatusBar } from 'expo-status-bar';
import { Pressable, StyleSheet, Text, View, Modal, TextInput, Button } from 'react-native';

import { useState, useEffect } from 'react';

import {
  doc,
  setDoc, 
  updateDoc,
  getDoc,
  onSnapshot,
  getFirestore 
} from 'firebase/firestore'

import firebaseApp from './firebase'

const db = getFirestore(firebaseApp);

import Caixa from './Caixa';

export default function App() {

  const [jogador, setJogador] = useState(1);
  const [tabuleiro, setTabuleiro] = useState([0,0,0, 0,0,0, 0,0,0])
  const [vencedor, setVencedor] = useState(null);
  const [sala, setSala] = useState(null);
  const [exibeEntrar, setExibeEntrar] = useState(false);

  useEffect(() => {
    
    if (sala != null)
    {
      // ler o banco a cada 2 segundos
      // setInterval(async () => {
        
      //   let jogo = await getDoc( doc(db, "partidas", sala) );
      //   let atual = jogo.data()
      //   setTabuleiro(atual.tabuleiro);

      // }, 2000);

      onSnapshot(doc(db, 'partidas', sala), (partida) => {
        let atual = partida.data()
        setTabuleiro(atual.tabuleiro);
      })
    }
    
  }, [sala]);

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

  async function turno()
  {
   
    if (sala != null)
    {
      console.log(tabuleiro)
      await updateDoc( doc(db, "partidas", sala), {
        "tabuleiro": tabuleiro
      } );
    }


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

  function geradorAleatorio()
  {
     const valores = "abcdefghijklmnopkxyzABC123456789";

     let novo = "";

     for (var i = 0; i < 6; i++)
     {
        novo += valores.charAt(Math.trunc( Math.random() * 32)) ;
     }
    
    return novo; 
    
  }

  async function criarSala()
  {
    setTabuleiro([0,0,0, 0,0,0, 0,0,0]);
    setJogador(1);
    setVencedor(null);

    let sala = {
      data: new Date(),
      tabuleiro: [0,0,0, 0,0,0, 0,0,0]
    }

    const codigo = geradorAleatorio();
    setSala(codigo);

    await setDoc(doc(db, 'partidas',  codigo), sala);

  }

  function entrarSala(valor)
  {
      setSala(valor);
  }



  return (
    <View style={styles.container}>

      <Modal visible={exibeEntrar} transparent={false} animationType='fade'>
          <View style={styles.telaEntrar}>
            <View>
            <TextInput 
              onChangeText={ entrarSala }
              placeholder='Digite o Codigo da Sala'></TextInput>

            <Button
              onPress={()=> setExibeEntrar(false) } 
              title='Entrar' />
          </View>
          </View>
      </Modal>
      
      { (vencedor != null)
        ? <Text style={styles.infJogador}>O vencedor é o jogador {jogador} </Text> 
        : <Text style={styles.infJogador}>Agora é a vez do jogador {jogador} </Text>
      }

      { (sala != null )
          ? <Text>Sala criada: { sala }</Text>
          : <Text></Text>  
      }

      <Pressable onPress={()=> {
        setTabuleiro([0,0,0, 0,0,0, 0,0,0]);
        setJogador(1);
        setVencedor(null);
        setSala(null);
      } }>
        <Text>Novo Jogo</Text>
      </Pressable>

      <Pressable onPress={ criarSala }>
        <Text>Novo Sala</Text>
      </Pressable>

      <Pressable onPress={ () => setExibeEntrar(true) }>
        <Text>Entrar na Sala</Text>
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
  },
  telaEntrar: {
     flex: 1,
     alignItems:'center',
     justifyContent: "center"
  }

});
