import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

const Resultado = ({alcool, gasolina, maisVantajoso, fechar}) => {

    return (
        <View style={styles.container}>
            <Image
                source={require('../img/gas.png')}
            />
            <Text style={styles.vantagem}>{maisVantajoso}</Text>

            <View style={styles.valores}>
                <Text style={styles.titulo}>Com os preços:</Text>
                <Text style={styles.texto}>Gasolina: R$ {gasolina}</Text>
                <Text style={styles.texto}>Álcool: R$ {alcool}</Text>
            </View>

            <TouchableOpacity style={styles.btn} onPress={fechar}>
                <Text style={styles.textoBtn}>Calcular novamente</Text>
            </TouchableOpacity>
            
        </View>

    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FC5404',
        gap: 15
    },
    vantagem: {
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#F9B208',
        margin: 10
    },
    valores: {
        justifyContent: 'center',
        alignItems: 'center'
    },  
    titulo: {
        fontSize: 25,
        color: '#ffffff'
    },
    texto: {
        color: '#ffffff'
    },
    btn: {
        borderWidth: 2,
        borderRadius: 5,
        borderColor: '#F9B208',
        backgroundColor: '#F9B208',
        height: 40,
        width: 300,
        justifyContent: 'center',
        alignItems: 'center'
    },
    textoBtn: {
        fontSize: 20,
        color: '#FC5404'
    }
})

export default Resultado;