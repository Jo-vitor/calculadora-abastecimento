import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useState } from 'react';
import Campo from './src/components/Campo';

export default function App() {

  const [gasolina, setGasolina] = useState(0);
  const [alcool, setAlcool] = useState(0);
  const [maisVantajoso, setMaisVantajoso] = useState('');

  const calcular = () => {
    const resultado = parseFloat(alcool) / parseFloat(gasolina);

    if (resultado >= 0.7) {
      setMaisVantajoso("É mais vantajoso abastecer com gasolina");
    } else {
      setMaisVantajoso("É mais vantajoso abastecer com álcool");
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.cabecalho}>
        <Text style={styles.titulo}>Calculadora de Abastecimento</Text>
        <Text style={styles.titulo}>Gasolina vs Álcool</Text>
      </View>

      <View style={styles.body}>
        <Campo label="Gasolina" msg="insira o preço do litro de gasolina" value={gasolina} mudaValue={setGasolina} />
        <Campo label="Álcool" msg="insira o preço do litro de álcool" value={alcool} mudaValue={setAlcool} />

        <TouchableOpacity
          style={styles.btn}
          onPress={calcular}
        >
          <Text style={styles.btnTexto}>Calcular</Text>
        </TouchableOpacity>

        {maisVantajoso != '' &&
          <Text style={styles.texto}>
            {maisVantajoso}
          </Text>
        }
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  cabecalho: {
    flex: 1,
    backgroundColor: '#FC5404',
    justifyContent: 'center',
    alignItems: 'center'
  },
  body: {
    flex: 3,
    backgroundColor: '#F9B208',
    gap: 30,
    padding: 25
  },
  titulo: {
    fontSize: 25
  },
  btn: {
    borderWidth: 1,
    borderRadius: 12,
    width: 100,
    backgroundColor: '#F98404'
  },
  btnTexto: {
    textAlign: 'center',
    fontWeight: 'bold'
  },
  texto: {
    fontSize: 40,
    textAlign: 'center',
    borderWidth: 2,
    backgroundColor: '#F7FD04',
    fontWeight: 'bold'
  },
});