import { 
    View,
    StyleSheet
 } from 'react-native'

export default function Caixa()
{
    return (
        <View style={css.caixa}>
            
        </View>
    )
}

const css = StyleSheet.create({
    caixa: {
        borderColor: "black",
        borderWidth: 1,
        borderStyle: "solid",
        height: 100,
        width: 100
    }
});
