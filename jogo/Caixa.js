import { 
    View,
    StyleSheet,
    Pressable
 } from 'react-native'

import Entypo from '@expo/vector-icons/Entypo';
import { useState } from 'react';

export default function Caixa(props)
{
    const [jogador, setJogador] = useState(0);

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
        setJogador(props.jogador);

        props.tabuleiro[props.posicao - 1] = jogador;

        console.log(props.tabuleiro, props.posicao)
       props.alteraTabuleiro(props.tabuleiro);

        let proximo = (props.jogador == 1)? 2 : 1;
        props.trocaJogador(proximo);
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
