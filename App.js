import { Image, Modal, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useState } from 'react';
import Campo from './src/Campo';
import Resultado from './src/Resultado';

export default function App() {

  const [gasolina, setGasolina] = useState(0);
  const [alcool, setAlcool] = useState(0);
  const [maisVantajoso, setMaisVantajoso] = useState('');
  const [modal, setModal] = useState(false)

  const chamaModal = () => {
    
    const resultado = parseFloat(alcool) / parseFloat(gasolina);
    
    if (resultado >= 0.7) {
      setMaisVantajoso("É mais vantajoso abastecer com gasolina");
    } else {
      setMaisVantajoso("É mais vantajoso abastecer com álcool");
    }
    
    setModal(true);
  }

  const fechar = () => {
    setModal(false);
    setAlcool(0);
    setGasolina(0);
  }

  return (
    <View style={styles.container}>
      <View style={styles.cabecalho}>
        <Text style={styles.titulo}>Gasolina vs Álcool</Text>

        <Image
          source={require('./src/img/logo.png')}
          style={styles.img}
        />

        <Text style={styles.cabecalhoTexto}>Qual a melhor opção?</Text>
      </View>

      <View style={styles.body}>
        <Campo label="Gasolina (preço por litro):" msg="insira o preço da gasolina" value={gasolina} mudaValue={setGasolina} />
        <Campo label="Álcool (preço por litro):" msg="insira o preço do álcool" value={alcool} mudaValue={setAlcool} />

        <TouchableOpacity
          style={styles.btn}
          onPress={chamaModal}
        >
          <Text style={styles.btnTexto}>Calcular</Text>
        </TouchableOpacity>

      </View>

      <Modal 
        visible={modal}
        animationType='slide'  
      >
        <Resultado alcool={alcool} gasolina={gasolina} maisVantajoso={maisVantajoso} fechar={fechar}/>
      </Modal>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FC5404'
  },
  cabecalho: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  titulo: {
    fontSize: 30,
    fontWeight: 'bold',
    margin: 15,
    color: '#ffffff'
  },
  img: {
    margin: 10,
  },
  cabecalhoTexto: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#ffffff'
  },
  body: {
    flex: 1,
    gap: 30,
    padding: 20
  },
  btn: {
    borderWidth: 1,
    borderRadius: 8,
    borderColor: '#F9B208',
    height: 40,
    backgroundColor: '#F9B208',
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnTexto: {
    fontSize: 20,
    color: '#FC5404'
  },
});