import { 
    View,
    StyleSheet,
    Pressable
 } from 'react-native'

import Entypo from '@expo/vector-icons/Entypo';
import { useState } from 'react';

export default function Caixa(props)
{
    let ind = props.posicao -1;
    //const [jogador, setJogador] = useState(0);
    const jogador = props.tabuleiro[ind];

    let jogada = null;

    if (jogador == 1)
    {
        jogada = <Entypo name='cross' size={72} />
    } else if(jogador == 2)
    {
        jogada = <Entypo name='circle' size={72} />
    }

    function jogar()
    {
        let ind = props.posicao -1;

        if (jogador == 0)
        {
            //setJogador(props.jogador);            
            
            // por causa da farma que o react trabalha com 
            // array em variaveis state
            let tabuleiro = [...props.tabuleiro];
            tabuleiro.splice(ind, 1, props.jogador);

            props.alteraTabuleiro([...tabuleiro]);
            
            let proximo = (props.jogador == 1)? 2 : 1;
            props.trocaJogador(proximo);
            
            console.log(tabuleiro, props.posicao);

            setTimeout(()=> {
                props.rodaTurno();
            }, 3000);
        }
    }

    return (
        <View style={css.caixa} >
            <Pressable onPress={jogar} style={css.botao}>
            { jogada } 
            </Pressable>           
        </View>
    )
}

const css = StyleSheet.create({
    caixa: {
        borderColor: "black",
        borderWidth: 1,
        borderStyle: "solid",
        height: 100,
        width: 100,
        
    },
    botao: {
        alignItems: "center",
        justifyContent: "center",
        height: 100,
        width: 100,
    }
});
