import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import Caixa from './Caixa';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Olá galera</Text>

    <View style={styles.tabuleiro}>    
      <View style={styles.linha} >
        <Caixa />
        <Caixa />
        <Caixa />
      </View>
      
      <View style={styles.linha}>
        <Caixa />
        <Caixa />
        <Caixa />
      </View>

      <View style={styles.linha}>
        <Caixa />
        <Caixa />
        <Caixa />
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
